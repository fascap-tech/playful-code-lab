import { motion } from "framer-motion";
import { GameCard } from "@/components/GameCard";
import { useNavigate } from "react-router-dom";
import { Star, Trophy, Puzzle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const games = [
  {
    title: "Puzzle Blocks",
    description: "Start your coding journey with fun block-based puzzles!",
    color: "bg-gradient-to-br from-game-blue to-blue-400",
    icon: <Puzzle className="w-12 h-12 text-white" />,
    level: "Beginner",
    lessons: 12,
  },
  {
    title: "Code Adventure",
    description: "Join an exciting adventure while learning to code!",
    color: "bg-gradient-to-br from-game-yellow to-orange-400",
    icon: <Trophy className="w-12 h-12 text-white" />,
    level: "Intermediate",
    lessons: 15,
  },
  {
    title: "Pattern Play",
    description: "Create amazing patterns and learn about loops!",
    color: "bg-gradient-to-br from-game-purple to-purple-400",
    icon: <Star className="w-12 h-12 text-white" />,
    level: "Beginner",
    lessons: 10,
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-white">
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-16"> {/* Added padding-top to account for fixed navbar */}
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-game-blue via-game-purple to-game-coral bg-clip-text text-transparent mb-6">
            Learn to Code with Fun!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join millions of young coders on an exciting journey of creativity and problem-solving!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-game-blue to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Start Coding Now - It's Free!
          </motion.button>
        </motion.div>

          {/* Game Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group"
              onClick={() => navigate(`/game/${index + 1}`)}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform group-hover:-translate-y-2">
                <div className={`${game.color} p-6 flex items-center justify-center`}>
                  {game.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{game.title}</h3>
                  <p className="text-gray-600 mb-4">{game.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {game.level}
                    </span>
                    <span className="text-gray-500">
                      {game.lessons} Lessons
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

          {/* Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Why Kids Love Our Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Learn by Doing",
                description: "Interactive puzzles and games make learning fun and engaging",
                icon: "🎮",
              },
              {
                title: "Kid-Friendly",
                description: "Designed specifically for young minds to understand easily",
                icon: "🌟",
              },
              {
                title: "Track Progress",
                description: "Watch your coding skills grow with each completed lesson",
                icon: "📈",
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
