# Diseño Humano

## 1. Descripción General e Historia
El Diseño Humano es un sistema de síntesis moderno canalizado y formulado por Alan Robert Krakower (bajo el pseudónimo de Ra Uru Hu) en 1987. Combina elementos de cuatro sistemas tradicionales (Astrología Occidental, el I Ching chino, la Cábala y el sistema hindú de Chakras) junto con la física cuántica moderna (en especial el papel de los neutrinos). Mapea un "BodyGraph" de 9 centros energéticos a partir de dos conjuntos de posiciones planetarias: la personalidad física (nacimiento consciente) y el diseño inconsciente (calculado 88 grados de arco solar antes del nacimiento, aproximadamente 3 meses antes).

## 2. Parámetros de Entrada (Inputs)
1.  `fecha_nacimiento` (Fecha: Día, Mes, Año).
2.  `hora_nacimiento` (Hora y minutos exactos en huso horario UTC/GMT).
3.  `coordenadas_nacimiento` (Latitud y Longitud del lugar de nacimiento).

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `tipo_personalidad` | Cualitativo | Manifestador, Generador, Generador Manifestante, Proyector, Reflector. | La estructura general de la aura y el rol arquetípico en el flujo de energía vital. |
| `autoridad` | Cualitativo | Emocional (Plexo Solar), Sacral, Esplénica, Corazón/Ego, Proyectada del Ser (G), Mental/Ambiental, Claridad Lunar (Reflectores). | El centro del cuerpo que debe tomar las decisiones correctas en lugar de la mente lógica. |
| `estrategia` | Cualitativo | Informar (Manifestador), Responder (Generadores), Esperar la invitación (Proyector), Esperar un ciclo lunar (Reflector). | El método mecánico de interacción con el entorno para evitar la resistencia en la vida. |
| `perfil` | Cualitativo / Compuesto | Combinaciones de dos líneas (1/3, 1/4, 2/4, 2/5, 3/5, 3/6, 4/1, 4/6, 5/1, 5/2, 6/2, 6/3). | El "traje" o rol social y arquetípico que el alma representa en esta vida. |
| `centro_definicion` | Booleano (por centro) | Definido (coloreado), Abierto / Indefinido (blanco). Para los 9 centros: Cabeza, Ajna, Garganta, G, Corazón, Sacral, Esplénico, Plexo Solar, Raíz. | Indica si el centro procesa energía de manera consistente y autónoma (Definido) o si absorbe y amplifica del entorno (Abierto). |
| `puerta_activacion` | Lista de Booleanos (64 puertas) | Activa (Personalidad o Diseño), Inactiva. Rango de puertas: 1 a 64. | Puntos específicos de flujo de energía dentro de los centros, correspondientes a los 64 hexagramas del I Ching. |
| `canal_definido` | Lista de Booleanos (36 canales) | Definido (ambas puertas extremas activas), Inactivo. | El flujo continuo de energía entre dos centros que los conecta y define mutuamente. |
| `no_ser` | Cualitativo (por centro indefinido) | Dudas (Cabeza), Ansiedad Mental (Ajna), Llamar la atención (Garganta), Probar valor (Corazón), Complacer (Sacral), Aferrarse a lo insano (Esplénico), Evitar confrontación (Plexo), Apresurarse (Raíz). | La distorsión psicológica y condicionamiento que ocurre cuando nos identificamos con las áreas abiertas de nuestro diseño. |
| `cruz_encarnacion` | Cualitativo | Cruz de Ángulo Derecho, Cruz Yuxtapuesta, Cruz de Ángulo Izquierdo (+ combinación de 4 puertas solares/terrestres). | El propósito de vida o misión evolutiva global del individuo. |

