import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Brain, Github, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-purple-900/30 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t('Жасанды Интеллект', 'Искусственный Интеллект')}
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              {t(
                'Білім беру жобасы: AI және нейрондық желілер туралы ақпараттық ресурс',
                'Образовательный проект: информационный ресурс об AI и нейронных сетях'
              )}
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">
              {t('Тақырыптар', 'Темы')}
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#what" className="hover:text-purple-400 transition-colors">
                  {t('Нейрондық желілер', 'Нейронные сети')}
                </a>
              </li>
              <li>
                <a href="#help" className="hover:text-purple-400 transition-colors">
                  {t('Бағдарламалауда көмек', 'Помощь в программировании')}
                </a>
              </li>
              <li>
                <a href="#pros-cons" className="hover:text-purple-400 transition-colors">
                  {t('Артықшылықтар мен кемшіліктер', 'Плюсы и минусы')}
                </a>
              </li>
              <li>
                <a href="#future" className="hover:text-purple-400 transition-colors">
                  {t('Болашақ', 'Будущее')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">
              {t('Байланыс', 'Контакты')}
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:student@example.com" 
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                student@example.com
              </a>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-purple-900/30 text-center">
          <motion.p
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t(
              '© 2024 | Білім беру жобасы | Қазақ тілі пәні бойынша курстық жұмыс',
              '© 2024 | Образовательный проект | Курсовая работа по предмету казахский язык'
            )}
          </motion.p>
          <p className="text-gray-600 text-xs mt-2">
            {t(
              'Бұл сайт оқу мақсатында жасалған',
              'Этот сайт создан в образовательных целях'
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};
