# Huánuco Travel

Sitio web turístico del departamento de Huánuco (Perú). HTML5, CSS3 y JavaScript vanilla.

- `index.html` — estructura de la página
- `styles.css` — diseño (paleta, tipografía, responsive, animaciones)
- `script.js` — datos de los 10 destinos y de la galería, modal, lightbox, menú, parallax y formulario

Abre `index.html` en el navegador; no requiere instalación.

## Fotografías

Las 20 fotografías están en la carpeta `img/` (descargadas de Wikimedia Commons y redimensionadas),
así que la página funciona sin depender de servicios externos. Autores y licencias: `CREDITOS.md`.
Si alguna imagen faltara, la página muestra un panel verde con el nombre del lugar, nunca una imagen rota.

Catarata Santa Carmen, Laguna de los Milagros y Cueva de las Pavas aún no tienen fotos de libre uso en
Commons, por eso usan fotos **referenciales** del entorno de Tingo María (marcadas en la página).
Para Carpish se muestra una ave fotografiada en ese bosque. Para cambiar una foto, coloca el archivo en
`img/` y cambia el nombre en el arreglo `fotos` del destino en `script.js` (sin la extensión `.jpg`).

El formulario de contacto valida los datos en el navegador; para recibir mensajes reales hay que
conectarlo a un servicio (Formspree, un backend propio, etc.).
