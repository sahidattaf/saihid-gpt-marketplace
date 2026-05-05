import { MessageCircle, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Contact | GPT Marketplace by Sahid Attaf",
  description: "Get in touch for personalized support, custom GPT integrations, or enterprise pricing.",
};

const WHATSAPP_NUMBER = "59995230683";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-12 py-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Questions about a GPT, custom integrations, or enterprise pricing?
          We respond fast.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Sahid!%20I%27m%20interested%20in%20your%20GPT%20Marketplace.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300 hover:border-green-300 dark:hover:border-green-700"
        >
          <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
            <MessageCircle className="w-7 h-7 text-green-600 dark:text-green-400" />
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-900 dark:text-white mb-1">WhatsApp</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Chat on WhatsApp</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-2 font-medium">
              Click to Chat →
            </p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:sahidattaf@gmail.com?subject=GPT%20Marketplace%20Inquiry"
          className="group flex flex-col items-center gap-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700"
        >
          <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Mail className="w-7 h-7 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-900 dark:text-white mb-1">Email</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">sahidattaf@gmail.com</p>
            <p className="text-xs text-blue-600 dark:text-blue-400 mt-2 font-medium">
              Send Email →
            </p>
          </div>
        </a>

        {/* Phone */}
        <a
          href={`tel:+${WHATSAPP_NUMBER}`}
          className="group flex flex-col items-center gap-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300 hover:border-teal-300 dark:hover:border-teal-700"
        >
          <div className="w-14 h-14 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Phone className="w-7 h-7 text-teal-600 dark:text-teal-400" />
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-900 dark:text-white mb-1">Phone</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">+{WHATSAPP_NUMBER}</p>
            <p className="text-xs text-teal-600 dark:text-teal-400 mt-2 font-medium">
              Call Now →
            </p>
          </div>
        </a>
      </div>

      {/* CTA block */}
      <div className="brand-gradient rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to get started?</h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          Message us on WhatsApp and we'll help you find the right GPT for your
          business — or build a custom one for your needs.
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Sahid!%20I%27m%20ready%20to%20get%20started%20with%20your%20GPT%20Marketplace.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
        >
          <MessageCircle className="w-5 h-5 text-green-600" />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
