const fs = require('fs');
const path = require('path');

const SYSTEMS_DIR = path.join(__dirname, '..', 'docs', 'systems');

const systemData = {
  "01_astrologia_occidental.md": {
    nature: "`Calculado` (Deterministico. Efemérides astronómicas de la NASA DE430/DE431 y trigonometría esférica de casas Placidus/Koch/Whole Sign)",
    selfHosted: "`Sí` (100% automatizable en servidor propio sin dependencias externas)",
    tools: "`pyswisseph` (binding de Python para Swiss Ephemeris C-library), `flatlib`, `astropy`, `kstars`, y LLM Open Source (Llama-3 / Qwen-2.5 / DeepSeek-R1) para la generación de reportes interpretativos"
  },
  "02_diseno_humano.md": {
    nature: "`Calculado` (Algorítmico. Mapeo determinista de 64 Puertas, Canales y Centros a partir de posiciones planetarias natales e inconscientes a -88° de arco solar)",
    selfHosted: "`Sí` (100% automatizable en servidor propio sin dependencias externas)",
    tools: "`pyswisseph` (cálculo astronómico de posiciones inconscientes), `mmaia` (Rave BodyGraph engine), scripts de definición de centros en Python/Node.js y LLMs Open Source para síntesis narrativa"
  },
  "03_astrologia_china.md": {
    nature: "`Calculado` (Deterministico. Conversión del calendario gregoriano a calendario luni-solar chino Hsiu y algoritmo de Cuatro Pilares BaZi)",
    selfHosted: "`Sí` (100% automatizable en servidor propio sin dependencias externas)",
    tools: "`lunar-javascript` / `lunar-python` (librería Open Source de conversión luni-solar y 4 pilares BaZi), `bazi-calculator`"
  },
  "04_numerologia.md": {
    nature: "`Calculado` (Matemático puro. Aritmética determinista de reducción teosófica/módulo 9 y gematría de letras pitagórica/caldea)",
    selfHosted: "`Sí` (100% automatizable en servidor propio sin dependencias externas)",
    tools: "Paquetes de Gematría Open Source (`gematria` npm, `pygematria`), funciones puras de reducción digital y detección de números maestros (11, 22, 33)"
  },
  "05_tarot.md": {
    nature: "`Interpretativo` (Simbólico / Oracular. Sorteo aleatorio PRNG de 78 Arcanos + hermenéutica cualitativa y semántica contextual)",
    selfHosted: "`Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source)",
    tools: "Generador de entropía CSPRNG + RAG vectorial (`ChromaDB` / `Qdrant`) indexando los 78 Arcanos + LLMs Open Source (Llama-3.3-70B, Qwen-2.5-72B, DeepSeek-R1)"
  },
  "06_eneagrama.md": {
    nature: "`Interpretativo` (Psicométrico / Cualitativo. Evaluación de motivaciones subyacentes, miedos básicos y fijaciones del ego)",
    selfHosted: "`Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source)",
    tools: "Motor de scoring psicométrico RISO-HUDSON en Python (`scikit-learn`) + LLMs Open Source (Llama-3, Qwen-2.5) para procesamiento y clasificación de texto libre"
  },
  "07_cabala_arbol_vida.md": {
    nature: "`Calculado` (Estructural. Grafo de 10 Sephirot y 22 Senderos + gematría de letras del alfabeto hebreo)",
    selfHosted: "`Sí` (100% automatizable en servidor propio sin dependencias externas)",
    tools: "`networkx` (modelado de estructuras en grafo en Python), `hebrew-gematria`, `gematria-js` (cálculo de senderos activos)"
  },
  "08_i_ching.md": {
    nature: "`Interpretativo` (Oracular / Simbólico. Sorteo probabilístico de tallos de milenrama para formar hexagramas + hermenéutica del texto canónico)",
    selfHosted: "`Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source)",
    tools: "Generador de probabilidades Yijing (`iching` python package, `yijing-js`) + RAG sobre los 64 Hexagramas con LLM Open Source (Llama-3, DeepSeek-R1)"
  },
  "09_chakras.md": {
    nature: "`Interpretativo` (Energético / Somático. Evaluación cualitativa basada en cuestionarios de síntomas corporal-emocionales y biofrecuencias)",
    selfHosted: "`Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source)",
    tools: "Motores de cuestionarios ponderados en Python/Node.js + procesamiento de señales biométricas (`scipy`, `numpy`) + LLMs Open Source para diagnóstico de bloqueos"
  },
  "10_tzolkin_maya.md": {
    nature: "`Calculado` (Calendárico / Matemático. Matriz de 260 días Kin combinando 13 Tonos y 20 Sellos con la correlación GMT 584283)",
    selfHosted: "`Sí` (100% automatizable en servidor propio sin dependencias externas)",
    tools: "Librerías de conversión de calendarios mayas (`maya-calendar`, `tzolkin-calculator`) en Python y JavaScript"
  },
  "11_runas.md": {
    nature: "`Interpretativo` (Simbólico / Oracular. Extracción aleatoria de los 24 caracteres del Futhark Antiguo + lectura hermenéutica contextual)",
    selfHosted: "`Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source)",
    tools: "Extractor de entropía CSPRNG + RAG con poemas rúnicos tradicionales + LLM Open Source (Llama-3, DeepSeek-R1, Qwen-2.5)"
  },
  "12_astrologia_vedica.md": {
    nature: "`Calculado` (Astronomía Sidérea. Cálculo de Zodiaco Sidéreo con Ayanamsa Lahiri/Raman, 27 Nakshatras y períodos Dasha de Vimshottari)",
    selfHosted: "`Sí` (100% automatizable en servidor propio sin dependencias externas)",
    tools: "`pyswisseph` (Swiss Ephemeris con Ayanamsa Lahiri), `jyotish-python`, `open-jyotish-engine`"
  },
  "13_alquimia_elementos.md": {
    nature: "`Interpretativo` (Cualitativo. Evaluación de balances de Fuego, Tierra, Aire, Agua y los 3 Principios Sal, Azufre y Mercurio)",
    selfHosted: "`Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source)",
    tools: "Algoritmos de balance matricial en Python/Node.js + LLMs Open Source para prescripción y síntesis alquímica"
  },
  "14_flores_bach.md": {
    nature: "`Interpretativo` (Terapéutico / Cualitativo. Diagnóstico y pareo entre estados emocionales y el vademécum de 38 esencias florales)",
    selfHosted: "`Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source)",
    tools: "Sistema RAG vectorial (`ChromaDB`, `FAISS`, `Qdrant`) indexando las 38 esencias de Edward Bach + LLM Open Source (Llama-3, Qwen-2.5, DeepSeek)"
  },
  "15_astrologia_kabbalistica.md": {
    nature: "`Calculado` (Astronomía y Calendarios. Posiciones planetarias cruzadas con el calendario hebreo luni-solar y las 22 letras alfabéticas)",
    selfHosted: "`Sí` (100% automatizable en servidor propio sin dependencias externas)",
    tools: "`pyswisseph` + `hebrew-calendar` (conversión de fechas a meses hebreos) + matriz determinista de regencias de letras hebreas"
  },
  "16_horoscopo_celta.md": {
    nature: "`Calculado` (Deterministico. Asignación de uno de los 21 árboles sagrados celtas según el rango de día/mes de nacimiento solar)",
    selfHosted: "`Sí` (100% automatizable en servidor propio sin dependencias externas)",
    tools: "Algoritmo determinista de tabla de búsqueda (lookup table) por rangos de fechas en Python/Node.js"
  },
  "17_geometria_sagrada.md": {
    nature: "`Calculado` (Geometría computacional / Matemático. Proporción Áurea phi, Sólidos Platónicos, serie de Fibonacci y armónicos)",
    selfHosted: "`Sí` (100% automatizable en servidor propio sin dependencias externas)",
    tools: "Librerías de geometría y renderizado 2D/3D (`three.js`, `shapely`, `numpy`, `matplotlib`, `cairo`)"
  },
  "18_quiromancia.md": {
    nature: "`Interpretativo` (Visión por Computadora / Morfológico. Reconocimiento de patrones de líneas de la mano -Vida, Cabeza, Corazón- y montes)",
    selfHosted: "`Sí` (100% automatizable en servidor propio desplegando modelos de Visión e IA Open Source)",
    tools: "Computer Vision (`MediaPipe Hand Landmarker`, `YOLOv8-pose`, `OpenCV`) + Vision-Language Models (VLM) Open Source (`Qwen2-VL`, `LLaVA`, `Florence-2`) ejecutados en GPU local"
  },
  "19_fisiognomia.md": {
    nature: "`Interpretativo` (Visión por Computadora / Mian Xiang. Análisis de las 3 regiones del rostro, 12 palacios y 100 puntos de edad)",
    selfHosted: "`Sí` (100% automatizable en servidor propio desplegando modelos de Visión e IA Open Source)",
    tools: "Facial Landmarks Models Open Source (`InsightFace`, `MediaPipe Face Mesh` con 468 puntos faciales, `dlib`) + VLM Open Source (`Qwen2-VL`, `LLaVA-NeXT`) en infraestructura local"
  },
  "20_biodescodificacion.md": {
    nature: "`Interpretativo` (Somático / Semántico. Mapeo entre síntomas físicos, capas embrionarias y conflictos biológicos no resueltos)",
    selfHosted: "`Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source)",
    tools: "Base de datos vectorial (`ChromaDB`, `Qdrant`) indexando el Diccionario de Biología y Conflictos Emocionales + RAG con LLM Open Source (Llama-3.3-70B, Qwen-2.5, DeepSeek-R1)"
  },
  "21_psicogenealogia.md": {
    nature: "`Interpretativo` (Transgeneracional / Grafos. Análisis de lealtades invisibles, síndromes de aniversario y repeticiones de patrones del clan)",
    selfHosted: "`Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source)",
    tools: "Motor de análisis de grafos familiares en Python (`networkx`) + LLM Open Source para detección de patrones transgeneracionales"
  },
  "22_reiki.md": {
    nature: "`Interpretativo` (Energético / Protocolar. Evaluación de secuencias de posiciones de manos, símbolos e intenciones de sanación)",
    selfHosted: "`Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source)",
    tools: "Tablas de sintonización de símbolos (Cho Ku Rei, Sei He Ki, Hon Sha Ze Sho Nen) en JSON + LLM Open Source para estructurar protocolos de sesión e intenciones"
  },
  "23_teosofia.md": {
    nature: "`Interpretativo` (Esotérico / Psicométrico. Clasificación de los 7 Rayos cósmicos y constituciones septenarias del ser)",
    selfHosted: "`Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source)",
    tools: "Test psicométrico de diagnóstico de Rayos en Python + RAG con la literatura de Helena Blavatsky y Alice Bailey sobre LLM Open Source"
  },
  "24_antroposofia.md": {
    nature: "`Calculado` (Ritmo cronológico de septenios biográficos) / `Interpretativo` (Análisis del desarrollo biográfico espiritual)",
    selfHosted: "`Sí` (100% automatizable en servidor propio desplegando modelos Open Source)",
    tools: "Algoritmo determinista de cálculo de septenios (ritmo de 7 años) + LLM Open Source para la síntesis de la tabla biográfica personal"
  },
  "25_eneagrama_sufi.md": {
    nature: "`Interpretativo` (Espiritual / Cualitativo. Evaluación de las 9 estaciones del alma, la Ley del Tres y la Ley del Siete)",
    selfHosted: "`Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source)",
    tools: "LLM Open Source (Llama-3, Qwen-2.5, DeepSeek-R1) con RAG entrenado en el diagrama Sufí de Gurdjieff/Sufismo y los puntos de choque"
  }
};

for (const [filename, info] of Object.entries(systemData)) {
  const filePath = path.join(SYSTEMS_DIR, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf-8');
  if (content.includes('## 7. Naturaleza del Sistema')) {
    console.log(`Already updated: ${filename}`);
    continue;
  }
  
  const section7 = `\n\n## 7. Naturaleza del Sistema y Automatización Self-Hosted\n\n| Parámetro | Detalle / Especificación |\n|---|---|\n| **Naturaleza del Sistema** | ${info.nature} |\n| **Servidor Propio (Self-Hosted)** | ${info.selfHosted} |\n| **Motores y Modelos Open Source** | ${info.tools} |\n`;

  content = content.trimEnd() + section7;
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${filename}`);
}

console.log("Completed updating all markdown files with Section 7.");
