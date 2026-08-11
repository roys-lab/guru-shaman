# Sistema de Chakras

## 1. Descripción General e Historia
El Sistema de Chakras es un modelo energético del cuerpo sutil originado en las escrituras hindúes del yoga y el tantra (principalmente los *Upanishads* y textos posteriores como el *Shatchakra Nirupana* traducido por Arthur Avalon en 1919). Describe ruedas o vórtices de energía a lo largo de la columna vertebral que conectan el cuerpo físico con la mente y el espíritu. Aunque tradicionalmente existen miles de chakras menores, el sistema estándar moderno occidental consta de **7 chakras principales**, cada uno asociado con un plexo nervioso, una glándula endocrina, un elemento de la naturaleza, un color y ciertos estados psicológicos y emocionales.

## 2. Parámetros de Entrada (Inputs)
Como mapa de diagnóstico y equilibrio energético, los inputs del sistema son:
1.  `sintomas_fisicos_emocionales` (Lista de quejas, bloqueos o dolencias reportadas por el usuario, ej. miedo a expresarse, problemas digestivos).
2.  `medicion_vibracional` (Cualitativo: Resultado de radiestesia con péndulo, fotografía Kirlian o tests psicológicos de balance de chakras).

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `chakra_estado` | Compuesto (Nombre + Balance) | Chakras: Muladhara (Raíz), Svadhisthana (Sacro), Manipura (Plexo Solar), Anahata (Corazón), Vishuddha (Garganta), Ajna (Tercer Ojo), Sahasrara (Corona). Balance: Bloqueado (Deficiente), Armónico (Abierto), Hiperactivo (Exceso). | El estado energético actual de cada uno de los 7 centros de energía. |
| `bija_mantra` | Cualitativo | Lam, Vam, Ram, Yam, Ham, Om, Silencio. | El sonido semilla vibracional utilizado para activar y armonizar cada chakra correspondiente. |
| `elemento_asociado` | Cualitativo | Tierra, Agua, Fuego, Aire, Éter/Espacio, Luz, Pensamiento Puro. | La sustancia arquetípica de la naturaleza vinculada al plano de conciencia del chakra. |
| `glandula_endocrina` | Cualitativo | Suprarrenales, Gónadas, Páncreas, Timo, Tiroides, Pituitaria/Hipófisis, Pineal. | El correlato biológico y glandular del chakra en el cuerpo físico. |

## 4. Relaciones Internas (Relaciones)
*   **Ascenso de la Kundalini**: La energía vital latente (Kundalini Shakti) asciende desde el chakra raíz Muladhara hasta el chakra corona Sahasrara, transmutando la conciencia desde los instintos básicos y la materia física hacia la iluminación espiritual.
*   **Canales Energéticos (Nadis)**: Tres canales principales conectan los chakras: *Sushumna* (canal central), *Ida* (canal izquierdo, femenino, lunar, frío) y *Pingala* (canal derecho, masculino, solar, caliente). El cruce de Ida y Pingala a lo largo de Sushumna marca la ubicación de los chakras principales.
*   **Compensación de Chakras**: Un bloqueo en un chakra inferior suele forzar una hiperactividad compensatoria en un chakra superior (ej. un Muladhara débil por inseguridad puede causar un Ajna hiperactivo con rumiación mental excesiva).

## 5. Puntos de Intersección Externa (Interconexiones)
*   **Diseño Humano**: Expande los 7 chakras a 9 centros (dividiendo el del Corazón en Ego y G; e integrando el Bazo como centro adicional de conciencia del cuerpo).
*   **Reiki**: Utiliza los 7 chakras principales como los focos primarios para la imposición de manos y el direccionamiento de energía curativa.
*   **Astrología Occidental**: Asocia cada chakra a planetas específicos (ej. Muladhara = Saturno; Manipura = Sol/Marte; Vishuddha = Mercurio; Ajna = Urano/Luna).

## 6. Bibliografía y Referencias

### Fuentes Académicas y Literatura de Referencia
1.  **Judith, Anodea** (2004). *Eastern Body, Western Mind: Psychology and the Chakra System As a Path to the Self*. La obra de referencia definitiva que mapea los chakras con la teoría del desarrollo infantil de la psicología occidental.
    *   [Ver en Amazon](https://www.amazon.com/dp/1587611388) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Anodea+Judith+Eastern+Body+Western+Mind)
2.  **Avalon, Arthur (Sir John Woodroffe)** (1919). *The Serpent Power*. La primera traducción rigurosa e introducción a Occidente de los textos sánscritos clásicos sobre Kundalini y Chakras (*Sat-Cakra-Nirupana* y *Padaka-Pancaka*).
    *   [Ver en Amazon](https://www.amazon.com/dp/0486230589) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Arthur+Avalon+The+Serpent+Power)
3.  **Judith, Anodea** (1987). *Wheels of Life: A User's Guide to the Chakra System*. Manual práctico detallado que describe las relaciones físicas, emocionales y de elementos para cada chakra.
    *   [Ver en Amazon](https://www.amazon.com/dp/0875423205) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Anodea+Judith+Wheels+of+Life)

### Herramientas de Validación y Fuentes de Veracidad
*   **Motores de Cálculo y Librerías**:
    *   *Frecuencias de Solfeo y Ondas Binacionales*: Equivalencia matemática y acústica en Hz de las vibraciones de cada uno de los 7 centros energéticos primarios y sus mantras raíz (Bija Mantras): Muladhara (Lam - 396 Hz), Svadhisthana (Vam - 417 Hz), Manipura (Ram - 528 Hz), Anahata (Yam - 639 Hz), Vishuddha (Ham - 741 Hz), Ajna (Om - 852 Hz), Sahasrara (Ah/Silencio - 963 Hz).
*   **Plataformas de Referencia y Verificación**:
    *   [Yoga Veda Foundation](https://yogavedafoundation.com): Plataforma educativa que mantiene las bases del yoga tradicional y estudios de anatomía sutil de los textos clásicos sánscritos.

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Interpretativo` (Energético / Somático. Evaluación cualitativa basada en cuestionarios de síntomas corporal-emocionales y biofrecuencias) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source) |
| **Motores y Modelos Open Source** | Motores de cuestionarios ponderados en Python/Node.js + procesamiento de señales biométricas (`scipy`, `numpy`) + LLMs Open Source para diagnóstico de bloqueos |
