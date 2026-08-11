# GuruShaman: Benchmark y Metamodelo de Sistemas Holísticos

Este repositorio contiene la primera exploración exhaustiva y estructurada de los sistemas holísticos de autoconocimiento y desarrollo personal. El objetivo es mapear sus "cáscaras" estructurales (parámetros de entrada, variables calculadas, lógica de procesos e interconexiones) para sentar las bases de un motor de software unificado.

## Arquitectura Modular: El Concepto de "Interruptor Térmico"

Para permitir que la plataforma sea escalable y dinámica, diseñamos los sistemas bajo un **metamodelo orientado a datos**. Esto significa que los sistemas holísticos no se programan de manera rígida (hardcoded), sino que se registran en una base de datos conceptual como "módulos activos o inactivos". 

Cada sistema se puede "encender" o "apagar" (como una térmica eléctrica) a través de una bandera de estado (`active: boolean`). Al encender un sistema, el motor dinámico habilita:
1. Sus parámetros de entrada requeridos en el perfil del usuario.
2. Sus variables calculadas asociadas.
3. Sus algoritmos de cálculo.
4. Sus relaciones cruzadas con otros sistemas encendidos.

Si un sistema falla o se desea remover, apagar la térmica lo desconecta del motor de correspondencias y de la interfaz de usuario de forma inmediata y segura, sin romper el resto de las integraciones.

---

## Índice de Sistemas Holísticos Documentados

Haz clic en cada sistema para ver su estructura de información detallada, variables y fuentes bibliográficas:

| # | Sistema Holístico | Tipo de Sistema | Archivo de Estructura | Estado |
|---|-------------------|-----------------|-----------------------|--------|
| 01 | Astrología Occidental | Astrológico / Celeste | [01_astrologia_occidental.md](systems/01_astrologia_occidental.md) | 🟢 Activo |
| 02 | Diseño Humano | Síntesis Moderna | [02_diseno_humano.md](systems/02_diseno_humano.md) | 🟢 Activo |
| 03 | Astrología China | Astrológico / Lunar | [03_astrologia_china.md](systems/03_astrologia_china.md) | 🟢 Activo |
| 04 | Numerología | Vibracional / Matemático | [04_numerologia.md](systems/04_numerologia.md) | 🟢 Activo |
| 05 | Tarot | Simbólico / Arquetípico | [05_tarot.md](systems/05_tarot.md) | 🟢 Activo |
| 06 | Eneagrama | Psicológico / Dinámico | [06_eneagrama.md](systems/06_eneagrama.md) | 🟢 Activo |
| 07 | Cábala (Árbol de la Vida) | Místico / Estructural | [07_cabala_arbol_vida.md](systems/07_cabala_arbol_vida.md) | 🟢 Activo |
| 08 | I Ching | Adivinatorio / Binario | [08_i_ching.md](systems/08_i_ching.md) | 🟢 Activo |
| 09 | Sistema de Chakras | Energético / Corporal | [09_chakras.md](systems/09_chakras.md) | 🟢 Activo |
| 10 | Tzolkin Maya | Calendárico / Sagrado | [10_tzolkin_maya.md](systems/10_tzolkin_maya.md) | 🟢 Activo |
| 11 | Runas Nórdicas | Alfabético / Simbólico | [11_runas.md](systems/11_runas.md) | 🟢 Activo |
| 12 | Astrología Védica (Jyotish) | Astrológico / Sidéreo | [12_astrologia_vedica.md](systems/12_astrologia_vedica.md) | 🟢 Activo |
| 13 | Alquimia y los Cuatro Elementos | Filosófico / Elemental | [13_alquimia_elementos.md](systems/13_alquimia_elementos.md) | 🟢 Activo |
| 14 | Flores de Bach | Terapéutico / Emocional | [14_flores_bach.md](systems/14_flores_bach.md) | 🟢 Activo |
| 15 | Astrología Kabbalística | Místico / Astrológico | [15_astrologia_kabbalistica.md](systems/15_astrologia_kabbalistica.md) | 🟢 Activo |
| 16 | Horoscopo Celta | Natural / Botánico | [16_horoscopo_celta.md](systems/16_horoscopo_celta.md) | 🟢 Activo |
| 17 | Geometría Sagrada | Matemático / Estructural | [17_geometria_sagrada.md](systems/17_geometria_sagrada.md) | 🟢 Activo |
| 18 | Quiromancia | Corporal / Morfológico | [18_quiromancia.md](systems/18_quiromancia.md) | 🟢 Activo |
| 19 | Fisiognomía (Mian Xiang) | Corporal / Facial | [19_fisiognomia.md](systems/19_fisiognomia.md) | 🟢 Activo |
| 20 | Biodescodificación | Psicosomático / Biológico | [20_biodescodificacion.md](systems/20_biodescodificacion.md) | 🟢 Activo |
| 21 | Psicogenealogía | Transgeneracional / Árbol | [21_psicogenealogia.md](systems/21_psicogenealogia.md) | 🟢 Activo |
| 22 | Reiki | Energético / Vibracional | [22_reiki.md](systems/22_reiki.md) | 🟢 Activo |
| 23 | Teosofía | Esotérico / Evolutivo | [23_teosofia.md](systems/23_teosofia.md) | 🟢 Activo |
| 24 | Antroposofía | Filosófico / Biográfico | [24_antroposofia.md](systems/24_antroposofia.md) | 🟢 Activo |
| 25 | Eneagrama Sufí | Místico / Devocional | [25_eneagrama_sufi.md](systems/25_eneagrama_sufi.md) | 🟢 Activo |

---

## Archivos de Análisis y Arquitectura

*   **[modelo_datos_conceptual.md](modelo_datos_conceptual.md)**: Mapa conceptual que unifica la tabla de inputs del perfil y contiene el grafo/flujograma de la red de relaciones entre los 25 sistemas.
*   **[relaciones_cruzadas.md](relaciones_cruzadas.md)**: Análisis detallado de las correspondencias e intersecciones lógicas entre sistemas (por ejemplo, cómo el signo solar conecta con el sendero del Árbol de la Vida o los Chakras).
