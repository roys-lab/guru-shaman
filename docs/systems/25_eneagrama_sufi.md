# Eneagrama Sufí (Mística del Eneagrama)

## 1. Descripción General e Historia
El Eneagrama Sufí describe las raíces espirituales, místicas y cosmológicas de la figura del Eneagrama. Aunque el Eneagrama de la Personalidad es moderno, su símbolo geométrico (un círculo que contiene un triángulo y una héxada) fue introducido en Occidente por **George Gurdjieff** en 1916 en sus grupos de trabajo, alegando haberlo aprendido de escuelas místicas sufíes (como la orden Naqshbandi) en Asia Central. Bajo el enfoque sufí y del Cuarto Camino, el Eneagrama es un símbolo del movimiento perpetuo del cosmos regido por dos leyes cósmicas: la **Ley de Tres** (creación) y la **Ley de Siete** (proceso/octava). Representa el mapa del desarrollo interior del alma y el flujo de energía divina a través del ser humano.

## 2. Parámetros de Entrada (Inputs)
1.  `estado_presencia` (Cualitativo: Grado de autoconciencia o estado de vigilia del consultante, ej. dormido/mecanicismo, alerta/presencia).
2.  `octava_etapa` (Cuantitativo/Cualitativo: El punto o paso en un proceso de desarrollo personal o proyecto que se quiere analizar bajo la Ley de Octavas).

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `punto_eneagrama` | Cualitativo | Puntos del 1 al 9 en la circunferencia. | Los 9 portales de energía o cualidades del Absoluto (en el sufismo, los 9 nombres divinos o virtudes primordiales). |
| `flujo_hexada` | Lista de Transiciones | Secuencia: 1-4-2-8-5-7-1. | El flujo dinámico de circulación interna de la energía vital en busca del equilibrio dinámico. Representa la Ley de Siete. |
| `flujo_triangulo` | Lista de Transiciones | Secuencia: 3-6-9-3. | La fuerza trinitaria de creación y autorrealización que conecta las tres fuerzas universales (Activa, Pasiva y Reconciliadora). Representa la Ley de Tres. |
| `punto_choque` (Shock Point) | Cualitativo | Intervalos de transición de octavas (ej. entre los puntos 3 y 4, y 6 y 7). | Puntos de desviación natural en la octava del desarrollo donde se requiere un "choque consciente" (esfuerzo voluntario) para no desviar la dirección original. |

## 4. Relaciones Internas (Relaciones)
*   **La Ley de Tres (Triada)**: Todo fenómeno es el resultado de la interacción de tres fuerzas opuestas y complementarias: Fuerza Activa (afirmación), Fuerza Pasiva (resistencia) y Fuerza Neutralizadora (reconciliación). Representado por el triángulo equilátero 3-6-9.
*   **La Ley de Siete o de Octavas (Héxada)**: Ninguna energía se mueve en línea recta continua; el movimiento cósmico se despliega en octavas (tonos Do-Re-Mi-Fa-Sol-La-Si-Do). El desfase natural ocurre en los semitonos Mi-Fa y Si-Do, coincidiendo con los puntos de choque. Representado por la héxada 1-4-2-8-5-7-1.

## 5. Puntos de Intersección Externa (Interconexiones)
*   **Eneagrama de la Personalidad**: El sistema sufí aporta la fundamentación matemática y cósmica del movimiento de integración y desintegración del Eneagrama psicológico.
*   **Cábala**: El triángulo del Eneagrama (3-6-9) se asocia con los Pilares de la Cábala, y los 9 puntos de la circunferencia corresponden a las 9 Sefirot inferiores que se manifiestan en la Creación (con Kéter representada por el punto 9 superior).
*   **I Ching**: Se han realizado mappings matemáticos entre las transiciones de la héxada del eneagrama (basada en fracciones periódicas de 1/7) y las mutaciones binarias de las líneas de los hexagramas.

## 6. Bibliografía y Referencias
1.  **Ouspensky, P. D.** (1949). *In Search of the Miraculous: Fragments of an Unknown Teaching*. La primera y más detallada obra escrita que expone las enseñanzas de Gurdjieff sobre la Ley de Tres, la Ley de Siete y el símbolo del Eneagrama.
    *   [Ver en Amazon](https://www.amazon.com/dp/0156007083) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Ouspensky+In+Search+of+the+Miraculous)
2.  **Bakhtiar, Laleh** (2013). *The Enneagram: A Sufi Approach*. Un estudio sobre las correspondencias tradicionales entre el eneagrama y las virtudes curativas de la mística islámica sufí.
    *   [Ver en Amazon](https://www.amazon.com/dp/1567446295) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Laleh+Bakhtiar+Enneagram+Sufi+Approach)
3.  **Maitri, Sandra** (2000). *The Spiritual Dimension of the Enneagram: Nine Faces of the Soul*. El análisis del Eneagrama que rescata las ideas de Ichazo sobre las fijaciones espirituales y su relación con el Ser Esencial.
    *   [Ver en Amazon](https://www.amazon.com/dp/1585422010) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Sandra+Maitri+Spiritual+Dimension+Enneagram)

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Interpretativo` (Espiritual / Cualitativo. Evaluación de las 9 estaciones del alma, la Ley del Tres y la Ley del Siete) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source) |
| **Motores y Modelos Open Source** | LLM Open Source (Llama-3, Qwen-2.5, DeepSeek-R1) con RAG entrenado en el diagrama Sufí de Gurdjieff/Sufismo y los puntos de choque |
