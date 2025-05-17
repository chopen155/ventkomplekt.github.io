import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const AboutContactSection = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">О компании ООО "Комплект"</h2>
              <p className="text-lg text-gray-600 mb-4">
                Компания ООО "Комплект" специализируется на проектировании, монтаже и обслуживании систем вентиляции и кондиционирования для объектов различного назначения.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Мы работаем на рынке климатического оборудования более 15 лет и за это время реализовали сотни проектов различной сложности – от небольших офисов до крупных промышленных объектов.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Наша команда состоит из опытных инженеров и технических специалистов, которые постоянно совершенствуют свои навыки и следят за новейшими технологиями в области климатического оборудования.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary text-2xl font-bold">15+</div>
                  <div className="text-gray-600">лет опыта</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary text-2xl font-bold">500+</div>
                  <div className="text-gray-600">реализованных проектов</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary text-2xl font-bold">50+</div>
                  <div className="text-gray-600">специалистов</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary text-2xl font-bold">100%</div>
                  <div className="text-gray-600">гарантия качества</div>
                </div>
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Подробнее о компании <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            <div className="relative">
              <img 
                src="/src/assets/images/about/about-image.jpg" 
                alt="О компании" 
                className="rounded-lg shadow-xl w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src = "/src/assets/images/products/condenser_unit.jpg";
                }}
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="font-bold text-lg mb-2">Наша миссия</p>
                <p>Создавать комфортные условия для жизни и работы с помощью современных климатических решений</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готовы обсудить ваш проект или ответить на любые вопросы о наших услугах
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                    <p className="text-gray-600">+7 (495) 765-43-21</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600">info@komplekt-vent.ru</p>
                    <p className="text-gray-600">sales@komplekt-vent.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Адрес</h3>
                    <p className="text-gray-600">г. Москва, ул. Примерная, д. 123, офис 456</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Режим работы</h3>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-gray-600">Сб-Вс: выходной</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="Введите ваш email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="Введите ваш телефон"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Тема
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  >
                    <option value="">Выберите тему обращения</option>
                    <option value="consultation">Консультация по услугам</option>
                    <option value="project">Обсуждение проекта</option>
                    <option value="service">Сервисное обслуживание</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="Введите ваше сообщение"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                  >
                    Отправить сообщение
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContactSection;
