/* =========================================================
   HUÁNUCO TRAVEL — Interacciones (JavaScript vanilla)
   ========================================================= */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  /* ---------------------------------------------------------
     Fotografías: Wikimedia Commons (licencias libres).
     Special:FilePath redirige al archivo real; ?width pide
     una versión redimensionada.
     --------------------------------------------------------- */
  var COMMONS = "https://commons.wikimedia.org/wiki/Special:FilePath/";
  function photo(file, width) {
    return COMMONS + encodeURIComponent(file).replace(/%2C/g, ",") + "?width=" + (width || 1600);
  }

  /* ---------------------------------------------------------
     Datos de los destinos
     ref: true = imagen referencial del entorno (no del lugar exacto)
     --------------------------------------------------------- */
  var DESTINOS = [
    {
      id: "kotosh",
      nombre: "Kotosh",
      subtitulo: "Templo de las Manos Cruzadas",
      ubicacion: "A unos 5 km de la ciudad de Huánuco",
      tag: "Arqueología",
      fotos: [
        "Templo_de_las_Manos_Cruzadas,_Kotosh,_Huánuco.jpg",
        "Templo_de_las_Manos_Cruzadas_de_Kotosh.jpg",
        "Ruines_des_del_Templo_de_las_Manos_Cruzadas_de_Kotosh.jpg"
      ],
      desc: "Uno de los sitios arqueológicos más antiguos de los Andes peruanos. Su célebre Templo de las Manos Cruzadas debe su nombre a un relieve de barro con dos antebrazos cruzados, símbolo del patrimonio de Huánuco.",
      datos: [
        "Sitio del periodo precerámico, con más de 4 000 años de antigüedad",
        "Recinto ceremonial con nichos y el relieve de las manos cruzadas",
        "Visita ideal de medio día desde la ciudad de Huánuco"
      ],
      mapa: "Kotosh, Huánuco, Perú"
    },
    {
      id: "lechuzas",
      nombre: "Cueva de las Lechuzas",
      ubicacion: "Parque Nacional Tingo María, Leoncio Prado",
      tag: "Cuevas",
      fotos: [
        "Entrada_a_la_zona_turística_de_la_Cueva_de_las_Lechuzas_del_Parque_Nacional_Tingo_María.jpg",
        "Pont_penjant_sobre_el_riu_Monzon_a_l'entrada_de_l'entorn_turístic_de_la_Cueva_de_las_Lechuzas.jpg",
        "Riu_Monzon_a_la_zona_del_Centro_Turístico_de_la_Cueva_de_las_Lechuzas_al_Parc_Nacional_de_Tingo_María02.jpg"
      ],
      desc: "Gran caverna de piedra caliza al pie de la Bella Durmiente. En su interior viven colonias de guácharos, aves nocturnas que habitan en la oscuridad, entre estalactitas y estalagmitas.",
      datos: [
        "Hogar del guácharo, ave nocturna que habita en cavernas",
        "Se accede cruzando el puente colgante sobre el río Monzón",
        "Dentro del Parque Nacional Tingo María"
      ],
      mapa: "Cueva de las Lechuzas, Tingo María, Huánuco"
    },
    {
      id: "bella-durmiente",
      nombre: "Bella Durmiente",
      ubicacion: "Tingo María, Leoncio Prado",
      tag: "Montaña",
      fotos: [
        "Muntanya_la_Bella_Durmiente_entre_Tingo_María_i_el_Parc_Nacional_de_Tingo_María.jpg",
        "Bella_Durmiente_TM-Peru-1.jpg",
        "Mi_bella_durmiente,_Tingo_María,_Huánuco,_Perú.jpg"
      ],
      desc: "La cadena de montañas cubierta de selva cuya silueta recuerda a una mujer recostada. Es el emblema de Tingo María y se contempla desde la ciudad y sus miradores.",
      datos: [
        "Silueta montañosa con forma de mujer dormida",
        "Forma parte del Parque Nacional Tingo María",
        "Vista privilegiada desde el Mirador de la Cruz"
      ],
      mapa: "Bella Durmiente, Tingo María, Huánuco"
    },
    {
      id: "parque-tingo-maria",
      nombre: "Parque Nacional Tingo María",
      ubicacion: "Provincia de Leoncio Prado",
      tag: "Selva alta",
      fotos: [
        "Pont_penjant_sobre_el_riu_Monzon_a_l'entrada_de_l'entorn_turístic_de_la_Cueva_de_las_Lechuzas.jpg",
        "Riu_Monzon_a_la_zona_del_Centro_Turístico_de_la_Cueva_de_las_Lechuzas_al_Parc_Nacional_de_Tingo_María02.jpg",
        "Carretera_18A_a_Tingo_María_des_del_Mirador_de_la_Cruz03.jpg"
      ],
      desc: "Creado en 1965, es uno de los parques nacionales más antiguos del Perú. Protege la Bella Durmiente, la Cueva de las Lechuzas y los bosques de selva alta que bordea el río Monzón.",
      datos: [
        "Área natural protegida desde 1965",
        "Incluye la Bella Durmiente y la Cueva de las Lechuzas",
        "Bosques tropicales a orillas del río Monzón"
      ],
      mapa: "Parque Nacional Tingo María, Huánuco"
    },
    {
      id: "santa-carmen",
      nombre: "Catarata Santa Carmen",
      ubicacion: "A unos 8 km al sureste de Tingo María",
      tag: "Catarata",
      ref: true,
      fotos: [
        "Riu_Monzon_a_la_zona_del_Centro_Turístico_de_la_Cueva_de_las_Lechuzas_al_Parc_Nacional_de_Tingo_María02.jpg",
        "Carretera_18A_a_Tingo_María_des_del_Mirador_de_la_Cruz03.jpg"
      ],
      desc: "Una caída de agua rodeada de vegetación, en la localidad de Santa Carmen. Antes de la catarata principal se encuentra La Piscina, una poza natural ideal para refrescarse.",
      datos: [
        "Alrededor de 830 m s. n. m.",
        "Unos 30 minutos desde la ciudad de Tingo María",
        "Pozas naturales para bañarse"
      ],
      mapa: "Catarata Santa Carmen, Tingo María"
    },
    {
      id: "milagros",
      nombre: "Laguna de los Milagros",
      ubicacion: "Distrito José Crespo y Castillo, Leoncio Prado",
      tag: "Laguna",
      ref: true,
      fotos: [
        "Carretera_18A_a_Tingo_María_des_del_Mirador_de_la_Cruz03.jpg",
        "Riu_Monzon_a_la_zona_del_Centro_Turístico_de_la_Cueva_de_las_Lechuzas_al_Parc_Nacional_de_Tingo_María02.jpg"
      ],
      desc: "Una laguna rodeada de selva en el caserío de Los Milagros. Forma parte del corredor turístico de Tingo María junto a la Catarata Santa Carmen y el Mirador de la Cruz.",
      datos: [
        "Cerca de 30 minutos en auto desde Tingo María",
        "Breve caminata desde el caserío hasta la laguna",
        "Parte del Corredor Turístico Tingo María"
      ],
      mapa: "Laguna de los Milagros, Tingo María"
    },
    {
      id: "pavas",
      nombre: "Cueva de las Pavas",
      ubicacion: "Distrito Mariano Dámaso Beraún, Leoncio Prado",
      tag: "Balneario",
      ref: true,
      fotos: [
        "Pont_penjant_sobre_el_riu_Monzon_a_l'entrada_de_l'entorn_turístic_de_la_Cueva_de_las_Lechuzas.jpg",
        "Riu_Monzon_a_la_zona_del_Centro_Turístico_de_la_Cueva_de_las_Lechuzas_al_Parc_Nacional_de_Tingo_María02.jpg"
      ],
      desc: "Un balneario natural en la selva alta, donde el agua ha tallado una quebrada entre rocas y vegetación. Sus pozas de aguas cristalinas son perfectas para nadar.",
      datos: [
        "Quebrada con pozas de aguas cristalinas",
        "En la zona de amortiguamiento del Parque Nacional Tingo María",
        "Excursión clásica desde Tingo María"
      ],
      mapa: "Cueva de las Pavas, Tingo María"
    },
    {
      id: "huanuco-pampa",
      nombre: "Huánuco Pampa",
      subtitulo: "Complejo arqueológico",
      ubicacion: "La Unión, provincia de Dos de Mayo",
      tag: "Inca",
      fotos: [
        "Huánuco_Pampa_Archaeological_site_-_doorway.jpg",
        "Huanuco_Pampa.jpg"
      ],
      desc: "Uno de los centros administrativos incas más grandes del Tahuantinsuyo, construido sobre una amplia meseta a unos 3 600 m de altitud y atravesado por el Qhapaq Ñan, el camino inca.",
      datos: [
        "Plaza monumental con un gran ushnu ceremonial",
        "Portadas incas de piedra finamente labrada",
        "Parte de la red vial del Qhapaq Ñan"
      ],
      mapa: "Huánuco Pampa, La Unión, Huánuco"
    },
    {
      id: "huayhuash",
      nombre: "Cordillera Huayhuash",
      ubicacion: "Límite de Huánuco, Áncash y Lima",
      tag: "Nevados",
      fotos: [
        "Cordillera_Huayuash_02552.JPG",
        "Cordillera_Huayhuash_Alpine_Circuit.jpg",
        "Jirishanca_and_Rondoy.jpg"
      ],
      desc: "Una de las cordilleras más espectaculares del mundo. Allí se alza el Yerupajá, la segunda cumbre más alta del Perú, rodeado de picos como Siula Grande y Jirishanca y de lagunas glaciares como Carhuacocha.",
      datos: [
        "Yerupajá: segunda montaña más alta del Perú",
        "Lagunas glaciares como Carhuacocha",
        "Circuito de trekking de varios días"
      ],
      mapa: "Cordillera Huayhuash, Perú"
    },
    {
      id: "carpish",
      nombre: "Bosque de Neblina de Carpish",
      ubicacion: "Entre Huánuco y Tingo María",
      tag: "Bosque",
      ref: true,
      fotos: [
        "Carretera_18A_a_Tingo_María_des_del_Mirador_de_la_Cruz03.jpg",
        "Muntanya_la_Bella_Durmiente_entre_Tingo_María_i_el_Parc_Nacional_de_Tingo_María.jpg"
      ],
      desc: "Bosque montano cubierto de neblina, protegido desde 2020 como la primera Área de Conservación Regional de Huánuco. Es refugio de aves y orquídeas endémicas, junto a la carretera hacia Tingo María.",
      datos: [
        "Área de Conservación Regional Bosque Montano de Carpish (2020)",
        "Alrededor de 50 000 hectáreas protegidas",
        "Aves y orquídeas endémicas"
      ],
      mapa: "Carpish, Huánuco, Perú"
    }
  ];

  var GALERIA = [
    { f: "Cordillera_Huayuash_02552.JPG", cap: "Laguna Carhuacocha · Cordillera Huayhuash", cls: "tile--big" },
    { f: "Yerupaja_Grande.jpg", cap: "Nevado Yerupajá", cls: "tile--tall" },
    { f: "Templo_de_las_Manos_Cruzadas,_Kotosh,_Huánuco.jpg", cap: "Templo de las Manos Cruzadas · Kotosh" },
    { f: "Huánuco_Pampa_Archaeological_site_-_doorway.jpg", cap: "Portadas incas · Huánuco Pampa" },
    { f: "Muntanya_la_Bella_Durmiente_entre_Tingo_María_i_el_Parc_Nacional_de_Tingo_María.jpg", cap: "La Bella Durmiente · Tingo María", cls: "tile--wide" },
    { f: "Pont_penjant_sobre_el_riu_Monzon_a_l'entrada_de_l'entorn_turístic_de_la_Cueva_de_las_Lechuzas.jpg", cap: "Río Monzón · Cueva de las Lechuzas" },
    { f: "Puente_Calicanto_Huánuco.jpg", cap: "Puente Calicanto · Huánuco" },
    { f: "Siula_Grande_West_Face.jpg", cap: "Siula Grande · Huayhuash", cls: "tile--tall" },
    { f: "Danza_de_los_Negritos_davant_la_Municipalidad_de_Huánuco02.jpg", cap: "Danza de los Negritos · Huánuco", cls: "tile--wide" },
    { f: "Catedral_de_Huánuco_des_de_la_plaza_de_Armas.jpg", cap: "Catedral de Huánuco" },
    { f: "Pachamanca_in_Peru.jpg", cap: "Pachamanca" },
    { f: "Cordillera_Huayhuash_Alpine_Circuit.jpg", cap: "Circuito Huayhuash", cls: "tile--wide" },
    { f: "Laguna_Jahuacocha.jpg", cap: "Laguna Jahuacocha · Huayhuash", cls: "tile--wide" },
    { f: "Carretera_18A_a_Tingo_María_des_del_Mirador_de_la_Cruz03.jpg", cap: "Vista desde el Mirador de la Cruz · Tingo María", cls: "tile--wide" }
  ];

  /* ---------------------------------------------------------
     Respaldo de imágenes: si una falla, prueba la siguiente;
     si ninguna carga, muestra un fondo verde con el nombre.
     Nunca se ven imágenes rotas.
     --------------------------------------------------------- */
  function attachFallback(img, files, width) {
    var queue = (files || []).slice();
    var label = img.getAttribute("data-label") || img.alt || "";
    function fail() {
      var next = queue.shift();
      if (next) {
        img.src = photo(next, width);
      } else {
        img.removeEventListener("error", fail);
        var box = img.parentElement;
        if (box) {
          box.classList.add("img-fallback");
          box.setAttribute("data-label", label);
        }
      }
    }
    img.addEventListener("error", fail);
    // Si ya falló antes de enganchar el evento
    if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) fail();
  }

  // Imágenes declaradas en el HTML
  document.querySelectorAll("img[data-fallbacks]").forEach(function (img) {
    var list = img.getAttribute("data-fallbacks").split("|").filter(Boolean);
    attachFallback(img, list, img.classList.contains("hero__img") ? 2400 : 1600);
  });

  /* ---------------------------------------------------------
     Tarjetas de destinos
     --------------------------------------------------------- */
  var grid = document.getElementById("destGrid");
  DESTINOS.forEach(function (d, i) {
    var card = document.createElement("article");
    card.className = "dest reveal";
    card.style.setProperty("--d", (i % 2) * 0.12 + "s");
    var wide = (i % 5) === 2;
    card.innerHTML =
      '<div class="dest__media"><img loading="lazy" alt=""></div>' +
      '<span class="dest__index">' + String(i + 1).padStart(2, "0") + " / 10</span>" +
      '<span class="dest__tag">' + d.tag + "</span>" +
      '<div class="dest__body">' +
        '<p class="dest__loc">' + d.ubicacion + "</p>" +
        '<h3 class="dest__title">' + d.nombre + "</h3>" +
        (d.subtitulo ? '<p class="dest__desc" style="margin-top:8px;font-weight:500">' + d.subtitulo + "</p>" : "") +
        '<p class="dest__desc">' + d.desc + "</p>" +
        '<div class="dest__foot">' +
          '<button class="btn btn--light" data-open-dest="' + d.id + '">Descubrir destino <span class="btn__arrow">→</span></button>' +
          (d.ref ? '<span class="dest__ref">Imagen referencial*</span>' : "") +
        "</div>" +
      "</div>";
    var img = card.querySelector("img");
    img.alt = d.nombre + (d.ref ? " (imagen referencial del entorno)" : "");
    img.setAttribute("data-label", d.nombre);
    var w = wide ? 2000 : 1400;
    img.src = photo(d.fotos[0], w);
    attachFallback(img, d.fotos.slice(1), w);
    grid.appendChild(card);
  });

  /* ---------------------------------------------------------
     Galería en mosaico
     --------------------------------------------------------- */
  var mosaic = document.getElementById("mosaic");
  GALERIA.forEach(function (g, i) {
    var tile = document.createElement("button");
    tile.type = "button";
    tile.className = "tile reveal " + (g.cls || "");
    tile.style.setProperty("--d", (i % 4) * 0.08 + "s");
    tile.setAttribute("aria-label", "Ampliar foto: " + g.cap);
    tile.dataset.index = i;
    tile.innerHTML = '<img loading="lazy" alt=""><span class="tile__cap">' + g.cap + "</span>";
    var img = tile.querySelector("img");
    img.alt = g.cap;
    img.setAttribute("data-label", g.cap);
    var w = g.cls === "tile--big" ? 1800 : 1100;
    img.src = photo(g.f, w);
    attachFallback(img, [], w);
    mosaic.appendChild(tile);
  });

  /* ---------------------------------------------------------
     Navegación: estado al hacer scroll, menú móvil, enlace activo
     --------------------------------------------------------- */
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");
  var links = document.querySelectorAll(".nav__links a");

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    document.body.classList.toggle("is-locked", open);
  }
  toggle.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
  links.forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });

  var sections = ["inicio", "nosotros", "destinos", "experiencias", "galeria", "contacto"]
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  function setActive(id) {
    links.forEach(function (a) {
      a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
    });
  }

  /* ---------------------------------------------------------
     Parallax del hero + estado de la barra (con rAF)
     --------------------------------------------------------- */
  var heroMedia = document.querySelector("[data-parallax]");
  var hero = document.querySelector(".hero");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ticking = false;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    nav.classList.toggle("is-scrolled", y > 40);

    if (heroMedia && !reduceMotion && y < hero.offsetHeight) {
      heroMedia.style.transform = "translate3d(0," + (y * 0.35).toFixed(1) + "px,0)";
    }

    // Sección activa
    var current = sections[0].id;
    var probe = y + window.innerHeight * 0.35;
    sections.forEach(function (s) { if (s.offsetTop <= probe) current = s.id; });
    setActive(current);
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  /* ---------------------------------------------------------
     Animaciones de entrada al hacer scroll
     --------------------------------------------------------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------------------------------------------------------
     Desplazamiento suave (compatibilidad con Safari antiguo)
     --------------------------------------------------------- */
  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute("href");
    if (id.length < 2) return;
    var target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    var top = target.getBoundingClientRect().top + window.pageYOffset - (id === "#inicio" ? 0 : 70);
    window.scrollTo({ top: id === "#inicio" ? 0 : top, behavior: reduceMotion ? "auto" : "smooth" });
    if (history.replaceState) history.replaceState(null, "", id);
  });

  /* ---------------------------------------------------------
     Utilidad para diálogos (foco y Escape)
     --------------------------------------------------------- */
  var lastFocus = null;
  function openDialog(el) {
    lastFocus = document.activeElement;
    el.hidden = false;
    document.body.classList.add("is-locked");
    requestAnimationFrame(function () { el.classList.add("is-open"); });
    var f = el.querySelector("button");
    if (f) f.focus({ preventScroll: true });
  }
  function closeDialog(el) {
    el.classList.remove("is-open");
    document.body.classList.remove("is-locked");
    setTimeout(function () { el.hidden = true; }, 350);
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }
  function trapFocus(el, e) {
    if (e.key !== "Tab") return;
    var f = el.querySelectorAll("a[href], button:not([disabled])");
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  /* ---------------------------------------------------------
     Modal "Descubrir destino"
     --------------------------------------------------------- */
  var modal = document.getElementById("destModal");
  var mImg = document.getElementById("modalImg");
  var mTitle = document.getElementById("modalTitle");
  var mLoc = document.getElementById("modalLoc");
  var mDesc = document.getElementById("modalDesc");
  var mFacts = document.getElementById("modalFacts");
  var mMap = document.getElementById("modalMap");

  function openDest(id) {
    var d = DESTINOS.filter(function (x) { return x.id === id; })[0];
    if (!d) return;
    var box = mImg.parentElement;
    box.classList.remove("img-fallback");
    var queue = d.fotos.slice(1);
    mImg.onerror = function () {
      var n = queue.shift();
      if (n) { mImg.src = photo(n, 1400); }
      else { mImg.onerror = null; box.classList.add("img-fallback"); box.setAttribute("data-label", d.nombre); }
    };
    mImg.src = photo(d.fotos[0], 1400);
    mImg.alt = d.nombre;
    mTitle.textContent = d.nombre + ".";
    mLoc.textContent = d.ubicacion;
    mDesc.textContent = d.desc + (d.ref ? " (La fotografía es referencial del entorno de Tingo María.)" : "");
    mFacts.innerHTML = "";
    d.datos.forEach(function (t) {
      var li = document.createElement("li");
      li.textContent = t;
      mFacts.appendChild(li);
    });
    mMap.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(d.mapa);
    openDialog(modal);
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-open-dest]");
    if (b) { e.preventDefault(); openDest(b.getAttribute("data-open-dest")); return; }
    if (!modal.hidden && e.target.closest("[data-close]")) {
      closeDialog(modal);
    }
  });

  /* ---------------------------------------------------------
     Lightbox de la galería
     --------------------------------------------------------- */
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbCap = document.getElementById("lbCap");
  var lbIndex = 0;

  function showLb(i) {
    lbIndex = (i + GALERIA.length) % GALERIA.length;
    var g = GALERIA[lbIndex];
    lbImg.classList.add("is-loading");
    lbImg.onload = function () { lbImg.classList.remove("is-loading"); };
    lbImg.onerror = function () { lbImg.classList.remove("is-loading"); lbImg.removeAttribute("src"); };
    lbImg.src = photo(g.f, 2000);
    lbImg.alt = g.cap;
    lbCap.textContent = g.cap + "  ·  " + (lbIndex + 1) + " / " + GALERIA.length;
  }

  mosaic.addEventListener("click", function (e) {
    var t = e.target.closest(".tile");
    if (!t) return;
    showLb(Number(t.dataset.index));
    openDialog(lb);
  });
  lb.addEventListener("click", function (e) {
    if (e.target.closest("[data-lb-close]") || e.target === lb) closeDialog(lb);
    else if (e.target.closest("[data-lb-prev]")) showLb(lbIndex - 1);
    else if (e.target.closest("[data-lb-next]")) showLb(lbIndex + 1);
  });

  // Deslizar en móviles
  var touchX = null;
  lb.addEventListener("touchstart", function (e) { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) showLb(lbIndex + (dx < 0 ? 1 : -1));
    touchX = null;
  });

  document.addEventListener("keydown", function (e) {
    if (!lb.hidden) {
      if (e.key === "Escape") closeDialog(lb);
      if (e.key === "ArrowRight") showLb(lbIndex + 1);
      if (e.key === "ArrowLeft") showLb(lbIndex - 1);
      trapFocus(lb, e);
    } else if (!modal.hidden) {
      if (e.key === "Escape") closeDialog(modal);
      trapFocus(modal, e);
    } else if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setMenu(false);
    }
  });

  /* ---------------------------------------------------------
     Formulario de contacto (validación en el navegador)
     --------------------------------------------------------- */
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  var MSG = {
    name: "Escribe tu nombre (mínimo 2 caracteres).",
    email: "Ingresa un correo electrónico válido.",
    message: "Cuéntanos un poco más (mínimo 10 caracteres)."
  };

  function validateField(input) {
    var field = input.closest(".field");
    var err = field.querySelector(".field__error");
    var value = input.value.trim();
    var ok = true;
    if (input.name === "email") ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
    else if (input.minLength > 0) ok = value.length >= input.minLength;
    field.classList.toggle("has-error", !ok);
    if (err) err.textContent = ok ? "" : MSG[input.name];
    return ok;
  }

  form.querySelectorAll("input[required], textarea[required]").forEach(function (input) {
    input.addEventListener("blur", function () { if (input.value) validateField(input); });
    input.addEventListener("input", function () {
      if (input.closest(".field").classList.contains("has-error")) validateField(input);
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var inputs = form.querySelectorAll("input[required], textarea[required]");
    var valid = true;
    var firstBad = null;
    inputs.forEach(function (i) {
      if (!validateField(i)) { valid = false; if (!firstBad) firstBad = i; }
    });
    status.classList.remove("is-success");
    if (!valid) {
      status.textContent = "Revisa los campos marcados.";
      status.style.color = "#b3412b";
      firstBad.focus();
      return;
    }
    var btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    btn.style.opacity = ".7";
    status.style.color = "";
    status.textContent = "Enviando…";
    var nombre = form.elements.namedItem("name").value.trim().split(" ")[0];
    setTimeout(function () {
      status.classList.add("is-success");
      status.textContent = "¡Gracias, " + nombre + "! Recibimos tu mensaje y te responderemos pronto.";
      form.reset();
      btn.disabled = false;
      btn.style.opacity = "";
    }, 900);
  });
})();
