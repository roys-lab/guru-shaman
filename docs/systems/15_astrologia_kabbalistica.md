# Astrología Kabbalística (Mazalot)

## 1. Descripción General e Historia
La Astrología Kabbalística, o **Chajmat HaMazalot** ("ciencia de las constelaciones"), es un sistema de astrología mística que se origina en las enseñanzas de la Cábala judía, basándose primordialmente en el *Sefer Yetzirah* (Libro de la Creación) y las enseñanzas posteriores del místico del siglo XVI Isaac Luria (el Ari). A diferencia de la astrología predictiva tradicional, la astrología kabbalística ve los planetas y constelaciones como conductos o filtros de la Luz Divina. Su propósito es ayudar al individuo a identificar su **Tikún** (corrección del alma) a través del entendimiento del mes hebreo de nacimiento y el poder espiritual de las letras del alfabeto hebreo que crearon dicho mes y su planeta regente.

## 2. Parámetros de Entrada (Inputs)
1.  `fecha_nacimiento` (Fecha: Día, Mes, Año).
    *   *Nota*: Es crucial convertir la fecha del calendario gregoriano al **calendario hebreo** (lunisolar) para determinar el día y mes hebreo exactos (ej. 1 de Nisán, 15 de Tishrei).
2.  `hora_nacimiento` (Hora y minutos exactos, ajustados al huso horario UTC/GMT).
3.  `coordenadas_nacimiento` (Latitud y Longitud, necesarias para calcular el Ascendente kabbalístico).

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `mes_hebreo` | Cualitativo | 12 meses: Nisán (Aries), Iyar (Tauro), Siván (Géminis), Tamuz (Cáncer), Av (Leo), Elul (Virgo), Tishrei (Libra), Jeshván (Escorpio), Kislev (Sagitario), Tevet (Capricornio), Shevat (Acuario), Adar (Piscis). *Nota: En años bisiestos existe Adar I y Adar II.* | El mes del calendario hebreo de nacimiento que determina la constelación o Mazal del alma. |
| `letras_creadoras` | Compuesto (Letra Planeta + Letra Signo) | Combinación de dos letras del alfabeto hebreo (ej. para Nisán/Aries: He para el signo, Dalet para el planeta regente Marte). | Las dos letras hebreas que, según el *Sefer Yetzirah*, actúan como el código de ADN espiritual que gobierna el mes de nacimiento. |
| `tikun` (Corrección) | Cualitativo / Texto | Definido principalmente por la posición de los Nodos Lunares (Nodo Norte y Nodo Sur) en la carta natal. | El karma específico o la "corrección" que el alma ha venido a realizar en esta reencarnación. |
| `mazal` (Signo Kabbalístico) | Cualitativo | Los 12 signos expresados en su nomenclatura hebrea (ej. Taleh = Aries, Shor = Tauro, Teomim = Géminis). | El canal o constelación a través del cual fluye el flujo de sustento espiritual. |

## 4. Relaciones Internas (Relaciones)
*   **Las Letras y el Calendario**: Cada uno de los 12 meses hebreos fue creado por una letra hebrea específica del grupo de las "12 Letras Elementales", y su planeta regente por una de las "7 Letras Dobles". Conocer el par de letras permite realizar meditaciones kabbalísticas dirigidas a trascender el determinismo astrológico.
*   **Nodo Norte vs. Nodo Sur**: El Nodo Sur representa los patrones del pasado y la zona de confort del alma (las inclinaciones egoístas no corregidas), mientras que el Nodo Norte representa el destino del Tikún (la dirección que causa incomodidad pero libera el potencial espiritual).

## 5. Puntos de Intersección Externa (Interconexiones)
*   **Astrología Occidental**: Comparte la estructura de 12 signos, casas y planetas regentes, pero interpreta la carta bajo la cosmología mística del Tikún y utiliza la conversión del calendario gregoriano a hebreo.
*   **Cábala (Árbol de la Vida)**: Los planetas y los signos kabbalísticos se sitúan a lo largo del Árbol de la Vida, con los planetas rigiendo Sefirot y los signos correspondientes a los senderos.
*   **Tarot**: Las letras hebreas que crearon los signos y planetas en la astrología kabbalística son idénticas a las letras asignadas a los Arcanos Mayores del Tarot (ej. la letra *He* de Aries es el sendero asignado al Arcano de El Emperador).

## 6. Bibliografía y Referencias

### Fuentes Académicas y Literatura de Referencia
1.  **Berg, Philip S. (Rav Berg)** (2000). *Kabbalistic Astrology: And the Secrets of Destiny*. La obra de referencia del Centro de Kabbalah que detalla el concepto de Tikún, los signos hebreos y el poder de las letras del alfabeto.
    *   [Ver en Amazon](https://www.amazon.com/dp/1571890565) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Rav+Berg+Kabbalistic+Astrology)
2.  **Dobin, Joel C.** (1977). *Kabbalistic Astrology: Your Map of the Cosmos and Your Soul*. Un manual muy detallado escrito por un rabino reformista que explora la historia y la matemática del calendario hebreo y las Mazalot.
    *   [Ver en Amazon](https://www.amazon.com/dp/0879804246) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Joel+Dobin+Kabbalistic+Astrology)
3.  **Luria, Isaac (El Ari)** (siglo XVI). *Sha'ar HaGilgulim* (*Gate of Reincarnations*). Texto fundamental de la cábala luriánica que detalla la teoría de la reencarnación y la corrección del alma (Tikún).
    *   [Ver en Amazon](https://www.amazon.com/dp/1932445838) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Isaac+Luria+Shaar+HaGilgulim)

### Herramientas de Validación y Fuentes de Veracidad
*   **Motores de Cálculo y Librerías**:
    *   *Algoritmo de Conversión Lunisolar*: Conversión algorítmica matemática compleja basada en el ciclo metónico de 19 años para calcular de forma inequívoca el mes hebreo de nacimiento de un individuo y el signo lunar correspondiente.
    *   [Hebcal API](https://www.hebcal.com/home/developer-apis): API de acceso abierto y base de datos para la generación exacta del calendario hebreo.
*   **Plataformas de Referencia y Verificación**:
    *   [The Kabbalah Centre - Kabbalistic Astrology](https://www.kabbalah.com): Sección de la plataforma oficial dedicada al cálculo del Tikún individual y la correspondencia astrológica de los planetas y las letras del Alef-Bet.

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Calculado` (Astronomía y Calendarios. Posiciones planetarias cruzadas con el calendario hebreo luni-solar y las 22 letras alfabéticas) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio sin dependencias externas) |
| **Motores y Modelos Open Source** | `pyswisseph` + `hebrew-calendar` (conversión de fechas a meses hebreos) + matriz determinista de regencias de letras hebreas |
