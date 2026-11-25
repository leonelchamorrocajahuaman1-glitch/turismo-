# Huánuco Travel

Sitio web turístico del departamento de Huánuco (Perú). HTML5, CSS3 y JavaScript vanilla.

- `index.html` — estructura de la página
- `styles.css` — diseño (paleta, tipografía, responsive, animaciones)
- `script.js` — datos de los 10 destinos y de la galería, modal, lightbox, menú, parallax y formulario

Abre `index.html` en el navegador; no requiere instalación.

## Fotografías

Se cargan desde Wikimedia Commons (licencias libres) mediante `Special:FilePath`.
Si una foto no carga, se prueba la siguiente opción y, como último recurso, se muestra
un panel verde con el nombre del lugar (nunca una imagen rota).

Catarata Santa Carmen, Laguna de los Milagros, Cueva de las Pavas y Bosque de Carpish usan
por ahora fotos **referenciales** del entorno de Tingo María (están marcadas en la página).
Para reemplazarlas, edita el arreglo `fotos` del destino en `script.js` (nombre de archivo de
Commons o una ruta local como `img/santa-carmen.jpg`, ajustando la función `photo`).

El formulario de contacto valida los datos en el navegador; para recibir mensajes reales hay que
conectarlo a un servicio (Formspree, un backend propio, etc.).
