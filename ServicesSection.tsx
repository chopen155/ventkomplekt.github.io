import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Проектирование систем вентиляции',
      description: 'Профессиональное проектирование систем вентиляции и кондиционирования для объектов любой сложности с учетом всех технических требований и особенностей помещения.',
      icon: '📐',
    },
    {
      title: 'Монтаж и установка',
      description: 'Качественный монтаж вентиляционного оборудования и систем кондиционирования с соблюдением всех технических норм и стандартов.',
      icon: '🔧',
    },
    {
      title: 'Обслуживание и ремонт',
      description: 'Регулярное техническое обслуживание, диагностика и оперативный ремонт систем вентиляции и кондиционирования для обеспечения их бесперебойной работы.',
      icon: '🛠️',
    },
    {
      title: 'Поставка оборудования',
      description: 'Поставка современного вентиляционного оборудования и комплектующих от ведущих производителей с гарантией качества.',
      icon: '📦',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Предлагаем полный комплекс услуг по проектированию, монтажу и обслуживанию систем вентиляции и кондиционирования
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a 
                href="#" 
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Подробнее <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Все услуги
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
