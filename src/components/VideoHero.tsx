import { gsap } from "gsap";
import { useEffect, useRef } from "preact/hooks";
import { useTranslations } from "@/hooks/useI18n";

interface VideoHeroProps {
  videoSrc?: string;
  posterSrc?: string;
}

const VideoHero = ({
  videoSrc = "/hero-video.mp4",
  posterSrc = "/hero-poster.png",
}: VideoHeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);
  const t = useTranslations();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        gsap.fromTo(
          videoRef.current,
          { opacity: 0, scale: 0.98 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            onComplete: () => {
              window.dispatchEvent(new CustomEvent("heroAnimationComplete"));
            },
          },
        );
      }

      // Animar el indicador de scroll
      if (scrollIndicatorRef.current) {
        gsap.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -10 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 1.5,
            ease: "power2.out",
          },
        );
      }

      // Animación de rebote continua solo para la flecha
      if (arrowRef.current) {
        gsap.to(arrowRef.current, {
          y: 10,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-full">
        <video
          ref={videoRef}
          className="h-[55vh] w-full object-cover"
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          style={{
            opacity: 0,
            willChange: "transform, opacity",
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>

        {/* Indicador de scroll */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 h-16 -translate-x-1/2 opacity-0"
        >
          <span className="block text-center text-sm font-medium tracking-wider text-white drop-shadow-lg">
            {t.hero.scrollIndicator}
          </span>
          <svg
            ref={arrowRef}
            className="absolute top-6 left-1/2 h-6 w-6 -translate-x-1/2 text-white drop-shadow-lg"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
