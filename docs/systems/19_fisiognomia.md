# Fisiognomía (Mian Xiang / Lectura de Rostro)

## 1. Descripción General e Historia
La Fisiognomía, conocida en China como **Mian Xiang** ("observación del rostro"), es una antigua disciplina oriental que analiza las facciones de la cara para discernir la personalidad, la salud física y el destino vital del individuo. Sus orígenes datan del periodo de los Reinos Combatientes (c. 400 a.C.) y fue formalizada durante la dinastía Song por maestros taoístas. Considera que el rostro es un mapa vivo del flujo del *Qi* (fuerza vital) y que cada imperfección, marca o rasgo óseo revela las lecciones kármicas y la constitución de los 5 elementos en el individuo.

## 2. Parámetros de Entrada (Inputs)
1.  `fotografia_rostro` o `mapeo_rasgos` (Cualitativo/Métrico: Descripción de la forma de las cejas, ojos, nariz, boca, orejas y frentes, junto con la presencia de marcas, lunares o cicatrices).

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `tres_regiones_rostro` | Cualitativo / Proporción | Región Superior (frente: intelecto/juventud), Región Media (cejas a base de nariz: voluntad/madurez), Región Inferior (boca y mentón: instintos/vejez). | Las tres etapas cronológicas de la vida y el equilibrio entre mente, voluntad e instinto. |
| `palacio_facial` | Compuesto (Nombre + Estado) | 12 Palacios (ej. Palacio de la Carrera en la frente, Palacio de la Riqueza en la punta de la nariz, Palacio de los Padres, Palacio de la Pareja). | Áreas específicas del rostro que revelan la suerte y el estado emocional en diferentes ámbitos de la vida. |
| `tipo_rostro_elemento` | Cualitativo | Rostro de Madera (rectangular/alto), Rostro de Fuego (puntiagudo/triangular), Rostro de Tierra (cuadrado/pesado), Rostro de Metal (ovalado/simétrico), Rostro de Agua (redondo/carnoso). | La energía elemental predominante que gobierna el temperamento de la persona. |
| `cien_puntos_edad` | Cuantitativo | Puntos del 1 al 100 distribuidos en el rostro. | Mapeo que sitúa la edad del consultante en una ubicación facial exacta (ej. orejas = infancia; frente = 20-30 años; nariz = 40-50 años). |

## 4. Relaciones Internas (Relaciones)
*   **Balance del Eje Central**: La simetría lateral del rostro (comparar el lado izquierdo, que representa la influencia paterna y el ser público, con el lado derecho, que representa la influencia materna y el ser privado).
*   **Líneas de Expresión (Fa Ling)**: Las líneas que van de las aletas de la nariz a la comisura de los labios. Representan la autoridad, el sentido de dirección y el orden en la madurez.
*   **Interacción de Rasgos**: Las cejas (que representan el elemento Madera) actúan como el marco de control para los ojos (que representan el Fuego y el espíritu -*Shen*-).

## 5. Puntos de Intersección Externa (Interconexiones)
*   **Astrología China (BaZi)**: El Mian Xiang es la contraparte física del BaZi; los 5 elementos y los desbalances de la carta de nacimiento se reflejan directamente en los rasgos del rostro.
*   **Medicina Tradicional China**: El color de la piel en áreas específicas (ej. ojeras oscuras = debilidad en el elemento Agua/Riñones) se utiliza como una herramienta de diagnóstico clínico holístico.
*   **Flores de Bach**: Las tensiones musculares faciales crónicas y las arrugas de expresión revelan fijaciones emocionales de larga data directamente tratables con las esencias.

## 6. Bibliografía y Referencias
1.  **Bridges, Lillian** (2004). *Face Reading in Chinese Medicine*. La obra académica de referencia que traduce las enseñanzas tradicionales del Mian Xiang al lenguaje clínico y de salud occidental.
    *   [Ver en Amazon](https://www.amazon.com/dp/0443074557) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Lillian+Bridges+Face+Reading+Chinese+Medicine)
2.  **Yap, Joey** (2009). *Mian Xiang - The Chinese Art of Face Reading*. Manual sistemático con diagramas detallados sobre los 12 Palacios y los 100 puntos de edad.
    *   [Ver en Amazon](https://www.amazon.com/dp/9675395610) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Joey+Yap+Mian+Xiang)
3.  **McCarthy, Patrician** (2002). *The Face Reader: Discover Anyone's Personality, Compatibility, and Destiny*. Un enfoque práctico occidentalizado del Mian Xiang enfocado en las relaciones interpersonales y de negocios.
    *   [Ver en Amazon](https://www.amazon.com/dp/0525946853) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Patrician+McCarthy+The+Face+Reader)

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Interpretativo` (Visión por Computadora / Mian Xiang. Análisis de las 3 regiones del rostro, 12 palacios y 100 puntos de edad) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio desplegando modelos de Visión e IA Open Source) |
| **Motores y Modelos Open Source** | Facial Landmarks Models Open Source (`InsightFace`, `MediaPipe Face Mesh` con 468 puntos faciales, `dlib`) + VLM Open Source (`Qwen2-VL`, `LLaVA-NeXT`) en infraestructura local |
