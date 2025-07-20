import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
  opacity: number;
  type: 'star' | 'bubble' | 'jellyfish' | 'nebula';
  angle: number;
  speed: number;
  pulse: number;
}

interface CosmicBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export const CosmicBackground: React.FC<CosmicBackgroundProps> = ({ 
  intensity = 'medium',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = intensity === 'low' ? 50 : intensity === 'medium' ? 80 : 120;

      for (let i = 0; i < particleCount; i++) {
        const type = Math.random() < 0.4 ? 'star' : 
                    Math.random() < 0.7 ? 'bubble' : 
                    Math.random() < 0.9 ? 'nebula' : 'jellyfish';

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          vz: Math.random() * 2 + 0.5,
          size: type === 'jellyfish' ? Math.random() * 30 + 20 : 
                type === 'nebula' ? Math.random() * 40 + 30 :
                type === 'bubble' ? Math.random() * 8 + 4 :
                Math.random() * 3 + 1,
          color: type === 'star' ? '#67e8f9' :
                type === 'bubble' ? '#06b6d4' :
                type === 'jellyfish' ? '#8b5cf6' :
                '#0891b2',
          opacity: Math.random() * 0.8 + 0.2,
          type,
          angle: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.02 + 0.01,
          pulse: Math.random() * Math.PI * 2
        });
      }

      particlesRef.current = particles;
    };

    const drawStar = (particle: Particle, ctx: CanvasRenderingContext2D) => {
      const scale = 1000 / (1000 + particle.z);
      const x = particle.x * scale;
      const y = particle.y * scale;
      const size = particle.size * scale;

      // Twinkling effect
      const twinkle = Math.sin(Date.now() * 0.005 + particle.pulse) * 0.3 + 0.7;
      
      // Glow effect
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
      gradient.addColorStop(0, `${particle.color}${Math.floor(particle.opacity * twinkle * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(0.5, `${particle.color}40`);
      gradient.addColorStop(1, `${particle.color}00`);
      
      ctx.beginPath();
      ctx.arc(x, y, size * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Core star
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 15 * scale;
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const drawBubble = (particle: Particle, ctx: CanvasRenderingContext2D) => {
      const scale = 1000 / (1000 + particle.z);
      const x = particle.x * scale;
      const y = particle.y * scale;
      const size = particle.size * scale;

      // Bubble with shimmer
      const shimmer = Math.sin(Date.now() * 0.003 + particle.pulse) * 0.2 + 0.8;
      
      // Outer glow
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
      gradient.addColorStop(0, `${particle.color}60`);
      gradient.addColorStop(0.7, `${particle.color}20`);
      gradient.addColorStop(1, `${particle.color}00`);
      
      ctx.beginPath();
      ctx.arc(x, y, size * 2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Bubble body
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.strokeStyle = `${particle.color}${Math.floor(shimmer * 255).toString(16).padStart(2, '0')}`;
      ctx.lineWidth = 2 * scale;
      ctx.stroke();

      // Highlight
      ctx.beginPath();
      ctx.arc(x - size * 0.3, y - size * 0.3, size * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = `${particle.color}40`;
      ctx.fill();
    };

    const drawJellyfish = (particle: Particle, ctx: CanvasRenderingContext2D) => {
      const scale = 1000 / (1000 + particle.z);
      const x = particle.x * scale;
      const y = particle.y * scale;
      const size = particle.size * scale;

      // Jellyfish body (bell)
      const pulse = Math.sin(Date.now() * 0.002 + particle.pulse) * 0.3 + 0.7;
      
      // Glow around jellyfish
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 1.5);
      gradient.addColorStop(0, `${particle.color}80`);
      gradient.addColorStop(0.5, `${particle.color}40`);
      gradient.addColorStop(1, `${particle.color}00`);
      
      ctx.beginPath();
      ctx.arc(x, y, size * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Bell
      ctx.beginPath();
      ctx.ellipse(x, y, size * pulse, size * 0.6 * pulse, 0, 0, Math.PI * 2);
      ctx.fillStyle = `${particle.color}60`;
      ctx.fill();

      // Tentacles
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const tentacleX = x + Math.cos(angle) * size * 0.5;
        const tentacleY = y + size * 0.6;
        const tentacleLength = size * (1 + Math.sin(Date.now() * 0.003 + i) * 0.3);
        
        ctx.beginPath();
        ctx.moveTo(tentacleX, tentacleY);
        ctx.quadraticCurveTo(
          tentacleX + Math.sin(Date.now() * 0.002 + i) * 10,
          tentacleY + tentacleLength * 0.5,
          tentacleX,
          tentacleY + tentacleLength
        );
        ctx.strokeStyle = `${particle.color}80`;
        ctx.lineWidth = 2 * scale;
        ctx.stroke();
      }
    };

    const drawNebula = (particle: Particle, ctx: CanvasRenderingContext2D) => {
      const scale = 1000 / (1000 + particle.z);
      const x = particle.x * scale;
      const y = particle.y * scale;
      const size = particle.size * scale;

      // Nebula cloud effect
      const flow = Math.sin(Date.now() * 0.001 + particle.pulse) * 0.5 + 0.5;
      
      // Multiple gradient layers for depth
      for (let i = 0; i < 3; i++) {
        const layerSize = size * (1 + i * 0.3);
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, layerSize);
        gradient.addColorStop(0, `${particle.color}${Math.floor((0.3 - i * 0.1) * flow * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${particle.color}${Math.floor((0.2 - i * 0.05) * flow * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${particle.color}00`);
        
        ctx.beginPath();
        ctx.arc(x + Math.sin(Date.now() * 0.0005 + i) * 5, y + Math.cos(Date.now() * 0.0005 + i) * 5, layerSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z -= particle.vz;

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01;
        }

        // Wrap around edges
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;
        if (particle.z < 0) particle.z = 1000;

        // Update animation properties
        particle.angle += particle.speed;
        particle.pulse += 0.02;

        // Draw based on type
        switch (particle.type) {
          case 'star':
            drawStar(particle, ctx);
            break;
          case 'bubble':
            drawBubble(particle, ctx);
            break;
          case 'jellyfish':
            drawJellyfish(particle, ctx);
            break;
          case 'nebula':
            drawNebula(particle, ctx);
            break;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
};