## 4. Relaciones Internas (Relaciones)
*   **Posiciones Planetarias -> Puertas**: La posición del Sol, la Tierra, los Nodos y los planetas (tanto en la fecha de nacimiento como 88° antes) activan puertas del 1 al 64.
*   **Puertas -> Canales**: Si dos puertas opuestas en un canal están activas, el canal se define.
*   **Canales -> Centros**: Si un canal está definido, los dos centros que conecta se definen automáticamente (pasan a estar coloreados).
*   **Centros Definidos -> Tipo**: La presencia de ciertos centros definidos y conexiones específicas determina el Tipo (ej. Sacral definido = Generador; Motor conectado a Garganta sin Sacral = Manifestador; ningún centro definido = Reflector).
*   **Centros Definidos -> Autoridad**: Se evalúa una jerarquía de centros definidos para establecer cuál rige la toma de decisiones (Plexo > Sacral > Esplénico > Ego > G).

## 5. Puntos de Intersección Externa (Interconexiones)
*   **I Ching**: Las 64 puertas del BodyGraph corresponden uno a uno con los 64 hexagramas del I Ching clásico. Las sub divisiones de las puertas (líneas 1 a 6) equivalen a las líneas del hexagrama.
*   **Astrología Occidental**: El círculo exterior del Mandala de Diseño Humano sitúa las 64 puertas sobre los 360 grados del Zodiaco tropical occidental.
*   **Cábala**: Las conexiones y canales del BodyGraph se basan en los senderos del Árbol de la Vida de la Cábala, expandiendo los nodos a 9 centros en lugar de 10 sefirot.
*   **Sistema de Chakras**: Reorganiza y expande los 7 chakras tradicionales en 9 centros (dividiendo el chakra del Corazón en Corazón y G; y el Plexo Solar en Plexo Solar y Bazo/Esplénico).

## 6. Bibliografía y Referencias

### Fuentes Académicas y Literatura de Referencia
1.  **Bunnell, Lynda & Hu, Ra Uru** (2011). *The Definitive Book of Human Design: The Science of Differentiation*. La guía de referencia más completa autorizada por el creador del sistema.
    *   [Ver en Amazon](https://www.amazon.com/dp/0615552140) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=The+Definitive+Book+of+Human+Design)
2.  **Curry, Karen** (2013). *Understanding Human Design: The New Science of Astrology: Discover Who You Really Are*. Un manual introductorio sistemático con lenguaje contemporáneo y comprensible.
    *   [Ver en Amazon](https://www.amazon.com/dp/1938289102) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Karen+Curry+Understanding+Human+Design)
3.  **Krakower, Alan Robert (Ra Uru Hu)** (1989). *The Rave I'Ching*. El mapeo de correspondencias detalladas entre las puertas de diseño humano y las líneas mutables del I Ching.
    *   [Ver en Amazon](https://www.amazon.com/dp/1852300000) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Ra+Uru+Hu+The+Rave+I+Ching)

### Herramientas de Validación y Fuentes de Veracidad
*   **Motores de Cálculo y Librerías**:
    *   *Cálculo de Arco Solar (-88°)*: Algoritmos astronómicos que calculan las posiciones natales (conscientes) y de diseño (inconscientes, 88 grados solares antes del nacimiento) mediante la interpolación del movimiento del Sol.
    *   [mmaia](https://github.com/v0x/mmaia): Motor de cálculo de diseño humano de código abierto.
*   **Plataformas de Referencia y Verificación**:
    *   [Jovian Archive](https://www.jovianarchive.com): El sitio y repositorio oficial fundado por Ra Uru Hu. Cuenta con un calculador gratuito de cartas para verificar de forma autorizada los tipos de personalidad, autoridades, centros y puertas.
    *   [Genetic Matrix](https://www.geneticmatrix.com): Software y servicio de base de datos multilingüe para generación y almacenamiento de cartas de Diseño Humano y Cosmología Rave.

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Calculado` (Algorítmico. Mapeo determinista de 64 Puertas, Canales y Centros a partir de posiciones planetarias natales e inconscientes a -88° de arco solar) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio sin dependencias externas) |
| **Motores y Modelos Open Source** | `pyswisseph` (cálculo astronómico de posiciones inconscientes), `mmaia` (Rave BodyGraph engine), scripts de definición de centros en Python/Node.js y LLMs Open Source para síntesis narrativa |
