import React, { useState, useCallback } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  randomX: number;
  randomY: number;
  color: string;
  delay: number;
}

const EnhancedAnimatedDesign: React.FC = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [rippleId, setRippleId] = useState(0);
  const [particleId, setParticleId] = useState(0);

  const createRipple = useCallback((event: React.MouseEvent) => {
    const newRipple: Ripple = {
      id: rippleId,
      x: event.clientX - 60,
      y: event.clientY - 60
    };
    
    setRipples(prev => [...prev, newRipple]);
    setRippleId(prev => prev + 1);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 1200);
  }, [rippleId]);

  const createParticles = useCallback((event: React.MouseEvent) => {
    const colors = ['#fd79a8', '#fdcb6e', '#00b894', '#6c5ce7', '#00cec9'];
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < 8; i++) {
      const particle: Particle = {
        id: particleId + i,
        x: event.clientX + (Math.random() - 0.5) * 40,
        y: event.clientY + (Math.random() - 0.5) * 40,
        randomX: (Math.random() - 0.5) * 100,
        randomY: (Math.random() - 0.5) * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5
      };
      newParticles.push(particle);
    }
    
    setParticles(prev => [...prev, ...newParticles]);
    setParticleId(prev => prev + 8);
    
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id < particleId));
    }, 2000);
  }, [particleId]);

  const createEffects = useCallback((event: React.MouseEvent) => {
    createRipple(event);
    createParticles(event);
  }, [createRipple, createParticles]);

  const tagClick = useCallback((tagName: string) => {
    console.log(`${tagName} tag clicked!`);
    // Create a synthetic click event for visual feedback
    const syntheticEvent = {
      clientX: Math.random() * window.innerWidth,
      clientY: Math.random() * window.innerHeight
    } as React.MouseEvent;
    createEffects(syntheticEvent);
  }, [createEffects]);

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-cyan-200 via-pink-200 to-purple-300">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        .container {
          width: 100vw;
          height: 100vh;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }
        
        .floating-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(0.5px);
          opacity: 0.9;
        }
        
        .orb-1 {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          top: 10%;
          left: 15%;
          animation: float-1 8s ease-in-out infinite;
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
        }
        
        .orb-2 {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          top: 20%;
          right: 20%;
          animation: float-2 6s ease-in-out infinite;
          box-shadow: 0 12px 30px rgba(240, 147, 251, 0.4);
        }
        
        .orb-3 {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          bottom: 25%;
          left: 10%;
          animation: float-3 7s ease-in-out infinite;
          box-shadow: 0 10px 25px rgba(79, 172, 254, 0.3);
        }
        
        .orb-4 {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
          top: 40%;
          right: 15%;
          animation: float-4 5s ease-in-out infinite;
          box-shadow: 0 8px 20px rgba(250, 112, 154, 0.3);
        }
        
        .geometric-shape {
          position: absolute;
          opacity: 0.1;
        }
        
        .triangle {
          width: 0;
          height: 0;
          border-left: 30px solid transparent;
          border-right: 30px solid transparent;
          border-bottom: 52px solid #667eea;
          top: 60%;
          right: 25%;
          animation: rotate-slow 12s linear infinite;
        }
        
        .square {
          width: 40px;
          height: 40px;
          background: #f093fb;
          top: 70%;
          left: 20%;
          animation: rotate-slow 15s linear infinite reverse;
        }
        
        .main-character {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          filter: drop-shadow(0 25px 50px rgba(0,0,0,0.2));
        }
        
        .character-body {
          width: 240px;
          height: 180px;
          background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
          border-radius: 50%;
          position: relative;
          animation: main-bounce 4s ease-in-out infinite;
          box-shadow: 
            0 30px 60px rgba(255, 234, 167, 0.3),
            inset 0 -10px 20px rgba(0,0,0,0.1);
        }
        
        .character-eye {
          width: 50px;
          height: 50px;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          border: 3px solid #2d3436;
        }
        
        .character-pupil {
          width: 24px;
          height: 24px;
          background: radial-gradient(circle at 30% 30%, #2d3436 0%, #000 70%);
          border-radius: 50%;
          animation: eye-blink 5s ease-in-out infinite;
          position: relative;
        }
        
        .character-pupil::after {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
          opacity: 0.9;
        }
        
        .character-spikes {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 2;
        }
        
        .spike {
          width: 0;
          height: 0;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-bottom: 28px solid #e17055;
          filter: drop-shadow(0 3px 6px rgba(225, 112, 85, 0.3));
        }
        
        .spike:nth-child(1) { animation: spike-wiggle 2.5s ease-in-out infinite; }
        .spike:nth-child(2) { animation: spike-wiggle 2.5s ease-in-out infinite 0.2s; }
        .spike:nth-child(3) { animation: spike-wiggle 2.5s ease-in-out infinite 0.4s; }
        .spike:nth-child(4) { animation: spike-wiggle 2.5s ease-in-out infinite 0.6s; }
        .spike:nth-child(5) { animation: spike-wiggle 2.5s ease-in-out infinite 0.8s; }
        
        .floating-platform {
          position: absolute;
          bottom: 25%;
          left: 50%;
          transform: translateX(-50%);
          width: 320px;
          height: 100px;
          background: linear-gradient(135deg, #00b894 0%, #00cec9 100%);
          border-radius: 50px;
          animation: platform-float 5s ease-in-out infinite;
          box-shadow: 0 20px 40px rgba(0, 184, 148, 0.3);
        }
        
        .platform-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 380px;
          height: 380px;
          border: 6px solid transparent;
          border-radius: 50%;
          background: linear-gradient(45deg, #fd79a8, #fdcb6e);
          animation: ring-rotate 10s linear infinite;
          opacity: 0.8;
        }
        
        .platform-ring::before {
          content: '';
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 16px;
          background: linear-gradient(45deg, #fd79a8, #fdcb6e);
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(253, 121, 168, 0.6);
        }
        
        .star {
          position: absolute;
          font-size: 24px;
          color: #6c5ce7;
          animation: star-twinkle 3s ease-in-out infinite;
          filter: drop-shadow(0 0 8px rgba(108, 92, 231, 0.5));
        }
        
        .star:nth-child(1) { top: 15%; left: 12%; animation-delay: 0s; }
        .star:nth-child(2) { top: 8%; right: 18%; animation-delay: 0.6s; }
        .star:nth-child(3) { bottom: 30%; left: 18%; animation-delay: 1.2s; }
        .star:nth-child(4) { bottom: 12%; right: 12%; animation-delay: 1.8s; }
        .star:nth-child(5) { top: 35%; left: 5%; animation-delay: 2.4s; }
        .star:nth-child(6) { top: 45%; right: 8%; animation-delay: 3s; }
        
        .tag {
          position: absolute;
          padding: 12px 20px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255,255,255,0.3);
          z-index: 20;
        }
        
        .tag:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        .tag::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 25px;
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
        }
        
        .tag-1 {
          top: 18%;
          right: 12%;
          background: linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%);
          color: white;
          animation: tag-float-1 4s ease-in-out infinite;
        }
        
        .tag-1::after {
          border-top: 8px solid #fd79a8;
        }
        
        .tag-2 {
          bottom: 30%;
          left: 8%;
          background: linear-gradient(135deg, #00b894 0%, #00cec9 100%);
          color: white;
          animation: tag-float-2 4s ease-in-out infinite 2s;
        }
        
        .tag-2::after {
          border-top: 8px solid #00b894;
        }
        
        .interactive-area {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
          z-index: 1;
        }
        
        .click-effect {
          position: absolute;
          width: 120px;
          height: 120px;
          border: 4px solid;
          border-image: linear-gradient(45deg, #fd79a8, #fdcb6e) 1;
          border-radius: 50%;
          opacity: 0;
          animation: click-ripple 1.2s ease-out;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
          animation: particle-float 2s ease-out forwards;
        }
        
        /* Animations */
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-180deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes main-bounce {
          0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          50% { transform: translate(-50%, -50%) scale(1.08) rotate(2deg); }
        }
        
        @keyframes eye-blink {
          0%, 90%, 100% { transform: scaleY(1); }
          94% { transform: scaleY(0.1); }
        }
        
        @keyframes spike-wiggle {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(8deg) scale(1.1); }
          75% { transform: rotate(-8deg) scale(1.1); }
        }
        
        @keyframes platform-float {
          0%, 100% { transform: translateX(-50%) translateY(0px) rotate(0deg); }
          50% { transform: translateX(-50%) translateY(-20px) rotate(1deg); }
        }
        
        @keyframes ring-rotate {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.4; transform: scale(1) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.3) rotate(180deg); }
        }
        
        @keyframes tag-float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        
        @keyframes tag-float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-1deg); }
        }
        
        @keyframes click-ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
        
        @keyframes particle-float {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-100px) scale(0);
          }
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          .character-body {
            width: 200px;
            height: 150px;
          }
          
          .floating-platform {
            width: 280px;
            height: 80px;
          }
          
          .platform-ring {
            width: 320px;
            height: 320px;
          }
          
          .tag {
            font-size: 13px;
            padding: 10px 16px;
          }
        }
      `}</style>
      
      <div className="container">
        {/* Background shapes */}
        <div className="absolute w-full h-full overflow-hidden">
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <div className="floating-orb orb-3"></div>
          <div className="floating-orb orb-4"></div>
          <div className="geometric-shape triangle"></div>
          <div className="geometric-shape square"></div>
        </div>
        
        {/* Stars */}
        <div className="absolute w-full h-full pointer-events-none">
          <div className="star">✦</div>
          <div className="star">✦</div>
          <div className="star">✦</div>
          <div className="star">✦</div>
          <div className="star">✦</div>
          <div className="star">✦</div>
        </div>
        
        {/* Main character */}
        <div className="main-character">
          <div className="character-body">
            <div className="character-spikes">
              <div className="spike"></div>
              <div className="spike"></div>
              <div className="spike"></div>
              <div className="spike"></div>
              <div className="spike"></div>
            </div>
            <div className="character-eye">
              <div className="character-pupil"></div>
            </div>
          </div>
        </div>
        
        {/* Floating platform with rotating ring */}
        <div className="floating-platform">
          <div className="platform-ring"></div>
        </div>
        
        {/* Tags */}
        <div className="tag tag-1" onClick={() => tagClick('React')}>
          React
        </div>
        <div className="tag tag-2" onClick={() => tagClick('TypeScript')}>
          TypeScript
        </div>
        
        {/* Interactive area for click effects */}
        <div className="interactive-area" onClick={createEffects}></div>
        
        {/* Click effect elements */}
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="click-effect"
            style={{ left: ripple.x + 'px', top: ripple.y + 'px' }}
          />
        ))}
        
        {/* Particle effects */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: particle.x + 'px',
              top: particle.y + 'px',
              backgroundColor: particle.color,
              animationDelay: particle.delay + 's'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default EnhancedAnimatedDesign;