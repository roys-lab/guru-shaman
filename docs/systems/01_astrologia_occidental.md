# Astrología Occidental

## 1. Descripción General e Historia
La Astrología Occidental es un sistema milenario de interpretación arquetípica basado en la premisa geométrica y simbólica de "como es arriba, es abajo" (Hermetismo). Tiene sus raíces en las tradiciones babilónica, egipcia y helenística, consolidándose en el *Tetrabiblos* de Claudio Ptolomeo en el siglo II d.C. Mapea la posición de los cuerpos celestes desde la perspectiva geocéntrica del plano de la eclíptica al momento exacto del nacimiento del individuo para reflejar su estructura psíquica y ciclos de desarrollo.

## 2. Parámetros de Entrada (Inputs)
Para calcular una Carta Natal (el mapa base del sistema), se requieren los siguientes parámetros precisos:
1.  `fecha_nacimiento` (Fecha: Día, Mes, Año).
2.  `hora_nacimiento` (Hora y minutos exactos, ajustados al huso horario UTC/GMT).
3.  `coordenadas_nacimiento` (Latitud y Longitud del lugar geográfico de nacimiento, utilizado para calcular el sistema de casas).

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `planeta_posicion` | Compuesto (Planeta + Signo + Grado) | Planetas: Sol, Luna, Mercurio, Venus, Marte, Júpiter, Saturno, Urano, Neptuno, Plutón, Quirón. Signos: Aries a Piscis. Grados: 0° a 29°59'. | La posición celeste de un arquetipo energético activo. Representa las distintas partes del yo (ej. Luna = emociones, Mercurio = mente). |
| `casa_cuspide` | Compuesto (Casa + Signo + Grado) | Casas: I a XII. Signos: Aries a Piscis. | Las cúspides que marcan las 12 áreas de la experiencia vital. La cúspide de la Casa I es el Ascendente (`ascendente`). |
| `ascendente` (AC) | Cualitativo | Aries, Tauro, Géminis, Cáncer, Leo, Virgo, Libra, Escorpio, Sagitario, Capricornio, Acuario, Piscis. | El signo que ascendía por el horizonte oriental al momento de nacer. Representa la interfaz de la personalidad y cómo se percibe el entorno. |
| `medio_cielo` (MC) | Cualitativo | Aries a Piscis. | El punto más alto de la eclíptica visible. Representa la vocación, estatus social y metas de vida. |
| `aspecto` | Compuesto (Planeta A + Planeta B + Tipo) | Tipos: Conjunción (0°), Oposición (180°), Trígono (120°), Cuadratura (90°), Sextil (60°). | La relación geométrica angular entre dos planetas que indica cómo cooperan o entran en tensión sus arquetipos. |
| `elemento_balance` | Cuantitativo (Conteo/Proporción) | Fuego, Tierra, Aire, Agua. | La distribución cuantitativa de planetas personales en cada uno de los cuatro elementos de la naturaleza. |

## 4. Relaciones Internas (Relaciones)
*   **Planeta en Signo**: El Signo tiñe la expresión (el *cómo*) del Planeta (el *qué*).
*   **Planeta en Casa**: La Casa indica el escenario de vida (el *dónde*) donde se manifiesta la energía del Planeta.
*   **Aspectos entre Planetas**: Conectan dinámicamente dos funciones psicológicas (ej. Mercurio cuadratura Saturno = comunicación cautelosa y estructurada, que requiere esfuerzo).
*   **Regencia de Casas**: Cada casa es gobernada por el planeta regente del signo que se encuentra en su cúspide. La posición de este planeta regente en otra casa conecta ambas áreas de vida lógicamente.

## 5. Puntos de Intersección Externa (Interconexiones)
*   **Diseño Humano**: Las posiciones calculadas del Sol, la Tierra, los Nodos y los Planetas en la carta natal determinan las activaciones de las Puertas en el BodyGraph.
*   **Chakras**: Los planetas tradicionales se asocian a centros de energía corporales (ej. el Sol rige el Chakra Plexo Solar, la Luna rige el Chakra Sacral).
*   **Tarot**: Los 12 signos del zodiaco y los planetas rigen directamente cartas específicas de los Arcanos Mayores (ej. Aries = El Emperador; Sol = El Sol).

## 6. Bibliografía y Referencias

### Fuentes Académicas y Literatura de Referencia
1.  **Hand, Robert** (1976). *Planets in Transit: Life Cycles for Living*. Para el cálculo y la lógica de tránsitos planetarios.
    *   [Ver en Amazon](https://www.amazon.com/dp/0914918249) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Robert+Hand+Planets+in+Transit)
2.  **Ptolemy, Claudius** (c. siglo II d.C.). *Tetrabiblos*. El texto fundacional clásico que define los signos, planetas y casas.
    *   [Ver en Amazon](https://www.amazon.com/dp/0674994795) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Ptolemy+Tetrabiblos)
3.  **Liz Greene** (1976). *Relating: An Astrological Guide to Living with Others on a Small Planet*. Integración de la astrología clásica con la psicología analítica de Carl Jung.
    *   [Ver en Amazon](https://www.amazon.com/dp/0877284180) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Liz+Greene+Relating+Astrological)

### Herramientas de Validación y Fuentes de Veracidad
*   **Motores de Cálculo y Librerías**:
    *   [pyswisseph](https://pypi.org/project/pyswisseph/): Enlace de Python para la biblioteca *Swiss Ephemeris* (de Astrodienst), el estándar de precisión profesional astronómica y astrológica basado en las efemérides de la NASA (DE430/DE431).
    *   [flatlib](https://github.com/flatlib/flatlib): Librería de código abierto para cálculos y análisis de astrología tradicional/clásica.
*   **Plataformas de Referencia y Verificación**:
    *   [Astrodienst (Astro.com)](https://www.astro.com): La plataforma de mayor reputación para cálculo gratuito de cartas natales y tránsitos, útil para corroborar posiciones exactas y sistemas de casas (Placidus, Koch, Regiomontanus).

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Calculado` (Deterministico. Efemérides astronómicas de la NASA DE430/DE431 y trigonometría esférica de casas Placidus/Koch/Whole Sign) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio sin dependencias externas) |
| **Motores y Modelos Open Source** | `pyswisseph` (binding de Python para Swiss Ephemeris C-library), `flatlib`, `astropy`, `kstars`, y LLM Open Source (Llama-3 / Qwen-2.5 / DeepSeek-R1) para la generación de reportes interpretativos |
