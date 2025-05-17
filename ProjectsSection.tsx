import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Бизнес-центр "Меркурий"',
      description: 'Комплексное оснащение системами вентиляции и кондиционирования бизнес-центра класса А площадью 12 000 м².',
      image: '/src/assets/images/projects/project1.jpg',
      category: 'Коммерческая недвижимость'
    },
    {
      title: 'Жилой комплекс "Панорама"',
      description: 'Проектирование и монтаж систем климат-контроля в жилом комплексе из 5 многоквартирных домов.',
      image: '/src/assets/images/projects/project2.jpg',
      category: 'Жилая недвижимость'
    },
    {
      title: 'Торговый центр "Галерея"',
      description: 'Установка промышленных систем вентиляции и кондиционирования в торговом центре площадью 25 000 м².',
      image: '/src/assets/images/projects/project3.jpg',
      category: 'Торговые площади'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши проекты</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реализованные проекты по установке систем вентиляции и кондиционирования для различных объектов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image || '/src/assets/images/products/condenser_unit.jpg'} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
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
            Все проекты
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
