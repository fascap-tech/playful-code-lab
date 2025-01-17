import { useState } from "react";
import { PuzzleBlock } from "./PuzzleBlock";
import { motion } from "framer-motion";
import { Play, Code2, Repeat, MoveRight } from "lucide-react";

const blockTypes = [
  {
    id: "move",
    label: "Move Forward",
    color: "bg-game-blue",
    icon: <MoveRight className="w-5 h-5" />,
  },
  {
    id: "repeat",
    label: "Repeat 3 times",
    color: "bg-game-yellow",
    icon: <Repeat className="w-5 h-5" />,
  },
  {
    id: "code",
    label: "Run Code",
    color: "bg-game-purple",
    icon: <Code2 className="w-5 h-5" />,
  },
];

export const PuzzleWorkspace = () => {
  const [activeBlocks, setActiveBlocks] = useState<string[]>([]);

  const handleRunCode = () => {
    console.log("Running code sequence:", activeBlocks);
  };

  return (
    <div className="min-h-[600px] bg-white rounded-xl shadow-lg p-8">
      <div className="flex justify-between items-start gap-8">
        {/* Blocks Palette */}
        <div className="w-1/3 space-y-4">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Blocks</h3>
          {blockTypes.map((block) => (
            <PuzzleBlock key={block.id} color={block.color}>
              <div className="flex items-center gap-2">
                {block.icon}
                {block.label}
              </div>
            </PuzzleBlock>
          ))}
        </div>

        {/* Workspace */}
        <div className="w-2/3">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">Workspace</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRunCode}
              className="bg-game-green text-white px-6 py-2 rounded-full font-medium flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Run Code
            </motion.button>
          </div>
          
          <div className="min-h-[400px] bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-200">
            <div className="space-y-4">
              {/* This is where dragged blocks will be placed */}
              <p className="text-gray-400 text-center mt-8">
                Drag blocks here to create your program
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};