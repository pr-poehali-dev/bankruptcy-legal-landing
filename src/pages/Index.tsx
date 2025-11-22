import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "FileText",
      title: "Банкротство физических лиц",
      description: "Полное юридическое сопровождение процедуры банкротства физических лиц. Списание долгов по кредитам, займам и налогам."
    },
    {
      icon: "Building2",
      title: "Банкротство юридических лиц",
      description: "Профессиональное ведение дел о несостоятельности компаний. Защита интересов кредиторов и должников."
    },
    {
      icon: "Scale",
      title: "Представительство в суде",
      description: "Защита ваших интересов на всех стадиях судебного процесса. Опыт работы с арбитражными судами."
    },
    {
      icon: "FileCheck",
      title: "Реструктуризация долгов",
      description: "Разработка плана реструктуризации задолженности. Переговоры с кредиторами на выгодных условиях."
    }
  ];

  const advantages = [
    {
      icon: "Award",
      title: "15+ лет опыта",
      description: "Успешная практика в сфере банкротства с 2009 года"
    },
    {
      icon: "Users",
      title: "500+ клиентов",
      description: "Помогли сотням людей и компаний решить финансовые проблемы"
    },
    {
      icon: "CheckCircle2",
      title: "98% успешных дел",
      description: "Высокий процент положительных решений суда"
    },
    {
      icon: "Clock",
      title: "Быстрые сроки",
      description: "Оптимизация процедуры банкротства в кратчайшие сроки"
    }
  ];

  const cases = [
    {
      title: "Списание долга физического лица",
      debt: "4 200 000 ₽",
      result: "Полное списание задолженности",
      duration: "6 месяцев"
    },
    {
      title: "Банкротство ИП",
      debt: "2 800 000 ₽",
      result: "Реструктуризация и списание 70%",
      duration: "4 месяца"
    },
    {
      title: "Корпоративное банкротство",
      debt: "15 000 000 ₽",
      result: "Мировое соглашение с кредиторами",
      duration: "8 месяцев"
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Физическое лицо",
      text: "Спасибо огромное за профессиональную помощь! Долги по кредитам полностью списаны. Теперь могу спокойно жить и планировать будущее.",
      rating: 5
    },
    {
      name: "Сергей Иванов",
      role: "Директор ООО",
      text: "Отличная команда юристов. Помогли провести процедуру банкротства компании максимально быстро и выгодно для нас.",
      rating: 5
    },
    {
      name: "Мария Соколова",
      role: "ИП",
      text: "Профессиональный подход, внимание к деталям. Всё объяснили доступно, вели дело от начала до конца. Рекомендую!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Scale" className="text-accent" size={32} />
            <span className="text-xl font-bold text-primary">ЛексПраво</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-sm hover:text-accent transition-colors">Услуги</a>
            <a href="#advantages" className="text-sm hover:text-accent transition-colors">Преимущества</a>
            <a href="#cases" className="text-sm hover:text-accent transition-colors">Кейсы</a>
            <a href="#testimonials" className="text-sm hover:text-accent transition-colors">Отзывы</a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90">
            Консультация
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Профессиональная помощь в банкротстве
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Законное списание долгов. Защита ваших интересов. 15 лет опыта.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                Рассчитать стоимость
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={20} />
                <span>Бесплатная консультация</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={20} />
                <span>Гарантия результата</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексное юридическое сопровождение на всех этапах процедуры банкротства
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-accent" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Наши преимущества подтверждены сотнями успешных дел
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} className="text-accent" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Успешные кейсы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты работы с нашими клиентами
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-primary mb-6">{caseItem.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Размер долга:</p>
                      <p className="text-2xl font-bold text-destructive">{caseItem.debt}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Результат:</p>
                      <p className="text-lg font-semibold text-green-600">{caseItem.result}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Срок:</p>
                      <p className="text-lg font-semibold text-primary">{caseItem.duration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name="User" className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать путь к финансовой свободе?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Запишитесь на бесплатную консультацию. Мы оценим вашу ситуацию и предложим оптимальное решение.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-12">
            Записаться на консультацию
          </Button>
        </div>
      </section>

      <footer className="py-12 bg-primary/95 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Scale" className="text-accent" size={28} />
                <span className="text-xl font-bold">ЛексПраво</span>
              </div>
              <p className="text-white/70 text-sm">
                Профессиональная юридическая помощь в вопросах банкротства с 2009 года.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Банкротство физ. лиц</li>
                <li>Банкротство юр. лиц</li>
                <li>Представительство в суде</li>
                <li>Реструктуризация долгов</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@lexpravo.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">График работы</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Пн-Пт: 9:00 - 20:00</li>
                <li>Сб: 10:00 - 18:00</li>
                <li>Вс: выходной</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
            © 2024 ЛексПраво. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
