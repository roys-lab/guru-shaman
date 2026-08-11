# Biodescodificación (Bioneuroemoción)

## 1. Descripción General e Historia
La Biodescodificación (también conocida como Decodificación Biológica o Bioneuroemoción) es una corriente terapéutica de integración holística formulada a finales del siglo XX por autores como el enfermero francés Christian Flèche, el psicólogo español Enric Corbera y la canadiense Claudia Rainville. Se apoya en los postulados de la Nueva Medicina Germánica del Dr. Ryke Geerd Hamer. El sistema parte de la hipótesis de que toda enfermedad física (síntoma) es un programa biológico de supervivencia activado por el cerebro como respuesta a un **bioshock**: un conflicto emocional agudo, vivido en soledad, de manera inesperada y sin solución aparente. Su propósito es decodificar el mensaje oculto del síntoma para liberar la emoción reprimida y promover la autocuración.

## 2. Parámetros de Entrada (Inputs)
1.  `sintoma_fisico` (Texto: Diagnóstico médico exacto del síntoma o enfermedad, ej. hipotiroidismo, eccema en el brazo izquierdo, cálculo renal).
2.  `historial_bioshock` (Texto: Descripción de eventos altamente estresantes vividos recientemente o justo antes de la aparición del síntoma).

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `capa_embrionaria` | Cualitativo | Endodermo (supervivencia), Mesodermo Antiguo (protección), Mesodermo Nuevo (valoración/estructura), Ectodermo (relación/territorio). | La capa embrionaria del tejido afectado que indica el tipo de conflicto arcaico subyacente. |
| `sentido_biologico` | Cualitativo / Texto | El para qué sirve evolutivamente la alteración del tejido (ej. aumentar el tamaño del tejido tiroideo sirve para "acelerar el tiempo" para atrapar el bocado). | La explicación evolutiva y adaptativa de la reacción del cuerpo ante la crisis. |
| `conflicto_emocional` | Cualitativo / Texto | Ejemplos: Conflicto de desvalorización, Conflicto de territorio, Conflicto de separación, Conflicto de abandono. | La emoción o creencia específica no procesada que generó el bloqueo energético. |
| `fase_enfermedad` | Cualitativo | Fase Activa (estrés/simpaticotonía), Fase de Reparación (vagotonía/curación/inflamación). | El estado del sistema nervioso autónomo respecto a la resolución del conflicto. |

## 4. Relaciones Internas (Relaciones)
*   **La Ley de Hierro del Cáncer/Enfermedad**: Relaciona el Bioshock en la psique con un foco observable en el cerebro (Foco de Hamer) y la manifestación orgánica en el órgano correspondiente.
*   **Lógica de Lateralidad**: El lado del cuerpo donde se manifiesta el síntoma (izquierdo o derecho) indica la relación conflictiva con la polaridad femenina/maternal/hijos o la polaridad masculina/pareja/padre/rivales (evaluado mediante test de aplauso).

## 5. Puntos de Intersección Externa (Interconexiones)
*   **Sistema de Chakras**: La zona del cuerpo y el órgano afectado coinciden de forma consistente con el chakra de influencia correspondiente (ej. problemas de garganta/tiroides = Vishuddha/Garganta; problemas digestivos = Manipura/Plexo Solar).
*   **Psicogenealogía**: Los conflictos no resueltos por los ancestros (padres, abuelos) se heredan biológicamente a través del árbol familiar, activando biodescodificaciones idénticas en descendientes ("síndrome del yacente").
*   **Flores de Bach**: Las esencias florales actúan como el remedio directo para tratar la actitud mental que mantiene activo el conflicto de biodescodificación.

## 6. Bibliografía y Referencias
1.  **Flèche, Christian** (2001). *The Biogenealogy Sourcebook: Healing into Your Family Tree*. El libro fundacional sobre la decodificación biológica de las enfermedades y sus capas embrionarias.
    *   [Ver en Amazon](https://www.amazon.com/dp/1594770643) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Christian+Fleche+Biogenealogy+Sourcebook)
2.  **Corbera, Enric** (2013). *Tratado de Bioneuroemoción*. Compendio detallado sobre el método de indagación emocional y la relación con la física cuántica y la psicología transpersonal.
    *   [Ver en Amazon](https://www.amazon.com/dp/849416568X) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Enric+Corbera+Tratado+Bioneuroemocion)
3.  **Rainville, Claudia** (2000). *Metamedicina: La curación a tu alcance* (*Metamedicine: Art of Healing*). Manual sistemático de consulta que recopila los mensajes emocionales detrás de cientos de síntomas médicos.
    *   [Ver en Amazon](https://www.amazon.com/dp/2923717616) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Claudia+Rainville+Metamedicine)

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Interpretativo` (Somático / Semántico. Mapeo entre síntomas físicos, capas embrionarias y conflictos biológicos no resueltos) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source) |
| **Motores y Modelos Open Source** | Base de datos vectorial (`ChromaDB`, `Qdrant`) indexando el Diccionario de Biología y Conflictos Emocionales + RAG con LLM Open Source (Llama-3.3-70B, Qwen-2.5, DeepSeek-R1) |
