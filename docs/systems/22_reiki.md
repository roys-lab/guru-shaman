# Reiki (Sistema Usui de Sanación Natural)

## 1. Descripción General e Historia
El Reiki es un sistema de sanación espiritual y canalización de energía vital universal a través de la imposición de manos. Fue fundado en Japón a principios de la década de 1920 por el monje budista zen **Mikao Usui** tras una experiencia de iluminación mística (Satori) durante un ayuno de 21 días en el monte Kurama. La palabra Reiki se compone de *Rei* (universal, cosmos o espíritu) y *Ki* (energía vital, equivalente al *Qi* chino o *Prana* hindú). El sistema Usui se estructura en niveles de iniciación y se basa en el uso de símbolos sagrados para dirigir la energía, limpiar espacios e irradiar sanación a distancia.

## 2. Parámetros de Entrada (Inputs)
1.  `posicion_manos_sesion` (Lista de zonas corporales donde se aplica la imposición de manos durante la terapia).
2.  `simbolo_activo` (Cualitativo: Símbolo Reiki activado mediante visualización o trazado en el aire).
3.  `intencion_sanacion` (Texto o afirmación mental: El propósito de la sesión, ej. sanación a distancia, desbloqueo emocional).

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `nivel_iniciacion` | Cualitativo | Shoden (Primer Nivel: auto-sanación y sanación física), Okuden (Segundo Nivel: sanación mental, emocional y a distancia), Shinpiden (Tercer Nivel/Maestría: nivel espiritual y formación de nuevos terapeutas). | El grado de sintonización y capacidad del terapeuta para canalizar el flujo de Reiki. |
| `simbolo_sagrado` | Cualitativo | Cho Ku Rei (El Poder - activación/fuerza), Sei He Ki (La Armonía - sanación emocional/mental), Hon Sha Ze Sho Nen (La Conexión - sanación a distancia/trascendencia del tiempo), Dai Ko Myo (La Luz de la Maestría - sanación espiritual). | Llaves simbólicas y mantras para sintonizar frecuencias energéticas específicas. |
| `cinco_principios` (Gokai) | Lista de Enunciados | 1. Solo por hoy no te enojes, 2. Solo por hoy no te preocupes, 3. Sé agradecido, 4. Trabaja duro y con honestidad, 5. Sé amable con los demás. | El código ético y la base espiritual del sistema Usui para mantener despejado el canal de energía. |

## 4. Relaciones Internas (Relaciones)
*   **Proceso de Canalización**: El practicante de Reiki no utiliza su propia energía vital (*Ki* personal), sino que actúa únicamente como un "canal de radio" o cable a tierra para conducir el *Rei* (energía universal). Esto previene el desgaste energético del terapeuta.
*   **Activación por Sintonización (Reiju)**: Los símbolos y el acceso al Reiki solo se consideran funcionales una vez el alumno pasa por el ritual de sintonización o iniciación realizado físicamente por un Maestro Reiki habilitado.

## 5. Puntos de Intersección Externa (Interconexiones)
*   **Sistema de Chakras**: La sesión de Reiki Usui consiste en la imposición de manos sobre los 7 chakras principales del cuerpo sutil para restaurar la libre circulación del flujo de energía.
*   **Alquimia y Elementos**: El nivel más alto del Reiki evoca la purificación interna del fuego de transmutación espiritual, análogo a las etapas de la Gran Obra alquímica (*Rubedo*).
*   **Flores de Bach**: Se suelen aplicar de forma complementaria durante o después de las sesiones para sostener emocionalmente la "crisis de sanación" (depuración física y emocional) que a veces provoca el Reiki.

## 6. Bibliografía y Referencias
1.  **Usui, Mikao & Petter, Frank Arjava** (2000). *The Original Reiki Handbook of Dr. Mikao Usui*. Manual traducido que contiene las notas originales y las guías de posiciones de manos escritas por el creador del método.
    *   [Ver en Amazon](https://www.amazon.com/dp/0914955757) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Mikao+Usui+Original+Reiki+Handbook)
2.  **Petter, Frank Arjava** (2012). *This is Reiki: The Definitive Method for Mental and Physical Healing & Spiritual Ascension*. Un estudio exhaustivo sobre la historia japonesa del Reiki y el método Usui Shiki Ryoho.
    *   [Ver en Amazon](https://www.amazon.com/dp/8484453531) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Frank+Arjava+Petter+This+is+Reiki)
3.  **Petter, Frank Arjava** (1997). *Reiki Fire: New Information about the Origins of the Reiki Power*. Uno de los primeros textos que desveló a Occidente la verdadera historia no mitificada del monte Kurama y Mikao Usui.
    *   [Ver en Amazon](https://www.amazon.com/dp/0914955501) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Frank+Arjava+Petter+Reiki+Fire)

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Interpretativo` (Energético / Protocolar. Evaluación de secuencias de posiciones de manos, símbolos e intenciones de sanación) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source) |
| **Motores y Modelos Open Source** | Tablas de sintonización de símbolos (Cho Ku Rei, Sei He Ki, Hon Sha Ze Sho Nen) en JSON + LLM Open Source para estructurar protocolos de sesión e intenciones |
