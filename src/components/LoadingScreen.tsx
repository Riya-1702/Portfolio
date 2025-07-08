import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [logoStyle, setLogoStyle] = useState({
    rotation: 0,
    scale: 1,
    color: '#FCD34D',
  });

  useEffect(() => {
    // Animate logo on load
    const colors = ['#FCD34D', '#F59E0B', '#D97706', '#92400E', '#451A03'];
    let colorIndex = 0;
    
    const interval = setInterval(() => {
      setLogoStyle({
        rotation: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        color: colors[colorIndex % colors.length],
      });
      colorIndex++;
    }, 200);

    // Complete loading after 2 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Atomic background animation */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* RS Logo */}
      <div className="relative z-10">
        <div 
          className="w-32 h-32 rounded-full border-4 flex items-center justify-center font-bold text-4xl transition-all duration-200"
          style={{
            transform: `rotate(${logoStyle.rotation}deg) scale(${logoStyle.scale})`,
            color: logoStyle.color,
            borderColor: logoStyle.color,
            boxShadow: `0 0 30px ${logoStyle.color}80`,
          }}
        >
          RS
        </div>
        <div className="text-center mt-4">
          <div className="text-amber-300 text-lg font-semibold animate-pulse">
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
};