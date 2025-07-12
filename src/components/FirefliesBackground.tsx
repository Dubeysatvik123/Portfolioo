import React, { useRef, useEffect, useCallback, useMemo } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  twinkle: number;
}

interface Nebula {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
}

const FirefliesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const starsRef = useRef<Star[]>([]);
  const nebulaeRef = useRef<Nebula[]>([]);
  const animationRef = useRef<number>();
  const isInitializedRef = useRef(false);

  const starColors = useMemo(() => [
    '#ffffff', '#e6f3ff', '#cce7ff', '#b3dbff', '#99cfff',
    '#80c3ff', '#66b7ff', '#4dabff', '#339fff', '#1a93ff'
  ], []);

  const nebulaColors = useMemo(() => [
    'rgba(138, 43, 226, 0.3)',
    'rgba(75, 0, 130, 0.3)',
    'rgba(25, 25, 112, 0.3)',
    'rgba(72, 61, 139, 0.3)',
    'rgba(123, 104, 238, 0.3)',
    'rgba(147, 112, 219, 0.3)',
  ], []);

  const createStar = useCallback((canvas: HTMLCanvasElement): Star => {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 1000,
      vx: (Math.random() - 0.5) * 0.15, // slightly slower for smoother motion
      vy: (Math.random() - 0.5) * 0.15,
      vz: (Math.random() - 0.5) * 0.3,
      life: 0,
      maxLife: Math.random() * 1200 + 800, // longer life
      size: Math.random() * 2.5 + 0.7, // slightly larger
      color: starColors[Math.floor(Math.random() * starColors.length)],
      twinkle: Math.random() * Math.PI * 2,
    };
  }, [starColors]);

  const createNebula = useCallback((canvas: HTMLCanvasElement): Nebula => {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 200 + 100,
      opacity: Math.random() * 0.15 + 0.05, // reduce opacity
      color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)],
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.01,
    };
  }, [nebulaColors]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    // Create comet trail particles
    if (Math.random() < 0.3 && starsRef.current.length < 150) {
      const newStar = createStar(canvas);
      newStar.x = mouseRef.current.x + (Math.random() - 0.5) * 50;
      newStar.y = mouseRef.current.y + (Math.random() - 0.5) * 50;
      newStar.vx = (Math.random() - 0.5) * 2;
      newStar.vy = (Math.random() - 0.5) * 2;
      newStar.size *= 1.5;
      newStar.maxLife = 100;
      starsRef.current.push(newStar);
    }
  }, [createStar]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Prevent drawing if canvas has no size
    if (canvas.width === 0 || canvas.height === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create deep space background
    const safeWidth = Math.max(canvas.width, 1);
    const safeHeight = Math.max(canvas.height, 1);
    const maxRadius = Math.max(safeWidth, safeHeight, 1);
    let gradient;
    try {
      gradient = ctx.createRadialGradient(
        safeWidth / 2, safeHeight / 2, 0,
        safeWidth / 2, safeHeight / 2, maxRadius
      );
    } catch (e) {
      console.error('Failed to create background radial gradient:', { width: safeWidth, height: safeHeight, maxRadius }, e);
      return;
    }
    gradient.addColorStop(0, '#0a0a1a');
    gradient.addColorStop(0.5, '#1a1a3a');
    gradient.addColorStop(1, '#0a0a2e');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, safeWidth, safeHeight);

    // Draw nebulae
    nebulaeRef.current.forEach(nebula => {
      nebula.rotation += nebula.rotationSpeed;
      ctx.save();
      ctx.translate(nebula.x, nebula.y);
      ctx.rotate(nebula.rotation);
      const nebulaRadius = Math.max(nebula.size, 1);
      let nebulaGradient;
      try {
        nebulaGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, nebulaRadius);
      } catch (e) {
        console.error('Failed to create nebula radial gradient:', { nebulaRadius }, e);
        ctx.restore();
        return;
      }
      nebulaGradient.addColorStop(0, nebula.color);
      nebulaGradient.addColorStop(0.5, nebula.color.replace('0.3', '0.05'));
      nebulaGradient.addColorStop(1, 'transparent');
      ctx.globalAlpha = nebula.opacity;
      ctx.fillStyle = nebulaGradient;
      ctx.fillRect(-nebulaRadius, -nebulaRadius, nebulaRadius * 2, nebulaRadius * 2);
      ctx.restore();
      ctx.globalAlpha = 1;
    });

    // Add new stars (increase rate)
    if (Math.random() < 0.2 && starsRef.current.length < 350) {
      starsRef.current.push(createStar(canvas));
    }

    // Shooting star logic
    if (Math.random() < 0.002) {
      // Add a shooting star
      const shootingStar = createStar(canvas);
      shootingStar.x = Math.random() * canvas.width;
      shootingStar.y = Math.random() * canvas.height * 0.5;
      shootingStar.vx = 6 + Math.random() * 4;
      shootingStar.vy = 2 + Math.random() * 2;
      shootingStar.size = 2.5 + Math.random() * 2;
      shootingStar.maxLife = 40 + Math.random() * 20;
      starsRef.current.push(shootingStar);
    }

    // Update and draw stars
    for (let i = starsRef.current.length - 1; i >= 0; i--) {
      const star = starsRef.current[i];
      
      // Update position
      star.x += star.vx;
      star.y += star.vy;
      star.z += star.vz;
      star.life++;
      star.twinkle += 0.18; // more twinkle

      // Apply mouse influence for cosmic interaction
      const dx = mouseRef.current.x - star.x;
      const dy = mouseRef.current.y - star.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        const force = (150 - distance) / 150 * 0.01;
        star.vx += dx * force * 0.1;
        star.vy += dy * force * 0.1;
      }

      // Boundary wrapping
      if (star.x < 0) star.x = canvas.width;
      if (star.x > canvas.width) star.x = 0;
      if (star.y < 0) star.y = canvas.height;
      if (star.y > canvas.height) star.y = 0;

      // Remove old stars
      if (star.life > star.maxLife) {
        starsRef.current.splice(i, 1);
        continue;
      }

      // Calculate 3D projection and twinkling
      const perspective = 500;
      const scale = perspective / (perspective - star.z);
      const alpha = Math.max(0, 1 - (star.life / star.maxLife)) * (0.5 + 0.5 * Math.sin(star.twinkle));
      const size = Math.max(star.size * scale, 1);

      // Draw star with glow
      let starGradient;
      try {
        starGradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, size * 3
        );
      } catch (e) {
        console.error('Failed to create star radial gradient:', { x: star.x, y: star.y, size: size * 3 }, e);
        continue;
      }
      starGradient.addColorStop(0, star.color);
      starGradient.addColorStop(0.5, star.color + '80');
      starGradient.addColorStop(1, 'transparent');
      
      ctx.globalAlpha = alpha;
      ctx.fillStyle = starGradient;
      ctx.beginPath();
      ctx.arc(star.x, star.y, size * 3, 0, Math.PI * 2);
      ctx.fill();

      // Draw star core
      ctx.fillStyle = star.color;
      ctx.beginPath();
      ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    // Draw constellation connections
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i < starsRef.current.length; i++) {
      for (let j = i + 1; j < starsRef.current.length; j++) {
        const star1 = starsRef.current[i];
        const star2 = starsRef.current[j];
        
        const dx = star1.x - star2.x;
        const dy = star1.y - star2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100 && Math.random() < 0.01) {
          ctx.globalAlpha = (100 - distance) / 100 * 0.3;
          ctx.beginPath();
          ctx.moveTo(star1.x, star1.y);
          ctx.lineTo(star2.x, star2.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }

    // Draw mouse comet trail
    if (mouseRef.current.x && mouseRef.current.y) {
      let cometGradient;
      try {
        cometGradient = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, 50
        );
      } catch (e) {
        console.error('Failed to create comet radial gradient:', { x: mouseRef.current.x, y: mouseRef.current.y }, e);
        cometGradient = null;
      }
      if (cometGradient) {
        cometGradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
        cometGradient.addColorStop(0.5, 'rgba(135, 206, 250, 0.2)');
        cometGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = cometGradient;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 50, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [createStar]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isInitializedRef.current) return;

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    handleResize();
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Initialize stars and nebulae
    if (!isInitializedRef.current) {
      for (let i = 0; i < 100; i++) {
        starsRef.current.push(createStar(canvas));
      }
      for (let i = 0; i < 5; i++) {
        nebulaeRef.current.push(createNebula(canvas));
      }
      isInitializedRef.current = true;
    }

    animate();

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleMouseMove, animate, createStar, createNebula]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default FirefliesBackground;