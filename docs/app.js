// ==========================================================================
// GuruShaman Dashboard - D3.js App Logic
// ==========================================================================

// Global state
let rawData = [];
let activeSystemIds = new Set();
let betaVal = 0.65;
let currentLeaves = [];
let selectedSystemId = null;

// Zoom bounds
const MIN_ZOOM = 0.6;
const MAX_ZOOM = 2.5;

// Layout variables
const width = 950;
const height = 950;
const radius = width / 2;

// 2/3 diameter for cluster radial layout
const innerRadius = (radius - 140) * (2 / 3);

// D3 Selectors
let svg, g, link, node, zoom;
const treeLayout = d3.cluster().size([2 * Math.PI, innerRadius]);

// Line Generator
const line = d3.lineRadial()
  .curve(d3.curveBundle.beta(betaVal))
  .radius(d => d.y)
  .angle(d => d.x);

// Setup on load
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

async function initApp() {
  try {
    // 1. Fetch data
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    rawData = await response.json();
    
    // Initialize all systems as active
    rawData.forEach(sys => activeSystemIds.add(sys.id));
    
    // 2. Setup D3 Canvas
    setupCanvas();
    
    // 3. Render left panel toggles
    renderToggles();
    
    // 4. Draw D3 Chart
    updateChart();
    
    // 5. Setup event listeners for controls
    setupControls();
    
  } catch (error) {
    console.error("Error al inicializar la aplicación:", error);
    document.getElementById("chart-canvas").innerHTML = `
      <div style="color: #ff8080; text-align: center; padding: 20px;">
        <h3>Error al cargar los datos</h3>
        <p>${error.message}</p>
        <p>Por favor, asegúrate de que el servidor NodeJS está corriendo y has ejecutado la compilación con <code>npm run compile</code>.</p>
      </div>
    `;
  }
}

function setupCanvas() {
  const container = d3.select("#chart-canvas");
  container.html(""); // Clear loading state
  
  svg = container.append("svg")
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .attr("width", "100%")
    .attr("height", "100%")
    .style("max-width", "100%")
    .style("height", "auto");
    
  g = svg.append("g");
  
  // Setup Zoom & Pan
  zoom = d3.zoom()
    .scaleExtent([MIN_ZOOM, MAX_ZOOM])
    .on("zoom", (event) => {
      g.attr("transform", event.transform);
      updateZoomButtonsState(event.transform.k);
    });
    
  svg.call(zoom);
  
  // Initial zoom at maximum zoom out level
  svg.call(zoom.transform, d3.zoomIdentity.scale(MIN_ZOOM));
  updateZoomButtonsState(MIN_ZOOM);
  
  // Disable default dblclick zoom
  svg.on("dblclick.zoom", null);
}

function updateZoomButtonsState(currentScale) {
  const btnIn = document.getElementById("btn-zoom-in");
  const btnOut = document.getElementById("btn-zoom-out");
  
  if (btnIn) {
    const isAtMax = currentScale >= (MAX_ZOOM - 0.05);
    btnIn.disabled = isAtMax;
    btnIn.classList.toggle("disabled", isAtMax);
  }
  
  if (btnOut) {
    const isAtMin = currentScale <= (MIN_ZOOM + 0.05);
    btnOut.disabled = isAtMin;
    btnOut.classList.toggle("disabled", isAtMin);
  }
}

