import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedButton } from './AnimatedButton';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const scrollToNext = () => {
    const element = document.getElementById('what');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center gap-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 text-sm uppercase tracking-wider">
              {t('Білім базасы', 'База знаний')}
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            {t(
              'Жасанды интеллект және нейрондық желілер',
              'Искусственный интеллект и нейронные сети'
            )}
          </h2>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            {t(
              'Қазіргі заманғы бағдарламалауда жасанды интеллект пен нейрондық желілердің қалай қолданылатынын, олардың артықшылықтары мен кемшіліктерін біліңіз.',
              'Узнайте, как используются искусственный интеллект и нейронные сети в современном программировании, их преимущества и недостатки.'
            )}
          </p>

          <AnimatedButton onClick={scrollToNext}>
            {t('Толығырақ білу', 'Узнать больше')}
          </AnimatedButton>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl" />
            
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjY3Njc1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="AI Technology"
              className="relative rounded-2xl shadow-2xl border border-purple-500/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
