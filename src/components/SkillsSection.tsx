import React, { useRef, useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaDocker, FaAws, FaLinux, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiKubernetes, SiMysql, SiFrappe, SiStreamlit, SiRedhat, SiDebian } from 'react-icons/si';
import { BsRobot } from 'react-icons/bs';
import { Terminal, Cloud, Code, Zap, Cpu, Server, Award } from 'lucide-react';

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
  { name: 'Bash', icon: <Terminal />, color: '#4eaa25', category: 'Scripting' },
  { name: 'Frappe Framework', icon: <SiFrappe />, color: '#0089ff', category: 'Framework' },
  { name: 'Docker', icon: <FaDocker />, color: '#2496ed', category: 'DevOps' },
  { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326ce5', category: 'DevOps' },
  { name: 'OpenShift', icon: <Cloud />, color: '#e00b1c', category: 'DevOps' },
  { name: 'Jenkins', icon: <Server />, color: '#d33833', category: 'DevOps' },
  { name: 'Terraform', icon: <Cloud />, color: '#5c4ee5', category: 'DevOps' },
  { name: 'Ansible', icon: <Zap />, color: '#e00b1c', category: 'DevOps' },
  { name: 'Git', icon: <FaGitAlt />, color: '#f05032', category: 'Tools' },
  { name: 'AWS', icon: <FaAws />, color: '#ff9900', category: 'Cloud' },
  { name: 'Linux', icon: <FaLinux />, color: '#fcc624', category: 'OS' },
  { name: 'RHEL', icon: <SiRedhat />, color: '#ee0000', category: 'OS' },
  { name: 'Debian', icon: <SiDebian />, color: '#a81d33', category: 'OS' },
  { name: 'K8sGPT', icon: <Cpu />, color: '#00bfae', category: 'Observability' },
  { name: 'Prometheus', icon: <FaDatabase />, color: '#e6522c', category: 'Observability' },
  { name: 'Grafana', icon: <FaDatabase />, color: '#f46800', category: 'Observability' },
  { name: 'LangChain Agents', icon: <BsRobot />, color: '#00bfae', category: 'AI' },
  { name: 'Generative AI', icon: <BsRobot />, color: '#ff6b6b', category: 'AI' },
  { name: 'Prompt Engineering', icon: <Code />, color: '#a259ff', category: 'AI' },
  { name: 'AiChat', icon: <BsRobot />, color: '#00bfae', category: 'AI' },
  { name: 'ShellGPT', icon: <BsRobot />, color: '#ff6b6b', category: 'AI' },
  { name: 'Codium', icon: <Code />, color: '#3776ab', category: 'Productivity' },
  { name: 'Brainboard', icon: <Cloud />, color: '#5c4ee5', category: 'Productivity' },
  // Soft Skills (as tags)
  { name: 'Problem Solving', icon: <Zap />, color: '#326ce5', category: 'Soft Skill' },
  { name: 'Communication', icon: <Cloud />, color: '#0078d4', category: 'Soft Skill' },
  { name: 'Teamwork', icon: <Server />, color: '#d33833', category: 'Soft Skill' },
  { name: 'Adaptability', icon: <Cpu />, color: '#00bfae', category: 'Soft Skill' },
  { name: 'Leadership', icon: <Award />, color: '#ff9900', category: 'Soft Skill' },
];

const SkillsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });

  // Generate unique orbit data for each skill
  const baseRadius = 140;
  const orbitGap = 50;
  const skillsPerOrbit = 8;
  const orbits = useMemo<OrbitData[]>(() => {
    return skills.map((_, index) => {
      const orbitIndex = Math.floor(index / skillsPerOrbit);
      const angleInOrbit = (index % skillsPerOrbit) * (2 * Math.PI / skillsPerOrbit);
      return {
        radius: baseRadius + orbitIndex * orbitGap,
        speed: 0.12 + orbitIndex * 0.04,
        inclination: 0, // All orbits are flat for structure
        phase: angleInOrbit,
        direction: 1,
      };
    });
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
      title: 'Programming & Scripting',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'Bash', 'Frappe Framework'],
      color: 'from-blue-500 to-cyan-500',
      description: 'Core programming and scripting languages for automation and backend development',
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['Docker', 'Kubernetes', 'OpenShift', 'Jenkins', 'Terraform', 'Ansible', 'AWS'],
      color: 'from-green-500 to-teal-500',
      description: 'Container orchestration, automation, and cloud infrastructure',
    },
    {
      title: 'Operating Systems',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['Linux', 'RHEL', 'Debian'],
      color: 'from-orange-500 to-red-500',
      description: 'System administration and server management',
    },
    {
      title: 'Monitoring & Observability',
      icon: <Cpu className="w-6 h-6" />,
      skills: ['K8sGPT', 'Prometheus', 'Grafana'],
      color: 'from-indigo-500 to-purple-500',
      description: 'Monitoring, alerting, and observability tools for cloud-native systems',
    },
    {
      title: 'AI/ML & Productivity',
      icon: <BsRobot className="w-6 h-6" />,
      skills: ['LangChain Agents', 'Generative AI', 'Prompt Engineering', 'AiChat', 'ShellGPT', 'Codium', 'Brainboard'],
      color: 'from-purple-500 to-pink-500',
      description: 'AI/ML frameworks, generative AI, and productivity tools',
    },
    {
      title: 'Soft Skills',
      icon: <Award className="w-6 h-6" />,
      skills: ['Problem Solving', 'Communication', 'Teamwork', 'Adaptability', 'Leadership'],
      color: 'from-yellow-500 to-orange-500',
      description: 'Essential soft skills for effective engineering and leadership',
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      {/* Enhanced Cosmic Background */}
      <div className="absolute inset-0">
        {/* Floating Cosmic Debris */}
        {typeof window !== 'undefined' && [...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-40"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              rotate: 360,
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: Math.random() * 25 + 20, 
              repeat: Infinity, 
              ease: 'linear'
            }}
          />
        ))}
        
        {/* Cosmic Energy Waves */}
        {typeof window !== 'undefined' && [...Array(6)].map((_, i) => (
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
              scale: [1, 3, 1]
            }}
            transition={{ 
              duration: Math.random() * 8 + 6, 
              repeat: Infinity, 
              delay: Math.random() * 4,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Skills Constellation
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
            Navigate through my technical universe where each skill orbits in perfect harmony
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced 3D Skills Orbit */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                ref={containerRef}
                className="relative"
                style={{ width: dimensions.width, height: dimensions.height }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                {/* Enhanced Central Core */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl"
                  animate={{
                    rotate: time * 25,
                    scale: isHovered ? 1.4 : 1,
                    boxShadow: isHovered 
                      ? [
                          '0 0 60px rgba(59, 130, 246, 0.8)',
                          '0 0 100px rgba(139, 92, 246, 0.6)',
                          '0 0 140px rgba(6, 182, 212, 0.4)'
                        ]
                      : [
                          '0 0 30px rgba(59, 130, 246, 0.5)',
                          '0 0 50px rgba(139, 92, 246, 0.3)',
                          '0 0 70px rgba(6, 182, 212, 0.2)'
                        ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, type: "tween", ease: "easeInOut" }}
                >
                  <motion.div
                    animate={{ rotate: -time * 50 }}
                    className="text-white text-4xl"
                  >
                    <Code />
                  </motion.div>
                  
                  {/* Core Energy Rings */}
                  {[1, 2, 3].map((ring) => (
                    <motion.div
                      key={ring}
                      className="absolute inset-0 border-2 border-white/20 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.6, 0.2],
                        rotate: time * (ring * 10)
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: ring * 0.5
                      }}
                    />
                  ))}
                </motion.div>

                {/* Enhanced Orbital Rings */}
                {[1, 2, 3, 4, 5].map((ring) => (
                  <motion.div
                    key={ring}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-blue-500/30 rounded-full"
                    style={{
                      width: `${140 + ring * 35}px`,
                      height: `${140 + ring * 35}px`,
                    }}
                    animate={{
                      rotate: time * (ring % 2 === 0 ? 12 : -12),
                      scale: isHovered ? 1.15 : 1,
                      opacity: isHovered ? 0.8 : 0.4,
                      borderColor: [
                        'rgba(59, 130, 246, 0.3)',
                        'rgba(139, 92, 246, 0.3)',
                        'rgba(6, 182, 212, 0.3)',
                        'rgba(59, 130, 246, 0.3)'
                      ]
                    }}
                    transition={{ 
                      duration: 0.3,
                      borderColor: { duration: 4, repeat: Infinity }
                    }}
                  />
                ))}

                {/* Enhanced Skill Icons */}
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
                        scale: position.scale * 1.6,
                        rotate: 360,
                        transition: { duration: 0.8, type: 'spring', stiffness: 200 }
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <motion.div
                        className="relative group"
                        whileHover={{ y: -20 }}
                      >
                        {/* Enhanced Multi-layer Glow */}
                        <motion.div
                          className="absolute inset-0 rounded-full blur-xl"
                          style={{ backgroundColor: skill.color }}
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        
                        <motion.div
                          className="absolute inset-0 rounded-full blur-lg"
                          style={{ backgroundColor: skill.color }}
                          animate={{
                            scale: [1.2, 1.6, 1.2],
                            opacity: [0.4, 0.8, 0.4],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                          }}
                        />
                        
                        {/* Enhanced Icon Container */}
                        <motion.div
                          className="relative w-20 h-20 bg-gray-900/95 backdrop-blur-sm rounded-full flex items-center justify-center border-2 shadow-2xl"
                          style={{ borderColor: skill.color }}
                          animate={{
                            borderColor: [skill.color, '#ffffff', skill.color],
                            boxShadow: [
                              `0 0 20px ${skill.color}`,
                              `0 0 40px ${skill.color}`,
                              `0 0 60px ${skill.color}`,
                              `0 0 40px ${skill.color}`,
                              `0 0 20px ${skill.color}`
                            ]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            type: "tween"
                          }}
                        >
                          <motion.div
                            className="text-3xl"
                            style={{ color: skill.color }}
                            animate={{
                              rotate: time * 35 * orbits[index].direction,
                            }}
                          >
                            {skill.icon}
                          </motion.div>
                        </motion.div>

                        {/* Enhanced Tooltip */}
                        <motion.div
                          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/95 text-white text-xs px-4 py-3 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-purple-500/30 backdrop-blur-sm"
                          style={{ zIndex: 9999 }}
                        >
                          <div className="text-center">
                            <div className="font-bold text-sm">{skill.name}</div>
                            <div className="text-gray-400 text-xs mt-1">{skill.category}</div>
                          </div>
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rotate-45 border-l border-t border-purple-500/30"></div>
                        </motion.div>

                        {/* Enhanced Particle Effects */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
                            style={{ backgroundColor: skill.color }}
                            animate={{
                              scale: [0, 1.5, 0],
                              opacity: [0, 0.8, 0],
                              x: [0, (Math.random() - 0.5) * 40],
                              y: [0, (Math.random() - 0.5) * 40],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.1 + i * 0.3,
                            }}
                          />
                        ))}
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Enhanced Connection Lines */}
                <svg
                  className="absolute inset-0 pointer-events-none"
                  width="100%"
                  height="100%"
                >
                  {skills.slice(0, 10).map((_, index) => {
                    const pos1 = calculatePosition(orbits[index], index);
                    const pos2 = calculatePosition(orbits[(index + 1) % 10], (index + 1) % 10);
                    
                    return (
                      <motion.line
                        key={index}
                        x1={dimensions.width / 2 + pos1.x}
                        y1={dimensions.height / 2 + pos1.y}
                        x2={dimensions.width / 2 + pos2.x}
                        y2={dimensions.height / 2 + pos2.y}
                        stroke="rgba(59, 130, 246, 0.3)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ 
                          pathLength: isHovered ? 1 : 0.5,
                          stroke: [
                            'rgba(59, 130, 246, 0.3)',
                            'rgba(139, 92, 246, 0.3)',
                            'rgba(6, 182, 212, 0.3)',
                            'rgba(59, 130, 246, 0.3)'
                          ]
                        }}
                        transition={{ 
                          pathLength: { duration: 1 },
                          stroke: { duration: 3, repeat: Infinity }
                        }}
                      />
                    );
                  })}
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Skills Categories */}
          <motion.div 
            className="grid gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, staggerChildren: 0.1 }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 group"
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)",
                  y: -8,
                  rotateY: 2
                }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`p-4 bg-gradient-to-r ${category.color} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    whileHover={{ 
                      rotate: 360, 
                      scale: 1.15,
                      boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)"
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.h3 
                      className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {category.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {category.description}
                    </motion.p>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-400/30 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: 1 + index * 0.1 + skillIndex * 0.05,
                            duration: 0.5
                          }}
                          whileHover={{ 
                            scale: 1.15,
                            boxShadow: "0 0 15px rgba(139, 92, 246, 0.4)"
                          }}
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