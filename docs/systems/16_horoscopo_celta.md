# Horóscopo Celta (Astrología de los Árboles)

## 1. Descripción General e Historia
El Horóscopo Celta o Astrología de los Árboles es un sistema moderno de interpretación caracterológica basado en la espiritualidad de los antiguos druidas celtas. Aunque las prácticas druídicas eran puramente orales, el calendario lunar de árboles fue reconstruido y popularizado en el siglo XX por el poeta e investigador Robert Graves en su obra *La Diosa Blanca* (1948). El sistema divide el año en **13 meses lunares**, asignando a cada mes un árbol sagrado y una letra del alfabeto oghámico (**Ogham**). Los árboles representan cualidades espirituales y patrones de personalidad alineados con el ciclo vegetativo y la magia de los bosques.

## 2. Parámetros de Entrada (Inputs)
1.  `fecha_nacimiento` (Fecha: Día, Mes, Año).
    *   *Nota*: El calendario celta de árboles consta de 13 meses fijos de 28 días cada uno (364 días en total) más un día adicional fuera de mes (el 23 de diciembre, considerado el "Día del Árbol Sin Nombre").

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `arbol_celta` | Cualitativo | 13 Árboles: Abedul, Rowan/Serbal, Fresno, Aliso, Sauce, Espino, Roble, Acebo, Avellano, Parra, Hiedra, Caña, Sahuco. *Nota: El 23 de diciembre rige el Tejo o "Árbol sin Nombre".* | El árbol protector asignado al mes lunar de nacimiento. Define el temperamento básico y la lección espiritual. |
| `letra_ogham` | Cualitativo | Letras del alfabeto Ogham: Beith, Luis, Nion, Fearn, Saille, Uath, Duir, Tinne, Coll, Muin, Gort, Ngetal, Ruis. | El glifo protector de la escritura sagrada celta asociado al árbol de nacimiento. |
| `ciclo_luna` | Cualitativo | Luna Nueva (Nacidos en la primera mitad del mes: carácter pionero y asertivo), Luna Llena (Nacidos en la segunda mitad del mes: carácter reflexivo y sociable). | Modifica la manifestación del arquetipo del árbol según la fase de la luna del mes natal. |

## 4. Relaciones Internas (Relaciones)
*   **El Año Druídico y la Vegetación**: La secuencia de los árboles sigue la floración, maduración y caída de hojas del bosque templado celta (ej. el Abedul marca el inicio del año -solsticio de invierno- representando los nuevos comienzos; el Roble marca el solsticio de verano, representando fuerza y soberanía).
*   **Los Cuatro Árboles Cardinales**: Cuatro árboles sagrados se asocian de forma fija a los momentos clave de cambio de estación astronómica: Abedul (Solsticio de Invierno), Brezo (Solsticio de Verano), Álamo (Equinoccios).

## 5. Puntos de Intersección Externa (Interconexiones)
*   **Astrología Occidental**: Los 13 meses celtas de 28 días se correlacionan con periodos fijos del zodíaco occidental (ej. Abedul = 24 de diciembre al 20 de enero, enlazando con Capricornio).
*   **Runas Nórdicas**: Existe un paralelismo entre el Ogham celta y el Futhark nórdico, con letras de ambos alfabetos representando plantas, árboles y cualidades rúnicas similares (ej. Runa *Berkano* y Letra Ogham *Beith* representan al Abedul y el nacimiento).
*   **Flores de Bach**: Varios de los árboles celtas sagrados son la materia prima de los remedios florales de Bach (ej. el Roble = *Oak*, el Sauce = *Willow*, el Espino, el Acebo = *Holly*), compartiendo el temperamento psicológico asociado en ambos sistemas.

## 6. Bibliografía y Referencias

### Fuentes Académicas y Literatura de Referencia
1.  **Graves, Robert** (1948). *The White Goddess: A Historical Grammar of Poetic Myth*. La obra cumbre literaria y mitológica que estructura el calendario poético de los meses de árboles celtas y el Ogham.
    *   [Ver en Amazon](https://www.amazon.com/dp/0374500680) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Robert+Graves+The+White+Goddess)
2.  **Forest, Danu** (2014). *Celtic Tree Magic: Ogham Lore and Druid Mysteries*. Un manual práctico de magia vegetal que detalla las correspondencias de personalidad, elementos y Oghams de cada árbol.
    *   [Ver en Amazon](https://www.amazon.com/dp/073874101X) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Danu+Forest+Celtic+Tree+Magic)
3.  **Blamires, Steve** (2005). *Celtic Tree Mysteries: Secrets of the Ogham*. Un análisis del Ogham como herramienta meditativa y de desarrollo personal.
    *   [Ver en Amazon](https://www.amazon.com/dp/1567180708) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Steve+Blamires+Celtic+Tree+Mysteries)

### Herramientas de Validación y Fuentes de Veracidad
*   **Motores de Cálculo y Librerías**:
    *   *Algoritmo de Segmentación de Fechas del Calendario de Árboles*: Mapeo de rangos de fechas fijos de 28 días de los 13 meses druídicos lunares correspondientes al ciclo anual de Robert Graves.
*   **Plataformas de Referencia y Verificación**:
    *   [The Celtic Ogham Association](https://www.ogham.org): Plataforma sin fines de lucro dedicada a la preservación e investigación histórica del alfabeto Ogham, las piedras Ogham y el folclore de los árboles celtas sagrados.

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Calculado` (Deterministico. Asignación de uno de los 21 árboles sagrados celtas según el rango de día/mes de nacimiento solar) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio sin dependencias externas) |
| **Motores y Modelos Open Source** | Algoritmo determinista de tabla de búsqueda (lookup table) por rangos de fechas en Python/Node.js |
