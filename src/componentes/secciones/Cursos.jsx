import { motion } from "framer-motion";
import { useState } from "react";

const Cursos = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todos" },
    { id: "desarrollo", name: "Desarrollo Web" },
    { id: "diseño", name: "Diseño" },
    { id: "marketing", name: "Marketing" },
    { id: "negocios", name: "Negocios" }
  ];

  const cursos = [
    {
      id: 1,
      title: "React desde Cero",
      category: "desarrollo",
      instructor: "Carlos Martínez",
      duration: "12 horas",
      students: "2,450",
      rating: "4.8",
      price: "$49.99",
      level: "Principiante",
      image: "🚀",
      color: "from-orange-500 to-yellow-500"
    },
    {
      id: 2,
      title: "Tailwind CSS Avanzado",
      category: "desarrollo",
      instructor: "Ana García",
      duration: "8 horas",
      students: "1,890",
      rating: "4.9",
      price: "$39.99",
      level: "Intermedio",
      image: "🎨",
      color: "from-orange-500 to-yellow-500"
    },
    {
      id: 3,
      title: "Framer Motion Pro",
      category: "desarrollo",
      instructor: "Luis Hernández",
      duration: "10 horas",
      students: "1,234",
      rating: "4.7",
      price: "$44.99",
      level: "Avanzado",
      image: "✨",
      color: "from-orange-500 to-yellow-500"
    },
    {
      id: 4,
      title: "UI/UX Design Masterclass",
      category: "diseño",
      instructor: "María López",
      duration: "15 horas",
      students: "3,120",
      rating: "4.9",
      price: "$59.99",
      level: "Intermedio",
      image: "🎭",
      color: "from-orange-500 to-yellow-500"
    },
    {
      id: 5,
      title: "Marketing Digital 2024",
      category: "marketing",
      instructor: "Pedro Sánchez",
      duration: "20 horas",
      students: "4,567",
      rating: "4.8",
      price: "$69.99",
      level: "Principiante",
      image: "📱",
      color: "from-orange-500 to-yellow-500"
    },
    {
      id: 6,
      title: "Emprendimiento Digital",
      category: "negocios",
      instructor: "Sofía Ramírez",
      duration: "18 horas",
      students: "2,890",
      rating: "4.7",
      price: "$54.99",
      level: "Intermedio",
      image: "💼",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  const filteredCursos = selectedCategory === "all" 
    ? cursos 
    : cursos.filter(curso => curso.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="cursos" className="py-20 bg-gradient-to-b from-orange-50 to-white">
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
            Nuestros{" "}
            <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Cursos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aprende con los mejores instructores y contenido actualizado
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-orange-600 to-yellow-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-orange-50 border border-gray-200"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCursos.map((curso) => (
            <motion.div
              key={curso.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Card Header/Image */}
              <div className={`h-48 bg-gradient-to-br ${curso.color} flex items-center justify-center relative overflow-hidden`}>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="text-7xl"
                >
                  {curso.image}
                </motion.div>
                
                {/* Level Badge */}
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                  {curso.level}
                </div>
                
                {/* Overlay on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-transform">
                    Ver Detalles
                  </button>
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {curso.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {curso.instructor}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold">{curso.rating}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>{curso.students}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{curso.duration}</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    {curso.price}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Inscribirse
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6 text-lg">
            ¿No encuentras lo que buscas?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-lg"
          >
            Ver Todos los Cursos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Cursos;