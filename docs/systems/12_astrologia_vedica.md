# Astrología Védica (Jyotish)

## 1. Descripción General e Historia
La Astrología Védica, conocida como **Jyotish** ("ciencia de la luz"), es el sistema tradicional de astrología de la India, documentado en las escrituras védicas clásicas como el *Rigveda* y sistematizado por el sabio Maharishi Parashara en el texto fundamental *Brihat Parashara Hora Shastra* (c. siglo VII d.C.). A diferencia de la astrología occidental (que utiliza el zodiaco tropical basado en las estaciones), el Jyotish utiliza el **zodiaco sidéreo** (basado en las posiciones astronómicas reales de las constelaciones) y presta especial atención a las 27 mansiones lunares o **Nakshatras** y a los periodos predictivos planetarios llamados **Dashas**.

## 2. Parámetros de Entrada (Inputs)
Los inputs son idénticos a los de la astrología occidental, pero requieren una corrección matemática específica (`ayanamsa`):
1.  `fecha_nacimiento` (Fecha: Día, Mes, Año).
2.  `hora_nacimiento` (Hora y minutos exactos, ajustados al huso horario UTC/GMT).
3.  `coordenadas_nacimiento` (Latitud y Longitud geográficas de nacimiento).

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `ayanamsa` | Cuantitativo | Ajuste de desfase astronómico (ej. Lahiri Ayanamsa, aprox. 24 grados en el presente). | El factor de corrección necesario para convertir la posición tropical a la sidérea real debido a la precesión de los equinoccios. |
| `graha_posicion` | Compuesto | Grahas (planetas): Surya (Sol), Chandra (Luna), Mangala (Marte), Budha (Mercurio), Guru (Júpiter), Shukra (Venus), Shani (Saturno), Rahu (Nodo Norte/Cabeza de Dragón), Ketu (Nodo Sur/Cola de Dragón). Signos y grados sidéreos. | Las posiciones de los cuerpos celestes y nodos energéticos en el cielo sidéreo. |
| `nakshatra` | Cualitativo | 27 mansiones lunares (Ashwini, Bharani, Krittika, etc.). | La porción de 13°20' del cielo donde se encuentra la Luna (u otros planetas). Revela el karma y la psicología profunda. |
| `lagna` (Ascendente) | Cualitativo | Rashis (Signos sidéreos): Mesha (Aries) a Meena (Piscis). | El signo que ascendía en el horizonte al momento de nacer en la carta base (Carta Rasi o D1). |
| `mahadasha` | Compuesto (Planeta + Período) | Períodos regidos por los 9 Grahas en secuencias de años (ej. período de Saturno = 19 años). | El ciclo de tiempo del destino activo en el momento de la vida del consultante (basado en el sistema Vimshottari Dasha). |

## 4. Relaciones Internas (Relaciones)
*   **Vimshottari Dasha**: Sistema de predicción del tiempo de vida (120 años en total) que se calcula partiendo de la posición exacta de la Luna natal dentro de su Nakshatra.
*   **Drishti (Aspectos)**: Cada planeta aspecta (proyecta su energía) a la casa opuesta (casa 7 desde su posición). Ciertos planetas como Júpiter, Marte y Saturno poseen aspectos especiales adicionales (ej. Júpiter aspecta las casas 5, 7 y 9 desde donde se ubica).
*   **Cartas Divisionales (Vargas)**: Además de la carta de nacimiento base (D1), la carta natal se subdivide matemáticamente en otras cartas (ej. Navamsha o D9 para el matrimonio y el Dharma) para verificar la fuerza real de los planetas.

## 5. Puntos de Intersección Externa (Interconexiones)
*   **Sistema de Chakras**: Los planetas regentes de Jyotish están íntimamente ligados al diagnóstico del estado de los chakras y la prescripción de remedios (gemas, mantras, yoga).
*   **Diseño Humano**: Utiliza las posiciones planetarias de nacimiento, pero las calcula bajo el zodiaco tropical. Mapear la diferencia con el zodiaco sidéreo del Jyotish ofrece una perspectiva alternativa ("Diseño Humano Sidéreo").
*   **Ayurveda**: Los elementos de la carta védica determinan la constitución psicofísica o *Doshas* del individuo (Vata, Pitta, Kapha).

## 6. Bibliografía y Referencias

### Fuentes Académicas y Literatura de Referencia
1.  **de Fouw, Hart & Svoboda, Robert** (1996). *Light on Life: An Introduction to the Astrology of India*. La mejor obra introductoria moderna y sistemática al sistema Jyotish y sus correspondencias con el Ayurveda.
    *   [Ver en Amazon](https://www.amazon.com/dp/0940985691) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Hart+de+Fouw+Light+on+Life)
2.  **Maharishi Parashara** (c. siglo VII d.C.). *Brihat Parashara Hora Shastra* (traducción de Girish Chand Sharma). El texto sánscrito clásico fundacional que define los cálculos de los Dashas, Nakshatras y casas védicas.
    *   [Ver en Amazon](https://www.amazon.com/dp/8170841315) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Brihat+Parashara+Hora+Shastra)
3.  **Dreyer, Ronnie Gale** (1997). *Vedic Astrology: A Guide to the Fundamentals of Jyotish*. Un manual excelente para astrólogos occidentales que explica la transición del zodíaco tropical al sidéreo.
    *   [Ver en Amazon](https://www.amazon.com/dp/1567182360) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Ronnie+Gale+Dreyer+Vedic+Astrology)

### Herramientas de Validación y Fuentes de Veracidad
*   **Motores de Cálculo y Librerías**:
    *   [pyswisseph](https://pypi.org/project/pyswisseph/): Enlace de Python para la biblioteca *Swiss Ephemeris*, configurada en modo sidéreo con los Ayanamsas estándar (como Lahiri/Chitra Paksha, Raman, o Fagan-Bradley) para calcular nakshatras y dasha vargas.
*   **Plataformas de Referencia y Verificación**:
    *   [Jagannatha Hora](http://www.vedicastrologer.org/jh/): El software gratuito de cálculo astrológico védico más utilizado a nivel mundial para corroborar tránsitos, dasha mahadashas y posiciones sidéreas de alta precisión astronómica.
    *   [Vedic Astrology Center](https://www.vedicastrology.org.in): Portal de investigación y herramientas de cálculo para corroborar cartas bajo los lineamientos tradicionales de la astrología hindú (Jyotish).

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Calculado` (Astronomía Sidérea. Cálculo de Zodiaco Sidéreo con Ayanamsa Lahiri/Raman, 27 Nakshatras y períodos Dasha de Vimshottari) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio sin dependencias externas) |
| **Motores y Modelos Open Source** | `pyswisseph` (Swiss Ephemeris con Ayanamsa Lahiri), `jyotish-python`, `open-jyotish-engine` |
