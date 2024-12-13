import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GameCardProps {
  title: string;
  description: string;
  color: string;
  icon: ReactNode;
  onClick: () => void;
}

export const GameCard = ({ title, description, color, icon, onClick }: GameCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer ${color} hover:shadow-xl transition-all duration-300`}
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 flex items-center justify-center">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};