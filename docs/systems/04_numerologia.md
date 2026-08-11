# Numerología (Pitagórica y Caldea)

## 1. Descripción General e Historia
La Numerología es la disciplina esotérica que estudia la influencia vibracional de los números sobre las personas y acontecimientos. Aunque existen sistemas caldeo (babilonio) y de Cábala (Gematría), el sistema más difundido en Occidente es la **Numerología Pitagórica**, basada en los postulados atribuidos a Pitágoras de Samos (siglo VI a.C.), quien consideraba que "todo es número" y que el universo está construido sobre patrones matemáticos armoniosos. El sistema asigna valores del 1 al 9 a las letras del alfabeto para decodificar el nombre de nacimiento, y reduce la fecha de nacimiento mediante suma recursiva a dígitos simples o Números Maestros (11, 22, 33).

## 2. Parámetros de Entrada (Inputs)
1.  `fecha_nacimiento` (Fecha: Día, Mes, Año).
2.  `nombre_completo` (Texto: Nombre y apellidos completos tal como figuran en el acta de nacimiento original, respetando la grafía exacta).

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `sendero_vida` (Life Path) | Cualitativo | 1, 2, 3, 4, 5, 6, 7, 8, 9, y Números Maestros 11, 22, 33. | El camino de vida principal del individuo. Se calcula reduciendo el día, el mes y el año de nacimiento por separado, y luego sumando esos tres dígitos. |
| `expresion` (Destiny / Expression) | Cualitativo | 1 a 9, 11, 22, 33. | Los talentos naturales y capacidades heredadas del individuo. Se calcula sumando el valor numérico de todas las letras del nombre completo. |
| `deseo_alma` (Soul Urge) | Cualitativo | 1 a 9, 11, 22, 33. | Las motivaciones internas más íntimas y lo que el alma anhela ser. Se calcula sumando únicamente los valores numéricos de las **vocales** del nombre completo. |
| `personalidad` (Personality) | Cualitativo | 1 a 9, 11, 22, 33. | La imagen externa, la primera impresión que se da al entorno. Se calcula sumando únicamente los valores numéricos de las **consonantes** del nombre completo. |
| `numero_nacimiento` | Cualitativo | 1 a 31 (sin reducción) y su reducción (1 a 9, 11, 22). | Representa habilidades específicas y lecciones a desarrollar. Se calcula a partir del día del mes de nacimiento. |
| `ano_personal` | Cualitativo | 1 a 9. | El ciclo anual de vibración que experimenta el individuo en el año corriente. Se calcula sumando: `dia_nacimiento` + `mes_nacimiento` + `ano_corriente`. |

## 4. Relaciones Internas (Relaciones)
*   **Tabla de Conversión Pitagórica**: Mapea las letras `A..Z` a números del `1..9` de manera correlativa (A=1, B=2, C=3, D=4, E=5, F=6, G=7, H=8, I=9, J=1, etc.).
*   **Suma de Reducción**: Los números se reducen sumando sus dígitos correlativamente hasta llegar a un dígito del 1 al 9, excepto si el resultado parcial es 11, 22 o 33 (que se mantienen como Maestros por su alto valor vibracional).
*   **Tensión Nombre vs. Fecha**: Se analizan los desajustes o armonías entre el `sendero_vida` (propósito/destino) y la `expresion` (herramientas/capacidad). Si difieren significativamente, representan una tensión interna evolutiva.

## 5. Puntos de Intersección Externa (Interconexiones)
*   **Tarot**: Cada número del 1 al 9, así como el 11 y el 22, corresponde directamente con los Arcanos Mayores del Tarot (ej. 1 = El Mago, 2 = La Sacerdotisa, etc.).
*   **Astrología**: Los planetas regentes se asocian a números específicos (ej. 1 = Sol, 2 = Luna, 3 = Júpiter, 4 = Urano/Nodo Norte, 5 = Mercurio, 6 = Venus, 7 = Neptuno/Nodo Sur, 8 = Saturno, 9 = Marte).
*   **Cábala**: La Gematría utiliza valores numéricos hebreos para decodificar significados divinos de nombres o textos, relacionándolos con las sefirot del Árbol de la Vida.

## 6. Bibliografía y Referencias

### Fuentes Académicas y Literatura de Referencia
1.  **Phillips, David A.** (1992). *The Complete Book of Numerology*. Manual clásico que define con gran precisión matemática los cálculos del sendero de vida e interpreta los números maestros.
    *   [Ver en Amazon](https://www.amazon.com/dp/156170960X) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=David+Phillips+The+Complete+Book+of+Numerology)
2.  **Jordan, Juno** (1977). *Numerology: The Romance in Your Name*. Obra cumbre de la fundadora del Instituto de Investigación Numerológica de California, que formaliza el estudio sistemático del nombre completo.
    *   [Ver en Amazon](https://www.amazon.com/dp/0877284148) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Juno+Jordan+Numerology+Romance+Name)
3.  **Decoz, Hans & Monte, Tom** (1994). *Numerology: Key to Your Inner Self*. Explicación accesible de la estructura pitagórica de cartas de vida y ciclos vitales.
    *   [Ver en Amazon](https://www.amazon.com/dp/1585420351) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Hans+Decoz+Numerology+Key+Inner+Self)

### Herramientas de Validación y Fuentes de Veracidad
*   **Motores de Cálculo y Librerías**:
    *   *Algoritmo de Raíz Digital*: Reducción iterativa de dígitos (módulo 9 modificado) para valores individuales y combinados.
    *   *Conversión Alfabética Pitagórica*: Mapeo estandarizado de caracteres ASCII a los valores del 1 al 9 (A=1, B=2, C=3, D=4, E=5, F=6, G=7, H=8, I=9 y repitiendo).
*   **Plataformas de Referencia y Verificación**:
    *   [World Numerology (Decoz.com)](https://www.decoz.com): Plataforma oficial del experto Hans Decoz, que sirve como el estándar empírico de validación para informes numerológicos avanzados de personalidad, ciclos, desafíos y pináculos.

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Calculado` (Matemático puro. Aritmética determinista de reducción teosófica/módulo 9 y gematría de letras pitagórica/caldea) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio sin dependencias externas) |
| **Motores y Modelos Open Source** | Paquetes de Gematría Open Source (`gematria` npm, `pygematria`), funciones puras de reducción digital y detección de números maestros (11, 22, 33) |
