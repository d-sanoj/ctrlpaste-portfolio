import React, { useEffect, useRef } from 'react';

interface BinarySymbol {
  x: number;
  y: number;
  value: string;
  size: number;
  opacity: number;
}

const BinaryRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const symbolsRef = useRef<BinarySymbol[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const initSymbols = () => {
      symbolsRef.current = [];
      const symbolCount = 500; // Number of symbols to display
      
      for (let i = 0; i < symbolCount; i++) {
        symbolsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          value: Math.random() > 0.5 ? '1' : '0',
          size: Math.random() * 30 + 10, // Random size between 10px and 40px
          opacity: Math.random() * 0.4 + 0.1, // Random opacity between 0.1 and 0.5
        });
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initSymbols();
    };

    const animate = () => {
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      symbolsRef.current.forEach(symbol => {
        ctx.font = `${symbol.size}px monospace`;
        ctx.fillStyle = `rgba(161, 161, 170, ${symbol.opacity})`;
        ctx.fillText(symbol.value, symbol.x, symbol.y);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ opacity: 1 }}
    />
  );
};

export default BinaryRain;