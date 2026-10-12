/**
 * KnowledgeWave Microsite Scripts & Multi-Language Support
 */

const translations = {
  es: {
    // Nav
    "nav.features": "Funciones",
    "nav.audiences": "Profesionales",
    "nav.pricing": "Precios",
    "nav.faq": "Preguntas",
    "nav.cta": "Probar Gratis",
    "nav.screenshots": "Capturas",
    "nav.action_button": "Botón de Acción",
    "nav.privacy": "Privacidad Total",
    "nav.privacy_policy": "Política de Privacidad",
    "nav.download": "Descargar",
    "nav.terms": "Términos",

    // Audiences Section
    "audiences.badge": "CONFIDENCIALIDAD TOTAL · CASOS DE USO REALES",
    "audiences.title": "Diseñado para quienes la privacidad no es negociable",
    "audiences.desc": "Si manejas secretos de oficio, historiales clínicos o acuerdos comerciales, subir audios a servidores externos es un riesgo innecesario. KnowledgeWave mantiene todo seguro en tu iPhone.",
    "audiences.legal.title": "Abogados & Despachos",
    "audiences.legal.desc": "Secreto profesional garantizado. Graba declaraciones, analiza contratos y prepara audiencias sin que ningún audio toque servidores externos ni viole acuerdos de confidencialidad.",
    "audiences.medical.title": "Médicos & Terapeutas",
    "audiences.medical.desc": "Consultas con pacientes y notas clínicas protegidas bajo privacidad absoluta. Cumple con la confidencialidad médica más estricta procesando todo directamente en tu propio iPhone, sin enviar audio a internet.",
    "audiences.journalism.title": "Periodistas & Creadores",
    "audiences.journalism.desc": "Protección irrompible para tus fuentes. Graba entrevistas de horas enteras en modo avión, transcribe sin conexión y obtén resúmenes ejecutivos en cualquier lugar del mundo.",
    "audiences.executives.title": "Ejecutivos & Juntas",
    "audiences.executives.desc": "Reuniones de estrategia, acuerdos y números clave. Analiza decisiones y crea tareas en tu lista de Recordatorios con inteligencia artificial local, sin pagar suscripciones mensuales.",

    // Pricing Section
    "pricing.badge": "PAGA 1 VEZ, ÚSALA PARA SIEMPRE · CERO SUSCRIPCIONES",
    "pricing.title": "Sin cuotas mensuales. Sin trampas en la nube.",
    "pricing.desc": "¿Cansado de pagar suscripciones mensuales de $15 o $20 USD por herramientas que además envían tus audios a servidores externos? En KnowledgeWave pagas una sola vez y la app es tuya de por vida.",
    "pricing.plan.ribbon": "PAGO ÚNICO · DE POR VIDA",
    "pricing.plan.title": "KnowledgeWave Vitalicio",
    "pricing.plan.trial": "7 días de prueba completa incluidos",
    "pricing.plan.period": "USD · Pago único (Para siempre)",
    "pricing.f1": "Transcripción ilimitada de audio a texto sin internet",
    "pricing.f2": "Resúmenes e ideas clave con inteligencia artificial ilimitada",
    "pricing.f3": "Lector y análisis inteligente de archivos PDF y Word",
    "pricing.f4": "Botón lateral para grabar al instante con pantalla apagada",
    "pricing.f5": "Micrófono automático de AirPods y auriculares inalámbricos",
    "pricing.f6": "Sincronización directa con Recordatorios de Apple",
    "pricing.f7": "Cero servidores externos. Cero suscripciones mensuales",
    "pricing.cta": "Descargar con 7 Días Gratis",
    "pricing.comp.title": "Apps Típicas en la Nube",
    "pricing.comp.badge": "SUSCRIPCIÓN EN LA NUBE",
    "pricing.comp.subtitle": "El modelo abusivo de suscripción",
    "pricing.comp.period": "USD al año ($15/mes)",
    "pricing.cf1": "Cobros recurrentes mensuales de por vida",
    "pricing.cf2": "Tus audios y conversaciones viajan a servidores ajenos",
    "pricing.cf3": "Inutilizables sin conexión a internet o sin señal",
    "pricing.cf4": "Límites estrictos de minutos o cobros sorpresa por uso extra",
    "pricing.cf5": "Riesgo ético y legal de filtraciones de datos privados",
    "pricing.comp.summary": "Ahorras más del 95% desde el primer año y eres dueño de tu software.",

    // Hero
    "hero.badge": "100% PRIVADO EN TU IPHONE · INTELIGENCIA ARTIFICIAL LOCAL",
    "hero.title": "Tus reuniones, notas y lecturas con <span class='gradient'>Inteligencia Artificial Local</span>",
    "hero.desc": "KnowledgeWave graba, transcribe y analiza tus ideas y documentos directamente en tu iPhone. Sin servidores externos, sin suscripciones a la nube y con máxima confidencialidad.",
    "hero.cta_appstore_sub": "Consíguelo en el",
    "hero.cta_appstore_main": "App Store",
    "hero.cta_explore": "Explorar Funciones",
    "hero.ios_req": "Diseñado para iOS 26+ · Optimizado para iPhone 15 & 16 Pro",

    // Features Section
    "features.badge": "Capacidades de Vanguardia",
    "features.title": "Potencia de escritorio en tu bolsillo",
    "features.desc": "Máxima velocidad de procesamiento, respuesta inmediata y bajo consumo de batería directamente en tu iPhone.",

    // Action Button Card
    "card.action.badge": "ACCESO INSTANTÁNEO · BOTÓN LATERAL",
    "card.action.title": "Graba al Instante con Pantalla Bloqueada",
    "card.action.desc": "Configura el botón lateral de tu iPhone (Ajustes > Botón de Acción). Una vez listo, inicia y detén grabaciones al instante manteniendo presionado el botón, sin necesidad de desbloquear tu teléfono ni abrir la app. Verás la grabación activa en tu pantalla de bloqueo y sentirás una suave vibración que te confirma que empezó a grabar.",

    // Card Bluetooth & AirPods
    "card.bluetooth.title": "Micrófono de AirPods y Auriculares Inalámbricos",
    "card.bluetooth.desc": "Dicta con total libertad de manos libres mientras llevas tu iPhone en el bolsillo o en la mochila. KnowledgeWave detecta y usa automáticamente el micrófono de tus AirPods o auriculares inalámbricos, y cambia sin interrupciones si te los quitas.",

    // Card Controls & Widgets
    "card.controls.title": "Acceso Rápido desde tu Pantalla",
    "card.controls.desc": "Inicia o pausa notas de voz con un solo toque desde la pantalla de bloqueo o desde el Centro de Control de tu iPhone.",

    // Card 1: Whisper
    "card.whisper.title": "Transcripción de Audio a Texto sin Internet",
    "card.whisper.desc": "Convierte horas de voz en texto con altísima precisión y en varios idiomas, funcionando al 100% sin conexión a internet.",

    // Card 2: Llama LLM
    "card.llama.title": "Resúmenes e Ideas Clave con Inteligencia Artificial",
    "card.llama.desc": "Genera resúmenes ejecutivos, extrae los puntos más importantes y obtén respuestas rápidas procesadas directamente en tu iPhone.",

    // Card 3: Document Hub
    "card.dochub.title": "Centro de Documentos y Lectura Cómoda",
    "card.dochub.desc": "Importa documentos PDF o Word. Extrae su texto, obtén resúmenes automáticos y léelos cómodamente como en un libro digital.",

    // Card 4: TTS
    "card.tts.title": "Escucha tus Notas Leídas en Voz Alta",
    "card.tts.desc": "Tu teléfono te lee tus notas con voz natural. Puedes acelerar la velocidad hasta 3 veces para repasar o estudiar mientras manejas o caminas.",

    // Card 5: Reminders
    "card.reminders.title": "Envío Directo a Recordatorios de Apple",
    "card.reminders.desc": "La inteligencia artificial detecta compromisos y tareas pendientes en tus conversaciones y te permite agregarlas a tu lista de Recordatorios con un solo toque.",

    // Card 6: Chat
    "card.chat.title": "Pregúntale a tus Notas y Documentos",
    "card.chat.desc": "Hazle preguntas a tus grabaciones y archivos sobre acuerdos, fechas o dudas específicas y recibe respuestas exactas al instante.",

    // Gallery Section
    "gallery.badge": "RECORRIDO VISUAL",
    "gallery.title": "Diseñado exclusivamente para iPhone",
    "gallery.desc": "Una experiencia rápida, elegante y pensada para sentirse como una aplicación oficial de Apple.",
    "gallery.1.title": "Grabación Nítida",
    "gallery.1.desc": "Captura limpia con reducción de ruido ambiental y visualizador de sonido.",
    "gallery.2.title": "Biblioteca Organizada",
    "gallery.2.desc": "Búsqueda instantánea, etiquetas por temas y estado de tus notas.",
    "gallery.3.title": "Transcripción Completa",
    "gallery.3.desc": "Texto exacto sincronizado con la reproducción de audio.",
    "gallery.4.title": "Resúmenes Ejecutivos",
    "gallery.4.desc": "La esencia de tu reunión, consulta o clase sintetizada al instante.",
    "gallery.5.title": "Puntos Clave Estructurados",
    "gallery.5.desc": "Ideas principales organizadas en viñetas claras y fáciles de leer.",
    "gallery.6.title": "Traducción a Varios Idiomas",
    "gallery.6.desc": "Detección inteligente de idioma y traducción directa en tu teléfono.",
    "gallery.7.title": "Pregúntale a tu Nota",
    "gallery.7.desc": "Conversa con la inteligencia artificial para resolver dudas de tu contenido.",
    "gallery.8.title": "Extracción de Tareas",
    "gallery.8.desc": "Identifica compromisos pendientes y guárdalos en tus Recordatorios.",
    "gallery.9.title": "Lector de Documentos",
    "gallery.9.desc": "Importa, lee y analiza archivos PDF o Word con total facilidad.",

    // FAQ Section
    "faq.badge": "PREGUNTAS FRECUENTES",
    "faq.title": "Todo lo que necesitas saber",
    "faq.desc": "Claridad y transparencia absoluta sobre cómo protegemos tu privacidad.",
    "faq.q1": "¿Mis grabaciones o documentos viajan a servidores en internet?",
    "faq.a1": "No, jamás. Todo funciona directamente dentro de tu propio iPhone. Ni tus grabaciones de voz, ni tus textos, ni tus documentos salen de tu teléfono ni tocan servidores externos.",
    "faq.q2": "¿La app funciona sin conexión a internet o en modo avión?",
    "faq.a2": "Sí. Tanto la transcripción de audio a texto como los resúmenes con inteligencia artificial funcionan al 100% sin internet o en modo avión.",
    "faq.q3": "¿Puedo grabar con el botón lateral aunque mi iPhone esté bloqueado?",
    "faq.a3": "Sí, totalmente. Puedes mantener presionado el botón lateral incluso con la pantalla apagada o bloqueada; la grabación iniciará de inmediato sin necesidad de desbloquear tu teléfono. Verás un indicador activo en tu pantalla y sentirás una suave vibración que te confirma que está grabando.",
    "faq.q4": "¿Cómo funciona el envío a Recordatorios?",
    "faq.a4": "La inteligencia artificial detecta tareas y compromisos en tus conversaciones y te permite guardarlos en la app Recordatorios de tu iPhone con un solo toque.",
    "faq.q5": "¿Puedo grabar usando mis AirPods o auriculares inalámbricos?",
    "faq.a5": "Sí. KnowledgeWave detecta automáticamente cualquier auricular inalámbrico conectado (AirPods o cualquier otra marca) y usa su micrófono para que tu voz se escuche clara aunque lleves el iPhone guardado.",

    // Privacy Banner
    "privacy.banner.title": "Tus datos nunca salen de tu iPhone",
    "privacy.banner.desc": "A diferencia de otras aplicaciones que envían tus conversaciones a servidores en internet, KnowledgeWave procesa todo de forma 100% privada dentro de tu propio teléfono. Máxima confidencialidad garantizada.",
    "privacy.banner.link": "Leer Política de Privacidad Completa →",

    // Footer
    "footer.desc": "La aplicación definitiva de notas de voz, lectura inteligente y productividad privada sin suscripciones mensuales.",
    "footer.links_title": "Navegación",
    "footer.legal_title": "Legal",
    "footer.rights": "Todos los derechos reservados. Diseñado con privacidad total e inteligencia artificial local."
  },
  en: {
    // Nav
    "nav.features": "Features",
    "nav.audiences": "Professionals",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.cta": "Try Free",
    "nav.screenshots": "Screenshots",
    "nav.action_button": "Action Button",
    "nav.privacy": "On-Device Privacy",
    "nav.privacy_policy": "Privacy Policy",
    "nav.download": "Download",
    "nav.terms": "Terms",

    // Audiences Section
    "audiences.badge": "100% CONFIDENTIAL · REAL WORLD USE CASES",
    "audiences.title": "Built for professionals where privacy is non-negotiable",
    "audiences.desc": "If you handle professional secrets, clinical records, or executive negotiations, uploading audio to cloud servers is an unnecessary risk. KnowledgeWave keeps everything strictly on your iPhone.",
    "audiences.legal.title": "Lawyers & Legal Counsel",
    "audiences.legal.desc": "Guaranteed attorney-client privilege. Record client depositions, analyze case files, and prep for court with zero cloud exposure or NDA violations.",
    "audiences.medical.title": "Doctors & Therapists",
    "audiences.medical.desc": "Patient consultations and clinical session notes protected under total confidentiality. Meet strict medical privacy standards with your iPhone's local processor, without sending audio to the internet.",
    "audiences.journalism.title": "Journalists & Researchers",
    "audiences.journalism.desc": "Unbreakable source protection. Record multi-hour interviews in airplane mode, transcribe offline, and synthesize insights anywhere in the world.",
    "audiences.executives.title": "Executives & Boardrooms",
    "audiences.executives.desc": "Strategy sessions, M&A discussions, and financial reviews. Extract action items directly to Apple Reminders with on-device AI and zero monthly fees.",

    // Pricing Section
    "pricing.badge": "PAY ONCE, USE FOREVER · ZERO RECURRING FEES",
    "pricing.title": "No monthly subscriptions. No cloud traps.",
    "pricing.desc": "Tired of paying $15 to $20/month for tools that beam your private conversations to remote cloud servers? KnowledgeWave is a single purchase that belongs to you for life.",
    "pricing.plan.ribbon": "ONE-TIME PURCHASE · LIFETIME ACCESS",
    "pricing.plan.title": "KnowledgeWave Lifetime",
    "pricing.plan.trial": "Full 7-day free trial included",
    "pricing.plan.period": "USD · One-time payment (Lifetime)",
    "pricing.f1": "Unlimited voice-to-text transcription without internet",
    "pricing.f2": "AI summaries and key points with zero usage limits",
    "pricing.f3": "Smart PDF and Word document reader & analysis",
    "pricing.f4": "Side button recording even with screen turned off",
    "pricing.f5": "Automatic mic switching for AirPods and wireless headphones",
    "pricing.f6": "1-tap direct export to Apple Reminders",
    "pricing.f7": "Zero external servers. Zero recurring subscriptions",
    "pricing.cta": "Download with 7-Day Free Trial",
    "pricing.comp.title": "Typical Cloud AI Apps",
    "pricing.comp.badge": "CLOUD SUBSCRIPTION",
    "pricing.comp.subtitle": "The predatory subscription model",
    "pricing.comp.period": "USD/year ($15/month)",
    "pricing.cf1": "Endless recurring monthly or yearly fees",
    "pricing.cf2": "Your voice memos and files sent to external servers",
    "pricing.cf3": "Completely broken without Wi-Fi or cellular signal",
    "pricing.cf4": "Minute limits, extra usage fees, and surprise bills",
    "pricing.cf5": "Constant risk of security breaches and data leaks",
    "pricing.comp.summary": "Save over 95% starting in year one and truly own your software.",

    // Hero
    "hero.badge": "100% PRIVATE ON YOUR IPHONE · LOCAL ARTIFICIAL INTELLIGENCE",
    "hero.title": "Your meetings, notes and documents with <span class='gradient'>Local Artificial Intelligence</span>",
    "hero.desc": "KnowledgeWave records, transcribes, and analyzes your thoughts and files directly on your iPhone. Zero cloud servers, zero external subscriptions, complete confidentiality.",
    "hero.cta_appstore_sub": "Download on the",
    "hero.cta_appstore_main": "App Store",
    "hero.cta_explore": "Explore Features",
    "hero.ios_req": "Designed for iOS 26+ · Optimized for iPhone 15 & 16 Pro",

    // Features Section
    "features.badge": "Cutting-Edge Capabilities",
    "features.title": "Desktop power in your pocket",
    "features.desc": "Maximum processing speed, instant response, and low battery consumption directly on your iPhone.",

    // Action Button Card
    "card.action.badge": "INSTANT HARDWARE ACCESS · SIDE BUTTON",
    "card.action.title": "Record Instantly with Screen Locked",
    "card.action.desc": "Assign KnowledgeWave in your iPhone Settings (Settings > Action Button). Once configured, hold the side button even with your screen turned off or locked to instantly capture thoughts. You will see a live indicator on your screen and feel a gentle vibration confirming it is recording.",

    // Card: Bluetooth & AirPods
    "card.bluetooth.title": "AirPods & Bluetooth Mic Support",
    "card.bluetooth.desc": "Keep your iPhone in your pocket or backpack. KnowledgeWave automatically routes audio to your AirPods or Bluetooth headset microphone the moment you record.",

    // Card: Controls & Widgets
    "card.controls.title": "Interactive Widgets & Control Center",
    "card.controls.desc": "Quick-launch recordings directly from your iOS 18 / 26 Lock Screen, Home Screen interactive widgets, or the customizable Control Center.",

    // Card 1: Whisper
    "card.whisper.title": "Offline Transcription with Whisper",
    "card.whisper.desc": "Turn hours of audio into precise text with high fidelity and multilingual support without needing internet access.",

    // Card 2: Llama LLM
    "card.llama.title": "Summaries & Insights with On-Device AI",
    "card.llama.desc": "Generate executive summaries, extract structured key points, and get quick answers processed 100% in your device's memory.",

    // Card 3: Document Hub
    "card.dochub.title": "Document Hub & Smart Reader",
    "card.dochub.desc": "Import PDF or Word documents. Extract content, generate automatic insights, and enjoy a comfortable e-reader experience.",

    // Card 4: TTS
    "card.tts.title": "Listen to Notes with Natural Voice",
    "card.tts.desc": "Native Text-to-Speech with playback speed up to 3.0x and automatic language detection to review on the go.",

    // Card 5: Reminders
    "card.reminders.title": "Direct Apple Reminders Sync",
    "card.reminders.desc": "AI identifies commitments and tasks in your audio and syncs them to Apple Reminders with a single tap.",

    // Card 6: Chat
    "card.chat.title": "Chat with Your Notes",
    "card.chat.desc": "Ask questions about agreements, deadlines, or concepts directly to your recordings and get instant contextual answers.",

    // Gallery Section
    "gallery.badge": "VISUAL TOUR",
    "gallery.title": "Crafted Exclusively for iOS",
    "gallery.desc": "A fast, elegant experience designed to feel right at home on your iPhone.",
    "gallery.1.title": "Hi-Fi Recording",
    "gallery.1.desc": "Crystal clear sound with live waveform visualization and noise reduction.",
    "gallery.2.title": "Organized Library",
    "gallery.2.desc": "Instant search, smart categories, and transcription status tags.",
    "gallery.3.title": "Full Transcription",
    "gallery.3.desc": "Accurate spoken-to-text synced with interactive playback controls.",
    "gallery.4.title": "Executive Summaries",
    "gallery.4.desc": "The core essence of your meetings or lectures synthesized in seconds.",
    "gallery.5.title": "Structured Key Points",
    "gallery.5.desc": "Core takeaways organized neatly into readable bullet points.",
    "gallery.6.title": "Multilingual Translation",
    "gallery.6.desc": "Intelligent language detection and local translation right on device.",
    "gallery.7.title": "Ask Your Note",
    "gallery.7.desc": "Interactive AI chat to clarify details and extract answers from your content.",
    "gallery.8.title": "Action Items to Reminders",
    "gallery.8.desc": "Automatic task detection with 1-tap export to Apple Reminders.",
    "gallery.9.title": "Document Hub",
    "gallery.9.desc": "Import, read, and analyze PDFs or Word documents with ease.",

    // FAQ Section
    "faq.badge": "FREQUENTLY ASKED QUESTIONS",
    "faq.title": "Everything you need to know",
    "faq.desc": "Complete transparency regarding KnowledgeWave's on-device privacy, technology, and features.",
    "faq.q1": "Do my recordings or documents travel to cloud servers?",
    "faq.a1": "Never. KnowledgeWave operates under a strict 100% on-device architecture. Neither your audio, nor transcripts, nor imported files ever leave your iPhone.",
    "faq.q2": "Does the app work without an internet connection?",
    "faq.a2": "Yes. Both Whisper transcription and local AI summaries work completely offline in airplane mode with zero network access.",
    "faq.q3": "Can I record using the side button while my iPhone is locked?",
    "faq.a3": "Yes, absolutely. You can hold your iPhone's side button even with the screen off or locked; the recording starts immediately without needing Face ID or unlocking your phone. You'll see an active recording indicator on your screen and feel a gentle vibration confirming it's capturing audio.",
    "faq.q4": "How does syncing to Apple Reminders work?",
    "faq.a4": "On-device AI automatically identifies action items and commitments in your audio and lets you sync them to Apple Reminders with a single tap.",
    "faq.q5": "Can I record using my AirPods or Bluetooth headphones?",
    "faq.a5": "Yes. KnowledgeWave automatically detects any connected Bluetooth headset (AirPods, AirPods Pro/Max, over-ear headphones, or third-party earbuds) and prioritizes their microphone so your voice is captured crisply while walking or with your phone tucked away.",

    // Privacy Banner
    "privacy.banner.title": "Your data never leaves your iPhone",
    "privacy.banner.desc": "Unlike cloud-dependent tools, KnowledgeWave never transmits your recordings, transcripts, or documents to remote servers. All AI computation stays strictly local.",
    "privacy.banner.link": "Read Full Privacy Policy →",

    // Footer
    "footer.desc": "The ultimate voice memo, document hub, and private productivity app powered by local artificial intelligence.",
    "footer.links_title": "Navigation",
    "footer.legal_title": "Legal",
    "footer.rights": "All rights reserved. Designed with 100% privacy and local artificial intelligence."
  }
};

let currentLang = localStorage.getItem("kw_lang") || (navigator.language.startsWith("es") ? "es" : "en");

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("kw_lang", lang);

  // Update active state on buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Update translatable elements
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      elem.innerHTML = translations[lang][key];
    }
  });

  // Toggle bilingual sections if present (for Privacy and Terms)
  document.querySelectorAll("[data-lang-section]").forEach(section => {
    section.style.display = section.getAttribute("data-lang-section") === lang ? "block" : "none";
  });

  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });
});
