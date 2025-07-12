import React, { useRef, useEffect, useCallback, useMemo } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  maxLife: number;
  size: number;
  color: { r: number; g: number; b: number };
  trail: Array<{ x: number; y: number; alpha: number }>;
}

interface Connection {
  p1: Particle;
  p2: Particle;
  distance: number;
}

const Enhanced3DBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const particles = useRef<Particle[]>([]);
  const connections = useRef<Connection[]>([]);

  const colors = useMemo(() => [
    { r: 59, g: 130, b: 246 },   // Blue
    { r: 6, g: 182, b: 212 },    // Cyan
    { r: 139, g: 92, b: 246 },   // Purple
    { r: 236, g: 72, b: 153 },   // Pink
    { r: 34, g: 197, b: 94 },    // Green
    { r: 251, g: 146, b: 60 },   // Orange
  ], []);

  const createParticle = useCallback((canvas: HTMLCanvasElement): Particle => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 1000 - 500,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      vz: (Math.random() - 0.5) * 0.5,
      life: 0,
      maxLife: Math.random() * 500 + 200,
      size: Math.random() * 3 + 1,
      color,
      trail: [],
    };
  }, [colors]);

  const updateConnections = useCallback(() => {
    connections.current = [];
    const maxDistance = 150;
    
    for (let i = 0; i < particles.current.length; i++) {
      for (let j = i + 1; j < particles.current.length; j++) {
        const p1 = particles.current[i];
        const p2 = particles.current[j];
        
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dz = p1.z - p2.z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz * 0.1);
        
        if (distance < maxDistance) {
          connections.current.push({ p1, p2, distance });
        }
      }
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    // Create particles around mouse with enhanced effects
    if (Math.random() < 0.1) {
      const newParticle = createParticle(canvas);
      newParticle.x = mouseRef.current.x + (Math.random() - 0.5) * 100;
      newParticle.y = mouseRef.current.y + (Math.random() - 0.5) * 100;
      newParticle.z = Math.random() * 200 - 100;
      newParticle.vx *= 2;
      newParticle.vy *= 2;
      newParticle.size *= 1.5;
      particles.current.push(newParticle);
    }

    // Apply mouse influence to nearby particles
    particles.current.forEach(particle => {
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 200) {
        const force = (200 - distance) / 200 * 0.02;
        const angle = Math.atan2(dy, dx);
        particle.vx += Math.cos(angle) * force;
        particle.vy += Math.sin(angle) * force;
        particle.vz += (Math.random() - 0.5) * force;
      }
    });
  }, [createParticle]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear with fade effect
    ctx.fillStyle = 'rgba(10, 20, 55, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add new particles periodically
    if (Math.random() < 0.02 && particles.current.length < 100) {
      particles.current.push(createParticle(canvas));
    }

    // Update particles
    for (let i = particles.current.length - 1; i >= 0; i--) {
      const particle = particles.current[i];
      
      // Update position with 3D movement
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.z += particle.vz;
      particle.life++;

      // Add subtle wave motion
      particle.x += Math.sin(particle.life * 0.01) * 0.5;
      particle.y += Math.cos(particle.life * 0.01) * 0.5;

      // Update trail
      particle.trail.push({ x: particle.x, y: particle.y, alpha: 1 });
      if (particle.trail.length > 10) {
        particle.trail.shift();
      }
      particle.trail.forEach((point, index) => {
        point.alpha = index / particle.trail.length * 0.5;
      });

      // Apply physics
      particle.vx *= 0.995;
      particle.vy *= 0.995;
      particle.vz *= 0.995;

      // Boundary wrapping with 3D effect
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;
      if (particle.z < -500) particle.z = 500;
      if (particle.z > 500) particle.z = -500;

      // Remove old particles
      if (particle.life > particle.maxLife) {
        particles.current.splice(i, 1);
        continue;
      }

      // Calculate 3D projection
      const perspective = 500;
      const scale = perspective / (perspective - particle.z);
      const projectedX = particle.x * scale;
      const projectedY = particle.y * scale;
      const projectedSize = particle.size * scale;
      
      // Calculate alpha based on life and depth
      const lifeAlpha = Math.max(0, 1 - (particle.life / particle.maxLife));
      const depthAlpha = Math.max(0.2, Math.min(1, scale));
      const alpha = lifeAlpha * depthAlpha;

      // Draw particle trail
      ctx.strokeStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${alpha * 0.3})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      particle.trail.forEach((point, index) => {
        if (index === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      });
      ctx.stroke();

      // Draw particle with enhanced glow
      const gradient = ctx.createRadialGradient(
        projectedX, projectedY, 0,
        projectedX, projectedY, projectedSize * 3
      );
      gradient.addColorStop(0, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${alpha})`);
      gradient.addColorStop(0.5, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${alpha * 0.5})`);
      gradient.addColorStop(1, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(projectedX, projectedY, projectedSize * 3, 0, Math.PI * 2);
      ctx.fill();

      // Draw core
      ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${alpha})`;
      ctx.beginPath();
      ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2);
      ctx.fill();
    }

    // Update and draw connections
    updateConnections();
    connections.current.forEach(({ p1, p2, distance }) => {
      const alpha = Math.max(0, (150 - distance) / 150 * 0.3);
      const perspective = 500;
      const scale1 = perspective / (perspective - p1.z);
      const scale2 = perspective / (perspective - p2.z);
      
      ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(p1.x * scale1, p1.y * scale1);
      ctx.lineTo(p2.x * scale2, p2.y * scale2);
      ctx.stroke();
    });

    // Draw mouse influence area
    if (mouseRef.current.x && mouseRef.current.y) {
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, 100
      );
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 100, 0, Math.PI * 2);
      ctx.fill();
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [createParticle, updateConnections]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.current.push(createParticle(canvas));
    }

    // Start animation
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleMouseMove, animate, createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        background: 'linear-gradient(135deg, #0a1437 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0a1437 100%)',
        mixBlendMode: 'normal'
      }}
    />
  );
};

export default Enhanced3DBackground;