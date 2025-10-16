import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const players = [
    { id: 1, name: 'F', number: 19, position: 'Вратарь', goals: 23, assists: 15, games: 45 },
    { id: 2, name: 'max', number: 7, position: 'Защитник', goals: 8, assists: 22, games: 45 },
    { id: 3, name: 'extazy', number: 91, position: 'Нападающий', goals: 19, assists: 18, games: 43 },
    { id: 4, name: 'KEWS1K', number: 44, position: 'Защитник', goals: 5, assists: 16, games: 45 },
    { id: 5, name: 'BAGA', number: 10, position: 'Нападающий', goals: 27, assists: 20, games: 45 },
    { id: 6, name: 'Павел Соколов', number: 3, position: 'Защитник', goals: 6, assists: 14, games: 44 },
  ];

  const schedule = [
    { date: '2024-10-20', opponent: 'Динамо', home: true, time: '19:00', result: '4:2' },
    { date: '2024-10-25', opponent: 'Спартак', home: false, time: '18:30', result: '3:3' },
    { date: '2024-10-28', opponent: 'Торпедо', home: true, time: '19:30', result: null },
    { date: '2024-11-02', opponent: 'ЦСКА', home: false, time: '20:00', result: null },
    { date: '2024-11-05', opponent: 'Локомотив', home: true, time: '19:00', result: null },
  ];

  const news = [
    {
      id: 1,
      title: 'Победа над Динамо!',
      date: '2024-10-20',
      excerpt: 'СКА 1946 одержал уверенную победу со счетом 4:2 в домашнем матче.',
    },
    {
      id: 2,
      title: 'Волков — лучший игрок недели',
      date: '2024-10-18',
      excerpt: 'Андрей Волков признан лучшим игроком недели в лиге VFHL.',
    },
    {
      id: 3,
      title: 'Тренировочный сбор',
      date: '2024-10-15',
      excerpt: 'Команда провела интенсивную тренировку перед важными матчами.',
    },
  ];

  const stats = {
    wins: 28,
    draws: 7,
    losses: 10,
    goalsScored: 156,
    goalsConceded: 98,
    position: 3,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/projects/b1b83925-40b0-427c-a523-150e6c8afe44/files/99e7fb0b-4dd3-4615-a9fd-7776c1946003.jpg" 
                alt="SKA 1946" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-black text-primary">СКА 1946</h1>
                <p className="text-xs text-muted-foreground font-medium">VFHL PUCK LEAGUE</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Команда', 'Расписание', 'Статистика', 'Новости', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="главная" className="py-20 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm font-bold px-4 py-2">
              VFHL PUCK LEAGUE
            </Badge>
            <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">
              СКА 1946
            </h2>
            <p className="text-xl text-white/90 mb-8 font-light">
              Чемпионская команда виртуальной хоккейной лиги
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white font-bold shadow-lg"
                onClick={() => scrollToSection('расписание')}
              >
                <Icon name="Calendar" className="mr-2 h-5 w-5" />
                Следующий матч
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white text-white hover:bg-white/20 font-bold backdrop-blur-sm"
                onClick={() => scrollToSection('команда')}
              >
                <Icon name="Users" className="mr-2 h-5 w-5" />
                Состав команды
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="команда" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">Наша команда</h2>
            <p className="text-muted-foreground text-lg">Профессионалы виртуального хоккея</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {players.map((player, idx) => (
              <Card 
                key={player.id} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge className="bg-primary text-white mb-2 text-lg font-bold px-3 py-1">#17</Badge>
                      <h3 className="font-bold text-xl text-foreground">{player.name}</h3>
                      <p className="text-sm text-muted-foreground font-medium">{player.position}</p>
                    </div>
                    <Icon name="User" className="h-12 w-12 text-muted-foreground/20" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    <div className="text-center">
                      <p className="text-2xl font-black text-accent">{player.goals}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Голы</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-black text-primary">{player.assists}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Пасы</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-black text-foreground">{player.games}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Игры</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="расписание" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">Расписание</h2>
            <p className="text-muted-foreground text-lg">Ближайшие матчи и результаты</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {schedule.map((match, idx) => (
              <Card 
                key={idx} 
                className={`hover:shadow-lg transition-all animate-slide-in ${!match.result ? 'border-l-4 border-l-accent' : ''}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="font-bold text-sm text-muted-foreground">
                          {new Date(match.date).toLocaleDateString('ru-RU', { day: '2-digit', month: 'short' })}
                        </p>
                        <p className="text-xs text-muted-foreground">{match.time}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-bold text-lg">СКА 1946</p>
                          {match.home && <Icon name="Home" className="h-4 w-4 text-primary" />}
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-lg">{match.opponent}</p>
                          {!match.home && <Icon name="Home" className="h-4 w-4 text-muted-foreground" />}
                        </div>
                      </div>
                    </div>
                    {match.result ? (
                      <Badge className="bg-primary text-white text-2xl font-black px-4 py-2">
                        {match.result}
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="border-accent text-accent font-bold px-4 py-2">
                        СКОРО
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="статистика" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">Статистика сезона</h2>
            <p className="text-muted-foreground text-lg">Результаты команды в VFHL</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {[
              { label: 'Побед', value: stats.wins, icon: 'Trophy', color: 'text-accent' },
              { label: 'Ничьих', value: stats.draws, icon: 'Minus', color: 'text-primary' },
              { label: 'Поражений', value: stats.losses, icon: 'X', color: 'text-muted-foreground' },
              { label: 'Голов забито', value: stats.goalsScored, icon: 'Target', color: 'text-accent' },
              { label: 'Голов пропущено', value: stats.goalsConceded, icon: 'ShieldAlert', color: 'text-primary' },
              { label: 'Место в лиге', value: stats.position, icon: 'Medal', color: 'text-accent' },
            ].map((stat, idx) => (
              <Card 
                key={stat.label} 
                className="text-center hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <Icon name={stat.icon} className={`h-10 w-10 mx-auto mb-3 ${stat.color}`} />
                  <p className={`text-4xl font-black mb-2 ${stat.color}`}>{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="новости" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">Новости</h2>
            <p className="text-muted-foreground text-lg">Последние события команды</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {news.map((article, idx) => (
              <Card 
                key={article.id} 
                className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <CardContent className="p-6">
                  <Badge className="mb-4 bg-primary/10 text-primary font-semibold">
                    {new Date(article.date).toLocaleDateString('ru-RU')}
                  </Badge>
                  <h3 className="font-bold text-xl mb-3 text-foreground">{article.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{article.excerpt}</p>
                  <Button variant="link" className="mt-4 p-0 text-accent font-bold">
                    Читать далее <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Свяжитесь с нами</h2>
            <p className="text-xl text-white/90 mb-8 font-light">
              Хотите стать частью нашей команды или узнать больше?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all">
                <CardContent className="p-6 text-center">
                  <Icon name="Mail" className="h-8 w-8 mx-auto mb-3 text-white" />
                  <h3 className="font-bold text-white mb-2">Email</h3>
                  <p className="text-white/80 text-sm">info@ska1946.vfhl</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all">
                <CardContent className="p-6 text-center">
                  <Icon name="Phone" className="h-8 w-8 mx-auto mb-3 text-white" />
                  <h3 className="font-bold text-white mb-2">Телефон</h3>
                  <p className="text-white/80 text-sm">+7 (999) 123-45-67</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all">
                <CardContent className="p-6 text-center">
                  <Icon name="MapPin" className="h-8 w-8 mx-auto mb-3 text-white" />
                  <h3 className="font-bold text-white mb-2">Адрес</h3>
                  <p className="text-white/80 text-sm">Виртуальная арена VFHL</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-white/70">
            © 2024 СКА 1946 · VFHL PUCK League · Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;