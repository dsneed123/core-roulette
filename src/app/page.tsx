import SkillLevelButtons from '../components/SkillLevelButtons';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#1A202C] p-1">
      <div className="max-w-lg w-full">
        <h1 className="text-5xl font-bold text-center text-white mb-8">Core Roulette</h1>
        <p className="text-lg text-center text-gray-300 mb-6">
          Choose your skill level to get a randomized core workout tailored just for you!
        </p>
        <SkillLevelButtons />
      </div>
    </main>
  );
}
