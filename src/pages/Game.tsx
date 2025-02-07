
import { useParams } from "react-router-dom";
import { PuzzleWorkspace } from "@/components/PuzzleWorkspace";
import { GameBoard } from "@/components/GameBoard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Game = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">
            Deep Sea Explorer - Level {id}
          </h1>
          <div className="mb-8">
            <h2 className="text-xl text-blue-200 mb-4">
              Challenge: Guide your submarine to explore the depths
            </h2>
            <GameBoard />
          </div>
          <PuzzleWorkspace />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Game;