function setupControls() {
  // Top Right Zoom In / Out Buttons
  const btnZoomIn = document.getElementById("btn-zoom-in");
  const btnZoomOut = document.getElementById("btn-zoom-out");

  if (btnZoomIn) {
    btnZoomIn.addEventListener("click", () => {
      if (svg && zoom) {
        svg.transition().duration(300).call(zoom.scaleBy, 1.3);
      }
    });
  }

  if (btnZoomOut) {
    btnZoomOut.addEventListener("click", () => {
      if (svg && zoom) {
        svg.transition().duration(300).call(zoom.scaleBy, 0.75);
      }
    });
  }

  // Left Sidebar Collapse Toggle Button
  const toggleSidebarBtn = document.getElementById("btn-toggle-left-sidebar");
  const sidebarLeft = document.getElementById("sidebar-left");
  if (toggleSidebarBtn && sidebarLeft) {
    toggleSidebarBtn.addEventListener("click", () => {
      sidebarLeft.classList.toggle("collapsed");
    });
  }

  // Header System Search with Floating Dropdown
  const headerSearchInput = document.getElementById("header-system-search");
  const headerClearBtn = document.getElementById("header-clear-search-btn");
  const searchResults = document.getElementById("header-search-results");

  if (headerSearchInput && searchResults) {
    const renderSearchResults = (queryVal) => {
      const query = queryVal.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      if (headerClearBtn) {
        headerClearBtn.style.display = query ? "block" : "none";
      }

      const matches = rawData.filter(sys => {
        if (!query) return true; // Return ALL 25 systems if query is empty
        const name = sys.displayName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const cat = sys.category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return name.includes(query) || cat.includes(query) || sys.id.toLowerCase().includes(query);
      });

      if (matches.length === 0) {
        searchResults.innerHTML = `<div class="search-no-results">No se encontraron sistemas para "${queryVal}"</div>`;
      } else {
        searchResults.innerHTML = matches.map(sys => {
          const isCalc = !sys.nature || sys.nature.includes("Calculado");
          return `
            <div class="search-result-item" data-name="${sys.displayName}">
              <div class="res-main">
                <span class="res-name">${sys.displayName}</span>
                <span class="res-cat">${sys.category}</span>
              </div>
              <span class="res-nature ${isCalc ? 'nature-calc' : 'nature-interp'}">${isCalc ? 'Calculado' : 'Interpretativo'}</span>
            </div>
          `;
        }).join("");

        searchResults.querySelectorAll(".search-result-item").forEach(item => {
          item.addEventListener("click", (e) => {
            e.stopPropagation();
            const sysName = item.dataset.name;
            searchResults.style.display = "none";
            headerSearchInput.value = "";
            if (headerClearBtn) headerClearBtn.style.display = "none";
            
            selectSystemByName(sysName);
          });
        });
      }

      searchResults.style.display = "flex";
    };

    // Show results on input, focus, and click!
    headerSearchInput.addEventListener("input", (e) => renderSearchResults(e.target.value));
    headerSearchInput.addEventListener("focus", (e) => renderSearchResults(e.target.value));
    headerSearchInput.addEventListener("click", (e) => {
      e.stopPropagation();
      renderSearchResults(headerSearchInput.value);
    });

    if (headerClearBtn) {
      headerClearBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        headerSearchInput.value = "";
        headerClearBtn.style.display = "none";
        renderSearchResults("");
      });
    }

    // Hide search results when clicking outside
    document.addEventListener("click", (e) => {
      const container = document.querySelector(".header-search-container");
      if (container && !container.contains(e.target) && searchResults) {
        searchResults.style.display = "none";
      }
    });
  }

  // Slider Beta (Optional)
  const slider = document.getElementById("bundling-slider");
  const sliderVal = document.getElementById("beta-value");
  
  if (slider && sliderVal) {
    slider.addEventListener("input", (e) => {
      betaVal = parseFloat(e.target.value);
      sliderVal.textContent = betaVal.toFixed(2);
      
      line.curve(d3.curveBundle.beta(betaVal));
      if (link) {
        link.transition().duration(200)
          .attr("d", ([i, o]) => line(i.path(o)));
      }
      
      setTimeout(() => {
        if (selectedSystemId && currentLeaves) {
          const selectedLeaf = currentLeaves.find(l => l.data.id === selectedSystemId);
          if (selectedLeaf) showFloatingLabels(selectedLeaf);
        }
      }, 250);
    });
  }

  // Tabs Click Handlers
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTabId = btn.dataset.tab;
      
      tabBtns.forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
      
      btn.classList.add("active");
      const targetPane = document.getElementById(targetTabId);
      if (targetPane) targetPane.classList.add("active");
    });
  });

  // Nature Filter Buttons
  const filterAll = document.getElementById("filter-all");
  const filterCalc = document.getElementById("filter-calc");
  const filterInterp = document.getElementById("filter-interp");

  if (filterAll && filterCalc && filterInterp) {
    filterAll.addEventListener("click", () => setNatureFilter("ALL"));
    filterCalc.addEventListener("click", () => setNatureFilter("Calculado"));
    filterInterp.addEventListener("click", () => setNatureFilter("Interpretativo"));
  }
  
  // Select All / Deselect All
  document.getElementById("btn-select-all").addEventListener("click", () => {
    rawData.forEach(sys => {
      activeSystemIds.add(sys.id);
      const cb = document.getElementById(`switch-${sys.id}`);
      if (cb) cb.checked = true;
    });
    updateChart();
  });
  
  document.getElementById("btn-deselect-all").addEventListener("click", () => {
    activeSystemIds.clear();
    rawData.forEach(sys => {
      const cb = document.getElementById(`switch-${sys.id}`);
      if (cb) cb.checked = false;
    });
    updateChart();
  });
}

