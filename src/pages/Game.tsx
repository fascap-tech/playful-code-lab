import { useState } from "react";
import { motion, Reorder } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface CodeBlock {
  id: string;
  content: string;
  isCorrect: boolean;
}

const Game = () => {
  const [blocks, setBlocks] = useState<CodeBlock[]>([
    { id: "1", content: "moveForward();", isCorrect: true },
    { id: "2", content: "turnLeft();", isCorrect: true },
    { id: "3", content: "moveForward();", isCorrect: true },
    { id: "4", content: "turnRight();", isCorrect: false },
  ]);

  const [isRunning, setIsRunning] = useState(false);

  const checkSolution = () => {
    setIsRunning(true);
    const isCorrect = blocks.every((block) => block.isCorrect);
    
    setTimeout(() => {
      setIsRunning(false);
      if (isCorrect) {
        toast.success("Great job! You solved the puzzle! 🎉");
      } else {
        toast.error("Not quite right. Try again! 💪");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Puzzle Area */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Level 1: Move the Robot</h2>
            <p className="text-gray-600 mb-6">
              Help the robot reach the goal by arranging the correct sequence of commands.
            </p>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <Reorder.Group axis="y" values={blocks} onReorder={setBlocks} className="space-y-2">
                {blocks.map((block) => (
                  <Reorder.Item
                    key={block.id}
                    value={block}
                    className="cursor-move"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-game-blue text-white p-3 rounded-lg shadow"
                    >
                      {block.content}
                    </motion.div>
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </div>

            <Button
              onClick={checkSolution}
              disabled={isRunning}
              className="w-full bg-game-green hover:bg-game-green/90 text-white"
            >
              {isRunning ? "Running..." : "Run Program"}
            </Button>
          </div>

          {/* Preview Area */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Preview</h3>
            <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
              <motion.div
                animate={isRunning ? {
                  x: [0, 100, 100, 0],
                  y: [0, 0, -100, -100],
                  rotate: [0, 0, -90, -90],
                } : {}}
                transition={{ duration: 1.5 }}
                className="w-12 h-12 bg-game-coral rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;