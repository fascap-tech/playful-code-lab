import { useParams } from "react-router-dom";
import { PuzzleWorkspace } from "@/components/PuzzleWorkspace";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Game = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Puzzle Blocks - Level {id}
          </h1>
          <div className="mb-8">
            <h2 className="text-xl text-gray-600 mb-4">
              Challenge: Move the character to reach the star
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              {/* Game visualization would go here */}
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Game visualization coming soon...</p>
              </div>
            </div>
          </div>
          <PuzzleWorkspace />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Game;