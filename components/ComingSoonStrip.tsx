import { GptItem } from "@/lib/gptData";

interface ComingSoonStripProps {
  gpts: GptItem[];
}

export function ComingSoonStrip({ gpts }: ComingSoonStripProps) {
  const comingSoon = gpts.filter((gpt) => gpt.featured === "Coming Soon").slice(0, 5);

  if (comingSoon.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-teal-600 py-12 px-6 rounded-2xl my-12 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Coming Soon 🚀</h2>
            <p className="text-blue-100">
              Get ready for these game-changing AI tools arriving shortly.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/30">
              Stay Tuned
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {comingSoon.map((gpt, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {gpt.emoji}
              </div>
              <h3 className="font-bold text-lg mb-1 line-clamp-1">{gpt.name}</h3>
              <p className="text-blue-100 text-xs line-clamp-2 mb-3">{gpt.description}</p>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-300">
                Launching Soon
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
