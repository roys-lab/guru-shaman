# Runas Nórdicas (Futhark Antiguo)

## 1. Descripción General e Historia
Las Runas Nórdicas son los caracteres del alfabeto **Futhark Antiguo**, utilizado por los pueblos germánicos y escandinavos desde el siglo II d.C. con fines de escritura, magia y consulta oracular. Su nombre proviene de la raíz germánica *run-*, que significa "secreto" o "misterio". Según la mitología nórdica, el dios Odín obtuvo el secreto de las runas sacrificándose colgado del árbol Yggdrasil durante nueve noches. El Futhark Antiguo consta de **24 runas** organizadas en tres grupos de ocho, denominados **Aetts** (familias), cada uno bajo la regencia de deidades nórdicas específicas (Freyja, Heimdall y Tyr).

## 2. Parámetros de Entrada (Inputs)
Como sistema oracular y simbólico, sus inputs son:
1.  `pregunta_consulta` (Texto: El tema o situación sobre el que se indaga).
2.  `extraccion_runas` (Lista de runas extraídas y su orientación: Derecha o Invertida -Merkstave-).
3.  `tirada_runas` (El esquema elegido, ej. Tirada de las Tres Nornas: Pasado/Presente/Futuro, o la Cruz Rúnica).

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `runa_seleccionada` | Cualitativo | Fehu, Uruz, Thurisaz, Ansuz, Raidho, Kenaz, Gebo, Wunjo, Hagalaz, Nauthiz, Isa, Jera, Eihwaz, Perthro, Algiz, Sowilo, Tiwaz, Berkano, Ehwaz, Mannaz, Laguz, Ingwaz, Dagaz, Othala. *Nota: A veces se incluye una runa blanca (Odin).* | La runa extraída que porta el consejo o la influencia energética predominante. |
| `aett_regencia` | Cualitativo | Primer Aett (Frey/Freyja - Creación y Materia), Segundo Aett (Heimdall - Crisis y Leyes Naturales), Tercer Aett (Tyr - Evolución Humana y Justicia). | La familia de runas que rige el plano de la consulta. |
| `orientacion_runa` | Cualitativo | Derecha, Invertida (Merkstave). *Nota: 9 runas son simétricas y no se pueden invertir.* | Altera el significado rúnico (Derecha = manifestación directa y clara; Invertida = bloqueo, retraso, advertencia u obstáculo). |

## 4. Relaciones Internas (Relaciones)
*   **La Secuencia Evolutiva del Futhark**: Las 24 runas cuentan una historia de iniciación, comenzando por la riqueza material y fuerza bruta (Fehu, Uruz), pasando por las pruebas y crisis del destino (Hagalaz, Nauthiz), y culminando en el despertar espiritual y herencia ancestral (Dagaz, Othala).
*   **Simetría Rúnica**: Las runas simétricas (Gebo, Hagalaz, Isa, Jera, Eihwaz, Sowilo, Ingwaz, Dagaz) representan fuerzas cósmicas inalterables por el ego humano, por lo que carecen de significado invertido.

## 5. Puntos de Intersección Externa (Interconexiones)
*   **Alquimia y Elementos**: Las runas se asocian a las fuerzas elementales nórdicas primordiales: Hielo (Isa) y Fuego (Kenaz), cuya interacción da origen a la vida material.
*   **Tarot**: Existen correspondencias estructurales entre las 24 runas y los Arcanos Mayores (ej. Fehu = El Emperador o El Diablo; Ansuz = El Mago; Isa = El Colgado o El Ermitaño).
*   **Astrología Occidental**: Cada runa se asocia con planetas y signos del zodíaco en la rúnica esotérica contemporánea (ej. Sowilo = Sol; Tiwaz = Marte; Laguz = Luna/Agua).

## 6. Bibliografía y Referencias

### Fuentes Académicas y Literatura de Referencia
1.  **Thorsson, Edred** (1984). *Futhark: A Handbook of Rune Magic*. El libro de referencia definitivo sobre el significado esotérico y las técnicas mágicas y oraculares del Futhark Antiguo.
    *   [Ver en Amazon](https://www.amazon.com/dp/0877285489) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Edred+Thorsson+Futhark)
2.  **Blum, Ralph** (1982). *The Book of Runes*. Una aproximación moderna y psicológica al oráculo de las runas, popularizando la "runa blanca" de Odín.
    *   [Ver en Amazon](https://www.amazon.com/dp/0312060022) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Ralph+Blum+Book+of+Runes)
3.  **Thorsson, Edred** (1987). *Runelore: A Handbook of Esoteric Runology*. Estudio profundo sobre la cosmología germánica, las correspondencias de las runas y el simbolismo histórico rúnico.
    *   [Ver en Amazon](https://www.amazon.com/dp/0877286671) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Edred+Thorsson+Runelore)

### Herramientas de Validación y Fuentes de Veracidad
*   **Motores de Cálculo y Librerías**:
    *   *Codificación Unicode de Caracteres Rúnicos*: Validación lingüística y tipográfica del Elder Futhark mediante el bloque Unicode *Runic* (rango U+16A0 a U+16F8), que asocia caracteres e imágenes exactos para las 24 runas clásicas.
*   **Plataformas de Referencia y Verificación**:
    *   [RuneS: Runology Database](https://www.runesdb.de): Proyecto de investigación filológica y arqueológica del Elder Futhark llevado a cabo por la Academia de Ciencias de Gotinga, esencial para validar inscripciones rúnicas y significados etimológicos originales de poemas rúnicos anglosajones y nórdicos.

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Interpretativo` (Simbólico / Oracular. Extracción aleatoria de los 24 caracteres del Futhark Antiguo + lectura hermenéutica contextual) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source) |
| **Motores y Modelos Open Source** | Extractor de entropía CSPRNG + RAG con poemas rúnicos tradicionales + LLM Open Source (Llama-3, DeepSeek-R1, Qwen-2.5) |
