import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Calendar, ArrowRight, ExternalLink } from 'lucide-react';

const BlogSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      title: 'Why Companies Use Kubernetes',
      excerpt: 'Exploring the key reasons why organizations adopt Kubernetes for container orchestration and the benefits it brings to modern software development...',
      date: 'March 2024',
      readTime: '8 min read',
      category: 'DevOps',
      gradient: 'from-blue-500 to-cyan-600',
      link: 'https://www.linkedin.com/posts/satvik-dubey-8477ab23b_kubernetes-k8s-cloudnative-activity-7349741446272315392-HTLS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADu9fPcBXd5k7FheqCZPT_LUknPhUCD3Dm4'
    },
    {
      title: 'Why Companies Use Linux',
      excerpt: 'Understanding the strategic advantages of Linux in enterprise environments and why it remains the preferred choice for servers and development...',
      date: 'March 2024',
      readTime: '10 min read',
      category: 'DevOps',
      gradient: 'from-green-500 to-emerald-600',
      link: 'https://www.linkedin.com/posts/satvik-dubey-8477ab23b_linux-opensource-devops-activity-7349740103478427649-HF0z?utm_source=share&utm_medium=member_desktop&rcm=ACoAADu9fPcBXd5k7FheqCZPT_LUknPhUCD3Dm4'
    },
    {
      title: 'Why Companies Use Docker',
      excerpt: 'Deep dive into Docker adoption strategies and how containerization revolutionizes application deployment and management...',
      date: 'March 2024',
      readTime: '12 min read',
      category: 'DevOps',
      gradient: 'from-orange-500 to-red-600',
      link: 'https://www.linkedin.com/posts/satvik-dubey-8477ab23b_docker-devops-containerization-activity-7349738846361640960-JSE3?utm_source=share&utm_medium=member_desktop&rcm=ACoAADu9fPcBXd5k7FheqCZPT_LUknPhUCD3Dm4'
    },
    {
      title: 'Linux Family Case Study',
      excerpt: 'Comprehensive analysis of different Linux distributions and their use cases in enterprise environments...',
      date: 'March 2024',
      readTime: '15 min read',
      category: 'Linux',
      gradient: 'from-purple-500 to-pink-600',
      link: 'https://www.linkedin.com/posts/satvik-dubey-8477ab23b_linux-family-case-study-activity-7350740885053026304-8gsU?utm_source=share&utm_medium=member_desktop&rcm=ACoAADu9fPcBXd5k7FheqCZPT_LUknPhUCD3Dm4'
    },
    {
      title: 'Docker Networking & NAT',
      excerpt: 'Understanding Docker networking concepts and Network Address Translation for containerized applications...',
      date: 'November 2024',
      readTime: '12 min read',
      category: 'Networking',
      gradient: 'from-cyan-500 to-blue-600',
      link: 'https://www.linkedin.com/posts/satvik-dubey-8477ab23b_networking-docker-nat-activity-7278055627942166528-lpbK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADu9fPcBXd5k7FheqCZPT_LUknPhUCD3Dm4'
    },
    {
      title: 'Linux Kernel & GRUB',
      excerpt: 'Deep dive into Linux kernel architecture and GRUB bootloader configuration for system administrators...',
      date: 'November 2024',
      readTime: '18 min read',
      category: 'System Administration',
      gradient: 'from-indigo-500 to-purple-600',
      link: 'https://www.linkedin.com/posts/satvik-dubey-8477ab23b_linux-kernel-grub-activity-7278012088889856000-VTZ8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADu9fPcBXd5k7FheqCZPT_LUknPhUCD3Dm4'
    },
    {
      title: 'Docker Networking & Microservices',
      excerpt: 'Exploring advanced Docker networking patterns for microservices architecture and container communication...',
      date: 'November 2024',
      readTime: '14 min read',
      category: 'Microservices',
      gradient: 'from-teal-500 to-green-600',
      link: 'https://www.linkedin.com/posts/satvik-dubey-8477ab23b_docker-networking-microservices-activity-7277321886798139392-9Xxk?utm_source=share&utm_medium=member_desktop&rcm=ACoAADu9fPcBXd5k7FheqCZPT_LUknPhUCD3Dm4'
    },
    {
      title: 'Docker Containerization',
      excerpt: 'Best practices for Docker containerization and optimization strategies for production environments...',
      date: 'November 2024',
      readTime: '10 min read',
      category: 'Containerization',
      gradient: 'from-amber-500 to-orange-600',
      link: 'https://www.linkedin.com/posts/satvik-dubey-8477ab23b_docker-containerization-devops-activity-7277315326990569473-5JhX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADu9fPcBXd5k7FheqCZPT_LUknPhUCD3Dm4'
    },
    {
      title: 'DevOps Docker Automation',
      excerpt: 'Implementing automated Docker workflows in DevOps pipelines for continuous integration and deployment...',
      date: 'November 2024',
      readTime: '16 min read',
      category: 'Automation',
      gradient: 'from-rose-500 to-pink-600',
      link: 'https://www.linkedin.com/posts/satvik-dubey-8477ab23b_devops-docker-automation-activity-7277290977596178432--Pzi?utm_source=share&utm_medium=member_desktop&rcm=ACoAADu9fPcBXd5k7FheqCZPT_LUknPhUCD3Dm4'
    },
    {
      title: 'Linux Shell Scripting & Log Analysis',
      excerpt: 'Advanced shell scripting techniques for automated log analysis and system monitoring in Linux environments...',
      date: 'November 2024',
      readTime: '13 min read',
      category: 'Shell Scripting',
      gradient: 'from-emerald-500 to-teal-600',
      link: 'https://www.linkedin.com/posts/satvik-dubey-8477ab23b_linux-shellscripting-loganalysis-activity-7276940577319907328-w2wk?utm_source=share&utm_medium=member_desktop&rcm=ACoAADu9fPcBXd5k7FheqCZPT_LUknPhUCD3Dm4'
    },
    {
      title: 'DevOps Linux Shell Scripting',
      excerpt: 'Essential shell scripting practices for DevOps engineers working with Linux systems and automation...',
      date: 'November 2024',
      readTime: '11 min read',
      category: 'DevOps',
      gradient: 'from-violet-500 to-purple-600',
      link: 'https://www.linkedin.com/posts/satvik-dubey-8477ab23b_devops-linux-shellscripting-activity-7276905852253462528-DsS5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADu9fPcBXd5k7FheqCZPT_LUknPhUCD3Dm4'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="blog" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Enhanced Galactic Background */}
      <div className="absolute inset-0">
        {/* Cosmic Dust Clouds */}
        {typeof window !== 'undefined' && [...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0.5, 1, 0],
              rotate: 360
            }}
            transition={{ 
              duration: Math.random() * 20 + 15, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: 'easeInOut'
            }}
          />
        ))}
        
        {/* Floating Knowledge Particles */}
        {typeof window !== 'undefined' && [...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: [0, 1, 0],
              scale: [1, 2, 1]
            }}
            transition={{ 
              duration: Math.random() * 12 + 8, 
              repeat: Infinity, 
              delay: Math.random() * 4,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Knowledge Cosmos
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Sharing knowledge and experiences from my journey through the tech universe
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              variants={itemVariants}
              className="group relative"
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
            >
              {/* Enhanced Cosmic Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <motion.div 
                className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 h-full flex flex-col"
                whileHover={{
                  boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)"
                }}
              >
                {/* Enhanced Header */}
                <div className="flex items-center justify-between mb-4">
                  <motion.span 
                    className={`px-4 py-2 bg-gradient-to-r ${post.gradient} text-white text-sm rounded-full font-medium shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {post.category}
                  </motion.span>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <BookOpen className="w-5 h-5 text-purple-400" />
                  </motion.div>
                </div>

                {/* Enhanced Content */}
                <motion.h3 
                  className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {post.title}
                </motion.h3>

                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Enhanced Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                {/* Enhanced Read More Button */}
                <motion.a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group-hover:gap-3 duration-300 font-medium"
                >
                  <span>Read Article</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>

                {/* Enhanced Hover Effect Particles */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-300 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${15 + i * 12}%`,
                      }}
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Contact Information */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <motion.div
            className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)"
            }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Let's Connect Across the Cosmos
            </motion.h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Ready to collaborate on your next project? Feel free to reach out through any of these channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://www.linkedin.com/in/satvik-dubey-8477ab23b"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(30, 58, 138, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/Dubeysatvik123"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(75, 85, 99, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300"
              >
                GitHub
              </motion.a>
              <motion.a
                href="mailto:satvikdubey1203@gmail.com"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(239, 68, 68, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300"
              >
                Email
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BlogSection;