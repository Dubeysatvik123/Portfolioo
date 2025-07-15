import React, { useRef, useEffect, useCallback, useMemo } from 'react';

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  trail: Array<{ x: number; y: number; alpha: number }>;
}

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  twinkle: number;
  brightness: number;
}

interface Galaxy {
  x: number;
  y: number;
  rotation: number;
  size: number;
  opacity: number;
  rotationSpeed: number;
}

const GalacticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const starsRef = useRef<Star[]>([]);
  const galaxiesRef = useRef<Galaxy[]>([]);
  const animationRef = useRef<number>();
  const isInitializedRef = useRef(false);

  const starColors = useMemo(() => [
    '#ffffff', '#e6f3ff', '#cce7ff', '#b3dbff', '#99cfff',
    '#80c3ff', '#66b7ff', '#4dabff', '#339fff', '#1a93ff',
    '#ff9999', '#ffcc99', '#ffff99', '#ccffcc', '#ccccff'
  ], []);

  const createShootingStar = useCallback((canvas: HTMLCanvasElement): ShootingStar => {
    const startSide = Math.random();
    let x, y, vx, vy;
    
    if (startSide < 0.25) {
      // From top
      x = Math.random() * canvas.width;
      y = -50;
      vx = (Math.random() - 0.5) * 4;
      vy = Math.random() * 3 + 2;
    } else if (startSide < 0.5) {
      // From right
      x = canvas.width + 50;
      y = Math.random() * canvas.height;
      vx = -(Math.random() * 3 + 2);
      vy = (Math.random() - 0.5) * 4;
    } else if (startSide < 0.75) {
      // From top-right diagonal
      x = canvas.width + 50;
      y = -50;
      vx = -(Math.random() * 4 + 3);
      vy = Math.random() * 4 + 3;
    } else {
      // From top-left diagonal
      x = -50;
      y = -50;
      vx = Math.random() * 4 + 3;
      vy = Math.random() * 4 + 3;
    }

    return {
      x,
      y,
      vx,
      vy,
      life: 0,
      maxLife: Math.random() * 120 + 80,
      size: Math.random() * 2 + 1,
      color: starColors[Math.floor(Math.random() * starColors.length)],
      trail: [],
    };
  }, [starColors]);

  const createStar = useCallback((canvas: HTMLCanvasElement): Star => {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 1000,
      size: Math.random() * 2 + 0.5,
      color: starColors[Math.floor(Math.random() * starColors.length)],
      twinkle: Math.random() * Math.PI * 2,
      brightness: Math.random() * 0.8 + 0.2,
    };
  }, [starColors]);

  const createGalaxy = useCallback((canvas: HTMLCanvasElement): Galaxy => {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      rotation: Math.random() * Math.PI * 2,
      size: Math.random() * 300 + 200,
      opacity: Math.random() * 0.1 + 0.05,
      rotationSpeed: (Math.random() - 0.5) * 0.005,
    };
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    // Create shooting stars near mouse
    if (Math.random() < 0.1 && shootingStarsRef.current.length < 8) {
      const shootingStar = createShootingStar(canvas);
      shootingStar.x = mouseRef.current.x + (Math.random() - 0.5) * 200;
      shootingStar.y = mouseRef.current.y + (Math.random() - 0.5) * 200;
      shootingStar.vx *= 1.5;
      shootingStar.vy *= 1.5;
      shootingStar.size *= 1.5;
      shootingStarsRef.current.push(shootingStar);
    }
  }, [createShootingStar]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (canvas.width === 0 || canvas.height === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create deep space background with nebula effect
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
      console.error('Failed to create background gradient:', e);
      return;
    }
    
    gradient.addColorStop(0, '#0a0a1a');
    gradient.addColorStop(0.3, '#1a1a3a');
    gradient.addColorStop(0.6, '#2a1a4a');
    gradient.addColorStop(1, '#0a0a2e');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, safeWidth, safeHeight);

    // Draw galaxies
    galaxiesRef.current.forEach(galaxy => {
      galaxy.rotation += galaxy.rotationSpeed;
      ctx.save();
      ctx.translate(galaxy.x, galaxy.y);
      ctx.rotate(galaxy.rotation);
      
      const galaxyRadius = Math.max(galaxy.size, 1);
      let galaxyGradient;
      try {
        galaxyGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, galaxyRadius);
      } catch (e) {
        ctx.restore();
        return;
      }
      
      galaxyGradient.addColorStop(0, `rgba(138, 43, 226, ${galaxy.opacity})`);
      galaxyGradient.addColorStop(0.3, `rgba(75, 0, 130, ${galaxy.opacity * 0.7})`);
      galaxyGradient.addColorStop(0.6, `rgba(25, 25, 112, ${galaxy.opacity * 0.4})`);
      galaxyGradient.addColorStop(1, 'transparent');
      
      ctx.globalAlpha = galaxy.opacity;
      ctx.fillStyle = galaxyGradient;
      ctx.fillRect(-galaxyRadius, -galaxyRadius, galaxyRadius * 2, galaxyRadius * 2);
      ctx.restore();
      ctx.globalAlpha = 1;
    });

    // Draw background stars
    starsRef.current.forEach(star => {
      star.twinkle += 0.05;
      const twinkleAlpha = 0.3 + 0.7 * (Math.sin(star.twinkle) * 0.5 + 0.5);
      const perspective = 500;
      const scale = perspective / (perspective - star.z);
      const alpha = star.brightness * twinkleAlpha * Math.max(0.2, Math.min(1, scale));
      
      ctx.globalAlpha = alpha;
      ctx.fillStyle = star.color;
      ctx.beginPath();
      ctx.arc(star.x * scale, star.y * scale, Math.max(star.size * scale, 0.1), 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    // Add new shooting stars
    if (Math.random() < 0.02 && shootingStarsRef.current.length < 6) {
      shootingStarsRef.current.push(createShootingStar(canvas));
    }

    // Update and draw shooting stars
    for (let i = shootingStarsRef.current.length - 1; i >= 0; i--) {
      const star = shootingStarsRef.current[i];
      
      // Update position
      star.x += star.vx;
      star.y += star.vy;
      star.life++;

      // Add to trail
      star.trail.push({ x: star.x, y: star.y, alpha: 1 });
      if (star.trail.length > 15) {
        star.trail.shift();
      }

      // Update trail alpha
      star.trail.forEach((point, index) => {
        point.alpha = (index / star.trail.length) * 0.8;
      });

      // Remove old shooting stars
      if (star.life > star.maxLife || 
          star.x < -100 || star.x > canvas.width + 100 ||
          star.y < -100 || star.y > canvas.height + 100) {
        shootingStarsRef.current.splice(i, 1);
        continue;
      }

      // Calculate alpha based on life
      const lifeAlpha = Math.max(0, 1 - (star.life / star.maxLife));

      // Draw shooting star trail
      ctx.strokeStyle = star.color;
      ctx.lineWidth = star.size;
      ctx.lineCap = 'round';
      
      for (let j = 1; j < star.trail.length; j++) {
        const prevPoint = star.trail[j - 1];
        const currentPoint = star.trail[j];
        const alpha = currentPoint.alpha * lifeAlpha;
        
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.moveTo(prevPoint.x, prevPoint.y);
        ctx.lineTo(currentPoint.x, currentPoint.y);
        ctx.stroke();
      }

      // Draw shooting star head with glow
      const headGradient = ctx.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, Math.max(star.size * 8, 0.1)
      );
      headGradient.addColorStop(0, star.color);
      headGradient.addColorStop(0.3, star.color + '80');
      headGradient.addColorStop(1, 'transparent');
      
      ctx.globalAlpha = lifeAlpha;
      ctx.fillStyle = headGradient;
      ctx.beginPath();
      ctx.arc(star.x, star.y, Math.max(star.size * 8, 0.1), 0, Math.PI * 2);
      ctx.fill();

      // Draw bright core
      ctx.fillStyle = star.color;
      ctx.beginPath();
      ctx.arc(star.x, star.y, Math.max(star.size, 0.1), 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    // Draw constellation connections
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i < starsRef.current.length; i += 5) {
      for (let j = i + 1; j < Math.min(i + 3, starsRef.current.length); j++) {
        const star1 = starsRef.current[i];
        const star2 = starsRef.current[j];
        
        const dx = star1.x - star2.x;
        const dy = star1.y - star2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          ctx.globalAlpha = (150 - distance) / 150 * 0.2;
          ctx.beginPath();
          ctx.moveTo(star1.x, star1.y);
          ctx.lineTo(star2.x, star2.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }

    // Draw mouse cosmic influence
    if (mouseRef.current.x && mouseRef.current.y) {
      let cosmicGradient;
      try {
        cosmicGradient = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, 100
        );
      } catch (e) {
        cosmicGradient = null;
      }
      
      if (cosmicGradient) {
        cosmicGradient.addColorStop(0, 'rgba(138, 43, 226, 0.2)');
        cosmicGradient.addColorStop(0.5, 'rgba(75, 0, 130, 0.1)');
        cosmicGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = cosmicGradient;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 100, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [createShootingStar]);

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

    // Initialize cosmic elements
    if (!isInitializedRef.current) {
      // Create background stars
      for (let i = 0; i < 300; i++) { // More stars for denser effect
        starsRef.current.push(createStar(canvas));
      }
      
      // Create galaxies
      for (let i = 0; i < 5; i++) { // More galaxies for depth
        galaxiesRef.current.push(createGalaxy(canvas));
      }
      
      // Create initial shooting stars
      for (let i = 0; i < 4; i++) { // More shooting stars
        shootingStarsRef.current.push(createShootingStar(canvas));
      }
      
      isInitializedRef.current = true;
    }

    // Use requestAnimationFrame for smoother animation
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
  }, [handleMouseMove, animate, createStar, createGalaxy, createShootingStar]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default GalacticBackground;