import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: 'Комплексные решения в области климат-контроля',
      subtitle: 'Профессиональное проектирование, монтаж и обслуживание систем вентиляции и кондиционирования',
      image: '/src/assets/images/hero/hero-1.jpg',
      cta: 'Получить консультацию'
    },
    {
      title: 'Современные технологии для вашего комфорта',
      subtitle: 'Создаем идеальный микроклимат для жилых и коммерческих помещений',
      image: '/src/assets/images/products/condenser_unit.jpg',
      cta: 'Наши услуги'
    },
    {
      title: 'Надежные системы вентиляции',
      subtitle: 'Качественное оборудование и профессиональный монтаж',
      image: '/src/assets/images/services/ventilation_pipes.jpg',
      cta: 'Наши проекты'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl mx-auto">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">{slide.subtitle}</p>
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-colors">
                {slide.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-10' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
