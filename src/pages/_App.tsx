import { useEffect } from 'preact/hooks';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSmoothScroll } from '@/hooks/useGSAP';
import { refreshScrollTrigger } from '@/utils/animations';

// Componentes
import NavBar from '@/components/NavBar';
import Spliter from '@/components/Spliter';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import History from '@/components/History';
import VisionMision from '@/components/VisionAndMision';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

// Registrar plugins de GSAP
gsap.registerPlugin(ScrollTrigger);

function App() {
   // Hook para scroll suave
   useSmoothScroll();

   useEffect(() => {
      // Configuración inicial de GSAP
      gsap.config({
         force3D: true,
         nullTargetWarn: false,
      });

      // Configuración de ScrollTrigger
      ScrollTrigger.config({
         autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
         ignoreMobileResize: true,
      });

      // Animación de carga inicial
      gsap.fromTo(
         'body',
         { opacity: 0 },
         {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
         }
      );

      // Refresh ScrollTrigger después de que todo esté cargado
      const timer = setTimeout(() => {
         refreshScrollTrigger();
      }, 100);

      // Cleanup
      return () => {
         clearTimeout(timer);
         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
   }, []);

   return (
      <div className="min-h-screen bg-fruco-black text-white overflow-x-hidden">
         {/* Navegación flotante (opcional) */}
         <NavBar />

         {/* Secciones principales */}
         <main>
            {/* Hero Section */}
            <HeroSection />

            {/* Separador visual */}
            <Spliter />

            {/* Product Showcase */}
            <ProductShowcase />

            {/* Separador visual */}
            <Spliter />

            {/* History */}
            <History />

            {/* Separador visual */}
            <Spliter />

            {/* Visión y Misión */}
            <VisionMision />

            {/* Separador visual */}
            <Spliter />

            {/* Call to Action */}
            <CallToAction />
         </main>

         {/* Footer minimalista */}
         <Footer />
      </div>
   );
}

export default App;
