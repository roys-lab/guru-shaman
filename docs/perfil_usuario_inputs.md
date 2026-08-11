# Definición del Perfil del Usuario: Parámetros de Entrada (Inputs)

Este documento centraliza todos los datos de entrada (inputs) que el usuario debe suministrar en la plataforma de GuruShaman, indicando detalladamente qué sistemas holísticos consumen cada parámetro para su cálculo o diagnóstico.

---

## Tabla Maestra de Inputs y Sistemas Consumidores

| Parámetro de Entrada (Input) | Tipo de Dato | Formato / Dominio | Sistemas Holísticos que lo Requieren |
|---|---|---|---|
| `fecha_nacimiento` | Fecha | Día, Mes, Año (Gregarino / conversión automática a Hebreo y Lunar) | Astrología Occidental, Diseño Humano, Astrología China, Numerología, Tzolkin Maya, Astrología Védica, Astrología Kabbalística, Horóscopo Celta, Psicogenealogía, Antroposofía. |
| `hora_nacimiento` | Hora | Hora y minutos exactos (Huso horario local / conversión a UTC) | Astrología Occidental, Diseño Humano, Astrología China, Astrología Védica, Astrología Kabbalística. |
| `coordenadas_nacimiento` | Geográfico | Latitud y Longitud (o Ciudad y País con autocompletado y zona horaria) | Astrología Occidental, Diseño Humano, Astrología China, Astrología Védica, Astrología Kabbalística. |
| `nombre_completo` | Texto | Nombre y apellidos completos tal como figuran en el acta de nacimiento original | Numerología, Astrología Kabbalística, Psicogenealogía. |
| `pregunta_consulta` | Texto | Intención, duda o situación de conflicto expresada por el consultante | Tarot, I Ching, Runas Nórdicas. |
| `extraccion_cartas_runas` | Lista | Códigos de cartas o runas elegidas, con su orientación (Derecha / Invertida) | Tarot, Runas Nórdicas. |
| `tirada_valores` | Lista | Lista de 6 valores numéricos (monedas/tallos) para construir líneas de abajo a arriba (valores: 6, 7, 8, 9) | I Ching. |
| `sintomas_fisicos_emocionales`| Lista / Texto | Dolencias del cuerpo sutil o físico reportadas por el usuario (ej. eccema en brazo, insomnio, timidez) | Sistema de Chakras, Biodescodificación, Flores de Bach. |
| `rasgo_personalidad` | Test / Lista | Resultados de autoevaluación o cuestionarios de temperamento básico (ej. test RHETI) | Eneagrama de la Personalidad, Flores de Bach, Teosofía. |
| `edad_actual` | Cuantitativo | Años cumplidos (calculado a partir de la fecha de nacimiento, o ingresado directamente) | Antroposofía, Psicogenealogía, Fisiognomía (Mian Xiang). |
| `arbol_genealogico_datos` | Compuesto | Estructura jerárquica con nombres, fechas de nacimiento/muerte, y traumas de familiares (padres, abuelos, etc.) | Psicogenealogía. |
| `historial_biografico` | Texto / Lista | Eventos importantes de la vida ordenados cronológicamente por ciclos de edad | Antroposofía. |
| `estado_materia_reino` | Cualitativo | Síntomas de desbalance alquímico corporal y el reino natural bajo estudio | Alquimia y los Cuatro Elementos. |
| `posicion_manos_sesion` | Lista | Coordenadas de las zonas del cuerpo sobre las que se aplicará la imposición de manos | Reiki. |
| `simbolo_activo` | Cualitativo | Selección de símbolos activos durante la sesión (Cho Ku Rei, Sei He Ki, etc.) | Reiki. |
| `intencion_sanacion` | Texto | Decreto o afirmación mental enfocada a una meta curativa | Reiki. |
| `mano_lectura_morfologia` | Cualitativo / Imagen| Forma de la palma, longitud de dedos, consistencia y trazado gráfico de líneas | Quiromancia. |
| `fotografia_rostro_rasgos` | Cualitativo / Imagen| Forma geométrica de la cara, rasgos oculares, frente, orejas y marcas | Fisiognomía (Mian Xiang). |
| `estado_presencia` | Cualitativo | Autoevaluación del nivel de vigilia, presencia activa o mecanicismo mental | Eneagrama Sufí. |
| `octava_etapa` | Cualitativo | Paso de desarrollo en una escala de progresión de una meta o proyecto | Eneagrama Sufí. |

---

## Agrupación de Inputs por Tipo de Formulario

Para simplificar la experiencia de usuario (UX), los inputs anteriores se pueden clasificar en 4 bloques de captura dentro de la aplicación:

### 1. Datos del Perfil Natal (Estáticos)
Se capturan una sola vez al registrarse y no cambian en el tiempo.
*   `fecha_nacimiento`
*   `hora_nacimiento`
*   `coordenadas_nacimiento`
*   `nombre_completo`

### 2. Datos de Consulta Dinámica (Oraculares)
Se capturan a demanda cuando el usuario desea realizar una lectura o meditación.
*   `pregunta_consulta`
*   `extraccion_cartas_runas`
*   `tirada_valores`

### 3. Autoevaluación y Diagnóstico (Sintomáticos/Morfológicos)
Se actualizan periódicamente según el estado emocional, físico o corporal del usuario.
*   `sintomas_fisicos_emocionales`
*   `rasgo_personalidad`
*   `edad_actual`
*   `historial_biografico`
*   `estado_materia_reino`
*   `mano_lectura_morfologia`
*   `fotografia_rostro_rasgos`
*   `estado_presencia`
*   `octava_etapa`

### 4. Datos del Entorno Familiar (Transgeneracionales)
Se capturan en una sección especial para el análisis del clan.
*   `arbol_genealogico_datos`
