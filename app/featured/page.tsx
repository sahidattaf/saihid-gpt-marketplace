import { filterGpts } from "@/lib/gptData";
import { GptCard } from "@/components/GptCard";

export const metadata = {
  title: "Featured GPTs | GPT Marketplace by Sahid Attaf",
  description: "Our top 10 featured AI GPT solutions — hand-picked for maximum business impact.",
};

export default function FeaturedPage() {
  const featured = filterGpts({ featured: "Yes" });

  return (
    <div className="space-y-8 py-4">
      <section className="text-center py-8">
        <div className="inline-block px-4 py-2 brand-gradient text-white rounded-full text-sm font-medium mb-4">
          ⭐ Top Picks
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Featured GPTs
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Hand-picked AI tools delivering the highest business impact. These are
          the GPTs we recommend to every new customer.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {featured.map((gpt) => (
          <GptCard key={gpt.name} gpt={gpt} />
        ))}
      </div>

      {featured.length === 0 && (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          No featured GPTs at this time.
        </div>
      )}

      <div className="brand-gradient rounded-2xl p-8 text-white text-center mt-12">
        <h2 className="text-2xl font-bold mb-3">Not sure which to pick?</h2>
        <p className="text-white/80 mb-6">
          Chat with us on WhatsApp — we&apos;ll match you to the right GPT for your
          specific use case.
        </p>
        <a
          href="https://wa.me/59995230683?text=Hi! I need help choosing a featured GPT."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
        >
          💬 Get a recommendation
        </a>
      </div>
    </div>
  );
}
