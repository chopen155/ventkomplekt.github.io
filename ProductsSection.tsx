import { ArrowRight } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      title: 'Кондиционеры',
      description: 'Современные системы кондиционирования для жилых и коммерческих помещений с различными функциями и мощностью.',
      image: '/src/assets/images/products/air_conditioner.jpg',
    },
    {
      title: 'Вентиляционные системы',
      description: 'Комплексные решения для организации эффективной вентиляции в помещениях любого назначения.',
      image: '/src/assets/images/services/ventilation_pipes.jpg',
    },
    {
      title: 'Тепловые насосы',
      description: 'Энергоэффективные системы отопления и охлаждения, использующие возобновляемые источники энергии.',
      image: '/src/assets/images/products/condenser_unit.jpg',
    },
  ];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наша продукция</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Предлагаем широкий ассортимент современного климатического оборудования от ведущих производителей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Весь каталог
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
