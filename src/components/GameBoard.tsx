import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Position {
  x: number;
  y: number;
}

export const GameBoard = () => {
  const gridSize = 5;
  const characterPosition = { x: 0, y: 2 }; // Starting position
  const goalPosition = { x: 4, y: 2 }; // Goal position

  const renderCell = (position: Position) => {
    const isCharacter = position.x === characterPosition.x && position.y === characterPosition.y;
    const isGoal = position.x === goalPosition.x && position.y === goalPosition.y;

    return (
      <div
        key={`${position.x}-${position.y}`}
        className="w-16 h-16 border border-gray-200 flex items-center justify-center"
      >
        {isCharacter && (
          <motion.div
            className="w-12 h-12 bg-game-blue rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
        {isGoal && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Star className="w-8 h-8 text-game-yellow" fill="currentColor" />
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="grid grid-cols-5 gap-1 bg-gray-50 p-4 rounded-lg">
        {Array.from({ length: gridSize * gridSize }).map((_, index) => {
          const x = Math.floor(index / gridSize);
          const y = index % gridSize;
          return renderCell({ x, y });
        })}
      </div>
    </div>
  );
};