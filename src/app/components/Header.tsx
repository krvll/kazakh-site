import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Brain } from 'lucide-react';
import { motion } from 'motion/react';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-purple-900/30">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Brain className="w-6 h-6 text-white" />
          </motion.div>
          <h1 className="text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t('Жасанды Интеллект', 'Искусственный Интеллект')}
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            {t('Басты бет', 'Главная')}
          </button>
          <button 
            onClick={() => scrollToSection('what')}
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            {t('Нейрондық желілер', 'Нейронные сети')}
          </button>
          <button 
            onClick={() => scrollToSection('help')}
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            {t('Көмек', 'Помощь')}
          </button>
          <button 
            onClick={() => scrollToSection('pros-cons')}
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            {t('Артықшылықтар', 'Преимущества')}
          </button>
          <button 
            onClick={() => scrollToSection('future')}
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            {t('Болашақ', 'Будущее')}
          </button>
        </nav>

        <div className="flex items-center gap-2 bg-gray-900/50 rounded-lg p-1">
          <button
            onClick={() => setLanguage('kz')}
            className={`px-3 py-1 rounded transition-all ${
              language === 'kz'
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            KZ
          </button>
          <button
            onClick={() => setLanguage('ru')}
            className={`px-3 py-1 rounded transition-all ${
              language === 'ru'
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            RU
          </button>
        </div>
      </div>
    </header>
  );
};
