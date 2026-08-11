# Tarot (Simbólico / Arquetípico)

## 1. Descripción General e Historia
El Tarot es un sistema de baraja de 78 cartas utilizado para el análisis psicológico, la introspección y la adivinación. Sus orígenes históricos documentados se remontan al norte de Italia a mediados del siglo XV como un juego de cartas cortesano. No fue hasta finales del siglo XVIII (con Antoine Court de Gébelin) y el siglo XIX (con Eliphas Lévi) que se integró con la cábala, la astrología y el hermetismo. El sistema se compone de 22 **Arcanos Mayores** (que representan el desarrollo espiritual y las etapas del alma, conocido como el "Viaje del Loco") y 56 **Arcanos Menores** (que representan las circunstancias cotidianas y prácticas).

## 2. Parámetros de Entrada (Inputs)
A diferencia de los sistemas astrológicos y numerológicos, el Tarot no requiere datos de nacimiento fijos (a menos que se calcule la Carta Natal de Tarot). Sus parámetros de entrada dinámicos son:
1.  `pregunta_consulta` (Texto: La intención o el problema formulado por el consultante).
2.  `extraccion_cartas` (Lista de Cartas extraídas de la baraja y su orientación: Derecha o Invertida).
3.  `posiciones_tirada` (Esquema de la tirada elegida, ej. Cruz Celta, Tirada de 3 cartas: Pasado/Presente/Futuro).

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `carta_arcano_mayor` | Cualitativo | El Loco (0) a El Mundo (XXI). | Representa fuerzas arquetípicas profundas, karmas, lecciones espirituales o grandes hitos psicológicos. |
| `carta_arcano_menor` | Cualitativo | As a Diez, más figuras de la corte (Sota, Caballo, Reina, Rey) para cada uno de los 4 palos. | Circunstancias cotidianas, estados mentales transitorios o personas específicas involucradas. |
| `palo_arcano_menor` | Cualitativo | Bastos, Copas, Espadas, Oros. | El plano o elemento en el que se manifiesta la situación (Bastos=Fuego/Acción, Copas=Agua/Emociones, Espadas=Aire/Mente, Oros=Tierra/Materia). |
| `orientacion_carta` | Cualitativo | Derecha, Invertida. | Modifica la expresión de la carta (Derecha = flujo normal o manifestación externa; Invertida = bloqueo, energía interna, exceso o sombra). |
| `numero_carta` | Cuantitativo | 0 a 21 (Mayores); 1 a 10 y 11 a 14 (Menores). | Aporta la clave numerológica al significado de la carta en la tirada. |

## 4. Relaciones Internas (Relaciones)
*   **El Viaje del Loco**: Es la secuencia ordenada de los Arcanos Mayores (0 al 21), donde cada carta representa una transición o iniciación del Loco (el consultante) que aprende a integrarse con el Cosmos (El Mundo).
*   **Correspondencias de Palos y Elementos**: Conecta los arcanos menores a los cuatro planos de la experiencia (Cuerpo, Mente, Emociones, Voluntad).
*   **Posiciones y Dignidades**: Las cartas vecinas en una tirada se afectan entre sí. Por ejemplo, dos cartas de elementos incompatibles (ej. Copas/Agua y Bastos/Fuego) reducen la fuerza positiva de la otra, mientras que cartas complementarias la potencian.

## 5. Puntos de Intersección Externa (Interconexiones)
*   **Astrología Occidental**: Cada Arcano Mayor corresponde a un planeta o signo (ej. La Sacerdotisa = Luna, El Loco = Urano, El Diablo = Capricornio). Los Arcanos Menores numéricos (2 al 10) representan decanatos astrológicos específicos (ej. 3 de Espadas = Saturno en Libra).
*   **Cábala**: Las 22 cartas de los Arcanos Mayores representan directamente los 22 Senderos que conectan las 10 Sefirot en el Árbol de la Vida.
*   **Numerología**: El número de cada carta menor (del As al 10) comparte la esencia arquetípica de la vibración numerológica (ej. los Cuatro representan estabilidad y estructura en los palos).

## 6. Bibliografía y Referencias

### Fuentes Académicas y Literatura de Referencia
1.  **Waite, Arthur Edward** (1911). *The Pictorial Key to the Tarot*. La obra de referencia escrita por el creador del Tarot Rider-Waite, que codifica la simbología esotérica occidental de cada una de las 78 cartas.
    *   [Ver en Amazon](https://www.amazon.com/dp/0913866083) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Arthur+Edward+Waite+Pictorial+Key+Tarot)
2.  **Pollack, Rachel** (1980). *Seventy-Eight Degrees of Wisdom: A Book of Tarot*. Considerada la "biblia moderna" del Tarot, analiza las cartas desde una perspectiva psicológica y mítica junguiana.
    *   [Ver en Amazon](https://www.amazon.com/dp/1578636613) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Rachel+Pollack+Seventy+Eight+Degrees+Wisdom)
3.  **Jodorowsky, Alejandro & Costa, Marianne** (2004). *La Vía del Tarot* (*The Way of Tarot*). Un estudio detallado de la simbología del Tarot de Marsella y su aplicación en la psicomagia y el autoconocimiento.
    *   [Ver en Amazon](https://www.amazon.com/dp/1594770287) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Alejandro+Jodorowsky+La+Via+del+Tarot)

### Herramientas de Validación y Fuentes de Veracidad
*   **Motores de Cálculo y Librerías**:
    *   [rws-tarot-card-api](https://github.com/ekelen/tarot-api): API y base de datos estructurada en JSON de las cartas del Tarot Rider-Waite con descripciones de significados en posición normal e invertida.
    *   *Mapeo de Correspondencia Hermética (Golden Dawn)*: Tablas de asignación astrológica y elemental estandarizadas que relacionan cada arcano menor (del 2 al 10) con decanatos zodiacales fijos.
*   **Plataformas de Referencia y Verificación**:
    *   [Biddy Tarot](https://www.biddytarot.com): El recurso digital de referencia de significados e interpretaciones del Tarot.
    *   [Labyrinthos Tarot](https://labyrinthos.co): Base de datos de cartas y recursos didácticos de Tarot, que contiene el catálogo visual estructurado y las correspondencias de diferentes barajas clásicas.

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Interpretativo` (Simbólico / Oracular. Sorteo aleatorio PRNG de 78 Arcanos + hermenéutica cualitativa y semántica contextual) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source) |
| **Motores y Modelos Open Source** | Generador de entropía CSPRNG + RAG vectorial (`ChromaDB` / `Qdrant`) indexando los 78 Arcanos + LLMs Open Source (Llama-3.3-70B, Qwen-2.5-72B, DeepSeek-R1) |
