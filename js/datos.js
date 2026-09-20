/* =====================================================
   >>> EDITA SOLO ESTE ARCHIVO <<<
   Todo lo que ve el invitado sale de aquí.
   Guarda, sube a GitHub y listo.
   ===================================================== */

const DATOS = {

  /* ---------- LOS NOVIOS ----------
     nombre1 va arriba, nombre2 abajo. Si los quieres al revés,
     nada más intercambia los dos textos.                        */
  nombre1: "Giovanni",
  nombre2: "María",
  frase: "Te elijo hoy y por el resto de mi vida",

  /* ---------- FECHA DE LA BODA ----------
     Formato: "AÑO-MES-DÍAThora:minuto:00-06:00"
     El -06:00 es la zona horaria del centro de México.     */
  fechaISO: "2026-12-19T15:00:00-06:00",

  /* Cómo se escribe la fecha en los círculos que se raspan */
  fechaTexto: {
    dia:  "19",
    mes:  "Diciembre",
    anio: "2026",
    diaSemana: "Sábado"
  },

  /* ---------- CEREMONIA ---------- */
  ceremonia: {
    hora:      "3:00 PM",
    lugar:     "Parroquia San Miguel Arcángel",
    direccion: "Calle y número, Ciudad",
    // Pega aquí el enlace de Google Maps del lugar
    mapa:      "https://maps.google.com/?q=Parroquia+San+Miguel+Arcangel"
  },

  /* ---------- RECEPCIÓN ---------- */
  recepcion: {
    hora:      "5:00 PM",
    lugar:     "Hacienda Los Naranjos",
    direccion: "Calle y número, Ciudad",
    mapa:      "https://maps.google.com/?q=Hacienda+Los+Naranjos"
  },

  /* ---------- CONFIRMACIÓN (RSVP) ----------
     WhatsApp: código de país + número, sin espacios ni signos.
     México celular = 52 + 10 dígitos.  Ej: "5214771234567"      */
  whatsapp: "5210000000000",
  fechaLimiteRSVP: "30 de noviembre",

  /* Si prefieres un Google Form en lugar de WhatsApp,
     pon aquí el enlace. Si lo dejas vacío (""), se usa WhatsApp. */
  formularioRSVP: "",
  formularioCancion: "",

  /* ---------- DRESS CODE ---------- */
  dressCode: {
    tipo: "Formal / Etiqueta",
    nota: "Colores reservados para los novios: blanco y beige.",
    detalle: [
      "<strong>Ellas:</strong> vestido largo o midi.",
      "<strong>Ellos:</strong> traje y corbata.",
      "El jardín tiene pasto: considera el tacón."
    ]
  },

  /* ---------- TIPS Y NOTAS ---------- */
  tips: [
    "<strong>Niños:</strong> celebración solo para adultos.",
    "<strong>Regalos:</strong> tu presencia es nuestro mejor regalo; si deseas obsequiarnos algo, habrá lluvia de sobres.",
    "<strong>Estacionamiento:</strong> disponible en el lugar."
  ],

  /* ---------- GALERÍA DE FOTOS ----------
     Pon tus fotos en assets/img/ con estos nombres
     (o cambia los nombres aquí).                        */
  galeria: [
    { src: "assets/img/1.jpg",  texto: "" },
    { src: "assets/img/2.jpg",  texto: "" },
    { src: "assets/img/3.jpg",  texto: "" },
    { src: "assets/img/5.jpg",  texto: "" },
    { src: "assets/img/6.jpg",  texto: "" },
    { src: "assets/img/7.jpg",  texto: "" }
  ]
};
