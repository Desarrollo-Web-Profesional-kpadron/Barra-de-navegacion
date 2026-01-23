import { motion } from "framer-motion";
import { useState } from "react";

const Planes = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const planes = [
    {
      name: "Básico",
      subtitle: "Para empezar tu aprendizaje",
      monthlyPrice: "19",
      yearlyPrice: "190",
      popular: false,
      features: [
        { text: "Acceso a 50+ cursos básicos", included: true },
        { text: "Certificados de finalización", included: true },
        { text: "Acceso en todos los dispositivos", included: true },
        { text: "Soporte por email", included: true },
        { text: "Recursos descargables", included: true },
        { text: "Acceso a cursos premium", included: false },
        { text: "Sesiones en vivo con instructores", included: false },
        { text: "Proyectos prácticos avanzados", included: false }
      ],
      color: "from-gray-500 to-gray-600",
      badge: null
    },
    {
      name: "Premium",
      subtitle: "El más popular para profesionales",
      monthlyPrice: "49",
      yearlyPrice: "490",
      popular: true,
      features: [
        { text: "Acceso a TODOS los cursos", included: true },
        { text: "Certificados profesionales", included: true },
        { text: "Acceso sin conexión (app móvil)", included: true },
        { text: "Soporte prioritario 24/7", included: true },
        { text: "Recursos y plantillas exclusivas", included: true },
        { text: "Sesiones en vivo mensuales", included: true },
        { text: "Proyectos prácticos reales", included: true },
        { text: "Comunidad privada premium", included: true }
      ],
      color: "from-orange-500 to-yellow-500",
      badge: "MÁS POPULAR"
    },
    {
      name: "Empresarial",
      subtitle: "Para equipos y organizaciones",
      monthlyPrice: "99",
      yearlyPrice: "990",
      popular: false,
      features: [
        { text: "Todo lo de Premium incluido", included: true },
        { text: "Hasta 10 usuarios", included: true },
        { text: "Dashboard de administración", included: true },
        { text: "Reportes de progreso del equipo", included: true },
        { text: "Cursos personalizados", included: true },
        { text: "Onboarding personalizado", included: true },
        { text: "Cuenta ejecutiva dedicada", included: true },
        { text: "Facturación centralizada", included: true }
      ],
      color: "from-purple-500 to-indigo-600",
      badge: "EQUIPOS"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="planes" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Elige tu{" "}
            <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Plan Perfecto
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Invierte en tu futuro con planes flexibles y accesibles
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-lg"
          >
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-orange-600 to-yellow-600 text-white shadow-md"
                  : "text-gray-600 hover:text-orange-600"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 relative ${
                billingCycle === "yearly"
                  ? "bg-gradient-to-r from-orange-600 to-yellow-600 text-white shadow-md"
                  : "text-gray-600 hover:text-orange-600"
              }`}
            >
              Anual
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                -20%
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {planes.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden ${
                plan.popular ? "ring-4 ring-orange-500" : ""
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-4 py-2 rounded-bl-2xl font-bold text-sm">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-r ${plan.color} p-8 text-white`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm opacity-90 mb-6">{plan.subtitle}</p>
                
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-bold">
                    ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-lg opacity-90 mb-2">
                    /{billingCycle === "monthly" ? "mes" : "año"}
                  </span>
                </div>
                
                {billingCycle === "yearly" && (
                  <p className="text-sm opacity-75 mt-2">
                    Ahorra ${Number(plan.monthlyPrice) * 12 - Number(plan.yearlyPrice)} al año
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className={`w-6 h-6 flex-shrink-0 ${
                          feature.included ? "text-green-500" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d={
                            feature.included
                              ? "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              : "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          }
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          feature.included ? "text-gray-700" : "text-gray-400 line-through"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-orange-600 to-yellow-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {plan.name === "Empresarial" ? "Contactar Ventas" : "Comenzar Ahora"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-bold text-gray-800">Garantía de satisfacción de 30 días</span>
          </div>
        </motion.div>

        {/* Comparison Table CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">¿Necesitas comparar características en detalle?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-orange-600 font-semibold hover:underline flex items-center gap-2 mx-auto"
          >
            Ver tabla comparativa completa
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Planes;