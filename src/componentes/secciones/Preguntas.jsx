import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Preguntas = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "¿Qué es BARG Cursos?",
          answer: "BARG Cursos es una plataforma de educación en línea que ofrece cursos de alta calidad en desarrollo web, diseño, marketing digital y negocios. Nuestros cursos están diseñados por expertos de la industria para ayudarte a alcanzar tus objetivos profesionales."
        },
        {
          question: "¿Necesito experiencia previa?",
          answer: "No necesariamente. Ofrecemos cursos para todos los niveles, desde principiantes hasta avanzados. Cada curso indica claramente el nivel requerido y los prerrequisitos necesarios."
        }
      ]
    },
    {
      category: "Certificación",
      questions: [
        {
          question: "¿Obtengo certificado al finalizar?",
          answer: "Sí, al completar exitosamente un curso recibirás un certificado digital verificable que puedes compartir en LinkedIn, tu currículum y redes sociales. El certificado incluye tu nombre, el curso completado y la fecha de finalización."
        },
        {
          question: "¿Los certificados tienen validez oficial?",
          answer: "Nuestros certificados son reconocidos por empresas y profesionales de la industria. Si bien no son títulos oficiales universitarios, demuestran tus habilidades y conocimientos adquiridos en áreas específicas."
        }
      ]
    },
    {
      category: "Acceso y Pagos",
      questions: [
        {
          question: "¿Puedo acceder desde cualquier dispositivo?",
          answer: "¡Absolutamente! Nuestra plataforma es 100% responsive. Puedes acceder desde computadora, tablet o smartphone, con iOS o Android. Tu progreso se sincroniza automáticamente entre todos tus dispositivos."
        },
        {
          question: "¿Los cursos tienen fecha de expiración?",
          answer: "No. Una vez que compras un curso, tienes acceso de por vida al contenido, incluyendo todas las actualizaciones futuras. Aprende a tu propio ritmo sin presiones de tiempo."
        },
        {
          question: "¿Qué métodos de pago aceptan?",
          answer: "Aceptamos tarjetas de crédito y débito (Visa, MasterCard, American Express), PayPal, y transferencias bancarias. Todos los pagos son procesados de forma segura."
        },
        {
          question: "¿Hay garantía de devolución?",
          answer: "Sí, ofrecemos una garantía de satisfacción de 30 días. Si no estás satisfecho con tu curso, puedes solicitar un reembolso completo dentro de los primeros 30 días de la compra."
        }
      ]
    },
    {
      category: "Soporte",
      questions: [
        {
          question: "¿Ofrecen soporte técnico?",
          answer: "Sí, nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier problema técnico o duda sobre los cursos. Puedes contactarnos por chat en vivo, email o a través de nuestros foros."
        },
        {
          question: "¿Puedo interactuar con el instructor?",
          answer: "Sí, cada curso tiene una sección de preguntas y respuestas donde puedes hacer consultas directamente al instructor. También organizamos sesiones en vivo mensuales con los instructores."
        }
      ]
    }
  ];

  const allQuestions = faqs.flatMap((category, catIndex) =>
    category.questions.map((q, qIndex) => ({
      ...q,
      category: category.category,
      index: `${catIndex}-${qIndex}`
    }))
  );

  const filteredQuestions = searchTerm
    ? allQuestions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allQuestions;

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Preguntas{" "}
            <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Frecuentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las dudas más comunes sobre nuestros cursos
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar pregunta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-14 rounded-full border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-lg transition-all duration-300"
            />
            <svg
              className="w-6 h-6 text-gray-400 absolute left-5 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-4"
        >
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((item, index) => (
              <motion.div
                key={item.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(item.index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-orange-50 transition-colors duration-300"
                >
                  <div className="flex-1 pr-4">
                    <span className="text-xs font-semibold text-orange-600 mb-1 block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeIndex === item.index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === item.index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <svg
                className="w-16 h-16 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-500 text-lg">
                No se encontraron preguntas que coincidan con tu búsqueda
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-orange-600 to-yellow-600 rounded-3xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-3">¿No encontraste tu respuesta?</h3>
          <p className="mb-6 text-lg opacity-90">
            Nuestro equipo de soporte está aquí para ayudarte
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contactar Soporte
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Preguntas;