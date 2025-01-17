import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PuzzleBlockProps {
  color: string;
  children: ReactNode;
  isDragging?: boolean;
  onDragStart?: () => void;
  onDragEnd?: (event: MouseEvent | TouchEvent | PointerEvent) => void;
}

export const PuzzleBlock = ({
  color,
  children,
  isDragging = false,
  onDragStart,
  onDragEnd,
}: PuzzleBlockProps) => {
  return (
    <motion.div
      drag
      dragSnapToOrigin
      whileHover={{ scale: 1.02 }}
      whileDrag={{ scale: 1.05 }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      className={`${color} p-4 rounded-lg shadow-lg cursor-grab active:cursor-grabbing min-w-[200px] 
        ${isDragging ? 'z-50' : 'z-0'}
        flex items-center gap-2 text-white font-medium`}
    >
      <div className="w-3 h-12 bg-white/20 rounded-full" />
      {children}
    </motion.div>
  );
};