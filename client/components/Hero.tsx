import Image from "next/image";
import Link from "next/link";

function Hero() {
    return <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <Image alt="robot" src="/hero.jpg" className="max-w-sm rounded-lg shadow-2xl" width="400" height="300"/>
      <div>
        <h1 className="text-5xl font-bold">Alite - Puzzle Solver</h1>
        <p className="py-6">
            Alite is Open Source Utility that solve the puzzle for you. It uses the power of AI to solve the puzzle.
            This AI make use of several alogorithms from different domains of computer science like ML,RL,DSA etc. to create the solver.
        </p>
        <Link href="/puzzles" className="btn btn-primary">Get Started</Link>
      </div>
    </div>
  </div>;
}

export default Hero;