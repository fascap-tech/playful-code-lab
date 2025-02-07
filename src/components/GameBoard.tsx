
import { motion } from "framer-motion";
import { Ship, Fish, MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface Position {
  x: number;
  y: number;
  depth: number;
}

interface SeaCreature {
  name: string;
  depth: number;
  position: Position;
  description: string;
}

export const GameBoard = () => {
  const gridSize = { rows: 8, cols: 5 };
  const [characterPosition, setCharacterPosition] = useState({ x: 2, y: 0, depth: 0 }); // Starting at surface

  const seaCreatures: SeaCreature[] = [
    {
      name: "Anglerfish",
      depth: 6,
      position: { x: 1, y: 6, depth: 6 },
      description: "A deep-sea fish with its own light source"
    },
    {
      name: "Jellyfish",
      depth: 2,
      position: { x: 3, y: 2, depth: 2 },
      description: "Translucent creature drifting in the currents"
    }
  ];

  const moveSubmarine = () => {
    setCharacterPosition(prev => ({
      ...prev,
      y: Math.min(prev.y + 1, gridSize.rows - 1),
      depth: Math.min(prev.depth + 100, (gridSize.rows - 1) * 100)
    }));
  };

  const getDepthColor = (depth: number) => {
    const opacity = 0.3 + (depth * 0.1);
    return `rgba(14, 165, 233, ${opacity})`;
  };

  const renderCell = (position: Position) => {
    const isCharacter = position.x === characterPosition.x && position.y === characterPosition.y;
    const creature = seaCreatures.find(c => 
      c.position.x === position.x && c.position.y === position.y
    );

    return (
      <div
        key={`${position.x}-${position.y}`}
        className="w-20 h-20 border border-white/10 flex items-center justify-center relative"
        style={{ backgroundColor: getDepthColor(position.y) }}
      >
        {isCharacter && (
          <motion.div
            className="text-white"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Ship className="w-12 h-12" />
          </motion.div>
        )}
        {creature && (
          <motion.div
            className="text-white/80"
            animate={{ x: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Fish className="w-8 h-8" />
            <div className="absolute bottom-0 left-0 right-0 text-xs text-white/70 bg-black/30 p-1">
              {creature.name}
            </div>
          </motion.div>
        )}
        <div className="absolute bottom-1 right-1 text-xs text-white/50">
          {position.y * 100}m
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-b from-blue-400 to-blue-950 rounded-xl p-6 shadow-lg">
        <div className="grid grid-cols-5 gap-1 rounded-lg overflow-hidden">
          {Array.from({ length: gridSize.rows * gridSize.cols }).map((_, index) => {
            const x = index % gridSize.cols;
            const y = Math.floor(index / gridSize.cols);
            return renderCell({ x, y, depth: y * 100 });
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <Button 
          onClick={moveSubmarine}
          className="bg-game-blue hover:bg-blue-600 text-white flex items-center gap-2"
        >
          Move Down <MoveRight className="rotate-90" />
        </Button>
      </div>
    </div>
  );
};

