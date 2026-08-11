const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '..', 'docs');
const SYSTEMS_DIR = path.join(DOCS_DIR, 'systems');
const CONCEPTUAL_MODEL_PATH = path.join(DOCS_DIR, 'modelo_datos_conceptual.md');
const OUTPUT_PATH = path.join(DOCS_DIR, 'data.json');

const systemMap = {
  "AO": { name: "Astrología Occidental", category: "Astral & Calendarios", file: "01_astrologia_occidental.md" },
  "DH": { name: "Diseño Humano", category: "Síntesis & Estructuras", file: "02_diseno_humano.md" },
  "AC": { name: "Astrología China", category: "Astral & Calendarios", file: "03_astrologia_china.md" },
  "NU": { name: "Numerología", category: "Síntesis & Estructuras", file: "04_numerologia.md" },
  "TA": { name: "Tarot", category: "Simbólico & Oracular", file: "05_tarot.md" },
  "EP": { name: "Eneagrama de la Personalidad", category: "Mente & Psique", file: "06_eneagrama.md" },
  "CA": { name: "Cábala (Árbol de la Vida)", category: "Síntesis & Estructuras", file: "07_cabala_arbol_vida.md" },
  "IC": { name: "I Ching", category: "Simbólico & Oracular", file: "08_i_ching.md" },
  "CH": { name: "Sistema de Chakras", category: "Cuerpo & Energía", file: "09_chakras.md" },
  "TM": { name: "Tzolkin Maya", category: "Astral & Calendarios", file: "10_tzolkin_maya.md" },
  "RU": { name: "Runas Nórdicas", category: "Simbólico & Oracular", file: "11_runas.md" },
  "AV": { name: "Astrología Védica (Jyotish)", category: "Astral & Calendarios", file: "12_astrologia_vedica.md" },
  "AL": { name: "Alquimia y los Cuatro Elementos", category: "Cuerpo & Energía", file: "13_alquimia_elementos.md" },
  "FB": { name: "Flores de Bach", category: "Mente & Psique", file: "14_flores_bach.md" },
  "AK": { name: "Astrología Kabbalística", category: "Astral & Calendarios", file: "15_astrologia_kabbalistica.md" },
  "HC": { name: "Horóscopo Celta", category: "Astral & Calendarios", file: "16_horoscopo_celta.md" },
  "GS": { name: "Geometría Sagrada", category: "Síntesis & Estructuras", file: "17_geometria_sagrada.md" },
  "QC": { name: "Quiromancia", category: "Cuerpo & Energía", file: "18_quiromancia.md" },
  "FS": { name: "Fisiognomía (Mian Xiang)", category: "Cuerpo & Energía", file: "19_fisiognomia.md" },
  "BD": { name: "Biodescodificación", category: "Mente & Psique", file: "20_biodescodificacion.md" },
  "PG": { name: "Psicogenealogía", category: "Mente & Psique", file: "21_psicogenealogia.md" },
  "RE": { name: "Reiki", category: "Cuerpo & Energía", file: "22_reiki.md" },
  "TE": { name: "Teosofía", category: "Mente & Psique", file: "23_teosofia.md" },
  "AN": { name: "Antroposofía", category: "Mente & Psique", file: "24_antroposofia.md" },
  "ES": { name: "Eneagrama Sufí", category: "Mente & Psique", file: "25_eneagrama_sufi.md" }
};

// Map name to abbreviation for easy lookup
const nameToAbbr = {};
for (const [abbr, info] of Object.entries(systemMap)) {
  nameToAbbr[info.name] = abbr;
  // Also map common variations
  if (info.name.includes(" (")) {
    const shortName = info.name.split(" (")[0];
    nameToAbbr[shortName] = abbr;
  }
}
// Add manual overrides if needed
nameToAbbr["Eneagrama"] = "EP";
nameToAbbr["Eneagrama Personalidad"] = "EP";
nameToAbbr["Cábala / Árbol Vida"] = "CA";
nameToAbbr["Cábala"] = "CA";
nameToAbbr["Alquimia / Elementos"] = "AL";
nameToAbbr["Alquimia"] = "AL";
nameToAbbr["Fisiognomía / Mian Xiang"] = "FS";
nameToAbbr["Fisiognomía"] = "FS";
nameToAbbr["Teosofía / 7 Rayos"] = "TE";
nameToAbbr["Antroposofía / Septenios"] = "AN";

