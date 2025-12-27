import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

export const ProsConsSection: React.FC = () => {
  const { t } = useLanguage();

  const pros = [
    {
      kz: 'Үлкен деректер көлемін тез талдау',
      ru: 'Быстрый анализ больших объемов данных',
    },
    {
      kz: 'Қайталанатын тапсырмаларды автоматтандыру',
      ru: 'Автоматизация повторяющихся задач',
    },
    {
      kz: 'Күрделі үлгілерді анықтау қабілеті',
      ru: 'Способность выявлять сложные закономерности',
    },
    {
      kz: 'Адамның қателіктерін азайту',
      ru: 'Снижение человеческих ошибок',
    },
    {
      kz: '24/7 үздіксіз жұмыс істеу',
      ru: 'Непрерывная работа 24/7',
    },
  ];

  const cons = [
    {
      kz: 'Үлкен есептеу қуатын қажет етеді',
      ru: 'Требует больших вычислительных мощностей',
    },
    {
      kz: 'Оқыту үшін көп деректер керек',
      ru: 'Нужно много данных для обучения',
    },
    {
      kz: 'Модельдің шешімдері әрқашан түсінікті емес',
      ru: 'Решения модели не всегда понятны',
    },
    {
      kz: 'Жұмыс орындарының азаюы қаупі',
      ru: 'Риск сокращения рабочих мест',
    },
    {
      kz: 'Деректердің қауіпсіздігі мәселелері',
      ru: 'Проблемы безопасности данных',
    },
  ];

  const ethics = [
    {
      kz: 'AI жауапкершілікпен қолданылуы керек',
      ru: 'AI должен использоваться ответственно',
    },
    {
      kz: 'Деректердің құпиялылығын сақтау',
      ru: 'Соблюдение конфиденциальности данных',
    },
    {
      kz: 'Алгоритмдердегі біржақтылықты болдырмау',
      ru: 'Предотвращение предвзятости в алгоритмах',
    },
    {
      kz: 'AI шешімдерінің мөлдірлігі',
      ru: 'Прозрачность решений AI',
    },
  ];

  return (
    <section id="pros-cons" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {t(
              'AI-дың артықшылықтары мен кемшіліктері',
              'Преимущества и недостатки AI'
            )}
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {t(
              'Жасанды интеллектті пайдалану кезінде оның екі жағын да түсіну маңызды',
              'Важно понимать обе стороны использования искусственного интеллекта'
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Pros */}
          <motion.div
            className="p-8 bg-gradient-to-br from-green-950/20 to-gray-900/50 rounded-2xl border border-green-500/20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl text-white">
                {t('Артықшылықтар', 'Преимущества')}
              </h3>
            </div>
            <ul className="space-y-4">
              {pros.map((pro, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{t(pro.kz, pro.ru)}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Cons */}
          <motion.div
            className="p-8 bg-gradient-to-br from-red-950/20 to-gray-900/50 rounded-2xl border border-red-500/20"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl text-white">
                {t('Кемшіліктер', 'Недостатки')}
              </h3>
            </div>
            <ul className="space-y-4">
              {cons.map((con, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>{t(con.kz, con.ru)}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Ethics */}
        <motion.div
          className="p-8 bg-gradient-to-br from-yellow-950/20 to-gray-900/50 rounded-2xl border border-yellow-500/20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-yellow-400" />
            <h3 className="text-2xl text-white">
              {t('Этикалық мәселелер', 'Этические вопросы')}
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {ethics.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 text-gray-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>{t(item.kz, item.ru)}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
