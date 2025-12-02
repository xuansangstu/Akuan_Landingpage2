import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import ProductShowcase from './components/ProductShowcase';
import Offers from './components/Offers';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import { ChevronDown } from 'lucide-react';

// Reusable CTA Component between sections
const SectionCTA = ({ text = "MUA NGAY - GIẢM 45%" }: { text?: string }) => {
  const scrollToOffers = () => {
    const element = document.getElementById('offers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex justify-center py-8 bg-brand-white">
      <button 
        onClick={scrollToOffers}
        className="flex flex-col items-center group"
      >
        <span className="bg-brand-red text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform group-hover:scale-105 group-hover:bg-brand-darkRed flex items-center gap-2">
          {text}
        </span>
        <ChevronDown className="w-6 h-6 text-gray-400 mt-2 animate-bounce" />
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-brand-white text-gray-900 font-sans selection:bg-brand-yellow selection:text-brand-black">
      <Hero />
      <PainPoints />
      <SectionCTA text="XEM CÁC COMBO ƯU ĐÃI 🔥" />
      
      <ProductShowcase />
      <SectionCTA text="CHỌN MÓN NGAY 🍜" />
      
      <Offers />
      
      <SocialProof />
      <SectionCTA text="ĐỌC REVIEW XONG MUA LUÔN 😎" />
      
      <FAQ />
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;