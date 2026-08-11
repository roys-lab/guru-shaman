# Quiromancia (Lectura de Manos)

## 1. Descripción General e Historia
La Quiromancia es la lectura de las líneas, montes y rasgos morfológicos de la mano con fines de adivinación y análisis caracterológico. Con raíces documentadas en la antigua India (como parte de las escrituras *Samudrika Shastra*) y practicada en el antiguo Egipto, Persia y Grecia, se expandió por Europa en la Edad Media y el Renacimiento. En el siglo XIX y principios del XX, fue sistematizada por William G. Benham y Casimir d'Arpentigny bajo un enfoque más analítico centrado en la estructura del carácter y las predisposiciones de salud.

## 2. Parámetros de Entrada (Inputs)
1.  `mano_lectura` (Cualitativo: Activa -mano dominante con la que se escribe, que muestra el libre albedrío y cambios futuros-, o Pasiva -mano no dominante, que muestra talentos y karmas heredados-).
2.  `morfologia_mano` (Cualitativo: Forma de la mano, consistencia, flexibilidad, longitud de los dedos respecto a la palma).
3.  `patron_lineas` (Lista de trazos: Líneas principales y secundarias observadas).

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `tipo_mano_elemento` | Cualitativo | Mano de Tierra (palma cuadrada, dedos cortos), Mano de Aire (palma cuadrada, dedos largos), Mano de Agua (palma rectangular, dedos largos), Mano de Fuego (palma rectangular, dedos cortos). | Describe el temperamento psicofísico fundamental del individuo (coincide con los elementos de la alquimia). |
| `linea_principal` | Compuesto (Nombre + Estado) | Línea de la Vida (salud/vitalidad), Línea de la Cabeza (mentalidad/lógica), Línea del Corazón (afecto/emociones), Línea del Destino (carrera/propósito). Estado: Larga, corta, rota, encadenada, bifurcada. | Mapea las áreas centrales de la experiencia humana y el estado de la fuerza vital asociada. |
| `monte_planetario` | Compuesto (Monte + Desarrollo) | Montes: Júpiter (ambición/liderazgo), Saturno (deber/sabiduría), Apolo/Sol (creatividad/éxito), Mercurio (comunicación/negocios), Marte (coraje/defensa), Venus (amor/sensualidad), Luna (imaginación/subconsciente). Desarrollo: Plano, normal, prominente. | Vórtices de energía en la palma de la mano asociados a las cualidades de los arquetipos planetarios. |

## 4. Relaciones Internas (Relaciones)
*   **Balance de Línea Cabeza / Corazón**: Un desequilibrio (ej. Línea del Corazón muy larga y curva frente a una Línea de la Cabeza corta) indica una personalidad regida predominantemente por la emoción y el impulso sentimental sobre el pensamiento lógico.
*   **Línea Simia**: Una mutación rara donde las líneas del Corazón y de la Cabeza se fusionan en un único trazo horizontal. Indica una intensidad inusual donde las emociones y los pensamientos no pueden separarse.
*   **Regencia de Montes sobre Dedos**: Cada dedo se asocia con su monte ubicado en la base (ej. Dedo índice = Júpiter, Dedo medio = Saturno, Dedo anular = Sol, Dedo meñique = Mercurio). La longitud y forma del dedo indica cómo se canaliza la energía del monte.

## 5. Puntos de Intersección Externa (Interconexiones)
*   **Astrología Occidental**: Los nombres y cualidades de los montes y dedos de la mano se corresponden uno a uno con los arquetipos astrológicos de los planetas y sus regencias.
*   **Chakras**: Los chakras de las manos (chakras secundarios) se asocian con la capacidad de canalizar energía, con cada dedo sirviendo como una extensión de un chakra específico (ej. el pulgar se asocia con el chakra de la Garganta/Gesticulación; el meñique con el chakra Raíz).
*   **Alquimia y Elementos**: La clasificación de tipos de mano (Tierra, Aire, Fuego, Agua) utiliza los mismos temperamentos y relaciones de compatibilidad de los elementos alquímicos.

## 6. Bibliografía y Referencias

### Fuentes Académicas y Literatura de Referencia
1.  **Benham, William G.** (1900). *The Laws of Scientific Hand Reading*. El manual clásico pionero que sentó las bases para el estudio anatómico y de salud de las líneas de la mano.
    *   [Ver en Amazon](https://www.amazon.com/dp/0785800010) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=William+Benham+Laws+Scientific+Hand+Reading)
2.  **Fincham, Johnny** (2007). *The Art of Reading Palms*. Guía de referencia moderna muy accesible que simplifica el sistema a través de tipologías elementales y análisis práctico.
    *   [Ver en Amazon](https://www.amazon.com/dp/1582974860) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Johnny+Fincham+Art+of+Reading+Palms)
3.  **Struthers, Jane** (2005). *The Palmistry Bible: The Definitive Guide to Hand Reading*. Un compendio ricamente ilustrado detallando líneas secundarias, montes y la morfología rústica de las manos.
    *   [Ver en Amazon](https://www.amazon.com/dp/140272787X) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Jane+Struthers+Palmistry+Bible)

### Herramientas de Validación y Fuentes de Veracidad
*   **Motores de Cálculo y Librerías**:
    *   *Algoritmos de Visión por Computadora (OpenCV / MediaPipe)*: Implementación de modelos de estimación de malla de manos (Hand Landmark Detection) con 21 puntos clave en 3D para extraer proporciones de longitud de dedos (para determinar el tipo de mano de Tierra, Aire, Agua, Fuego) y trazado automático de las líneas principales (Vida, Cabeza, Corazón).
*   **Plataformas de Referencia y Verificación**:
    *   [The Cheiro Society Archives](https://www.cheiro.org): Archivo histórico digital dedicado al trabajo de William John Warner (Cheiro), el quiromante más famoso del siglo XIX, útil para validar interpretaciones de formas de mano y marcas inusuales.

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Interpretativo` (Visión por Computadora / Morfológico. Reconocimiento de patrones de líneas de la mano -Vida, Cabeza, Corazón- y montes) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio desplegando modelos de Visión e IA Open Source) |
| **Motores y Modelos Open Source** | Computer Vision (`MediaPipe Hand Landmarker`, `YOLOv8-pose`, `OpenCV`) + Vision-Language Models (VLM) Open Source (`Qwen2-VL`, `LLaVA`, `Florence-2`) ejecutados en GPU local |
