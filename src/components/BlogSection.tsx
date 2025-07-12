import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

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
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="blog" className="min-h-screen py-20 px-6 relative overflow-hidden">
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
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge and experiences from my journey in tech
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-darkblue-500/20 hover:border-darkblue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-darkblue-500/20 h-full flex flex-col">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${post.gradient} text-white text-sm rounded-full font-medium`}>
                    {post.category}
                  </span>
                  <BookOpen className="w-5 h-5 text-darkblue-400" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-darkblue-300 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                {/* Read More Button */}
                <motion.a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-darkblue-400 hover:text-darkblue-300 transition-colors group-hover:gap-3 duration-300"
                >
                  <span className="font-medium">Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-darkblue-600/20 to-darkblue-700/20 rounded-2xl p-8 border border-darkblue-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Connect
            </h3>
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
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(30, 58, 138, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300"
              >
                GitHub
              </motion.a>
              <motion.a
                href="mailto:satvikdubey1203@gmail.com"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(30, 58, 138, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300"
              >
                Email
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BlogSection;