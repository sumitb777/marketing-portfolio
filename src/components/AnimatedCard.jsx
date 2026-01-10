import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AnimatedCard({
  icon,
  title,
  value,
  accent = "green",
}) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group flex items-center gap-5 p-1 w-[80vw] md:w-[20vw] m-auto  justify-center rounded-2xl
                 bg-[#111827]/80 backdrop-blur
                  border-2 border-purple-500
                 shadow-lg   hover:rotate-6"
    >
      {/* Icon */}
      <div
        className={`text-4xl ${
          accent === "green" ? "text-green-400" : "text-blue-400"
        }`}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="text-center">
        <p className="text-gray-400 h3 font-semibold">{title}</p>
        <p className="text-lg  text-white">{value}</p>
      </div>

      {/* Glow Effect */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition
          ${
            accent === "green"
              ? "shadow-[0_0_40px_rgba(34,197,94,0.15)]"
              : "shadow-[0_0_40px_rgba(59,130,246,0.15)]"
          }`}
      />
    </motion.div>
  );
}