function setNatureFilter(filter) {
  const filterAll = document.getElementById("filter-all");
  const filterCalc = document.getElementById("filter-calc");
  const filterInterp = document.getElementById("filter-interp");

  if (filterAll) filterAll.classList.toggle("active", filter === "ALL");
  if (filterCalc) filterCalc.classList.toggle("active", filter === "Calculado");
  if (filterInterp) filterInterp.classList.toggle("active", filter === "Interpretativo");

  rawData.forEach(sys => {
    const isMatch = filter === "ALL" || (sys.nature && sys.nature.includes(filter));
    if (isMatch) {
      activeSystemIds.add(sys.id);
    } else {
      activeSystemIds.delete(sys.id);
    }
    const cb = document.getElementById(`switch-${sys.id}`);
    if (cb) cb.checked = isMatch;
  });

  updateChart();
}

function filterTogglesList(query) {
  const groups = document.querySelectorAll(".category-group");
  
  groups.forEach(group => {
    const items = group.querySelectorAll(".switch-item");
    let hasVisibleItems = false;
    
    items.forEach(item => {
      const name = item.querySelector(".switch-name").textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (name.includes(query)) {
        item.style.display = "flex";
        hasVisibleItems = true;
      } else {
        item.style.display = "none";
      }
    });
    
    // Hide/show the category group header
    if (hasVisibleItems) {
      group.style.display = "flex";
    } else {
      group.style.display = "none";
    }
  });
}

function renderToggles() {
  const container = document.getElementById("category-toggles-container");
  container.innerHTML = "";
  
  // Group systems by category
  const categories = {};
  rawData.forEach(sys => {
    if (!categories[sys.category]) {
      categories[sys.category] = [];
    }
    categories[sys.category].push(sys);
  });
  
  // Render categories and switches
  for (const [catName, systems] of Object.entries(categories)) {
    const catClass = getCategoryClass(catName);
    
    const groupDiv = document.createElement("div");
    groupDiv.className = "category-group";
    
    const header = document.createElement("div");
    header.className = `category-header cat-${catClass}`;
    header.textContent = catName;
    groupDiv.appendChild(header);
    
    // Sort systems alphabetically by displayName
    systems.sort((a, b) => a.displayName.localeCompare(b.displayName));
    
    systems.forEach(sys => {
      const item = document.createElement("div");
      item.className = `switch-item group-${catClass}`;
      item.dataset.id = sys.id;
      
      // Left side: Indicator + Name (Clicking here opens details) - Cleaned without ray/crystal icons
      const labelArea = document.createElement("div");
      labelArea.className = "switch-label-area";
      labelArea.innerHTML = `
        <span class="cat-indicator" style="background-color: var(--cat-${catClass})"></span>
        <span class="switch-name" title="Naturaleza: ${sys.nature || 'Calculado'}">${sys.displayName}</span>
      `;
      labelArea.addEventListener("click", () => {
        selectSystem(sys);
      });
      item.appendChild(labelArea);
      
      // Right side: Switch
      const switchLabel = document.createElement("label");
      switchLabel.className = "switch";
      switchLabel.innerHTML = `
        <input type="checkbox" id="switch-${sys.id}" checked>
        <span class="slider"></span>
      `;
      
      const checkbox = switchLabel.querySelector("input");
      checkbox.addEventListener("change", (e) => {
        if (e.target.checked) {
          activeSystemIds.add(sys.id);
        } else {
          activeSystemIds.delete(sys.id);
        }
        updateChart();
      });
      
      item.appendChild(switchLabel);
      groupDiv.appendChild(item);
    });
    
    container.appendChild(groupDiv);
  }
}


