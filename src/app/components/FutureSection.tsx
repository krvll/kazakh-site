import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Rocket, GraduationCap, Briefcase, Globe } from 'lucide-react';

export const FutureSection: React.FC = () => {
  const { t } = useLanguage();

  const predictions = [
    {
      icon: Rocket,
      titleKz: 'Технологиялық прогресс',
      titleRu: 'Технологический прогресс',
      descKz: 'AI жылдам дамып, күнделікті өмірде көбірек қолданылатын болады',
      descRu: 'AI будет быстро развиваться и больше применяться в повседневной жизни',
    },
    {
      icon: GraduationCap,
      titleKz: 'Білім беруде өзгерістер',
      titleRu: 'Изменения в образовании',
      descKz: 'Жеке оқу жоспарлары және AI-көмекшілер',
      descRu: 'Персонализированные планы обучения и AI-помощники',
    },
    {
      icon: Briefcase,
      titleKz: 'Жаңа мамандықтар',
      titleRu: 'Новые профессии',
      descKz: 'AI-инженерлер, деректер ғалымдары және этика сарапшылары',
      descRu: 'AI-инженеры, специалисты по данным и эксперты по этике',
    },
    {
      icon: Globe,
      titleKz: 'Жаһандық әсер',
      titleRu: 'Глобальное влияние',
      descKz: 'Денсаулық сақтау, климат және ғылымда үлкен өзгерістер',
      descRu: 'Большие изменения в здравоохранении, климате и науке',
    },
  ];

  return (
    <section id="future" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            {t('AI болашағы', 'Будущее AI')}
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {t(
              'Жасанды интеллект біздің өмірімізді, жұмысымызды және білімімізді қалай өзгертеді?',
              'Как искусственный интеллект изменит нашу жизнь, работу и образование?'
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 blur-2xl" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1672581437674-3186b17b405a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjY3MjU0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Future Technology"
                className="relative rounded-2xl shadow-2xl border border-purple-500/20"
              />
            </div>
          </motion.div>

          <div className="grid gap-6 order-1 md:order-2">
            {predictions.map((prediction, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-900/80 to-purple-950/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                    <prediction.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-white">
                      {t(prediction.titleKz, prediction.titleRu)}
                    </h3>
                    <p className="text-gray-400">
                      {t(prediction.descKz, prediction.descRu)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        <motion.div
          className="p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/30 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl mb-4 text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            {t('Маңызды тұжырым', 'Ключевой вывод')}
          </h3>
          <p className="text-gray-300 text-lg text-center leading-relaxed">
            {t(
              'Жасанды интеллект - бұл құрал. Оны дұрыс пайдалану арқылы біз адамзаттың көптеген мәселелерін шешіп, болашақты жақсырақ ете аламыз. Бірақ ол үшін біз жауапкершілікпен, этикалық қағидаларды сақтап әрекет етуіміз керек.',
              'Искусственный интеллект - это инструмент. При правильном использовании мы можем решить многие проблемы человечества и сделать будущее лучше. Но для этого мы должны действовать ответственно, соблюдая этические принципы.'
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
