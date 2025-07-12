import React, { useRef, useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaDocker, FaAws, FaLinux, FaGitAlt, FaNodeJs, FaReact, FaDatabase } from 'react-icons/fa';
import { SiKubernetes, SiMysql, SiJavascript, SiFrappe, SiStreamlit, SiRedhat, SiDebian } from 'react-icons/si';
import { BsRobot } from 'react-icons/bs';
import { Terminal, Cloud, Code, Zap, Cpu, Server } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: string;
}

interface OrbitData {
  radius: number;
  speed: number;
  inclination: number;
  phase: number;
  direction: number;
}

const skills: Skill[] = [
  { name: 'Python', icon: <FaPython />, color: '#3776ab', category: 'Programming' },
  { name: 'Docker', icon: <FaDocker />, color: '#2496ed', category: 'DevOps' },
  { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326ce5', category: 'DevOps' },
  { name: 'AWS', icon: <FaAws />, color: '#ff9900', category: 'Cloud' },
  { name: 'Linux', icon: <FaLinux />, color: '#fcc624', category: 'OS' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e', category: 'Programming' },
  { name: 'React', icon: <FaReact />, color: '#61dafb', category: 'Frontend' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', category: 'Backend' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479a1', category: 'Database' },
  { name: 'Git', icon: <FaGitAlt />, color: '#f05032', category: 'Tools' },
  { name: 'Frappe', icon: <SiFrappe />, color: '#0089ff', category: 'Framework' },
  { name: 'AI/ML', icon: <BsRobot />, color: '#ff6b6b', category: 'AI' },
  { name: 'Bash', icon: <Terminal />, color: '#4eaa25', category: 'Scripting' },
  { name: 'OpenShift', icon: <Cloud />, color: '#ee0000', category: 'Cloud' },
  { name: 'DevOps', icon: <Zap />, color: '#326ce5', category: 'Methodology' },
  { name: 'RHEL', icon: <SiRedhat />, color: '#ee0000', category: 'OS' },
  { name: 'Debian', icon: <SiDebian />, color: '#a81d33', category: 'OS' },
  { name: 'Streamlit', icon: <SiStreamlit />, color: '#ff4b4b', category: 'Framework' },
];

const SkillsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });

  // Generate unique orbit data for each skill
  const orbits = useMemo<OrbitData[]>(() => {
    return skills.map((_, index) => ({
      radius: 140 + (index % 5) * 35 + Math.random() * 20,
      speed: 0.2 + Math.random() * 0.3,
      inclination: (Math.random() - 0.5) * Math.PI * 0.8,
      phase: (index / skills.length) * Math.PI * 2,
      direction: Math.random() > 0.5 ? 1 : -1,
    }));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        setMousePosition({
          x: (e.clientX - centerX) / rect.width,
          y: (e.clientY - centerY) / rect.height,
        });
      }
    };

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const width = Math.min(600, window.innerWidth - 40);
        const height = Math.min(600, window.innerHeight - 200);
        setDimensions({ width, height });
      }
    };

    handleResize();

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.016);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const calculatePosition = (orbit: OrbitData, skillIndex: number) => {
    const mouseInfluence = isHovered ? 0.4 : 0.1;
    const mouseX = mousePosition.x * mouseInfluence;
    const mouseY = mousePosition.y * mouseInfluence;
    
    const angle = time * orbit.speed * orbit.direction + orbit.phase;
    const tiltX = Math.sin(orbit.inclination) * mouseX;
    const tiltY = Math.cos(orbit.inclination) * mouseY;
    
    // Enhanced 3D orbital calculations
    const x = Math.cos(angle) * orbit.radius + tiltX * 60;
    const y = Math.sin(angle) * orbit.radius * Math.cos(orbit.inclination) + tiltY * 60;
    const z = Math.sin(angle) * orbit.radius * Math.sin(orbit.inclination) + Math.sin(time * 0.5 + skillIndex) * 20;
    
    // Perspective projection
    const perspective = 800;
    const scale = perspective / (perspective - z);
    
    return {
      x: x * scale,
      y: y * scale,
      scale: Math.max(0.3, Math.min(1.4, scale)),
      opacity: Math.max(0.4, Math.min(1, scale)),
      zIndex: Math.round(1000 + z),
    };
  };

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'JavaScript', 'Bash'],
      color: 'from-blue-500 to-cyan-500',
      description: 'Core programming languages for development and automation'
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['Docker', 'Kubernetes', 'AWS', 'OpenShift'],
      color: 'from-green-500 to-teal-500',
      description: 'Container orchestration and cloud infrastructure'
    },
    {
      title: 'Operating Systems',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['Linux', 'RHEL', 'Debian'],
      color: 'from-orange-500 to-red-500',
      description: 'System administration and server management'
    },
    {
      title: 'Frameworks & Tools',
      icon: <Server className="w-6 h-6" />,
      skills: ['React', 'Node.js', 'Frappe', 'Streamlit'],
      color: 'from-purple-500 to-pink-500',
      description: 'Development frameworks and productivity tools'
    },
    {
      title: 'AI & Automation',
      icon: <Cpu className="w-6 h-6" />,
      skills: ['AI/ML', 'DevOps Automation'],
      color: 'from-indigo-500 to-purple-500',
      description: 'Artificial intelligence and process automation'
    },
    {
      title: 'Database & Version Control',
      icon: <FaDatabase className="w-6 h-6" />,
      skills: ['MySQL', 'Git'],
      color: 'from-cyan-500 to-blue-500',
      description: 'Data management and version control systems'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      {/* Cosmic Background with Asteroids */}
      <div className="absolute inset-0">
        {/* Floating Asteroids */}
        {typeof window !== 'undefined' && [...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-400 rounded-full opacity-60"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              rotate: 360
            }}
            transition={{ 
              duration: Math.random() * 20 + 20, 
              repeat: Infinity, 
              ease: 'linear'
            }}
          />
        ))}
        
        {/* Cosmic Dust */}
        {typeof window !== 'undefined' && [...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.8, 0]
            }}
            transition={{ 
              duration: Math.random() * 15 + 10, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Skills Constellation
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through my technical universe where each skill orbits in perfect harmony
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Skills Orbit */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                ref={containerRef}
                className="relative"
                style={{ width: dimensions.width, height: dimensions.height }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                {/* Central Skill Planet */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl"
                  animate={{
                    rotate: time * 30,
                    scale: isHovered ? 1.3 : 1,
                    boxShadow: isHovered 
                      ? '0 0 80px rgba(59, 130, 246, 0.8), 0 0 120px rgba(139, 92, 246, 0.6)'
                      : '0 0 40px rgba(59, 130, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)'
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <motion.div
                    animate={{ rotate: -time * 60 }}
                    className="text-white text-3xl"
                  >
                    <Code />
                  </motion.div>
                </motion.div>

                {/* Orbital Rings */}
                {[1, 2, 3, 4, 5].map((ring) => (
                  <motion.div
                    key={ring}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-blue-500/20 rounded-full"
                    style={{
                      width: `${140 + ring * 35}px`,
                      height: `${140 + ring * 35}px`,
                    }}
                    animate={{
                      rotate: time * (ring % 2 === 0 ? 15 : -15),
                      scale: isHovered ? 1.1 : 1,
                      opacity: isHovered ? 0.6 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}

                {/* Skill Icons */}
                {skills.map((skill, index) => {
                  const position = calculatePosition(orbits[index], index);
                  
                  return (
                    <motion.div
                      key={skill.name}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      style={{
                        x: position.x,
                        y: position.y,
                        zIndex: position.zIndex,
                      }}
                      animate={{
                        scale: position.scale,
                        opacity: position.opacity,
                      }}
                      whileHover={{
                        scale: position.scale * 1.4,
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <motion.div
                        className="relative group"
                        whileHover={{ y: -15 }}
                      >
                        {/* Cosmic Glow Effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full blur-xl opacity-70"
                          style={{ backgroundColor: skill.color }}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        
                        {/* Icon Container */}
                        <motion.div
                          className="relative w-18 h-18 bg-gray-900/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 shadow-2xl"
                          style={{ borderColor: skill.color }}
                          animate={{
                            borderColor: [skill.color, '#ffffff', skill.color],
                            boxShadow: [
                              `0 0 20px ${skill.color}`,
                              `0 0 40px ${skill.color}`,
                              `0 0 20px ${skill.color}`
                            ]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <motion.div
                            className="text-2xl"
                            style={{ color: skill.color }}
                            animate={{
                              rotate: time * 40 * orbits[index].direction,
                            }}
                          >
                            {skill.icon}
                          </motion.div>
                        </motion.div>

                        {/* Skill Name Tooltip */}
                        <motion.div
                          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/95 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-purple-500/30"
                          style={{ zIndex: 9999 }}
                        >
                          <div className="text-center">
                            <div className="font-semibold">{skill.name}</div>
                            <div className="text-gray-400 text-xs">{skill.category}</div>
                          </div>
                        </motion.div>

                        {/* Orbital Trail */}
                        <motion.div
                          className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
                          style={{ backgroundColor: skill.color }}
                          animate={{
                            scale: [0, 1.5, 0],
                            opacity: [0, 0.8, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.1,
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Connection Lines between Skills */}
                <svg
                  className="absolute inset-0 pointer-events-none"
                  width="100%"
                  height="100%"
                >
                  {skills.slice(0, 12).map((_, index) => {
                    const pos1 = calculatePosition(orbits[index], index);
                    const pos2 = calculatePosition(orbits[(index + 1) % 12], (index + 1) % 12);
                    
                    return (
                      <motion.line
                        key={index}
                        x1={dimensions.width / 2 + pos1.x}
                        y1={dimensions.height / 2 + pos1.y}
                        x2={dimensions.width / 2 + pos2.x}
                        y2={dimensions.height / 2 + pos2.y}
                        stroke="rgba(59, 130, 246, 0.2)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isHovered ? 1 : 0.4 }}
                        transition={{ duration: 0.8 }}
                      />
                    );
                  })}
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Categories */}
          <motion.div 
            className="grid gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, staggerChildren: 0.1 }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)",
                  y: -5
                }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`p-3 bg-gradient-to-r ${category.color} rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-300 transition-colors">
                      {category.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30 hover:border-purple-400/50 hover:bg-purple-400/20 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: 0.8 + index * 0.1 + skillIndex * 0.05,
                            duration: 0.4
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;