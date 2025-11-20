import { useI18n, useTranslations } from "@/hooks/useI18n";

export default function Footer() {
  const t = useTranslations();
  const { language } = useI18n();

  const legalLinks = [
    { key: "legalNotice", slug: "aviso-legal" },
    { key: "cookiePolicy", slug: "politica-cookies" },
    { key: "privacyPolicy", slug: "politica-privacidad" },
    { key: "qualityPolicy", slug: "politica-calidad" },
    { key: "confidentialityPolicy", slug: "politica-confidencialidad" },
    { key: "ethicsChannel", slug: "canal-etico" },
    { key: "codeOfConduct", slug: "codigo-conducta" },
  ];

  return (
    <footer className="py-12 text-center border-t border-fruco-gold/10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Contact Info */}
        <div className="mb-6 text-gray-400 text-sm space-y-1">
          <p>
            {t.footer.location} |
            <a href="tel:660858090" className="hover:text-white">
              {" "}
              {t.footer.phone}
            </a>{" "}
            |
            <a href="mailto:info@fruco.es" className="hover:text-white">
              {" "}
              {t.footer.email}
            </a>
          </p>
        </div>

        {/* Legal Links */}
        <div className="mb-6">
          <nav className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs text-gray-400">
            {legalLinks.map((link, index) => (
              <>
                <a
                  key={link.key}
                  href={`/legal/${language}/${link.slug}`}
                  className="hover:text-fruco-gold transition-colors"
                >
                  {t.footer.legal[link.key as keyof typeof t.footer.legal]}
                </a>
                {index < legalLinks.length - 1 && (
                  <span className="text-gray-600">|</span>
                )}
              </>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © 2025 Fruco. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
