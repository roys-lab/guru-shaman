# Eneagrama de la Personalidad

## 1. Descripción General e Historia
El Eneagrama de la Personalidad es un sistema de clasificación de la personalidad que describe nueve tipos o patrones de comportamiento, motivación y percepción del mundo. Sus raíces geométricas se atribuyen a George Gurdjieff y su "Cuarto Camino" a principios del siglo XX, pero la estructura del Eneagrama de la Personalidad tal como la conocemos hoy fue desarrollada por el filósofo boliviano Oscar Ichazo en los años 1950 y 1960 (en la escuela de Arica), y posteriormente adaptada e integrada con la psicología occidental por el psiquiatra chileno Claudio Naranjo a partir de la década de 1970.

## 2. Parámetros de Entrada (Inputs)
A diferencia de los sistemas basados en la hora de nacimiento, el Eneagrama es un sistema autoevaluativo y de observación interna. Sus parámetros de entrada son:
1.  `cuestionario_respuestas` (Lista de puntuaciones o selecciones de tests estandarizados como el RHETI).
2.  `observacion_motivacion` (Texto: Descripción autoevaluativa de miedos y deseos nucleares).

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `eneatipo_principal` | Cualitativo | 1 (El Reformador/Perfeccionista), 2 (El Ayudador), 3 (El Triunfador), 4 (El Individualista), 5 (El Investigador), 6 (El Leal), 7 (El Entusiasta), 8 (El Desafiador), 9 (El Pacificador). | El núcleo de la estructura de la personalidad. Define la motivación y el miedo básico del ego. |
| `ala` (Wing) | Cualitativo | Los dos números adyacentes al eneatipo principal (ej. para eneatipo 3, alas: 3w2 o 3w4). | El eneatipo adyacente que matiza y complementa la personalidad básica del eneatipo principal. |
| `triada_centro` | Cualitativo | Tríada Instintiva/Visceral (8, 9, 1), Tríada Emocional/Corazón (2, 3, 4), Tríada Mental/Cabeza (5, 6, 7). | El centro de procesamiento de la realidad y energía del cuerpo (Instinto/Ira, Emoción/Vergüenza, Pensamiento/Miedo). |
| `linea_integracion` | Cualitativo | Eneatipos destino en estados de seguridad y crecimiento (ej. 3 se integra al 6, 9 al 3, etc.). | El eneatipo cuyas cualidades positivas se adoptan cuando el individuo está en equilibrio y madurez. |
| `linea_desintegracion` | Cualitativo | Eneatipos destino en estados de estrés y defensa (ej. 3 se desintegra al 9, 9 al 6, etc.). | El eneatipo cuyas conductas reactivas y de defensa se adoptan en situaciones de gran tensión psicológica. |
| `subtipo_instintivo` | Cualitativo | Conservación (sp), Social (so), Transmisor/Sexual (sx). | El instinto biológico dominante que canaliza la pasión del eneatipo principal, generando 27 subtipos en total. |

## 4. Relaciones Internas (Relaciones)
*   **Las Líneas de Movimiento**: Conectan los eneatipos en dos circuitos cerrados: el hexagrama (1-7-5-8-2-4-1) y el triángulo equilátero (3-9-6-3). Muestran los caminos de integración (desarrollo) y desintegración (estrés).
*   **Influencia del Ala**: El eneatipo principal toma colores del eneatipo vecino más activo (ej. un 5w4 es más artístico e introspectivo, mientras que un 5w6 es más técnico y lógico).
*   **Tríadas de Grupos**: Las personalidades se agrupan en tríadas de reacción al conflicto (grupos Horneyanos: Asertivos, Retraídos, Complacientes) y tríadas de manejo del dolor (grupos de Armónicos: Positivos, Competentes, Reactivos).

## 5. Puntos de Intersección Externa (Interconexiones)
*   **Diseño Humano**: Varios autores correlacionan las motivaciones de los eneatipos con las activaciones de los 9 centros de Diseño Humano y los perfiles de la cruz de encarnación.
*   **Flores de Bach**: Cada eneatipo y sus respectivas sombras y miedos básicos se corresponden de forma directa con los grupos de flores (ej. Eneatipo 6 con *Mimulus* o *Larch* por miedo e inseguridad; Eneatipo 2 con *Chicory* por posesividad y dar para recibir).
*   **Tarot**: Los arcanos menores se asocian frecuentemente a las lecciones de evolución y los estados de integración de los eneatipos.

## 6. Bibliografía y Referencias

### Fuentes Académicas y Literatura de Referencia
1.  **Riso, Don Richard & Hudson, Russ** (1999). *The Wisdom of the Enneagram: The Complete Guide to Psychological and Spiritual Growth for the Nine Personality Types*. La obra fundamental para comprender la psicología profunda de los eneatipos, las alas y el camino de integración.
    *   [Ver en Amazon](https://www.amazon.com/dp/0553378201) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Riso+Hudson+Wisdom+of+the+Enneagram)
2.  **Naranjo, Claudio** (1994). *Character and Neurosis: An Integrative View*. La aproximación clínica y académica que unifica el Eneagrama con la psicología del desarrollo y la psiquiatría moderna.
    *   [Ver en Amazon](https://www.amazon.com/dp/0895267465) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Claudio+Naranjo+Character+and+Neurosis)
3.  **Ichazo, Oscar** (1982). *Between Metaphysics and Protoanalysis*. Escritos del creador del sistema que detallan los orígenes místicos y matemáticos del eneagrama de fijaciones y pasiones.
    *   [Ver en Amazon](https://www.amazon.com/dp/091655404X) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Oscar+Ichazo+Between+Metaphysics)

### Herramientas de Validación y Fuentes de Veracidad
*   **Motores de Cálculo y Librerías**:
    *   *Algoritmo del Test RHETI*: Cuestionario validado psicométricamente de 144 ítems de elección forzada, con matrices de puntuación para determinar la dominancia del eneatipo.
*   **Plataformas de Referencia y Verificación**:
    *   [The Enneagram Institute](https://www.enneagraminstitute.com): Fuente oficial fundada por Riso y Hudson para validación de eneatipos mediante tests estandarizados (RHETI e IVQ) e investigación empírica.
    *   [International Enneagram Association (IEA)](https://www.internationalenneagram.org): Organización global que regula las buenas prácticas de formación y definición del sistema del Eneagrama.

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Interpretativo` (Psicométrico / Cualitativo. Evaluación de motivaciones subyacentes, miedos básicos y fijaciones del ego) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source) |
| **Motores y Modelos Open Source** | Motor de scoring psicométrico RISO-HUDSON en Python (`scikit-learn`) + LLMs Open Source (Llama-3, Qwen-2.5) para procesamiento y clasificación de texto libre |
