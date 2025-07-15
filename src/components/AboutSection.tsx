import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, User } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const personalInfo = [
    { icon: MapPin, text: 'Gandhi Nagar, Itarsi 461111' },
    { icon: Phone, text: '+91 7987285470' },
    { icon: Mail, text: 'satvikdubey268@gmail.com' },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"
        style={{
          backgroundSize: '200% 200%',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Glowing Frame */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1 shadow-[0_0_30px_#1E3A8A]">
                <div className="w-full h-full bg-black rounded-full" />
              </div>
              
              {/* Flip Card */}
              <motion.div
                className="absolute inset-4 cursor-pointer"
                onClick={() => setIsFlipped(!isFlipped)}
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front - Profile Image */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold text-white"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <User size={120} />
                  </div>
                  
                  {/* Back - Contact Info */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex flex-col items-center justify-center text-white p-8 text-center"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="space-y-4">
                      {personalInfo.map(({ icon: Icon, text }, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: isFlipped ? 1 : 0, y: isFlipped ? 0 : 10 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <Icon size={16} />
                          <span>{text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-gray-400 mt-4"
            >
              Click to flip
            </motion.p>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-xl border border-blue-500/30 backdrop-blur-sm">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 text-lg leading-relaxed mb-6"
              >
                Hi, I'm Satvik Dubey — a detail-oriented Computer Science graduate from RGPV University (CGPA 7.64).
                I specialize in Python scripting, system automation, Linux administration, and DevOps tooling.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-lg leading-relaxed mb-6"
              >
                I love solving problems, building scalable backends, and exploring GenAI tools.
                Based in Gandhi Nagar, Itarsi, I'm passionate about building futuristic tech experiences.
              </motion.p>

              {/* Personal Details */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                {personalInfo.map(({ icon: Icon, text }, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-3 text-blue-400"
                  >
                    <Icon size={20} />
                    <span>{text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Education & Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-orange-900/20 to-red-900/20 p-6 rounded-xl border border-orange-500/30 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-orange-400 mb-4">Achievements</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Red Hat Campus Ambassador (2022–2025)</li>
                <li>• Technical Club Coordinator (2023–2025)</li>
                <li>• B.Tech in Computer Science – RGPV, Bhopal (CGPA 7.64)</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;