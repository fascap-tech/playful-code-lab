import { motion } from "framer-motion";
import { GameCard } from "@/components/GameCard";
import { useNavigate } from "react-router-dom";

const games = [
  {
    title: "Puzzle Blocks",
    description: "Learn basic coding concepts by solving fun puzzles!",
    color: "hover:bg-game-blue/10",
    icon: "/placeholder.svg",
  },
  {
    title: "Code Adventure",
    description: "Join an exciting journey through coding challenges!",
    color: "hover:bg-game-yellow/10",
    icon: "/placeholder.svg",
  },
  {
    title: "Pattern Play",
    description: "Create patterns and learn about loops!",
    color: "hover:bg-game-coral/10",
    icon: "/placeholder.svg",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Learn to Code with Fun!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your coding adventure with exciting games and puzzles designed just for you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {games.map((game, index) => (
            <GameCard
              key={game.title}
              {...game}
              onClick={() => navigate(`/game/${index + 1}`)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-gray-600">
            Choose any game above and begin learning while having fun!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;