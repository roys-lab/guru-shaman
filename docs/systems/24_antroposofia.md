# Antroposofía (Septenios y Tripartición)

## 1. Descripción General e Historia
La Antroposofía es un sendero de conocimiento y movimiento filosófico fundado a principios del siglo XX por el pensador y científico austríaco **Rudolf Steiner**. Se separó de la Teosofía para fundar la Sociedad Antroposófica en 1912. La palabra deriva del griego *anthropos* (ser humano) y *sophia* (sabiduría), significando "sabiduría del hombre". Busca investigar el mundo espiritual a través del desarrollo del pensar científico y reflexivo. Sus dos modelos estructurales más populares son los **Ciclos de Siete Años (Septenios)** (las etapas de desarrollo biológico y anímico a lo largo de la vida) y la **Tripartición Humana** (la división funcional en los planos del pensar, el sentir y el querer/hacer).

## 2. Parámetros de Entrada (Inputs)
1.  `edad_actual` (Cuantitativo: Edad exacta del consultante, utilizada para ubicar su septenio activo y la crisis biográfica asociada).
2.  `historial_biografico` (Texto: Los eventos de vida organizados cronológicamente por septenios).

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `septenio_activo` | Cualitativo | Primer Septenio (0-7 años: el cuerpo físico), Segundo Septenio (7-14: cuerpo etérico), Tercer Septenio (14-21: cuerpo astral), Cuarto Septenio (21-28: alma de la sensación), Quinto Septenio (28-35: alma racional), Sexto Septenio (35-42: alma consciente), Séptimo Septenio (42-49: yo espiritual), etc. | La fase biográfica del desarrollo humano en la que se encuentra el individuo, cada una con un desafío de aprendizaje y desarrollo orgánico propio. |
| `miembro_constitucion` | Cualitativo | Cuerpo Físico (materia mineral), Cuerpo Etérico (vida/fuerza vital), Cuerpo Astral (emociones/conciencia), Yo (espíritu autoconsciente). | Los cuatro constituyentes esenciales del ser humano que maduran progresivamente en los tres primeros septenios. |
| `actividad_tripartita` | Cualitativo / Proporción | Sistema Neuro-sensorial (Pensar/Frente), Sistema Rítmico (Sentir/Corazón-Pulmón), Sistema Metabólico-Motor (Querer/Hacer/Vientre-Extremidades). | El equilibrio funcional de las tres fuerzas del alma y su manifestación en los sistemas orgánicos. |

## 4. Relaciones Internas (Relaciones)
*   **Reflejo Biográfico**: Los septenios de la madurez espiritual (después de los 42 años) son un reflejo invertido de los aprendizajes y formaciones orgánicas de los primeros septenios (ej. el septenio de los 42-49 años -Yo Espiritual- se relaciona y equilibra con el tercer septenio de los 14-21 años -maduración del Cuerpo Astral-).
*   **La Dinámica Pensar-Sentir-Hacer**: El Sentir actúa como el mediador dinámico entre las fuerzas frías, conscientes y lógicas del Pensar (sistema neuro-sensorial) y las fuerzas cálidas, inconscientes y motoras del Querer/Hacer (sistema metabólico).

## 5. Puntos de Intersección Externa (Interconexiones)
*   **Astrología Occidental**: Cada septenio se asocia con el ciclo planetario clásico y su regencia de vida (0-7 años = Luna; 7-14 = Mercurio; 14-21 = Venus; 21-42 = Sol; 42-49 = Marte; 49-56 = Júpiter; 56-63 = Saturno; +63 = Urano/Neptuno).
*   **Flores de Bach**: Las esencias florales apoyan de forma específica las crisis de transición y los bloqueos emocionales típicos de cada septenio biográfico (ej. *Larch* o *Wild Oat* durante el cuarto septenio de los 21-28 años por la inserción laboral y dudas de vocación).
*   **Alquimia**: Los Tres Principios de la alquimia (Sal, Mercurio, Azufre) se corresponden directamente con el Pensar (Sal/Estructura), el Sentir (Mercurio/Mediador) y el Querer/Hacer (Azufre/Combustión/Fuego).

## 6. Bibliografía y Referencias
1.  **Steiner, Rudolf** (1910). *An Outline of Esoteric Science* (*Occult Science*). La descripción teórica de la evolución del cosmos, la tierra y la constitución cuaternaria del hombre (cuerpos físico, etérico, astral y Yo).
    *   [Ver en Amazon](https://www.amazon.com/dp/0880104278) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Rudolf+Steiner+Occult+Science)
2.  **Steiner, Rudolf** (1907). *The Education of the Child in the Light of Anthroposophy*. Texto fundacional de la pedagogía Waldorf que explica los septenios de crecimiento y el desarrollo de los cuerpos sutiles.
    *   [Ver en Amazon](https://www.amazon.com/dp/0880103638) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Rudolf+Steiner+Education+Child+Anthroposophy)
3.  **Lievegoed, Bernard** (1979). *Phases: The Spiritual Development of the Human Being*. Una sistematización de la biografía humana basada en los septenios y los ciclos de Steiner.
    *   [Ver en Amazon](https://www.amazon.com/dp/0854403566) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Bernard+Lievegoed+Phases+Spiritual+Development)

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Calculado` (Ritmo cronológico de septenios biográficos) / `Interpretativo` (Análisis del desarrollo biográfico espiritual) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio desplegando modelos Open Source) |
| **Motores y Modelos Open Source** | Algoritmo determinista de cálculo de septenios (ritmo de 7 años) + LLM Open Source para la síntesis de la tabla biográfica personal |
