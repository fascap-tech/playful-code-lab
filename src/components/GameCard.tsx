import { motion } from "framer-motion";

interface GameCardProps {
  title: string;
  description: string;
  color: string;
  icon: string;
  onClick: () => void;
}

export const GameCard = ({ title, description, color, icon, onClick }: GameCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer ${color} hover:shadow-xl transition-shadow`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <img src={icon} alt={title} className="w-24 h-24 object-contain" />
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};