# GuruShaman: Visualización e Interconexión de Sistemas Holísticos

Este repositorio contiene el benchmark de 25 sistemas holísticos de autoconocimiento y desarrollo personal de GuruShaman. 

Hemos reestructurado el proyecto para separar el metamodelo de datos y los archivos del frontend interactivo de la raíz, colocándolos bajo la carpeta `docs/`. Además, creamos un **dashboard interactivo** que visualiza las relaciones cruzadas entre sistemas mediante una gráfica radial D3 de **agrupamiento jerárquico de enlaces** (*Hierarchical Edge Bundling*).

---

## Estructura del Proyecto

*   **`docs/`**: Carpeta principal del frontend y la documentación técnica.
    *   **`systems/`**: Contiene los 25 archivos markdown detallados para cada sistema.
    *   **`index.html`**, **`style.css`**, **`app.js`**: El código de la aplicación de visualización interactiva en D3.js.
    *   **`data.json`**: Base de datos compiled en formato JSON que representa los sistemas, parámetros y sus relaciones.
    *   **`modelo_datos_conceptual.md`**: Modelo conceptual y flujos maestros de información.
    *   **`relaciones_cruzadas.md`**: Matriz analítica detallada de correspondencias.
*   **`scripts/parse_systems.js`**: Script compilador que extrae la información de las fichas markdown y el diagrama de relaciones de `modelo_datos_conceptual.md` para regenerar `data.json`.
*   **`server.js`**: Servidor estático nativo ultra-rápido de NodeJS (cero dependencias de terceros).
*   **`package.json`**: Comandos y configuración de NodeJS.

---

## Características de la Visualización

1.  **Gráfico Radial (Hierarchical Edge Bundling)**: Agrupa los 25 sistemas en 5 categorías (Astral & Calendarios, Cuerpo & Energía, Mente & Psique, Simbólico & Oracular, Síntesis & Estructuras).
2.  **Zoom y Pan**: Soporta arrastrar y hacer zoom mediante scroll. Puedes hacer **doble clic** en el lienzo en cualquier momento para reiniciar el zoom y centrar la vista.
3.  **Lógica de "Interruptor Térmico" (Toggles)**: En la barra izquierda dispones de interruptores deslizantes para cada sistema. Si "apagas" una térmica, el motor de D3 filtra ese sistema y sus enlaces en tiempo real con transiciones suaves.
4.  **Tensión de Enlaces (Beta Slider)**: Puedes ajustar la tensión del agrupamiento de enlaces usando el deslizador en la parte superior para hacer la red más laxa o más compacta.
5.  **Hover y Ruteo Dinámico**: Al pasar el mouse sobre un sistema, los enlaces salientes (modulación directa) se colorean de **cian/celeste** y los enlaces entrantes se colorean de **rosa**. El resto de nodos se atenúa.
6.  **Ficha Técnica Detallada**: Al hacer clic en un sistema (o en su enlace en la barra derecha), el panel lateral derecho muestra su descripción, inputs de entrada requeridos, outputs variables de salida, y enlaces activos con sus descripciones específicas.

---

## Cómo Empezar

### Requisitos Previos
*   Tener instalado [NodeJS](https://nodejs.org/) (versión 14 o superior).

### 1. Compilar los Datos (Recomendado si editas la documentación)
Si realizas modificaciones en los archivos markdown dentro de `docs/systems/` o el grafo Mermaid de `docs/modelo_datos_conceptual.md`, debes compilar de nuevo la base de datos JSON:
```bash
npm run compile
```
*Esto ejecutará `node scripts/parse_systems.js` y actualizará `docs/data.json`.*

### 2. Iniciar el Servidor Local
Para correr el frontend interactivo en tu máquina de forma local, inicia el servidor estático:
```bash
npm start
```

### 3. Abrir la Aplicación
Una vez que el servidor esté corriendo, abre tu navegador favorito e ingresa a:
👉 **[http://localhost:3001](http://localhost:3001)**

---

## Desarrollo y Contribución

### Lógica de Mapeo del Parser
El script `scripts/parse_systems.js` automatiza la extracción de datos de la siguiente manera:
1.  **Descripción**: Toma el primer párrafo bajo la cabecera `## 1. Descripción General e Historia`.
2.  **Inputs**: Captura todas las palabras formateadas como código de bloque (entre ` ` ` backticks) en la sección `## 2. Parámetros de Entrada (Inputs)`.
3.  **Outputs**: Escanea la tabla markdown bajo la sección `## 3. Variables de Salida y Componentes (Variables)` y extrae la variable de la primera columna y su significado de la última.
4.  **Relaciones Cruzadas**: Analiza la sintaxis de conexiones de Mermaid (`AO -->|Label| DH`) contenida en el bloque de código Mermaid de `docs/modelo_datos_conceptual.md` para mapear los enlaces.