function updateChart() {
  // 1. Filter raw data based on active toggles
  const activeData = rawData.filter(d => activeSystemIds.has(d.id)).map(d => {
    return {
      ...d,
      imports: d.imports.filter(targetName => {
        const targetNode = rawData.find(n => n.name === targetName);
        return targetNode && activeSystemIds.has(targetNode.id);
      })
    };
  });
  
  // 2. Clear canvas content
  g.selectAll("*").remove();
  
  // If no systems are active, display warning and return
  if (activeData.length === 0) {
    g.append("text")
      .attr("text-anchor", "middle")
      .attr("fill", "var(--text-secondary)")
      .attr("font-size", "18px")
      .text("Todos los sistemas están apagados");
    return;
  }
  
  // 3. Build hierarchy tree
  const treeData = buildHierarchy(activeData);
  
  // 4. Generate cluster layout
  const root = treeLayout(d3.hierarchy(treeData)
    .sort((a, b) => d3.ascending(a.height, b.height) || d3.ascending(a.data.name, b.data.name)));
    
  bilink(root);
  
  const leaves = root.leaves();
  currentLeaves = leaves;
  const linksData = leaves.flatMap(d => d.outgoing);
  
  // 5. Draw radial guides
  g.append("circle")
    .attr("class", "radial-guide")
    .attr("r", innerRadius);
    
  // 6. Draw Links
  link = g.append("g")
    .attr("class", "links-group")
    .selectAll("path")
    .data(linksData)
    .join("path")
      .attr("class", "link")
      .attr("id", (d, i) => `link-${d[0].data.id}-${d[1].data.id}`)
      .attr("d", ([i, o]) => line(i.path(o)));
      
  // 7. Draw Nodes
  node = g.append("g")
    .attr("class", "nodes-group")
    .selectAll("g")
    .data(leaves)
    .join("g")
      .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`)
    .append("text")
      .attr("dy", "0.31em")
      .attr("x", d => d.x < Math.PI ? 10 : -10)
      .attr("text-anchor", d => d.x < Math.PI ? "start" : "end")
      .attr("transform", d => d.x >= Math.PI ? "rotate(180)" : null)
      .attr("fill", d => `var(--cat-${getCategoryClass(d.data.category)})`)
      .text(d => d.data.displayName)
      .attr("class", "node")
      .on("mouseover", mouseover)
      .on("mouseout", mouseout)
      .on("click", (event, d) => {
        selectSystem(d);
      });
      
  // Restore selected state if still active
  if (selectedSystemId && activeSystemIds.has(selectedSystemId)) {
    const selectedLeaf = currentLeaves.find(l => l.data.id === selectedSystemId);
    if (selectedLeaf) {
      selectSystem(selectedLeaf);
    }
  } else {
    selectedSystemId = null;
    document.getElementById("details-welcome").classList.add("active");
    document.getElementById("details-active").classList.remove("active");
    updateNodeBoldState();
  }
}

// Hover event handlers
function mouseover(event, d) {
  // Cancel previous hover/select transformations
  link.classed("link--source", false).classed("link--target", false);
  node.classed("node--source", false).classed("node--target", false).classed("node--dimmed", false);
  
  const outgoingTargets = new Set(d.outgoing.map(o => o[1]));
  const incomingSources = new Set(d.incoming.map(i => i[0]));
  
  // Highlight links
  link
    .classed("link--source", l => l[0] === d)
    .classed("link--target", l => l[1] === d)
    .filter(l => l[0] === d || l[1] === d)
    .raise(); // Bring to front
    
  // Highlight nodes
  node
    .classed("node--source", n => n === d || incomingSources.has(n))
    .classed("node--target", n => outgoingTargets.has(n))
    .classed("node--dimmed", n => n !== d && !outgoingTargets.has(n) && !incomingSources.has(n));
    
  // Show temporary labels for hovered node
  showFloatingLabels(d);
  
  // Tooltip
  const isCalc = !d.data.nature || d.data.nature.includes("Calculado");
  showTooltip(event, `
    <strong>${d.data.displayName}</strong> (${isCalc ? '⚡ Calculado' : '🔮 Interpretativo'})<br>
    <span style="color:#4dffd2; font-size:11px;">🖥️ Self-Hosted / Open Source</span><br>
    <span style="color:var(--rel-outgoing)">→ Modula a ${d.outgoing.length} sistemas</span><br>
    <span style="color:var(--rel-incoming)">← Modulado por ${d.incoming.length} sistemas</span>
  `);
}

function mouseout(event, d) {
  link.classed("link--source", false).classed("link--target", false);
  node.classed("node--source", false).classed("node--target", false).classed("node--dimmed", false);
  hideTooltip();
  
  // Restore selected state highlights and labels
  if (selectedSystemId && currentLeaves) {
    const selectedLeaf = currentLeaves.find(l => l.data.id === selectedSystemId);
    if (selectedLeaf) {
      // Highlight selected paths
      const outgoingTargets = new Set(selectedLeaf.outgoing.map(o => o[1]));
      const incomingSources = new Set(selectedLeaf.incoming.map(i => i[0]));
      
      link
        .classed("link--source", l => l[0] === selectedLeaf)
        .classed("link--target", l => l[1] === selectedLeaf)
        .filter(l => l[0] === selectedLeaf || l[1] === selectedLeaf)
        .raise();
        
      node
        .classed("node--source", n => n === selectedLeaf || incomingSources.has(n))
        .classed("node--target", n => outgoingTargets.has(n))
        .classed("node--dimmed", n => n !== selectedLeaf && !outgoingTargets.has(n) && !incomingSources.has(n));
        
      showFloatingLabels(selectedLeaf);
    } else {
      g.selectAll(".floating-label-group").remove();
    }
  } else {
    g.selectAll(".floating-label-group").remove();
  }
}

// Tooltip logic
function showTooltip(event, content) {
  const tooltip = d3.select("#chart-tooltip");
  tooltip.transition().duration(100).style("opacity", 0.95);
  tooltip.html(content)
    .style("left", (event.pageX + 15) + "px")
    .style("top", (event.pageY - 28) + "px");
}

function hideTooltip() {
  d3.select("#chart-tooltip").transition().duration(100).style("opacity", 0);
}

// Details Panel & Selection Updater
function selectSystem(system) {
  // Determine if it is a D3 node or raw data
  const data = system.data ? system.data : system;
  selectedSystemId = data.id;
  
  // Hide welcome state, show active state
  document.getElementById("details-welcome").classList.remove("active");
  document.getElementById("details-active").classList.add("active");
  
  // Set basic info
  const catClass = getCategoryClass(data.category);
  const badge = document.getElementById("detail-category");
  badge.textContent = data.category;
  badge.className = `system-category-badge cat-${catClass}`;
  badge.style.border = `1px solid var(--cat-${catClass})`;
  badge.style.color = `var(--cat-${catClass})`;
  badge.style.background = `rgba(255, 255, 255, 0.02)`;

  const isCalc = !data.nature || data.nature.includes("Calculado");
  const natureBadge = document.getElementById("detail-nature");
  if (natureBadge) {
    natureBadge.textContent = isCalc ? "⚡ Calculado" : "🔮 Interpretativo";
    natureBadge.className = `system-nature-badge ${isCalc ? 'nature-calc' : 'nature-interp'}`;
  }
  
  document.getElementById("detail-title").textContent = data.displayName;
  document.getElementById("detail-desc").textContent = data.description || "Sin descripción disponible.";

  // Set Documentation link
  const docLink = document.getElementById("detail-doc-link");
  if (docLink) {
    docLink.href = data.docPath || '#';
  }

  // Reset active tab to first tab "Qué"
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === "tab-que"));
  document.querySelectorAll(".tab-pane").forEach(p => p.classList.toggle("active", p.id === "tab-que"));
  
  // Set Automation section
  const automationContainer = document.getElementById("detail-automation");
  if (automationContainer) {
    automationContainer.innerHTML = `
      <div class="auto-row">
        <span class="auto-title">Naturaleza del Sistema</span>
        <span class="auto-desc"><strong>${data.nature || 'Calculado'}</strong> — ${isCalc ? 'Procesamiento algorítmico, astronómico o matemático determinista.' : 'Hermenéutica cualitativa, semántica, visión por computadora u oracular.'}</span>
      </div>
      <div class="auto-row" style="margin-top: 4px;">
        <span class="auto-title">Servidor Propio (Self-Hosted)</span>
        <span class="auto-desc"><strong>Sí (100% Automatizable)</strong> — Desplegable en infraestructura propia local.</span>
      </div>
      <div class="auto-row" style="margin-top: 4px;">
        <span class="auto-title">Modelos & Librerías Open Source</span>
        <div class="auto-tools-tag">${data.openSourceTools || 'Algoritmos y bibliotecas de código abierto.'}</div>
      </div>
    `;
  }

  // Set Inputs
  const inputsContainer = document.getElementById("detail-inputs");
  inputsContainer.innerHTML = "";
  if (data.inputs && data.inputs.length > 0) {
    data.inputs.forEach(input => {
      const badgeSpan = document.createElement("span");
      badgeSpan.className = "input-badge";
      badgeSpan.textContent = input.name;
      badgeSpan.title = input.description;
      inputsContainer.appendChild(badgeSpan);
    });
  } else {
    inputsContainer.innerHTML = `<span style="color:var(--text-muted); font-size:11px;">Ninguno</span>`;
  }
  
  // Set Outputs
  const outputsContainer = document.getElementById("detail-outputs");
  outputsContainer.innerHTML = "";
  if (data.outputs && data.outputs.length > 0) {
    data.outputs.forEach(out => {
      const item = document.createElement("div");
      item.className = "output-item";
      item.innerHTML = `
        <div class="output-header">
          <span class="output-name">${out.name}</span>
          <span class="output-type">${out.type || 'Cualitativo'}</span>
        </div>
        <span class="output-desc">${out.description}</span>
      `;
      outputsContainer.appendChild(item);
    });
  } else {
    outputsContainer.innerHTML = `<span style="color:var(--text-muted); font-size:11px;">Ninguno</span>`;
  }
  
  // Set Connections
  const connectionsContainer = document.getElementById("detail-connections");
  connectionsContainer.innerHTML = "";
  if (data.relationships && data.relationships.length > 0) {
    // Filter connections to only include those where the connected system is active
    const activeConns = data.relationships.filter(r => {
      const targetNode = rawData.find(sys => sys.displayName === r.system);
      return targetNode && activeSystemIds.has(targetNode.id);
    });
    
    if (activeConns.length > 0) {
      activeConns.forEach(r => {
        const item = document.createElement("div");
        item.className = "conn-item";
        const directionPrefix = r.type === 'outgoing' 
          ? `Modula a <strong>${r.system}</strong>`
          : `Recibe de <strong>${r.system}</strong>`;
        const phrase = `${directionPrefix}: <em>«${r.label || 'Interconexión de datos'}»</em>`;

        item.innerHTML = `
          <span class="conn-indicator ${r.type === 'outgoing' ? 'conn-outgoing' : 'conn-incoming'}"></span>
          <div class="conn-text">
            <div class="conn-phrase">${phrase}</div>
          </div>
        `;
        item.addEventListener("click", () => {
          selectSystemByName(r.system);
        });
        connectionsContainer.appendChild(item);
      });
    } else {
      connectionsContainer.innerHTML = `<span style="color:var(--text-muted); font-size:11px;">Sin relaciones cruzadas activas (sistemas asociados apagados)</span>`;
    }
  } else {
    connectionsContainer.innerHTML = `<span style="color:var(--text-muted); font-size:11px;">Ninguna relación externa documentada</span>`;
  }
  
  // Highlight this item in the left side list
  document.querySelectorAll(".switch-item").forEach(item => {
    item.style.borderColor = "rgba(255, 255, 255, 0.02)";
    item.style.background = "rgba(255, 255, 255, 0.02)";
  });
  const listItem = document.querySelector(`.switch-item[data-id="${data.id}"]`);
  if (listItem) {
    listItem.style.borderColor = `var(--cat-${catClass})`;
    listItem.style.background = "rgba(255, 255, 255, 0.05)";
  }
  
  // Highlighting in the D3 graph
  let d3Node = null;
  if (system.data) {
    d3Node = system;
  } else if (currentLeaves) {
    d3Node = currentLeaves.find(l => l.data.id === data.id);
  }
  
  if (d3Node) {
    link.classed("link--source", false).classed("link--target", false);
    node.classed("node--source", false).classed("node--target", false).classed("node--dimmed", false);
    
    const outgoingTargets = new Set(d3Node.outgoing.map(o => o[1]));
    const incomingSources = new Set(d3Node.incoming.map(i => i[0]));
    
    link
      .classed("link--source", l => l[0] === d3Node)
      .classed("link--target", l => l[1] === d3Node)
      .filter(l => l[0] === d3Node || l[1] === d3Node)
      .raise();
      
    node
      .classed("node--source", n => n === d3Node || incomingSources.has(n))
      .classed("node--target", n => outgoingTargets.has(n))
      .classed("node--dimmed", n => n !== d3Node && !outgoingTargets.has(n) && !incomingSources.has(n));
      
    showFloatingLabels(d3Node);
  } else {
    g.selectAll(".floating-label-group").remove();
  }

  // Ensure ONLY the selected system is bold
  updateNodeBoldState();
}

function updateNodeBoldState() {
  if (node) {
    node
      .style("font-weight", d => (selectedSystemId && d.data.id === selectedSystemId) ? "800" : "400")
      .style("font-size", d => (selectedSystemId && d.data.id === selectedSystemId) ? "12.5px" : "11px");
  }
}

// Find a system by display name and open details
function selectSystemByName(name) {
  const sys = rawData.find(d => d.displayName === name);
  if (sys) {
    // Find the D3 node if active
    const leaf = currentLeaves.find(l => l.data.id === sys.id);
    if (leaf) {
      selectSystem(leaf);
    } else {
      selectSystem(sys);
    }
    
    // Scroll the left list item into view if possible
    const listItem = document.querySelector(`.switch-item[data-id="${sys.id}"]`);
    if (listItem) {
      listItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
}

// Draw floating relationship labels over the curved connection paths
function showFloatingLabels(selectedNode) {
  g.selectAll(".floating-label-group").remove();
  
  if (!selectedNode) return;
  
  const connectedLinks = link.filter(l => l[0] === selectedNode || l[1] === selectedNode);
  
  const labelsGroup = g.append("g")
    .attr("class", "floating-label-group");
    
  connectedLinks.each(function(l) {
    const sourceNode = l[0];
    const targetNode = l[1];
    const pathEl = this;
    
    try {
      const pathLength = pathEl.getTotalLength();
      // Midpoint coordinate (at 50% length of the curved line)
      const point = pathEl.getPointAtLength(pathLength * 0.5);
      
      const labelText = getLinkLabel(sourceNode, targetNode);
      if (!labelText) return;
      
      const isOutgoing = sourceNode === selectedNode;
      const fullText = isOutgoing ? `${labelText} →` : `← ${labelText}`;
      const color = isOutgoing ? "var(--rel-outgoing)" : "var(--rel-incoming)";
      
      const labelG = labelsGroup.append("g")
        .attr("transform", `translate(${point.x}, ${point.y})`)
        .attr("class", "floating-label-item")
        .style("pointer-events", "none");
        
      // Measure exact text width using SVG bounding box
      const tempText = labelG.append("text")
        .attr("font-size", "8px")
        .attr("font-family", "Inter, sans-serif")
        .attr("font-weight", "600")
        .text(fullText);
        
      const bbox = tempText.node().getBBox();
      tempText.remove();
      
      const padX = 5;
      const padY = 3;
      const rectW = bbox.width + padX * 2;
      const rectH = bbox.height + padY * 2;
      
      // Floating label background box (dark background with direction border)
      labelG.append("rect")
        .attr("x", -rectW / 2)
        .attr("y", -rectH / 2)
        .attr("width", rectW)
        .attr("height", rectH)
        .attr("rx", 3.5)
        .attr("ry", 3.5)
        .attr("fill", "#090a12")
        .attr("stroke", color)
        .attr("stroke-width", "0.75px")
        .attr("opacity", 0.96);
        
      // Floating label text
      labelG.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "0.33em")
        .attr("font-size", "8px")
        .attr("font-family", "Inter, sans-serif")
        .attr("font-weight", "600")
        .attr("fill", "#ffffff")
        .text(fullText)
        .attr("fill", color); // style text with cyan/pink for clarity
        
    } catch (e) {
      console.warn("Could not calculate floating label position:", e);
    }
  });
}

function getLinkLabel(sourceNode, targetNode) {
  const rel = sourceNode.data.relationships.find(r => r.system === targetNode.data.displayName && r.type === 'outgoing');
  return rel ? rel.label : '';
}

// Helpers
function getCategoryClass(category) {
  if (category.includes("Astral")) return "astral";
  if (category.includes("Cuerpo")) return "cuerpo";
  if (category.includes("Mente")) return "mente";
  if (category.includes("Simbólico") || category.includes("Simbolico")) return "simbolico";
  if (category.includes("Síntesis") || category.includes("Sintesis")) return "sintesis";
  return "default";
}

// Parse flat list with dotted paths into hierarchical JSON tree
function buildHierarchy(data, delimiter = ".") {
  let root;
  const map = new Map();
  
  // Make sure we include a root systems element
  const rootNode = { name: "systems", children: [] };
  map.set("systems", rootNode);
  root = rootNode;
  
  data.forEach(function find(d) {
    const name = d.name;
    if (map.has(name)) return map.get(name);
    
    const i = name.lastIndexOf(delimiter);
    map.set(name, d);
    
    if (i >= 0) {
      const parentName = name.substring(0, i);
      const parent = find(parentName === "systems" ? rootNode : { name: parentName, children: [] });
      if (!parent.children) parent.children = [];
      parent.children.push(d);
    }
    return d;
  });
  
  return root;
}

// Setup bidirectional links in tree hierarchy
function bilink(root) {
  const map = new Map(root.leaves().map(d => [d.data.name, d]));
  
  for (const d of root.leaves()) {
    d.incoming = [];
    d.outgoing = [];
    if (d.data.imports) {
      d.outgoing = d.data.imports.map(i => [d, map.get(i)]).filter(o => o[1]);
    }
  }
  
  for (const d of root.leaves()) {
    for (const o of d.outgoing) {
      o[1].incoming.push(o);
    }
  }
  
  return root;
}
