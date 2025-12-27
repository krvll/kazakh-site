import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Network, Cpu, Zap, Brain } from 'lucide-react';

export const WhatSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Network,
      titleKz: 'Желі құрылымы',
      titleRu: 'Структура сети',
      descKz: 'Нейрондардан және олардың байланыстарынан тұратын күрделі жүйе',
      descRu: 'Сложная система из нейронов и их связей',
    },
    {
      icon: Cpu,
      titleKz: 'Деректерді өңдеу',
      titleRu: 'Обработка данных',
      descKz: 'Үлкен деректер көлемін талдау және үлгілерді табу',
      descRu: 'Анализ больших объемов данных и поиск паттернов',
    },
    {
      icon: Zap,
      titleKz: 'Оқыту қабілеті',
      titleRu: 'Способность обучаться',
      descKz: 'Тәжірибеден үйреніп, уақыт өте жақсарады',
      descRu: 'Обучение на опыте и улучшение со временем',
    },
    {
      icon: Brain,
      titleKz: 'Адам миын имитациялау',
      titleRu: 'Имитация мозга',
      descKz: 'Адам ойлау процесін модельдеу',
      descRu: 'Моделирование процесса мышления человека',
    },
  ];

  return (
    <section id="what" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t('Нейрондық желілер дегеніміз не?', 'Что такое нейронные сети?')}
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {t(
              'Нейрондық желілер - бұл адам миының жұмыс принципін қайталайтын математикалық модельдер. Олар деректерді талдап, үлгілерді тауып, болжамдар жасай алады.',
              'Нейронные сети - это математические модели, которые повторяют принцип работы человеческого мозга. Они могут анализировать данные, находить закономерности и делать прогнозы.'
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 blur-2xl" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjY4MzU1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Neural Network"
                className="relative rounded-2xl shadow-2xl border border-purple-500/20"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-900/50 to-purple-950/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-3 bg-purple-600/20 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg mb-2 text-white">
                  {t(feature.titleKz, feature.titleRu)}
                </h3>
                <p className="text-gray-400 text-sm">
                  {t(feature.descKz, feature.descRu)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
