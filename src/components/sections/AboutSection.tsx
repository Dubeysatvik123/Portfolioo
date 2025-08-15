import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Award, MapPin, Phone, Mail, Calendar, Github } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100, rotateY: -30 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100, rotateY: 30 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const personalInfo = [
    { icon: MapPin, text: 'Gandhi Nagar, Itarsi, MP 461111', color: 'text-blue-400' },
    { icon: Phone, text: '+91 7987285470', color: 'text-green-400' },
    { icon: Mail, text: 'satvikdubey268@gmail.com', color: 'text-purple-400' },
    { icon: Github, text: 'https://github.com/Dubeysatvik123', color: 'text-gray-400' },
    // Add Portfolio and LinkedIn if needed
  ];

  const achievements = [
    'Red Hat Academy Campus Ambassador (2022–2025): Conducted technical training sessions, promoted Red Hat certification programs, and facilitated student engagement in open-source technologies.',
    'Technical Club Coordinator (Nov 2023–May 2025): Organized hands-on workshops on Linux administration, automation tools, and DevOps best practices, fostering peer learning and skill development.',
    'B.Tech in Computer Science and Engineering, RGPV University, Bhopal (August 2021–June 2025)',
    'Higher Secondary, Vardhaman Public School, Itarsi (April 2018–May 2021)',
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-darkblue-900/20 via-black/50 to-darkblue-800/20" />
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-r from-darkblue-600/5 via-transparent to-darkblue-700/5"
        style={{
          backgroundSize: '200% 200%',
        }}
      />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mt-6"
            variants={fadeInUp}
          >
            B.Tech CSE graduate skilled in DevOps, Cloud Computing, and AI-driven automation. Proficient in Docker, Kubernetes, AWS, Jenkins, Terraform, Ansible, and IaC tools. Experienced in CI/CD pipeline design, cloud-native deployments, and integrating Generative AI into workflows. Adept at building scalable, secure, and high-availability systems with strong monitoring and observability practices.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Profile & Info */}
          <motion.div variants={slideInLeft} className="space-y-8">
            {/* Profile Card */}
            <motion.div
              className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <User className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Satvik Dubey</h3>
                  <p className="text-blue-400">DevOps Engineer & AI/ML Developer</p>
                </div>
              </div>
              
              <motion.p
                className="text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Hi, I'm Satvik Dubey — a B.Tech CSE graduate with a passion for DevOps, Cloud, and AI-driven automation. I specialize in Docker, Kubernetes, AWS, Jenkins, Terraform, Ansible, and Infrastructure as Code. My expertise includes designing CI/CD pipelines, cloud-native deployments, and integrating Generative AI into DevOps workflows.
              </motion.p>
              <motion.p
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                I build scalable, secure, and highly available systems with strong monitoring and observability. Based in Gandhi Nagar, Itarsi, I enjoy solving complex problems and driving innovation in cloud and AI engineering.
              </motion.p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
              }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-400" />
                Contact Information
              </h3>
              <div className="space-y-4">
                {personalInfo.map(({ icon: Icon, text, color }, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                    whileHover={{ x: 5 }}
                  >
                    <Icon className={`w-5 h-5 ${color}`} />
                    <span className="text-gray-300">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Achievements & Skills */}
          <motion.div variants={slideInRight} className="space-y-8">
            {/* Achievements */}
            <motion.div
              className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-2xl p-8 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-500"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(251, 146, 60, 0.2)"
              }}
            >
              <h3 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Achievements & Education
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-orange-500/10 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Philosophy Card */}
            <motion.div
              className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
              }}
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-6">My Philosophy</h3>
              <motion.blockquote
                className="text-lg text-gray-300 italic leading-relaxed"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                "Technology is best when it brings people together, solves meaningful problems, 
                and creates possibilities that didn't exist before. I believe in building solutions 
                that make a real difference."
              </motion.blockquote>
            </motion.div>

            {/* Fun Fact */}
            <motion.div
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-6 border border-cyan-500/30"
              initial={{ opacity: 0, rotateX: -15 }}
              animate={inView ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: -15 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 15px 30px rgba(6, 182, 212, 0.3)"
              }}
            >
              <div className="flex items-center gap-3 text-cyan-400">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Fun Fact</span>
              </div>
              <p className="text-gray-300 mt-2">
                When I'm not coding, you'll find me exploring new AI tools, contributing to open source, 
                or experimenting with automation scripts that make life easier!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;