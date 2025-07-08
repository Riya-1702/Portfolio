import React, { useState, useEffect } from 'react';

export const MonogramLogo: React.FC = () => {
  const [logoStyle, setLogoStyle] = useState({
    rotation: 0,
    scale: 1,
    color: '#8B7355',
  });

  useEffect(() => {
    // Generate random style on each reload
    const colors = ['#8B7355', '#A0956B', '#B8AE8A', '#6B8E6B', '#8B6B47'];
    setLogoStyle({
      rotation: Math.random() * 360,
      scale: 0.8 + Math.random() * 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }, []);

  return (
    <div 
      className="w-20 h-20 rounded-full border-2 border-current flex items-center justify-center font-bold text-2xl transition-all duration-500 hover:scale-110 hover:rotate-12"
      style={{
        transform: `rotate(${logoStyle.rotation}deg) scale(${logoStyle.scale})`,
        color: logoStyle.color,
        borderColor: logoStyle.color,
      }}
    >
      RS
    </div>
  );
};