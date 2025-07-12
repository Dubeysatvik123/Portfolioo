import React, { useRef, useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaDocker, FaAws, FaLinux, FaGitAlt, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiKubernetes, SiMysql, SiJavascript, SiFrappe, SiStreamlit, SiRedhat, SiDebian } from 'react-icons/si';
import { BsRobot } from 'react-icons/bs';
import { Terminal, Cloud, Code, Zap } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface OrbitData {
  radius: number;
  speed: number;
  inclination: number;
  phase: number;
  direction: number;
  ellipse?: number; // for elliptical orbits
  wobble?: number; // for wobble
  altitude?: number; // Z-axis variation
  eccentricity?: number; // Orbital eccentricity
}

const skills: Skill[] = [
  { name: 'Python', icon: <FaPython />, color: '#3776ab' },
  { name: 'Docker', icon: <FaDocker />, color: '#2496ed' },
  { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326ce5' },
  { name: 'AWS', icon: <FaAws />, color: '#ff9900' },
  { name: 'Linux', icon: <FaLinux />, color: '#fcc624' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
  { name: 'React', icon: <FaReact />, color: '#61dafb' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
  { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
  { name: 'Frappe', icon: <SiFrappe />, color: '#0089ff' },
  { name: 'AI/ML', icon: <BsRobot />, color: '#ff6b6b' },
  { name: 'Bash', icon: <Terminal />, color: '#4eaa25' },
  { name: 'Cloud', icon: <Cloud />, color: '#0078d4' },
  { name: 'DevOps', icon: <Zap />, color: '#326ce5' },
  { name: 'RHEL', icon: <SiRedhat />, color: '#ee0000' },
  { name: 'Debian', icon: <SiDebian />, color: '#a81d33' },
  { name: 'Streamlit', icon: <SiStreamlit />, color: '#ff4b4b' },
];

const Enhanced3DSkillsOrbit: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Generate unique orbit data for each skill
  const orbits = useMemo<OrbitData[]>(() => {
    return skills.map((_, index) => {
      // Create more varied and complex orbits
      const baseRadius = 120 + (index % 5) * 35 + Math.random() * 25;
      const speed = 0.12 + Math.random() * 0.18; // Slower for smoother motion
      const inclination = (Math.random() - 0.5) * Math.PI * 0.8; // More varied inclination
      const phase = (index / skills.length) * Math.PI * 2;
      const direction = Math.random() > 0.5 ? 1 : -1;
      const ellipse = 0.8 + Math.random() * 0.4; // More elliptical
      const wobble = Math.random() * Math.PI * 2;
      const altitude = (Math.random() - 0.5) * 100; // Z-axis variation
      const eccentricity = Math.random() * 0.3; // Orbital eccentricity
      
      return {
        radius: baseRadius,
        speed,
        inclination,
        phase,
        direction,
        ellipse,
        wobble,
        altitude,
        eccentricity,
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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.016); // ~60fps
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const calculatePosition = (orbit: OrbitData) => {
    const mouseInfluence = isHovered ? 0.4 : 0.15;
    const mouseX = mousePosition.x * mouseInfluence;
    const mouseY = mousePosition.y * mouseInfluence;
    
    const angle = time * orbit.speed * orbit.direction + orbit.phase;
    
    // Complex 3D orbital calculations with multiple effects
    const ellipse = orbit.ellipse || 1;
    const eccentricity = orbit.eccentricity || 0;
    const altitude = orbit.altitude || 0;
    const wobble = Math.sin(time * 1.5 + (orbit.wobble || 0)) * 8;
    
    // Elliptical orbit with eccentricity
    const r = orbit.radius * (1 + eccentricity * Math.cos(angle));
    const x = Math.cos(angle) * r * ellipse + mouseX * 60 + wobble;
    const y = Math.sin(angle) * r * Math.cos(orbit.inclination) + mouseY * 60 + Math.cos(angle * 2) * 12;
    const z = Math.sin(angle) * r * Math.sin(orbit.inclination) + altitude;
    
    // Enhanced perspective projection
    const perspective = 800;
    const scale = perspective / (perspective - z);
    
    // Add subtle rotation around the center
    const centerRotation = Math.sin(time * 0.5) * 5;
    
    return {
      x: x * scale + centerRotation,
      y: y * scale + centerRotation * 0.5,
      scale: Math.max(0.4, Math.min(1.3, scale)),
      opacity: Math.max(0.25, Math.min(1, scale)),
      zIndex: Math.round(1000 + z),
      rotation: angle * 30, // Individual rotation
    };
  };

  return (
    <div className="flex justify-center items-center min-h-[600px] py-20">
      <motion.div
        ref={containerRef}
        className="relative w-[500px] h-[500px]"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Central Core */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl"
          animate={{
            rotate: time * 20,
            scale: isHovered ? 1.2 : 1,
            boxShadow: isHovered 
              ? '0 0 60px rgba(59, 130, 246, 0.8), 0 0 100px rgba(139, 92, 246, 0.6)'
              : '0 0 30px rgba(59, 130, 246, 0.5), 0 0 50px rgba(139, 92, 246, 0.3)'
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <motion.div
            animate={{ rotate: -time * 40 }}
            className="text-white text-2xl"
          >
            <Code />
          </motion.div>
        </motion.div>

        {/* Orbital Rings */}
        {[1, 2, 3, 4].map((ring) => (
          <motion.div
            key={ring}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-blue-500/20 rounded-full"
            style={{
              width: `${120 + ring * 40}px`,
              height: `${120 + ring * 40}px`,
            }}
            animate={{
              rotate: time * (ring % 2 === 0 ? 10 : -10),
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}

        {/* Skill Icons */}
        {skills.map((skill, index) => {
          const position = calculatePosition(orbits[index]);
          
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
                rotate: position.rotation,
              }}
              whileHover={{
                scale: position.scale * 1.4,
                rotate: position.rotation + 360,
                transition: { duration: 0.8, type: 'spring', stiffness: 150, damping: 15 }
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              <motion.div
                className="relative group"
                whileHover={{ y: -15 }}
              >
                {/* Enhanced Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-lg opacity-60"
                  style={{ backgroundColor: skill.color }}
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.6, 0.9, 0.6],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Icon Container with enhanced effects */}
                <motion.div
                  className="relative w-16 h-16 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center border-2 shadow-xl"
                  style={{ borderColor: skill.color }}
                  animate={{
                    borderColor: [skill.color, '#ffffff', skill.color],
                    boxShadow: [
                      `0 0 20px ${skill.color}40`,
                      `0 0 40px ${skill.color}60`,
                      `0 0 20px ${skill.color}40`
                    ],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="text-2xl"
                    style={{ color: skill.color }}
                    animate={{
                      rotate: time * 35 * orbits[index].direction,
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                </motion.div>

                {/* Enhanced Skill Name Tooltip */}
                <motion.div
                  className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/95 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border border-gray-700"
                  style={{ zIndex: 9999 }}
                >
                  {skill.name}
                </motion.div>

                {/* Enhanced Particle Trail (comet effect) */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  animate={{
                    scale: [0, 2, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.08,
                  }}
                />
                
                {/* Additional sparkle effect */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-0.5 h-0.5 rounded-full"
                  style={{ backgroundColor: '#ffffff' }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: index * 0.12 + 0.5,
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}

        {/* Connection Lines */}
        <svg
          className="absolute inset-0 pointer-events-none"
          width="100%"
          height="100%"
        >
          {skills.slice(0, 8).map((_, index) => {
            const pos1 = calculatePosition(orbits[index]);
            const pos2 = calculatePosition(orbits[(index + 1) % 8]);
            
            return (
              <motion.line
                key={index}
                x1={250 + pos1.x}
                y1={250 + pos1.y}
                x2={250 + pos2.x}
                y2={250 + pos2.y}
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isHovered ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              />
            );
          })}
        </svg>
      </motion.div>
    </div>
  );
};

export default Enhanced3DSkillsOrbit;