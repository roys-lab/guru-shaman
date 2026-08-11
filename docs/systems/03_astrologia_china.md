# Astrología China (Horóscopo y BaZi)

## 1. Descripción General e Historia
La Astrología China es un sistema de adivinación y análisis caracterológico con más de 3000 años de antigüedad. Se rige por el calendario lunisolar y se estructura en torno a la teoría de los Cinco Elementos (Wu Xing), la polaridad del Yin y el Yang, y los 12 animales del zodiaco (Shengxiao). La forma más avanzada del análisis es el **BaZi** (o "Cuatro Pilares del Destino"), que mapea la energía del año, mes, día y hora de nacimiento utilizando combinaciones de los 10 Troncos Celestes y las 12 Ramas Terrestres.

## 2. Parámetros de Entrada (Inputs)
1.  `fecha_nacimiento` (Fecha: Día, Mes, Año). Es fundamental conocer el año lunar, ya que el Año Nuevo Chino varía entre finales de enero y mediados de febrero.
2.  `hora_nacimiento` (Hora y minutos exactos en huso horario UTC/GMT, ajustados a la hora solar local del lugar de nacimiento).
3.  `coordenadas_nacimiento` (Latitud y Longitud, necesarias para calcular con precisión la hora solar verdadera y las transiciones climáticas).

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `animal_anual` | Cualitativo | Rata, Buey, Tigre, Conejo, Dragón, Serpiente, Caballo, Cabra, Mono, Gallo, Perro, Cerdo. | El animal que rige el año de nacimiento. Representa la cara externa del individuo y su interacción social. |
| `elemento_anual` | Cualitativo | Madera, Fuego, Tierra, Metal, Agua. | El elemento del año de nacimiento, derivado de los Troncos Celestes. Rige las características del período de vida. |
| `polaridad_yinyang` | Cualitativo | Yin, Yang. | La fuerza energética fundamental del año/pilar. |
| `pilar_ano` | Compuesto (Tronco + Rama) | 60 combinaciones posibles del ciclo sexagesimal (ej. Jia Zi - Rata de Madera Yang). | Representa los ancestros, la infancia y la relación con la sociedad externa. |
| `pilar_mes` | Compuesto (Tronco + Rama) | 60 combinaciones del ciclo. | Representa los padres, el crecimiento y la vida profesional. |
| `pilar_dia` | Compuesto (Tronco + Rama) | 60 combinaciones del ciclo. | El Tronco de este pilar es el **Maestro del Día** (`day_master`). Representa al yo esencial, la personalidad nuclear y la relación con la pareja (Rama del día). |
| `pilar_hora` | Compuesto (Tronco + Rama) | 60 combinaciones del ciclo. | Representa los hijos, los proyectos, la vejez y los deseos profundos inconscientes. |
| `maestro_dia` (Day Master) | Compuesto (Tronco + Elemento) | 10 opciones: Madera (Jia/Yi), Fuego (Bing/Ding), Tierra (Wu/Ji), Metal (Geng/Xin), Agua (Ren/Gui). | El núcleo de la personalidad del individuo en la carta BaZi. |

## 4. Relaciones Internas (Relaciones)
*   **Ciclo de Generación (Sheng)**: Madera alimenta Fuego -> Fuego crea Tierra -> Tierra engendra Metal -> Metal produce Agua -> Agua nutre Madera.
*   **Ciclo de Control/Destrucción (Ke)**: Madera destruye Tierra -> Tierra estanca Agua -> Agua apaga Fuego -> Fuego funde Metal -> Metal corta Madera.
*   **Interacciones entre Ramas**: Choques (colisiones directas de energía de animales opuestos, ej. Rata vs Caballo), Daños, Castigos y Combinaciones Armónicas (Tríadas y Combinaciones Direccionales) que alteran la fuerza de los elementos en la carta.
*   **Fortaleza del Maestro del Día**: Se calcula sumando las fuerzas elementales de todas las ramas terrestres respecto de la temporada de nacimiento (representada por el mes) para determinar si la carta es Débil o Fuerte, dictando qué elementos actúan como favorables o desfavorables.

## 5. Puntos de Intersección Externa (Interconexiones)
*   **I Ching**: Los 5 elementos y las polaridades Yin/Yang forman la base de los 8 Trigramas (Bagua) y por ende de los 64 hexagramas.
*   **Flores de Bach / Alquimia**: Los cinco elementos se corresponden con temperamentos emocionales específicos y desbalances biológicos similares a los sistemas de elementos occidentales.
*   **Feng Shui**: Utiliza la misma carta BaZi y el balance de elementos del individuo para armonizar los espacios físicos donde este habita.

## 6. Bibliografía y Referencias

### Fuentes Académicas y Literatura de Referencia
1.  **Lau, Theodora & Lau, Laura** (2010). *The Handbook of Chinese Horoscopes*. La guía clásica detallada de los doce signos y las interacciones elementales.
    *   [Ver en Amazon](https://www.amazon.com/dp/0061914099) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=The+Handbook+of+Chinese+Horoscopes)
2.  **Yap, Joey** (2006). *BaZi - The Destiny Code: Your Guide to the Four Pillars of Destiny*. Manual moderno sistemático para el cálculo e interpretación de los Pilares del Destino.
    *   [Ver en Amazon](https://www.amazon.com/dp/9833332463) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Joey+Yap+BaZi+Destiny+Code)
3.  **Needham, Joseph** (1956). *Science and Civilisation in China: Volume 2, History of Scientific Thought*. Excelente marco histórico y antropológico de la cosmología del Yin/Yang y los Cinco Elementos en el pensamiento chino.
    *   [Ver en Amazon](https://www.amazon.com/dp/0521058007) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Needham+Science+Civilisation+China+Volume+2)

### Herramientas de Validación y Fuentes de Veracidad
*   **Motores de Cálculo y Librerías**:
    *   [lunarcalendar](https://pypi.org/project/lunarcalendar/): Librería de Python para la conversión de fechas gregorianas a lunares y solares tradicionales de China.
    *   *Conversión del Calendario Xia*: Modelos algorítmicos astronómicos basados en los períodos solares de 15 grados (Jie Qi) para determinar con precisión el cambio de mes y el pilar del año y mes.
*   **Plataformas de Referencia y Verificación**:
    *   [Joey Yap's BaZi Calculator](https://bazi.masteryacademy.com): Herramienta web líder de análisis BaZi para verificar los cuatro pilares (año, mes, día y hora) y estrellas auxiliares.
    *   [Master Tsai's Chinese Astrology](https://www.chinesefortunecalendar.com): Motor de cálculo detallado que ofrece la correspondencia exacta de los 5 elementos (Wu Xing) y los tallos/ramas.

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Calculado` (Deterministico. Conversión del calendario gregoriano a calendario luni-solar chino Hsiu y algoritmo de Cuatro Pilares BaZi) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio sin dependencias externas) |
| **Motores y Modelos Open Source** | `lunar-javascript` / `lunar-python` (librería Open Source de conversión luni-solar y 4 pilares BaZi), `bazi-calculator` |
