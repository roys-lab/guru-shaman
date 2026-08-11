# I Ching (Libro de las Mutaciones)

## 1. Descripción General e Historia
El I Ching es uno de los textos y sistemas cosmológicos más antiguos de la humanidad, originado en China durante la dinastía Zhou (aproximadamente 1000 a.C.). Se basa en la noción taoísta del cambio continuo de la realidad impulsado por el equilibrio del Yin (línea discontinua `--`) y el Yang (línea continua `—`). A través del agrupamiento de tres líneas se forman 8 trigramas básicos (**Bagua**), que al combinarse de a pares producen los **64 hexagramas**. El sistema actúa como un oráculo de sabiduría filosófica y psicológica que describe los patrones universales de cambio y cómo actuar de forma correcta ante ellos.

## 2. Parámetros de Entrada (Inputs)
1.  `pregunta_consulta` (Texto: La situación sobre la que se busca consejo).
2.  `tirada_valores` (Lista de 6 números del 6 al 9, correspondientes a las tiradas de monedas o tallos de milenrama generados desde abajo hacia arriba -línea 1 a línea 6-).
    *   Valores de las líneas: 6 = Viejo Yin (mutando a Yang), 7 = Joven Yang (estable), 8 = Joven Yin (estable), 9 = Viejo Yang (mutando a Yin).

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `hexagrama_primario` | Cualitativo | Hexagramas 1 a 64 (ej. Hexagrama 1 - Ch'ien / Lo Creativo, Hexagrama 64 - Wei Chi / Antes del Cumplimiento). | Representa la situación presente y la energía básica que rige el momento de la consulta. |
| `linea_mutante` | Lista de Posiciones (1 a 6) | Posiciones donde cayó un 6 o un 9. | Puntos específicos de máxima tensión donde la energía está a punto de invertirse, aportando consejos específicos del texto. |
| `hexagrama_secundario` (Relacionado) | Cualitativo | Hexagramas 1 a 64 (calculado al cambiar las líneas mutantes del primario). | Representa la tendencia futura o la resolución del conflicto una vez ocurra el cambio de energía. |
| `trigrama_superior` (Cielo) | Cualitativo | 8 trigramas: Ch'ien (Cielo), K'un (Tierra), Kan (Agua), Li (Fuego), Chen (Trueno), Sun (Viento/Madera), K'an (Montaña), Tui (Lago). | La fuerza externa o mental del hexagrama. |
| `trigrama_inferior` (Tierra) | Cualitativo | 8 trigramas básicos. | La fuerza interna o física del hexagrama. |

## 4. Relaciones Internas (Relaciones)
*   **Construcción Ascendente**: Las líneas se calculan e interpretan de abajo hacia arriba (la base representa el inicio de la situación, la parte superior su desenlace).
*   **Trigramas Nucleares**: Además de los trigramas superior e inferior, las líneas 2, 3 y 4 forman un trigrama nuclear inferior, y las líneas 3, 4 y 5 forman uno superior. Estos describen la tensión interna oculta del hexagrama primario.
*   **Proceso de Mutación**: El cambio dinámico de una polaridad vieja a su opuesta (Viejo Yang -> Joven Yin; Viejo Yin -> Joven Yang) enlaza lógicamente el Hexagrama Primario con el Secundario.

## 5. Puntos de Intersección Externa (Interconexiones)
*   **Diseño Humano**: Cada uno de los 64 hexagramas corresponde con una de las 64 Puertas del BodyGraph. Las 6 líneas del hexagrama son la base matemática de los 6 subtipos de perfil (ej. Línea 1 = Investigador, Línea 2 = Ermitaño, etc.).
*   **Genética Moderna**: La estructura matemática de los 64 hexagramas (4 bases de nucleótidos organizadas en codones de a 3, dando 64 combinaciones) es idéntica a la del Código Genético del ADN (descubrimiento popularizado por Martin Schönberger).
*   **Astrología China**: Los trigramas del Bagua se corresponden con los elementos y direcciones de la astrología y el Feng Shui clásico.

## 6. Bibliografía y Referencias

### Fuentes Académicas y Literatura de Referencia
1.  **Wilhelm, Richard** (1950). *The I Ching or Book of Changes* (traducción al inglés por Cary F. Baynes). La traducción y comentario más influyente en Occidente, prologado por el psicólogo Carl Gustav Jung.
    *   [Ver en Amazon](https://www.amazon.com/dp/069109750X) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Richard+Wilhelm+I+Ching+Book+Changes)
2.  **Huang, Alfred** (1998). *The Complete I Ching: The Definitive Translation from the Taoist Master Alfred Huang*. Una traducción desde la perspectiva tradicional china que rescata el sentido original taoísta del texto.
    *   [Ver en Amazon](https://www.amazon.com/dp/1594773863) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Alfred+Huang+Complete+I+Ching)
3.  **Schönberger, Martin** (1973). *The I Ching & the Genetic Code: The Book of Changes and Life's Decision Key*. Estudio pionero que mapea el paralelismo binario entre los hexagramas y los codones de ADN.
    *   [Ver en Amazon](https://www.amazon.com/dp/0913028673) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Martin+Schonberger+I+Ching+Genetic+Code)

### Herramientas de Validación y Fuentes de Veracidad
*   **Motores de Cálculo y Librerías**:
    *   *Generador Estocástico de Líneas*: Implementación en código de las probabilidades de cambio de línea según el método clásico de Tallos de Milenrama (Yarrow Stalks - probabilidades: línea joven Yang 7/16, joven Yin 5/16, vieja Yang mutable 3/16, vieja Yin mutable 1/16) o el método rápido de las 3 Monedas (probabilidades: joven Yang 6/16, joven Yin 6/16, vieja Yang 2/16, vieja Yin 2/16).
*   **Plataformas de Referencia y Verificación**:
    *   [Chinese Text Project - I Ching](https://ctext.org/book-of-changes): El recurso histórico digital de mayor prestigio y rigor académico, que contiene los textos tradicionales del Libro de los Cambios en chino antiguo con su traducción sistemática.

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Interpretativo` (Oracular / Simbólico. Sorteo probabilístico de tallos de milenrama para formar hexagramas + hermenéutica del texto canónico) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source) |
| **Motores y Modelos Open Source** | Generador de probabilidades Yijing (`iching` python package, `yijing-js`) + RAG sobre los 64 Hexagramas con LLM Open Source (Llama-3, DeepSeek-R1) |
