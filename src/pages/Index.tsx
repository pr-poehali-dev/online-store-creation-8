import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      id: 1,
      name: 'Cinema Camera Pro',
      category: 'Камеры',
      price: '1 250 000 ₽',
      image: 'https://cdn.poehali.dev/projects/280f113e-3a27-449f-a08c-85178ed5b510/files/378b5903-631b-4dbd-b23f-c28e040c3b36.jpg'
    },
    {
      id: 2,
      name: 'Studio Light System',
      category: 'Освещение',
      price: '450 000 ₽',
      image: 'https://cdn.poehali.dev/projects/280f113e-3a27-449f-a08c-85178ed5b510/files/c0567a54-f9bc-49b7-b332-040fcef9dbeb.jpg'
    },
    {
      id: 3,
      name: 'Premium Lens Collection',
      category: 'Оптика',
      price: '890 000 ₽',
      image: 'https://cdn.poehali.dev/projects/280f113e-3a27-449f-a08c-85178ed5b510/files/4ef594ab-149c-4eda-b6d3-05dded2edce9.jpg'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-accent">STUDIO PRO</h1>
            <div className="flex gap-8">
              {['home', 'catalog', 'delivery', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wider transition-colors hover:text-accent ${
                    activeSection === section ? 'text-accent' : 'text-foreground/70'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-7xl md:text-8xl font-bold mb-6 text-accent">
              Профессиональное<br />студийное оборудование
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Эксклюзивные решения для фото и видео студий премиум-класса
            </p>
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-12 py-6"
              onClick={() => scrollToSection('catalog')}
            >
              Смотреть каталог
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="min-h-screen py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 text-accent">Каталог оборудования</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="bg-card border-border overflow-hidden hover:border-accent transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                  <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">{product.price}</span>
                    <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="min-h-screen py-24 flex items-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 text-accent">Премиум доставка</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-border rounded-lg hover:border-accent transition-colors">
              <Icon name="Truck" size={48} className="mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-bold mb-4">Бесплатная доставка</h3>
              <p className="text-muted-foreground">По Москве и области для заказов от 500 000 ₽</p>
            </div>
            <div className="text-center p-8 border border-border rounded-lg hover:border-accent transition-colors">
              <Icon name="Shield" size={48} className="mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-bold mb-4">Страхование груза</h3>
              <p className="text-muted-foreground">Полное страхование на всё время транспортировки</p>
            </div>
            <div className="text-center p-8 border border-border rounded-lg hover:border-accent transition-colors">
              <Icon name="Users" size={48} className="mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-bold mb-4">Профессиональная установка</h3>
              <p className="text-muted-foreground">Настройка и калибровка оборудования специалистами</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="min-h-screen py-24 bg-secondary/30 flex items-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 text-accent">Контакты</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-border p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Адрес шоурума</h3>
                    <p className="text-muted-foreground">Москва, ул. Тверская, д. 12, стр. 1</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <p className="text-muted-foreground">info@studiopro.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Часы работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 10:00 - 20:00<br />Сб-Вс: 11:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2024 STUDIO PRO. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
