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
  const [activeBlocks, setActiveBlocks] = useState<Array<{
    id: string;
    type: string;
    label: string;
    color: string;
    icon: JSX.Element;
  }>>([]);
  const [draggedBlock, setDraggedBlock] = useState<string | null>(null);

  const handleDragStart = (blockId: string) => {
    setDraggedBlock(blockId);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, blockType: any) => {
    const workspaceRect = document.querySelector('.workspace-drop-zone')?.getBoundingClientRect();
    if (!workspaceRect) return;

    // Get coordinates based on event type
    let x: number, y: number;
    
    if (event instanceof MouseEvent || event instanceof PointerEvent) {
      x = event.clientX;
      y = event.clientY;
    } else if (event instanceof TouchEvent) {
      const touch = event.changedTouches[0];
      x = touch.clientX;
      y = touch.clientY;
    } else {
      return;
    }

    // Check if the final position is within the workspace boundaries
    if (
      x >= workspaceRect.left &&
      x <= workspaceRect.right &&
      y >= workspaceRect.top &&
      y <= workspaceRect.bottom
    ) {
      // Add the block to the workspace
      const newBlock = {
        id: `${blockType.id}-${Date.now()}`,
        type: blockType.id,
        label: blockType.label,
        color: blockType.color,
        icon: blockType.icon,
      };
      setActiveBlocks((prev) => [...prev, newBlock]);
    }

    setDraggedBlock(null);
  };

  const handleRunCode = () => {
    console.log("Running code sequence:", activeBlocks.map(block => block.type));
  };

  return (
    <div className="min-h-[600px] bg-white rounded-xl shadow-lg p-8">
      <div className="flex justify-between items-start gap-8">
        {/* Blocks Palette */}
        <div className="w-1/3 space-y-4">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Blocks</h3>
          {blockTypes.map((block) => (
            <PuzzleBlock
              key={block.id}
              color={block.color}
              isDragging={draggedBlock === block.id}
              onDragStart={() => handleDragStart(block.id)}
              onDragEnd={(e) => handleDragEnd(e, block)}
            >
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
          
          <div className="workspace-drop-zone min-h-[400px] bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-200">
            <div className="space-y-4">
              {activeBlocks.length === 0 ? (
                <p className="text-gray-400 text-center mt-8">
                  Drag blocks here to create your program
                </p>
              ) : (
                activeBlocks.map((block) => (
                  <PuzzleBlock
                    key={block.id}
                    color={block.color}
                    isDragging={false}
                  >
                    <div className="flex items-center gap-2">
                      {block.icon}
                      {block.label}
                    </div>
                  </PuzzleBlock>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};