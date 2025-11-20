import { useEffect, useState } from "preact/hooks";

interface CookieBannerProps {
  language?: string;
}

export default function CookieBanner({ language = "es" }: CookieBannerProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya ha dado su consentimiento
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Mostrar el banner después de un pequeño delay para la animación
      setTimeout(() => {
        setShowBanner(true);
        setTimeout(() => setIsVisible(true), 100);
      }, 1000);
    } else if (consent === "accepted") {
      // Si ya aceptó, cargar GTM
      loadGoogleTagManager();
    }
  }, []);

  const loadGoogleTagManager = () => {
    // Cargar Google Tag Manager
    const script = document.createElement("script");
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N8RTM4VP');`;
    document.head.appendChild(script);

    // Cargar noscript para GTM
    const noscript = document.createElement("noscript");
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-N8RTM4VP";
    iframe.height = "0";
    iframe.width = "0";
    iframe.style.display = "none";
    iframe.style.visibility = "hidden";
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);
  };

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    loadGoogleTagManager();
    closeBanner();
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    closeBanner();
  };

  const closeBanner = () => {
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  if (!showBanner) return null;

  const texts = {
    es: {
      title: "Uso de cookies",
      message:
        "Utilizamos cookies propias y de terceros (Google Analytics) para analizar el tráfico y mejorar tu experiencia en nuestro sitio web.",
      accept: "Aceptar cookies",
      reject: "Rechazar",
      more: "Más información",
    },
    en: {
      title: "Cookie usage",
      message:
        "We use our own and third-party cookies (Google Analytics) to analyze traffic and improve your experience on our website.",
      accept: "Accept cookies",
      reject: "Reject",
      more: "More information",
    },
    fr: {
      title: "Utilisation des cookies",
      message:
        "Nous utilisons nos propres cookies et ceux de tiers (Google Analytics) pour analyser le trafic et améliorer votre expérience sur notre site web.",
      accept: "Accepter les cookies",
      reject: "Refuser",
      more: "Plus d'informations",
    },
    pt: {
      title: "Uso de cookies",
      message:
        "Utilizamos cookies próprios e de terceiros (Google Analytics) para analisar o tráfego e melhorar sua experiência em nosso site.",
      accept: "Aceitar cookies",
      reject: "Rejeitar",
      more: "Mais informações",
    },
  };

  const t = texts[language as keyof typeof texts] || texts.es;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 max-w-md transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white border border-gray-300 rounded-lg shadow-xl">
        {/* Header */}
        <div className="bg-gray-100 px-6 py-3 border-b border-gray-300">
          <h3 className="text-gray-900 font-semibold text-base">{t.title}</h3>
        </div>

        {/* Contenido */}
        <div className="p-6 space-y-4">
          <p className="text-gray-600 text-sm leading-relaxed">{t.message}</p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={handleAccept}
              className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-200"
            >
              {t.accept}
            </button>
            <button
              onClick={handleReject}
              className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-4 rounded-md border border-gray-300 transition-colors duration-200"
            >
              {t.reject}
            </button>
          </div>

          {/* Enlace a política de cookies */}
          <a
            href={`/legal/${language}/politica-cookies`}
            className="block text-center text-gray-600 hover:text-gray-900 text-sm transition-colors underline"
          >
            {t.more}
          </a>
        </div>
      </div>
    </div>
  );
}
