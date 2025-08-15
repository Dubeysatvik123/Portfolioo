import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';

const PublicationsSection: React.FC = () => {
  return (
    <section id="publications" className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/50 to-cyan-800/20" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Publications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </div>
        <motion.div
          className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="w-10 h-10 text-purple-400" />
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                COGNITIVE AGENTS IN DEVOPS: TRANSFORMING OBSERVABILITY, INCIDENT RESPONSE, AND POLICY-AWARE AUTOMATION
              </h3>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold">Journal:</span> International Journal of Recent Research and Review, Special Issues-2 - 2025
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold">ISSN:</span> 2277 – 8322
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold">Year:</span> 2025
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Designed and implemented an LLM-powered cognitive agent to enhance observability, automate incident response, and enforce DevSecOps policies in real-time production environments.</li>
                <li>Demonstrated measurable operational improvements: <b>44% lower MTTR</b>, <b>18% higher incident diagnosis accuracy</b>, and <b>46% reduction in engineer workload</b>.</li>
                <li>Integrated agentic AI reasoning (ReAct, AutoGen) with policy-as-code governance for secure, explainable, and adaptive reliability engineering.</li>
              </ul>
              <motion.a
                href="https://www.ijrrr.com/specialissues2-2025/ijrrr-Special-Issue-2-2025-paper39.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                View Paper (PDF)
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PublicationsSection;