function cleanText(text) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // remove markdown links
             .replace(/`([^`]+)`/g, '$1') // remove backticks
             .replace(/\*\*([^*]+)\*\*/g, '$1') // remove bold
             .replace(/\*([^*]+)\*/g, '$1') // remove italic
             .trim();
}

function parseSystemFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  let description = '';
  const inputs = [];
  const outputs = [];
  let nature = 'Calculado';
  let selfHostable = 'Sí';
  let openSourceTools = '';
  
  let currentSection = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith('## ')) {
      const heading = line.toLowerCase();
      if (heading.includes('descripción') || heading.includes('descripcion')) {
        currentSection = 'desc';
      } else if (heading.includes('parámetros') || heading.includes('parametros') || heading.includes('input')) {
        currentSection = 'inputs';
      } else if (heading.includes('variables') || heading.includes('output')) {
        currentSection = 'outputs';
      } else if (heading.includes('naturaleza') || heading.includes('automatiz') || heading.includes('self-hosted')) {
        currentSection = 'automation';
      } else {
        currentSection = '';
      }
      continue;
    }
    
    if (currentSection === 'desc' && line !== '') {
      if (!description) {
        description = cleanText(line);
      } else if (description.length < 250) {
        // Append another paragraph if the first one is too short
        description += ' ' + cleanText(line);
      }
    } else if (currentSection === 'inputs' && line !== '') {
      // Find backticked words
      const match = line.match(/`([^`]+)`/);
      if (match) {
        // Get the description of the input
        const parts = line.split(match[0]);
        const desc = parts[1] ? parts[1].replace(/^[ \-\:\(\)]+/, '').trim() : '';
        inputs.push({ name: match[1], description: cleanText(desc) });
      }
    } else if (currentSection === 'outputs' && line.startsWith('|')) {
      // Parse markdown table row
      // Skip header and separator lines
      if (line.includes('---') || line.toLowerCase().includes('significado') || line.toLowerCase().includes('dominio')) {
        continue;
      }
      const cols = line.split('|').map(c => c.trim()).filter(Boolean);
      if (cols.length >= 3) {
        const varName = cols[0].replace(/`/g, '');
        const varType = cols[1];
        const varMeaning = cols[cols.length - 1]; // usually the last column is description/meaning
        if (varName && varName !== 'Variable / Componente') {
          outputs.push({ name: varName, type: varType, description: cleanText(varMeaning) });
        }
      }
    } else if (currentSection === 'automation' && line.startsWith('|')) {
      if (line.includes('---') || line.toLowerCase().includes('detalle') || line.toLowerCase().includes('especificación')) {
        continue;
      }
      const cols = line.split('|').map(c => c.trim()).filter(Boolean);
      if (cols.length >= 2) {
        const key = cols[0].toLowerCase();
        const val = cols[1];
        if (key.includes('naturaleza')) {
          if (val.toLowerCase().includes('interpretativo')) {
            nature = 'Interpretativo';
          } else {
            nature = 'Calculado';
          }
        } else if (key.includes('servidor') || key.includes('self-hosted')) {
          selfHostable = 'Sí';
        } else if (key.includes('motores') || key.includes('modelos') || key.includes('open source')) {
          openSourceTools = cleanText(val);
        }
      }
    }
  }
  
  return { description, inputs, outputs, nature, selfHostable, openSourceTools };
}


function parseRelationships() {
  const content = fs.readFileSync(CONCEPTUAL_MODEL_PATH, 'utf-8');
  const relations = [];
  
  // Find Mermaid graph in modelo_datos_conceptual.md
  const mermaidRegex = /```mermaid([\s\S]*?)```/g;
  let mermaidBlock = '';
  let match;
  while ((match = mermaidRegex.exec(content)) !== null) {
    if (match[1].includes('-->')) {
      mermaidBlock = match[1];
      break;
    }
  }
  
  if (!mermaidBlock) {
    console.warn("No se encontró el bloque de relaciones en Mermaid.");
    return [];
  }
  
  const lines = mermaidBlock.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    // Match pattern: SOURCE -->|LABEL| TARGET
    const relationMatch = trimmed.match(/^([A-Z]{2})\s*-->\s*\|([^|]+)\|\s*([A-Z]{2})/);
    if (relationMatch) {
      relations.push({
        source: relationMatch[1],
        label: relationMatch[2].trim(),
        target: relationMatch[3]
      });
    } else {
      // Match pattern: SOURCE --> TARGET (without label)
      const directMatch = trimmed.match(/^([A-Z]{2})\s*-->\s*([A-Z]{2})/);
      if (directMatch) {
        relations.push({
          source: directMatch[1],
          label: 'Interconexión',
          target: directMatch[2]
        });
      }
    }
  }
  
  return relations;
}

function main() {
  console.log("Compilando datos de sistemas...");
  
  const relations = parseRelationships();
  console.log(`Se encontraron ${relations.length} relaciones cruzadas en modelo_datos_conceptual.md`);
  
  const nodes = [];
  
  // Compile node data
  for (const [abbr, info] of Object.entries(systemMap)) {
    const filePath = path.join(SYSTEMS_DIR, info.file);
    let extraData = { description: '', inputs: [], outputs: [] };
    
    if (fs.existsSync(filePath)) {
      try {
        extraData = parseSystemFile(filePath);
      } catch (err) {
        console.error(`Error al parsear el archivo ${filePath}:`, err);
      }
    } else {
      console.warn(`Advertencia: El archivo para ${info.name} (${info.file}) no existe.`);
    }
    
    // Find all outgoing connections for this node
    const imports = relations
      .filter(r => r.source === abbr)
      .map(r => {
        const targetNode = systemMap[r.target];
        if (targetNode) {
          return `systems.${targetNode.category}.${targetNode.name}`;
        }
        return null;
      })
      .filter(Boolean);
      
    // Find relationship details
    const relationships = relations
      .filter(r => r.source === abbr || r.target === abbr)
      .map(r => {
        const isSource = r.source === abbr;
        const otherAbbr = isSource ? r.target : r.source;
        const otherNode = systemMap[otherAbbr];
        return {
          type: isSource ? 'outgoing' : 'incoming',
          system: otherNode ? otherNode.name : otherAbbr,
          label: r.label
        };
      });
      
    const fullName = `systems.${info.category}.${info.name}`;
    
    nodes.push({
      name: fullName,
      displayName: info.name,
      id: abbr,
      category: info.category,
      docPath: 'systems/' + info.file,
      nature: extraData.nature || 'Calculado',
      selfHostable: extraData.selfHostable || 'Sí',
      openSourceTools: extraData.openSourceTools || '',
      description: extraData.description,
      inputs: extraData.inputs,
      outputs: extraData.outputs,
      imports: imports,
      relationships: relationships
    });

  }
  
  // Save compiled data
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(nodes, null, 2), 'utf-8');
  console.log(`Datos compilados con éxito en: ${OUTPUT_PATH}`);
  console.log(`Total de nodos compilados: ${nodes.length}`);
}

main();
