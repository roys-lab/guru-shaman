# Psicogenealogía (Árbol Transgeneracional)

## 1. Descripción General e Historia
La Psicogenealogía es un enfoque terapéutico holístico e instrumental que analiza el árbol genealógico del individuo para identificar la repetición de traumas, secretos familiares, duelos no resueltos y mandatos inconscientes. Desarrollado en la segunda mitad del siglo XX por terapeutas como la psicodramatista francesa Anne Ancelin Schützenberger (creadora del término *síndrome de aniversario*) y reformulado creativamente por Alejandro Jodorowsky bajo el nombre de **Metagenealogía**, este sistema sostiene que los seres humanos cargan con lealtades invisibles transgeneracionales, manifestando en sus propias vidas las asignaturas pendientes de sus ancestros.

## 2. Parámetros de Entrada (Inputs)
1.  `arbol_genealogico_datos` (Compuesto: Nombres completos, fechas de nacimiento y defunción, causas de muerte, profesiones y eventos traumáticos de padres, abuelos, bisabuelos, tíos y hermanos).

## 3. Variables de Salida y Componentes (Variables)

| Variable / Componente | Tipo de Valor | Dominio de Valores | Significado |
|---|---|---|---|
| `sindrome_aniversario` | Compuesto (Evento + Edad/Fecha) | Fechas de sucesos trágicos recurrentes (ej. muertes, accidentes o quiebras que ocurren a la misma edad o en la misma fecha en diferentes generaciones). | El patrón inconsciente de repetición del destino de un ancestro al alcanzar cierta fecha o ciclo de edad. |
| `linea_afinidad` | Cualitativo / Lista | Doble (gemelo simbólico), Heredero Universal, Yacente (fantasma), Línea de Reemplazo. | La relación estructural e inconsciente que une a un individuo con un ancestro específico basada en la coincidencia de nombres o fechas de nacimiento/defunción (+/- 10 días). |
| `mandato_familiar` | Cualitativo / Texto | Ejemplos: "No disfrutes", "No prosperes", "Sé el salvador", "No tengas hijos". | Reglas silenciosas e imperativos morales transmitidos de generación en generación que restringen la autorrealización del individuo. |

## 4. Relaciones Internas (Relaciones)
*   **Cálculo de Afinidades (El Genograma)**: Se compara la fecha de nacimiento de la persona con la fecha de nacimiento y muerte de sus ancestros. Si la diferencia es menor o igual a 10 días, se establece una afinidad de "Doble" o "Yacente", lo que implica que el individuo porta la carga kármica o la memoria inconclusa de ese ancestro.
*   **El Síndrome del Yacente**: Ocurre cuando un miembro de la familia nace poco tiempo después de la muerte de un ancestro (especialmente niños fallecidos prematuramente). El inconsciente familiar deposita la memoria del fallecido en el recién nacido, provocando en este estados crónicos de tristeza o parálisis vital.

## 5. Puntos de Intersección Externa (Interconexiones)
*   **Biodescodificación**: Los bloqueos o secretos silenciados en una generación (ej. un incesto o suicidio callado) se somatizan como enfermedades físicas o psiquiátricas en las generaciones siguientes.
*   **Numerología**: El análisis de las fechas de nacimiento del árbol transgeneracional revela la repetición de "Números kármicos" (13, 14, 16, 19) en los miembros de la misma línea de afinidad.
*   **Tarot**: Alejandro Jodorowsky integra el Tarot de Marsella en la metagenealogía para proyectar los arquetipos de los Arcanos Mayores sobre los roles del árbol familiar (ej. el Emperador representa al padre, la Sacerdotisa a la abuela).

## 6. Bibliografía y Referencias
1.  **Schützenberger, Anne Ancelin** (1998). *The Ancestor Syndrome: Transgenerational Psychotherapy and the Hidden Links in the Family Tree*. La obra fundacional académica de la psicogenealogía clínica que introduce el término "síndrome de aniversario".
    *   [Ver en Amazon](https://www.amazon.com/dp/0415919129) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Anne+Ancelin+Schutzenberger+Ancestor+Syndrome)
2.  **Jodorowsky, Alejandro & Costa, Marianne** (2011). *Metagenealogy: Self-Discovery through the Family Tree*. Un enfoque artístico e iniciático que propone actos de psicomagia para liberar al árbol de sus cargas repetitivas.
    *   [Ver en Amazon](https://www.amazon.com/dp/1594774445) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Alejandro+Jodorowsky+Metagenealogy)
3.  **Foor, Daniel** (2017). *Ancestral Medicine: Rituals for Personal and Family Healing*. Una guía que integra la psicogenealogía con prácticas chamánicas tradicionales de curación de linajes ancestrales.
    *   [Ver en Amazon](https://www.amazon.com/dp/1620555955) | [Ver en Google Scholar](https://scholar.google.com/scholar?q=Daniel+Foor+Ancestral+Medicine)

## 7. Naturaleza del Sistema y Automatización Self-Hosted

| Parámetro | Detalle / Especificación |
|---|---|
| **Naturaleza del Sistema** | `Interpretativo` (Transgeneracional / Grafos. Análisis de lealtades invisibles, síndromes de aniversario y repeticiones de patrones del clan) |
| **Servidor Propio (Self-Hosted)** | `Sí` (100% automatizable en servidor propio desplegando modelos de IA Open Source) |
| **Motores y Modelos Open Source** | Motor de análisis de grafos familiares en Python (`networkx`) + LLM Open Source para detección de patrones transgeneracionales |
