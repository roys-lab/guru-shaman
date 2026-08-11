# Teosofía (Los Siete Rayos y Planos de Existencia)

## 1. Descripción General e Historia
La Teosofía es un sistema de filosofía esotérica y mística fundado en Nueva York en 1875 por la escritora ucraniana **Helena Petrovna Blavatsky**, junto con Henry Steel Olcott y William Quan Judge. El término proviene del griego *theosophia* ("sabiduría divina"). La teosofía propone que todas las religiones y filosofías son ramas de una verdad espiritual universal única. Entre sus modelos más estructurados se encuentra la descripción de los **Siete Rayos** (las siete energías fundamentales del cosmos que moldean la evolución humana) y los **Siete Planos de Existencia** (las dimensiones vibracionales del universo, desde el plano puramente espiritual hasta el físico).

## 2. Parámetros de Entrada (Inputs)
Como mapa de evolución de la conciencia y del alma, sus inputs son:
1.  `fecha_nacimiento` y `hora_nacimiento` (Utilizados en la teosofía posterior de Alice Bailey para calcular los rayos a través de la carta astrológica).
2.  `observacion_temperamento` (Texto: Análisis de la vocación dominante y reacciones ante crisis de vida).

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `rayo_personalidad` | Cualitativo | Siete Rayos: 1. Voluntad/Poder, 2. Amor/Sabiduría, 3. Inteligencia Activa, 4. Armonía a través del Conflicto, 5. Conocimiento Concreto/Ciencia, 6. Devoción/Idealismo, 7. Orden Ceremonial/Magia. | La energía dominante que rige la personalidad externa en esta encarnación. |
| `rayo_alma` | Cualitativo | Siete Rayos básicos. | La energía que define el propósito superior y el aprendizaje evolutivo real de la conciencia. |
| `plano_existencia` | Cualitativo | Plano Físico, Plano Astral/Emocional, Plano Mental, Plano Búdico/Intuicional, Plano Átmico/Espiritual, Plano Monádico, Plano Ádico/Divino. | Los 7 planos concéntricos de vibración cósmica en los que opera el ser humano a través de sus correspondientes cuerpos sutiles. |

## 4. Relaciones Internas (Relaciones)
*   **La Constitución Septenaria del Hombre**: El ser humano posee siete cuerpos o principios que operan en diferentes planos de existencia: la Tríada Superior (Monada, Alma, Cuerpo Mental Superior) y el Cuaternario Inferior (Mente Concreta, Cuerpo Astral, Cuerpo Etérico, Cuerpo Físico).
*   **Integración de Rayos**: El desarrollo evolutivo ocurre cuando el rayo de la personalidad (que suele ser egoísta o conflictivo al inicio de la vida) se somete conscientemente a la influencia del rayo del alma.

## 5. Puntos de Intersección Externa (Interconexiones)
*   **Astrología Occidental**: Alice Bailey (en su libro *Astrología Esotérica*) asoció cada uno de los Siete Rayos a planetas específicos que actúan como sus regentes y transmisores energéticos (ej. Rayo 1 = Plutón/Vulcano; Rayo 2 = Júpiter/Sol; Rayo 5 = Venus).
*   **Sistema de Chakras**: Los siete rayos y sus planetas regentes se anclan físicamente en el cuerpo sutil del hombre activando chakras correspondientes (ej. Rayo 1 = Chakra Coronilla/Base; Rayo 6 = Chakra Plexo Solar).
*   **Cábala**: Los planos de existencia teosóficos y la estructura septenaria se correlacionan con las cuatro divisiones mundanas del Árbol de la Vida y los estados sefiróticos.

## 6. Bibliografía y Referencias
1.  **Blavatsky, Helena Petrovna** (1888). *The Secret Doctrine*. La obra cumbre teosófica en dos volúmenes que expone la cosmogénesis y la antropogénesis de la evolución del universo y del alma.
    *   [Ver en Amazon](https://www.amazon.com/dp/1585420653) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Helena+Blavatsky+Secret+Doctrine)
2.  **Wood, Ernest** (1925). *The Seven Rays*. El texto clásico que organiza y sistematiza la teoría de los siete rayos, sus temperamentos y su aplicación práctica en el autoconocimiento.
    *   [Ver en Amazon](https://www.amazon.com/dp/0787309551) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Ernest+Wood+The+Seven+Rays)
3.  **Bailey, Alice A.** (1936). *A Treatise on the Seven Rays: Volume I, Esoteric Psychology*. Obra fundacional sobre la psicología esotérica y la integración de los rayos del alma y de la personalidad.
    *   [Ver en Amazon](https://www.amazon.com/dp/0931348006) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Alice+Bailey+Treatise+Seven+Rays)

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Interpretativo` (Esotérico / Psicométrico. Clasificación de los 7 Rayos cósmicos y constituciones septenarias del ser) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source) |
| **Motores y Modelos Open Source** | Test psicométrico de diagnóstico de Rayos en Python + RAG con la literatura de Helena Blavatsky y Alice Bailey sobre LLM Open Source |
