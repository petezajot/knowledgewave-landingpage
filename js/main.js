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
    "nav.privacy": "Privacidad On-Device",
    "nav.privacy_policy": "Política de Privacidad",
    "nav.download": "Descargar",
    "nav.terms": "Términos",

    // Audiences Section
    "audiences.badge": "CONFIDENCIALIDAD TOTAL · CASOS DE USO REALES",
    "audiences.title": "Diseñado para quienes la privacidad no es negociable",
    "audiences.desc": "Si manejas secretos de oficio, historiales clínicos o acuerdos comerciales, subir audios a servidores externos es un riesgo innecesario. KnowledgeWave mantiene todo en tu iPhone.",
    "audiences.legal.title": "Abogados & Despachos",
    "audiences.legal.desc": "Secreto profesional garantizado. Graba declaraciones, analiza contratos y prepara audiencias sin que ningún audio toque servidores de terceros ni viole acuerdos de confidencialidad.",
    "audiences.medical.title": "Médicos & Terapeutas",
    "audiences.medical.desc": "Consultas con pacientes y notas clínicas protegidas bajo privacidad absoluta. Cumple con la confidencialidad más exigente transcribiendo directamente en tu procesador Apple Silicon.",
    "audiences.journalism.title": "Periodistas & Creadores",
    "audiences.journalism.desc": "Protección irrompible para tus fuentes. Graba entrevistas de horas enteras en modo avión, transcribe sin conexión y obtén resúmenes ejecutivos en cualquier lugar del mundo.",
    "audiences.executives.title": "Ejecutivos & Juntas",
    "audiences.executives.desc": "Reuniones de estrategia, fusiones y balances financieros. Analiza acuerdos y sincroniza tareas a Recordatorios con IA local sin pagar suscripciones mensuales.",

    // Pricing Section
    "pricing.badge": "PAGA 1 VEZ, ÚSALA PARA SIEMPRE · CERO SUSCRIPCIONES",
    "pricing.title": "Sin cuotas mensuales. Sin trampas en la nube.",
    "pricing.desc": "¿Cansado de pagar suscripciones mensuales de $15 o $20 USD por herramientas que además envían tus audios a servidores externos? En KnowledgeWave pagas una sola vez y la app es tuya de por vida.",
    "pricing.plan.ribbon": "PAGO ÚNICO · DE POR VIDA",
    "pricing.plan.title": "KnowledgeWave Vitalicio",
    "pricing.plan.trial": "7 días de prueba completa incluidos",
    "pricing.plan.period": "USD · Pago único (Para siempre)",
    "pricing.f1": "Transcripción ilimitada con Whisper 100% Offline",
    "pricing.f2": "Resúmenes e Insights con IA local sin límites",
    "pricing.f3": "Document Hub: Lector y análisis de PDFs y Word",
    "pricing.f4": "Botón de Acción con pantalla apagada o bloqueada",
    "pricing.f5": "Micrófono automático de AirPods y Bluetooth",
    "pricing.f6": "Sincronización directa con Apple Reminders",
    "pricing.f7": "Cero servidores en la nube. Cero suscripciones",
    "pricing.cta": "Descargar con 7 Días Gratis",
    "pricing.comp.title": "Apps Típicas en la Nube",
    "pricing.comp.badge": "SUSCRIPCIÓN EN LA NUBE",
    "pricing.comp.subtitle": "El modelo abusivo de suscripción",
    "pricing.comp.period": "USD al año ($15/mes)",
    "pricing.cf1": "Cobros recurrentes mensuales de por vida",
    "pricing.cf2": "Tus audios y conversaciones viajan a la nube",
    "pricing.cf3": "Inutilizables sin conexión a internet o señal",
    "pricing.cf4": "Límites estrictos de minutos o cobros por token",
    "pricing.cf5": "Riesgo ético y legal de filtraciones de datos",
    "pricing.comp.summary": "Ahorras más del 95% desde el primer año y eres dueño de tu software.",

    // Hero
    "hero.badge": "100% PRIVACIDAD ON-DEVICE · INTELIGENCIA LOCAL",
    "hero.title": "Tus reuniones, notas y lecturas con <span class='gradient'>Inteligencia Artificial Local</span>",
    "hero.desc": "KnowledgeWave graba, transcribe y analiza tus ideas y documentos directamente en tu iPhone. Sin servidores externos, sin suscripciones a la nube y con máxima confidencialidad.",
    "hero.cta_appstore_sub": "Consíguelo en el",
    "hero.cta_appstore_main": "App Store",
    "hero.cta_explore": "Explorar Características",
    "hero.ios_req": "Diseñado para iOS 26+ · Optimizado para iPhone 15 & 16 Pro",

    // Features Section
    "features.badge": "Capacidades de Vanguardia",
    "features.title": "Potencia de escritorio en tu bolsillo",
    "features.desc": "Máxima velocidad de procesamiento, respuesta inmediata y bajo consumo de batería directamente en tu iPhone.",

    // Action Button Card
    "card.action.badge": "ACCESO INSTANTÁNEO · HARDWARE DE APPLE",
    "card.action.title": "Grabación con Pantalla Bloqueada y Botón de Acción",
    "card.action.desc": "Asigna KnowledgeWave desde la configuración de tu iPhone (Ajustes > Botón de Acción). Una vez configurado, inicia y detén grabaciones al instante manteniendo presionado el botón lateral, sin necesidad de desbloquear con Face ID ni abrir la app. Se activa con Live Activity en vivo y vibración háptica.",

    // Card Bluetooth & AirPods
    "card.bluetooth.title": "Micrófono Bluetooth & AirPods Automático",
    "card.bluetooth.desc": "Dicta con total libertad de manos libres mientras llevas tu iPhone en el bolsillo o en la mochila. KnowledgeWave detecta y prioriza automáticamente el micrófono de tus AirPods o cualquier auricular Bluetooth, con conmutación inteligente si te los quitas.",

    // Card Controls & Widgets
    "card.controls.title": "Widgets Interactivos & Centro de Control",
    "card.controls.desc": "Acceso instantáneo para iniciar o pausar notas de voz desde el Centro de Control de iOS y widgets interactivos en tu pantalla de inicio y bloqueo.",

    // Card 1: Whisper
    "card.whisper.title": "Transcripción Offline con Whisper",
    "card.whisper.desc": "Convierte horas de audio en texto con altísima fidelidad y soporte multilingüe sin necesitar conexión a internet.",

    // Card 2: Llama LLM
    "card.llama.title": "Resúmenes e Insights con Inteligencia Artificial",
    "card.llama.desc": "Genera resúmenes ejecutivos, extrae puntos clave estructurados y obtén respuestas rápidas procesadas 100% en la memoria de tu dispositivo.",

    // Card 3: Document Hub
    "card.dochub.title": "Document Hub & Lector Inteligente",
    "card.dochub.desc": "Importa documentos PDF o Word. Extrae su contenido, genera resúmenes automáticos y disfruta de una lectura fluida estilo e-reader.",

    // Card 4: TTS
    "card.tts.title": "Escucha tus Notas con Voz Natural",
    "card.tts.desc": "Text-to-Speech nativo con modulación de velocidad de hasta 3.0x y detección automática de idioma para estudiar o repasar en movimiento.",

    // Card 5: Reminders
    "card.reminders.title": "Exportación a Recordatorios de Apple",
    "card.reminders.desc": "La IA detecta compromisos y tareas pendientes en tus reuniones y te permite enviarlos a Apple Reminders con un solo toque.",

    // Card 6: Chat
    "card.chat.title": "Conversa con tus Notas",
    "card.chat.desc": "Hazle preguntas a tus grabaciones y documentos sobre acuerdos, cifras o dudas específicas con respuestas contextuales al instante.",

    // Gallery Section
    "gallery.badge": "RECORRIDO VISUAL",
    "gallery.title": "Diseñado exclusivamente para iOS",
    "gallery.desc": "Una experiencia rápida, elegante y diseñada para sentirse como en casa en tu iPhone.",
    "gallery.1.title": "Grabación Hi-Fi",
    "gallery.1.desc": "Captura nítida con visualizador de ondas y cancelación de ruido.",
    "gallery.2.title": "Biblioteca Organizada",
    "gallery.2.desc": "Búsqueda instantánea, categorías y estado de transcripción.",
    "gallery.3.title": "Transcripción Completa",
    "gallery.3.desc": "Texto exacto sincronizado con controles de reproducción.",
    "gallery.4.title": "Resúmenes Ejecutivos",
    "gallery.4.desc": "La esencia de tu reunión o clase sintetizada al instante.",
    "gallery.5.title": "Puntos Clave Estructurados",
    "gallery.5.desc": "Ideas centrales ordenadas con viñetas claras.",
    "gallery.6.title": "Traducción Multilingüe",
    "gallery.6.desc": "Detección inteligente y traducción local en el dispositivo.",
    "gallery.7.title": "Pregúntale a tu Nota",
    "gallery.7.desc": "Chat interactivo con IA para aclarar dudas de tu contenido.",
    "gallery.8.title": "Extracción de Tareas",
    "gallery.8.desc": "Detección de compromisos y envío directo a Recordatorios.",
    "gallery.9.title": "Document Hub",
    "gallery.9.desc": "Importación, lectura y análisis de PDFs o documentos Word.",

    // FAQ Section
    "faq.badge": "PREGUNTAS FRECUENTES",
    "faq.title": "Todo lo que necesitas saber",
    "faq.desc": "Transparencia absoluta sobre la privacidad, el funcionamiento y la tecnología de KnowledgeWave.",
    "faq.q1": "¿Mis grabaciones o documentos viajan a servidores en la nube?",
    "faq.a1": "No, jamás. KnowledgeWave opera con una arquitectura estricta 100% On-Device. Ni tus audios, ni tus transcripciones, ni tus archivos salen de tu iPhone.",
    "faq.q2": "¿La app funciona sin conexión a internet?",
    "faq.a2": "Sí. Tanto la transcripción con Whisper como la generación de resúmenes con IA local funcionan perfectamente en modo avión o sin señal de red.",
    "faq.q3": "¿Puedo grabar con el Botón de Acción con el iPhone bloqueado?",
    "faq.a3": "Sí, totalmente. Gracias a la integración nativa con App Intents, puedes mantener presionado el Botón de Acción con la pantalla apagada o bloqueada; la grabación iniciará de inmediato en segundo plano con una Live Activity en tu Lock Screen y vibración háptica, sin necesidad de desbloquear el teléfono.",
    "faq.q4": "¿Cómo funciona la sincronización con Recordatorios?",
    "faq.a4": "La inteligencia artificial detecta compromisos y tareas pendientes en tus conversaciones y te permite enviarlos a Apple Reminders con un solo toque.",
    "faq.q5": "¿Puedo grabar usando mis AirPods o auriculares Bluetooth?",
    "faq.a5": "Sí. KnowledgeWave detecta automáticamente cualquier auricular Bluetooth conectado (AirPods de cualquier generación, diademas o auriculares genéricos) y prioriza su micrófono para capturar tu voz con claridad mientras caminas o tienes el iPhone en el bolsillo.",

    // Privacy Banner
    "privacy.banner.title": "Tus datos nunca salen de tu iPhone",
    "privacy.banner.desc": "A diferencia de otras soluciones, KnowledgeWave no transmite tus grabaciones de voz, transcripciones ni documentos a servidores externos. Todo el cómputo de IA ocurre localmente en tu procesador Apple Silicon.",
    "privacy.banner.link": "Leer Política de Privacidad Completa →",

    // Footer
    "footer.desc": "La aplicación definitiva de notas de voz, lectura inteligente y productividad privada potenciada por inteligencia artificial local.",
    "footer.links_title": "Navegación",
    "footer.legal_title": "Legal",
    "footer.rights": "Todos los derechos reservados. Desarrollado con tecnología On-Device."
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
    "audiences.medical.desc": "Patient consultations and clinical session notes protected under total confidentiality. Meet strict medical privacy standards with local Apple Silicon processing.",
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
    "pricing.f1": "Unlimited Whisper transcription (100% Offline)",
    "pricing.f2": "Local AI summaries & key points with zero token limits",
    "pricing.f3": "Document Hub: Smart PDF and Word reader & analysis",
    "pricing.f4": "Action Button recording with screen locked or asleep",
    "pricing.f5": "Automatic AirPods and Bluetooth headset mic support",
    "pricing.f6": "1-tap direct export to Apple Reminders",
    "pricing.f7": "Zero cloud servers. Zero recurring subscriptions",
    "pricing.cta": "Download with 7-Day Free Trial",
    "pricing.comp.title": "Typical Cloud AI Apps",
    "pricing.comp.badge": "CLOUD SUBSCRIPTION",
    "pricing.comp.subtitle": "The predatory subscription model",
    "pricing.comp.period": "USD/year ($15/month)",
    "pricing.cf1": "Endless recurring monthly or yearly fees",
    "pricing.cf2": "Your voice memos and files sent to external servers",
    "pricing.cf3": "Completely broken without Wi-Fi or cellular signal",
    "pricing.cf4": "Minute limits, token caps, and surprise overage fees",
    "pricing.cf5": "Constant risk of security breaches and data leaks",
    "pricing.comp.summary": "Save over 95% starting in year one and truly own your software.",

    // Hero
    "hero.badge": "100% ON-DEVICE PRIVACY · LOCAL INTELLIGENCE",
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
    "card.action.badge": "INSTANT HARDWARE ACCESS · LOCK SCREEN READY",
    "card.action.title": "Action Button: Instant Record even when Locked",
    "card.action.desc": "Assign KnowledgeWave in your iPhone Settings (Settings > Action Button). Once configured, hold the side button with your screen turned off or locked to instantly capture thoughts. Runs seamlessly in the background with Live Activities and tactile haptics.",

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
    "faq.q3": "Can I record using the Action Button while my iPhone is locked?",
    "faq.a3": "Yes, absolutely. Thanks to native App Intents integration, you can hold the Action Button even with the screen completely off or locked. The recording starts instantly in the background with a Lock Screen Live Activity and haptic feedback—no Face ID or unlocking required.",
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
    "footer.rights": "All rights reserved. Built with private On-Device technology."
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
