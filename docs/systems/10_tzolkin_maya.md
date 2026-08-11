# Tzolkin Maya (Calendario Sagrado)

## 1. Descripción General e Historia
El Tzolkin es el calendario sagrado maya de 260 días, utilizado con fines agrícolas, religiosos y de adivinación personal en Mesoamérica. Su estructura matemática entrelaza **20 Sellos Solares** (arquetipos de energía cósmica) con **13 Tonos Galácticos** (pulsaciones de frecuencia de creación), resultando en 260 combinaciones únicas llamadas **Kines**. El sistema moderno de interpretación y autoconocimiento (conocido como *El Sincronario de 13 Lunas* o *Ley del Tiempo*) fue popularizado por el historiador y artista José Argüelles en 1987 a través de su libro *El Factor Maya*, unificando la matemática maya con la profecía planetaria para mapear el "Kin de Nacimiento" o la firma galáctica de cada persona.

## 2. Parámetros de Entrada (Inputs)
1.  `fecha_nacimiento` (Fecha: Día, Mes, Año).
    *   *Nota*: El Sincronario de 13 Lunas utiliza la correlación GMT standard para calcular el Kin, pero existe también la cuenta tradicional maya de los días (Quiché) que puede diferir en algunos días según el punto de partida astronómico.

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `kin_destino` | Cuantitativo / Compuesto | Kin 1 al 260 (ej. Kin 1 = Dragón Magnético Rojo, Kin 260 = Sol Cósmico Amarillo). | La firma galáctica personal del individuo. Representa la esencia álmica y la frecuencia vibracional de vida. |
| `sello_solar` | Cualitativo | 20 Sellos: Dragón, Viento, Noche, Semilla, Serpiente, Enlazador de Mundos, Mano, Estrella, Luna, Perro, Mono, Humano, Caminante del Cielo, Mago, Águila, Guerrero, Tierra, Espejo, Tormenta, Sol. | El arquetipo de energía solar asignado al día de nacimiento. Representa la acción o cualidad del alma. |
| `tono_galactico` | Cualitativo | 13 Tonos: Magnético (1) a Cósmico (13). | La frecuencia de manifestación y el poder de acción creativa del Kin. |
| `familia_terrestre` | Cualitativo | Central, Portal, Polar, Cardinal, Señal. | Agrupación de sellos según su función de anclaje de energía en la Tierra. |
| `onda_encantada` | Cualitativo | Una secuencia de 13 kines iniciada por el tono Magnético (1). | El ciclo de 13 días/pasos que determina la misión de vida del individuo y la secuencia temporal en la que nace. |

## 4. Relaciones Internas (Relaciones)
*   **El Oráculo de la Quinta Fuerza**: Mapea las 4 relaciones de apoyo para el Kin Destino:
    *   *Kin Análogo*: La energía afín que apoya y nutre al Kin (ej. para Dragón es Espejo).
    *   *Kin Guía*: El maestro interno o dirección de vida, determinado por el Tono Galáctico y el Sello.
    *   *Kin Antípoda*: El desafío o fuerza contraria necesaria para el crecimiento y equilibrio.
    *   *Kin Oculto*: El poder oculto latente que emerge inesperadamente.
*   **Castillos del Tzolkin**: Los 260 días se dividen en 5 Castillos de 52 días cada uno (Rojo, Blanco, Azul, Amarillo, Verde), que marcan grandes etapas de iniciación y maduración de la conciencia.

## 5. Puntos de Intersección Externa (Interconexiones)
*   **Astrología Occidental**: Las posiciones del sol y la tierra se sincronizan con las frecuencias de los Sellos Solares.
*   **I Ching**: José Argüelles mapeó las matemáticas del Tzolkin con los 64 hexagramas del I Ching, creando un sistema llamado el *Tectónon* o la *Célula del Tiempo*.
*   **Chakras**: Los 20 sellos solares se corresponden cíclicamente con los centros de energía del cuerpo físico para el anclaje diario de energía cósmica.

## 6. Bibliografía y Referencias

### Fuentes Académicas y Literatura de Referencia
1.  **Argüelles, José** (1987). *The Mayan Factor: Path Beyond Technology*. La obra fundacional que introduce la Ley del Tiempo y el cálculo de la firma galáctica basada en los sellos y tonos.
    *   [Ver en Amazon](https://www.amazon.com/dp/0939680386) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Jose+Arguelles+Mayan+Factor)
2.  **Calleman, Carl Johan** (2004). *The Mayan Calendar and the Transformation of Consciousness*. Estudio sistemático del calendario maya desde una perspectiva macrohistórica y cosmológica.
    *   [Ver en Amazon](https://www.amazon.com/dp/1591430280) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Carl+Johan+Calleman+Mayan+Calendar)
3.  **Scofield, Bruce & Orr, Barry C.** (2007). *How to Practice Mayan Astrology: The Tzolkin Calendar and Your Life Path*. Guía de referencia que conecta el sistema astronómico clásico mesoamericano con la astrología práctica.
    *   [Ver en Amazon](https://www.amazon.com/dp/1591430647) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Bruce+Scofield+How+to+Practice+Mayan+Astrology)

### Herramientas de Validación y Fuentes de Veracidad
*   **Motores de Cálculo y Librerías**:
    *   *Algoritmo de Correlación GMT (584,283)*: La constante matemática estándar empleada por arqueólogos para convertir el calendario civil gregoriano en días de la Cuenta Larga y del Tzolkin (Kin Galáctico = (Día Juliano - 584283) mod 260).
*   **Plataformas de Referencia y Verificación**:
    *   [Foundation for the Advancement of Mesoamerican Studies (FAMSI)](http://www.famsi.org): Repositorio y base de datos académica para el descifrado del calendario maya, jeroglíficos y astronomía precolombina.
    *   [Law of Time / Tortuga](https://www.tortuga.com): Plataforma oficial basada en la Ley del Tiempo de José Argüelles para calcular la Firma Galáctica de nacimiento en el Encantamiento del Sueño.

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Calculado` (Calendárico / Matemático. Matriz de 260 días Kin combinando 13 Tonos y 20 Sellos con la correlación GMT 584283) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio sin dependencias externas) |
| **Motores y Modelos Open Source** | Librerías de conversión de calendarios mayas (`maya-calendar`, `tzolkin-calculator`) en Python y JavaScript |
