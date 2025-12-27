import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Code2, Bug, BookOpen, Sparkles } from 'lucide-react';

export const HelpSection: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Code2,
      titleKz: 'Кодты автоматты толықтыру',
      titleRu: 'Автодополнение кода',
      descKz: 'AI кодтың келесі жолдарын болжап, жазу жылдамдығын арттырады',
      descRu: 'AI предсказывает следующие строки кода, увеличивая скорость написания',
    },
    {
      icon: Bug,
      titleKz: 'Қателерді анықтау',
      titleRu: 'Обнаружение ошибок',
      descKz: 'Кодтағы қателер мен уязвимостерді автоматты түрде табу',
      descRu: 'Автоматическое обнаружение ошибок и уязвимостей в коде',
    },
    {
      icon: BookOpen,
      titleKz: 'Оқыту және білім беру',
      titleRu: 'Обучение и образование',
      descKz: 'AI бағдарламалау тілдерін үйренуге көмектеседі',
      descRu: 'AI помогает изучать языки программирования',
    },
    {
      icon: Sparkles,
      titleKz: 'Код оптимизациясы',
      titleRu: 'Оптимизация кода',
      descKz: 'Кодты жақсартып, өнімділікті арттыру ұсыныстары',
      descRu: 'Предложения по улучшению кода и повышению производительности',
    },
  ];

  return (
    <section id="help" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/10 to-black" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            {t(
              'Нейрондық желілер бағдарламашыларға қалай көмектеседі?',
              'Как нейронные сети помогают программистам?'
            )}
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {t(
              'Жасанды интеллект қазіргі бағдарламалауда маңызды рөл атқарып, дамытушылардың жұмысын жеңілдетеді және өнімділікті арттырады.',
              'Искусственный интеллект играет важную роль в современном программировании, облегчая работу разработчиков и повышая производительность.'
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-900/80 to-pink-950/20 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-600/20 rounded-lg group-hover:bg-pink-600/30 transition-colors">
                    <benefit.icon className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-white">
                      {t(benefit.titleKz, benefit.titleRu)}
                    </h3>
                    <p className="text-gray-400">
                      {t(benefit.descKz, benefit.descRu)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-purple-600/10 blur-2xl" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1550063873-ab792950096b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBkYXJrfGVufDF8fHx8MTc2Njc2MzI4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Programming"
                className="relative rounded-2xl shadow-2xl border border-pink-500/20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
