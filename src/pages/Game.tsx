import { useState } from "react";
import { motion, Reorder } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Trophy, Rocket, ArrowRight } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-b from-[#1EAEDB] to-[#0FA0CE] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 bg-white/90 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="bg-[#F97316] p-3 rounded-xl">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#2D3748]">Coding Adventure</h1>
              <p className="text-[#4A5568]">Level 1: Robot Navigation</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#4A5568]">Progress: 1/5</span>
            <div className="w-32 h-3 bg-gray-200 rounded-full">
              <div className="w-1/5 h-full bg-[#F97316] rounded-full" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Puzzle Area */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="w-6 h-6 text-[#8B5CF6]" />
              <h2 className="text-2xl font-bold text-[#2D3748]">Code Blocks</h2>
            </div>
            <p className="text-[#4A5568] mb-8">
              Drag and arrange the blocks to help the robot reach its destination!
            </p>
            
            <div className="bg-[#F8FAFC] p-6 rounded-xl mb-8 border-2 border-dashed border-[#E2E8F0]">
              <Reorder.Group axis="y" values={blocks} onReorder={setBlocks} className="space-y-3">
                {blocks.map((block) => (
                  <Reorder.Item
                    key={block.id}
                    value={block}
                    className="cursor-move"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white p-4 rounded-xl shadow-md flex items-center gap-3"
                    >
                      <ArrowRight className="w-5 h-5" />
                      <span className="font-mono">{block.content}</span>
                    </motion.div>
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </div>

            <Button
              onClick={checkSolution}
              disabled={isRunning}
              className="w-full bg-gradient-to-r from-[#F97316] to-[#FB923C] hover:from-[#FB923C] hover:to-[#F97316] text-white py-6 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300"
            >
              {isRunning ? "Running Program..." : "▶ Run Program"}
            </Button>
          </div>

          {/* Preview Area */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-[#2D3748] mb-6">Preview Window</h3>
            <div className="bg-[#F8FAFC] rounded-xl aspect-square flex items-center justify-center relative overflow-hidden border-2 border-[#E2E8F0]">
              {/* Grid background */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="border border-[#E2E8F0]" />
                ))}
              </div>
              
              {/* Robot */}
              <motion.div
                animate={isRunning ? {
                  x: [0, 100, 100, 0],
                  y: [0, 0, -100, -100],
                  rotate: [0, 0, -90, -90],
                } : {}}
                transition={{ duration: 1.5 }}
                className="w-16 h-16 bg-gradient-to-br from-[#F97316] to-[#FB923C] rounded-xl shadow-lg z-10"
              />
              
              {/* Goal */}
              <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-[#8B5CF6] rounded-xl opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;