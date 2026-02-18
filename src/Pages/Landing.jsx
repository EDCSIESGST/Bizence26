/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';

export const Landing = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showStickyButton, setShowStickyButton] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const canvasRef = useRef(null);
  const observerRef = useRef(null);

  // Placeholder Google Form URL - Replace with actual URL
  const GOOGLE_FORM_URL = "https://forms.gle/aPgZHkM85H6Be1b5A";

  // Add Favicon and Update Page Title
  useEffect(() => {
    // Update page title
    document.title = 'BIZENCE 2026 | E-Cell SIES GST - Think Fast. Decide Faster.';

    // Remove existing favicons if any
    const existingFavicons = document.querySelectorAll("link[rel*='icon']");
    existingFavicons.forEach(favicon => favicon.remove());

    // Add SVG favicon
    const faviconSVG = document.createElement('link');
    faviconSVG.rel = 'icon';
    faviconSVG.type = 'image/svg+xml';
    faviconSVG.href = 'data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg-gradient" x1="0%25" y1="0%25" x2="100%25" y2="100%25"><stop offset="0%25" style="stop-color:%231a0b2e;stop-opacity:1" /><stop offset="50%25" style="stop-color:%230a0a0a;stop-opacity:1" /><stop offset="100%25" style="stop-color:%232d1b4e;stop-opacity:1" /></linearGradient><linearGradient id="gold-gradient" x1="0%25" y1="0%25" x2="100%25" y2="100%25"><stop offset="0%25" style="stop-color:%23ffd700;stop-opacity:1" /><stop offset="50%25" style="stop-color:%23d4af37;stop-opacity:1" /><stop offset="100%25" style="stop-color:%23ffd700;stop-opacity:1" /></linearGradient><filter id="glow"><feGaussianBlur stdDeviation="1" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><rect width="32" height="32" fill="url(%23bg-gradient)"/><path d="M8 6 L8 26 L17 26 C19.5 26 21.5 24.5 21.5 22 C21.5 20.2 20.5 18.8 19 18.3 C20 17.8 20.5 16.5 20.5 15 C20.5 12.8 19 11 17 11 L8 11 M11 11 L15.5 11 C16.9 11 18 12.1 18 13.5 C18 14.9 16.9 16 15.5 16 L11 16 M11 18 L16 18 C17.7 18 19 19.3 19 21 C19 22.7 17.7 24 16 24 L11 24" stroke="url(%23gold-gradient)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" filter="url(%23glow)"/><circle cx="24" cy="8" r="1.5" fill="%2300d9ff" opacity="0.8"/><circle cx="26" cy="14" r="1" fill="%23d4af37" opacity="0.6"/><circle cx="23" cy="20" r="1.2" fill="%23ffd700" opacity="0.7"/></svg>';
    document.head.appendChild(faviconSVG);

    // Add alternate ICO favicon
    const faviconICO = document.createElement('link');
    faviconICO.rel = 'alternate icon';
    faviconICO.href = 'data:image/svg+xml,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" fill="%231a0b2e"/><path d="M4 3 L4 13 L8.5 13 C9.75 13 10.75 12.25 10.75 11 C10.75 10.1 10.25 9.4 9.5 9.15 C10 8.9 10.25 8.25 10.25 7.5 C10.25 6.4 9.5 5.5 8.5 5.5 L4 5.5 M5.5 5.5 L7.75 5.5 C8.45 5.5 9 6.05 9 6.75 C9 7.45 8.45 8 7.75 8 L5.5 8 M5.5 9 L8 9 C8.85 9 9.5 9.65 9.5 10.5 C9.5 11.35 8.85 12 8 12 L5.5 12" stroke="%23ffd700" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="12" cy="4" r="0.8" fill="%2300d9ff" opacity="0.8"/><circle cx="13" cy="7" r="0.5" fill="%23d4af37" opacity="0.6"/></svg>';
    document.head.appendChild(faviconICO);

    // Update theme color
    let themeColor = document.querySelector("meta[name='theme-color']");
    if (!themeColor) {
      themeColor = document.createElement('meta');
      themeColor.name = 'theme-color';
      document.head.appendChild(themeColor);
    }
    themeColor.content = '#1a0b2e';

    // Update meta description
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'BIZENCE 2026 - Think Fast. Decide Faster. High-intensity business simulation by E-Cell SIES GST';
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      // Show sticky button after scrolling 800px
      setShowStickyButton(scrollPosition > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Countdown Timer
  useEffect(() => {
    const eventDate = new Date('2026-03-07T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Scroll Animation Observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all animatable elements
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Enhanced Interactive Tech Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 90; // REDUCED from 120 to 90
    const connectionDistance = 200;
    const mouse = { x: null, y: null, radius: 200 };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Enhanced Mouse interaction
        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.vx -= Math.cos(angle) * force * 0.8;
            this.vy -= Math.sin(angle) * force * 0.8;
          }
        }

        // Damping
        this.vx *= 0.99;
        this.vy *= 0.99;
      }

      draw() {
        ctx.fillStyle = 'rgba(212, 175, 55, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    function animate() {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.5;
            ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Mouse move event
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Exo+2:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');

        :root {
          --luxury-black: #0a0a0a;
          --deep-purple: #1a0b2e;
          --rich-purple: #2d1b4e;
          --royal-gold: #d4af37;
          --bright-gold: #ffd700;
          --electric-blue: #00d9ff;
          --soft-white: #f5f5f7;
          --glass-white: rgba(255, 255, 255, 0.05);
          --glass-border: rgba(255, 255, 255, 0.1);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Exo 2', sans-serif;
          background: var(--luxury-black);
          color: var(--soft-white);
          overflow-x: hidden;
        }

        /* Luxury Dark Background */
        .luxury-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(ellipse at top, rgba(45, 27, 78, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse at bottom, rgba(26, 11, 46, 0.6) 0%, transparent 50%),
            linear-gradient(180deg, #0a0a0a 0%, #1a0b2e 50%, #0a0a0a 100%);
          z-index: -3;
        }

        /* Interactive Canvas Background */
        #tech-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        /* Premium Glass Card */
        .luxury-glass {
          background: rgba(26, 11, 46, 0.3);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          padding: 3rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .luxury-glass::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--royal-gold), transparent);
          opacity: 0.5;
        }

        .luxury-glass:hover {
          transform: translateY(-8px);
          border-color: rgba(212, 175, 55, 0.3);
          box-shadow: 
            0 20px 60px rgba(212, 175, 55, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        /* Organizer Title */
        .organizer-title {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(1.25rem, 3vw, 2rem);
          font-weight: 600;
          background: linear-gradient(135deg, #ffffff 0%, #c0c0c0 50%, #ffffff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: subtle-shine 4s linear infinite;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          position: relative;
          display: inline-block;
          margin-bottom: 1rem;
          opacity: 0.95;
        }

        .organizer-title::after {
          content: 'Presents';
          position: absolute;
          bottom: -1.5rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.5em;
          font-weight: 400;
          letter-spacing: 0.2em;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(192, 192, 192, 0.6) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
          font-family: 'Playfair Display', serif;
        }

        @keyframes subtle-shine {
          to { background-position: 200% center; }
        }

        /* Hero Title - Minimal Size */
        .hero-title {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 700;
          background: linear-gradient(135deg, #ffd700 0%, #d4af37 50%, #ffd700 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 40px rgba(255, 215, 0, 0.2);
          animation: luxury-shine 3s linear infinite;
          letter-spacing: 0.08em;
          position: relative;
          display: inline-block;
          margin-top: 2.5rem;
        }

        @keyframes luxury-shine {
          to { background-position: 200% center; }
        }

        /* Year Badge - Minimal Size */
        .year-badge {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--royal-gold);
          background: rgba(212, 175, 55, 0.1);
          border: 2px solid var(--royal-gold);
          padding: 0.75rem 2rem;
          border-radius: 50px;
          display: inline-block;
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
        }

        .year-badge::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 215, 0, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .year-badge:hover::before {
          width: 300px;
          height: 300px;
        }

        /* Tagline - Minimal Size */
        .tagline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1rem, 2vw, 1.5rem);
          font-weight: 500;
          background: linear-gradient(135deg, var(--soft-white) 0%, rgba(255, 255, 255, 0.6) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
          letter-spacing: 0.02em;
        }

        /* Info Pills - Minimal Size */
        .info-pill {
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .info-pill:hover {
          background: rgba(212, 175, 55, 0.2);
          border-color: var(--royal-gold);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.2);
        }

        .info-pill-icon {
          font-size: 1rem;
        }

        /* Countdown Timer - Minimal Size */
        .countdown-container {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin: 2rem 0;
          flex-wrap: wrap;
        }

        .countdown-box {
          background: rgba(26, 11, 46, 0.5);
          border: 2px solid rgba(212, 175, 55, 0.3);
          border-radius: 12px;
          padding: 1rem 1.5rem;
          min-width: 90px;
          text-align: center;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .countdown-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent);
          animation: countdown-shine 3s infinite;
        }

        @keyframes countdown-shine {
          to { left: 100%; }
        }

        .countdown-number {
          font-family: 'Orbitron', sans-serif;
          font-size: 2rem;
          font-weight: 600;
          color: var(--bright-gold);
          line-height: 1;
        }

        .countdown-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.7);
          margin-top: 0.5rem;
        }

        /* Premium Button - Minimal Size */
        .premium-btn {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0.875rem 2rem;
          background: linear-gradient(135deg, var(--royal-gold) 0%, var(--bright-gold) 100%);
          color: var(--luxury-black);
          border: none;
          border-radius: 50px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          box-shadow: 0 8px 30px rgba(212, 175, 55, 0.3);
          text-decoration: none;
          display: inline-block;
        }

        .premium-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.5s, height 0.5s;
        }

        .premium-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 50px rgba(212, 175, 55, 0.5);
        }

        .premium-btn:hover::before {
          width: 400px;
          height: 400px;
        }

        /* Section Container */
        .section {
          padding: 6rem 0;
          position: relative;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Section Title - Minimal Size */
        .section-title {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 600;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, var(--bright-gold) 0%, var(--royal-gold) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          display: inline-block;
          width: 100%;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -0.75rem;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--royal-gold), transparent);
        }

        /* Event Flow Cards */
        .flow-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .flow-card {
          background: rgba(26, 11, 46, 0.4);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 20px;
          padding: 2.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .flow-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--royal-gold), var(--bright-gold));
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .flow-card:hover {
          transform: translateY(-10px);
          border-color: var(--royal-gold);
          box-shadow: 0 20px 60px rgba(212, 175, 55, 0.2);
        }

        .flow-card:hover::before {
          transform: scaleX(1);
        }

        .flow-number {
          font-family: 'Orbitron', sans-serif;
          font-size: 3rem;
          font-weight: 700;
          color: var(--royal-gold);
          opacity: 0.3;
          margin-bottom: 1rem;
        }

        .flow-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.3));
        }

        .flow-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--bright-gold);
          margin-bottom: 0.75rem;
        }

        .flow-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          font-size: 0.9rem;
        }

        /* Social Links */
        .social-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 0.875rem 1.25rem;
          background: rgba(26, 11, 46, 0.5);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 12px;
          color: var(--soft-white);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .social-link:hover {
          background: rgba(212, 175, 55, 0.1);
          border-color: var(--royal-gold);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
        }

        /* Contact Cards */
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .contact-card {
          background: rgba(26, 11, 46, 0.5);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .contact-card:hover {
          border-color: var(--royal-gold);
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(212, 175, 55, 0.2);
        }

        .contact-role {
          font-family: 'Orbitron', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: var(--bright-gold);
          margin-bottom: 0.5rem;
        }

        .contact-name {
          font-size: 0.95rem;
          color: var(--soft-white);
          margin-bottom: 0.5rem;
        }

        .contact-phone {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.875rem;
        }

        /* Footer */
        footer {
          background: rgba(10, 10, 10, 0.8);
          border-top: 1px solid rgba(212, 175, 55, 0.2);
          padding: 2rem 0;
          text-align: center;
          backdrop-filter: blur(10px);
          font-size: 0.875rem;
        }

        .footer-tagline {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-style: italic;
          color: var(--royal-gold);
          margin-top: 0.75rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .organizer-title {
            font-size: 1.25rem;
          }

          .organizer-title::after {
            font-size: 0.6em;
            bottom: -1.25rem;
          }

          .hero-title {
            font-size: 2.5rem;
            margin-top: 2rem;
          }
          
          .tagline {
            font-size: 0.95rem;
          }
          
          .section {
            padding: 3rem 0;
          }
          
          .luxury-glass {
            padding: 1.5rem;
          }
          
          .countdown-container {
            gap: 0.75rem;
          }
          
          .countdown-box {
            padding: 0.75rem 1rem;
            min-width: 70px;
          }
          
          .countdown-number {
            font-size: 1.5rem;
          }
          
          .premium-btn {
            padding: 0.75rem 1.5rem;
            font-size: 0.8rem;
          }
          
          .flow-grid,
          .social-grid,
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: var(--luxury-black);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, var(--royal-gold), var(--bright-gold));
          border-radius: 6px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: var(--bright-gold);
        }

        /* Scroll Animations */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-on-scroll.slide-left {
          transform: translateX(-50px);
        }

        .animate-on-scroll.slide-left.animate-in {
          transform: translateX(0);
        }

        .animate-on-scroll.slide-right {
          transform: translateX(50px);
        }

        .animate-on-scroll.slide-right.animate-in {
          transform: translateX(0);
        }

        /* Sticky Floating Button */
        .sticky-register-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
          opacity: 0;
          transform: translateY(100px) scale(0.8);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }

        .sticky-register-btn.show {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: all;
        }

        .sticky-register-btn .btn-content {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.75rem;
          background: linear-gradient(135deg, var(--royal-gold) 0%, var(--bright-gold) 100%);
          color: var(--luxury-black);
          border-radius: 50px;
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 10px 40px rgba(212, 175, 55, 0.4);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          animation: pulse-glow 2s infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 10px 40px rgba(212, 175, 55, 0.4);
          }
          50% {
            box-shadow: 0 10px 50px rgba(212, 175, 55, 0.6);
          }
        }

        .sticky-register-btn .btn-content:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 60px rgba(212, 175, 55, 0.6);
        }

        .urgency-badge {
          position: absolute;
          top: -10px;
          right: -10px;
          background: #ff3366;
          color: white;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.25rem 0.6rem;
          border-radius: 20px;
          animation: bounce-badge 1s infinite;
          box-shadow: 0 4px 15px rgba(255, 51, 102, 0.5);
        }

        @keyframes bounce-badge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        /* Benefits Grid */
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .benefit-card {
          background: rgba(26, 11, 46, 0.4);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
        }

        .benefit-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--royal-gold), var(--bright-gold));
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .benefit-card:hover {
          transform: translateY(-10px);
          border-color: var(--royal-gold);
          box-shadow: 0 20px 60px rgba(212, 175, 55, 0.25);
        }

        .benefit-card:hover::before {
          transform: scaleX(1);
        }

        .benefit-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        .benefit-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--bright-gold);
          margin-bottom: 0.75rem;
        }

        .benefit-description {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .sticky-register-btn {
            bottom: 20px;
            right: 20px;
          }

          .sticky-register-btn .btn-content {
            padding: 0.875rem 1.5rem;
            font-size: 0.85rem;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }

.round-card {
  background: rgba(26, 11, 46, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Round 1 - Green/Teal (Start) */
.round-green {
  border-color: rgba(0, 255, 179, 0.3);
}
.round-green:hover {
  box-shadow: 0 10px 40px rgba(0, 255, 179, 0.15);
  transform: translateY(-5px);
  border-color: #00ffb3;
}
.round-green .round-icon { color: #00ffb3; }
.round-green .round-title { color: #00ffb3; }

/* Round 2 - Gold (Middle) */
.round-gold {
  border-color: rgba(255, 215, 0, 0.3);
}
.round-gold:hover {
  box-shadow: 0 10px 40px rgba(255, 215, 0, 0.15);
  transform: translateY(-5px);
  border-color: #ffd700;
}
.round-gold .round-icon { color: #ffd700; }
.round-gold .round-title { color: #ffd700; }

/* Round 3 - Red (Danger) */
.round-red {
  border-color: rgba(255, 51, 102, 0.3);
}
.round-red:hover {
  box-shadow: 0 10px 40px rgba(255, 51, 102, 0.25);
  transform: translateY(-5px);
  border-color: #ff3366;
}
.round-red .round-icon { color: #ff3366; }
.round-red .round-title { color: #ff3366; }

/* Final Round - White/Platinum */
.round-final {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.03);
}
.round-final:hover {
  box-shadow: 0 10px 40px rgba(255, 255, 255, 0.1);
  transform: translateY(-5px);
  border-color: #ffffff;
}

.round-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;
}

.round-icon {
  font-size: 2rem;
}

.round-tag {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0.7;
  margin-bottom: 0.25rem;
  display: block;
}

.round-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;
}

.round-content-list {
  list-style: none;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.round-content-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.5;
}

.round-content-list li::before {
  content: '>';
  position: absolute;
  left: 0;
  color: var(--royal-gold);
  font-family: 'Orbitron', sans-serif;
  font-weight: bold;
}

.round-footer {
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 12px;
  font-size: 0.85rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.round-footer-icon {
  font-size: 1.2rem;
}

.warning-box {
  margin-top: 3rem;
  padding: 1.5rem;
  border: 1px dashed var(--royal-gold);
  border-radius: 12px;
  background: rgba(212, 175, 55, 0.05);
  text-align: center;
}
      `}</style>

      {/* Interactive Tech Canvas Background */}
      <canvas ref={canvasRef} id="tech-canvas"></canvas>

      {/* Sticky Floating Register Button */}
      <div className={`sticky-register-btn ${showStickyButton ? 'show' : ''}`}>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', position: 'relative', display: 'block' }}
        >
          <div className="btn-content">
            <span>🚀</span>
            <span>Register Now</span>
          </div>
          <div className="urgency-badge">{timeLeft.days} days left!</div>
        </a>
      </div>

      {/* Hero Section */}
      <section className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative' }}>

        {/* E-CELL SIES GST Organizer Heading */}
        <h2 className="organizer-title" data-testid="organizer-title">E-Cell SIES GST</h2>

        {/* Main Event Title */}
        <h1 className="hero-title" data-testid="hero-title">BIZENCE</h1>

        <div className="year-badge" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>2026</div>

        <p className="tagline" style={{ marginBottom: '0.75rem' }}>Think Fast. Decide Faster.</p>
        <p className="tagline" style={{ marginBottom: '2rem', opacity: 0.8 }}>Where decisions define destiny</p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}>
          <div className="info-pill">
            <span className="info-pill-icon">📍</span>
            SIES GST, Nerul
          </div>
          <div className="info-pill">
            <span className="info-pill-icon">📅</span>
            7th March 2026
          </div>
          <div className="info-pill">
            <span className="info-pill-icon">⏰</span>
            Full-Day Event
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="countdown-container">
          <div className="countdown-box">
            <div className="countdown-number">{timeLeft.days}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-box">
            <div className="countdown-number">{timeLeft.hours}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-box">
            <div className="countdown-number">{timeLeft.minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-box">
            <div className="countdown-number">{timeLeft.seconds}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>

        {/* Registration Button */}
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="premium-btn"
          data-testid="register-now-btn"
          style={{ marginTop: '1rem' }}
        >
          Register Now
        </a>
      </section>

      {/* About BIZENCE */}
      <section className="section container animate-on-scroll">
        <div className="luxury-glass">
          <h2 className="section-title">High-Intensity Business Simulation</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', lineHeight: '1.7', fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.85)' }}>
            <p style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--bright-gold)' }}>BIZENCE</strong> is a high-intensity business simulation built to test how fast you think and how smartly you decide. It throws you into the chaos of the startup world — where <strong style={{ color: 'var(--royal-gold)' }}>uncertainty, pressure, and limited information</strong> are part of the game.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              You'll step into real <strong style={{ color: 'var(--bright-gold)' }}>leadership roles</strong>, handle crises in real time, defend your decisions in front of judges, and balance growth with ethics — just like real founders do.
            </p>
            <p>
              This isn't about textbook answers. It's about <strong style={{ color: 'var(--royal-gold)' }}>thinking on your feet, staying calm under fire, and making bold moves</strong> when it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section - ADDED MARGIN-TOP TO PREVENT OVERLAP */}
      <section className="section container animate-on-scroll" style={{ marginTop: '6rem' }}>
        <div className="luxury-glass">
          <h2 className="section-title">What You Get</h2>
          <div className="benefits-grid">
            <div className="benefit-card animate-on-scroll">
              <span className="benefit-icon">🏆</span>
              <h3 className="benefit-title">Winner Certificates</h3>
              <p className="benefit-description">
                Top 3 winners receive special recognition certificates to boost your portfolio and showcase your strategic thinking skills.
              </p>
            </div>

            <div className="benefit-card animate-on-scroll">
              <span className="benefit-icon">📜</span>
              <h3 className="benefit-title">Participation Certificate</h3>
              <p className="benefit-description">
                All participants receive an official participation certificate from E-Cell SIES GST, validating your business acumen.
              </p>
            </div>

            <div className="benefit-card animate-on-scroll">
              <span className="benefit-icon">🍽️</span>
              <h3 className="benefit-title">Lunch Included</h3>
              <p className="benefit-description">
                Enjoy a complimentary lunch break to refuel and network with fellow participants during this full-day intensive event.
              </p>
            </div>

            <div className="benefit-card animate-on-scroll">
              <span className="benefit-icon">🤝</span>
              <h3 className="benefit-title">Networking</h3>
              <p className="benefit-description">
                Connect with like-minded entrepreneurs, potential co-founders, and industry professionals in the startup ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="section container animate-on-scroll" style={{ marginTop: '4rem' ,marginBottom: '4rem' }}>
        <div className="luxury-glass">
          <h2 className="section-title">Event Overview</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🏢</div>
              <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1rem', fontWeight: '600', color: 'var(--bright-gold)', marginBottom: '0.5rem' }}>Format</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>Full-Day On-Campus Event</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>👥</div>
              <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1rem', fontWeight: '600', color: 'var(--bright-gold)', marginBottom: '0.5rem' }}>Team Size</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>3 Participants</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🎯</div>
              <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1rem', fontWeight: '600', color: 'var(--bright-gold)', marginBottom: '0.5rem' }}>Roles</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>CEO | CMO | CTO</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>👔</div>
              <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1rem', fontWeight: '600', color: 'var(--bright-gold)', marginBottom: '0.5rem' }}>Dress Code</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>Formal / Semi-Formal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Flow */}
      {/* NEW EVENT ROUNDS SECTION */}
      <section className="section container animate-on-scroll">
        <h2 className="section-title">Event Format</h2>
        <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'rgba(255,255,255,0.7)' }}>
          Three stages of evolution. One ultimate survivor.
        </p>

        <div className="flow-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

          {/* Round 1: Green */}
          <div className="round-card round-green animate-on-scroll slide-left">
            <div className="round-header">
              <div className="round-icon">🟢</div>
              <div>
                <span className="round-tag">Round 01</span>
                <h3 className="round-title">Founding Chaos</h3>
              </div>
            </div>
            <div style={{ marginBottom: '1rem', fontStyle: 'italic', fontFamily: 'Playfair Display', opacity: 0.9 }}>
              "Early-stage startup problems."
            </div>
            <ul className="round-content-list">
              <li>Co-founder conflicts & role disputes</li>
              <li>Low traction & product-market mismatch</li>
              <li>Limited funding & resource crunch</li>
            </ul>
            <div className="round-footer">
              <span className="round-footer-icon">📝</span>
              <div>
                <strong style={{ display: 'block', color: '#fff' }}>Format</strong>
                Team discussion + Decision note + Verbal justification
              </div>
            </div>
          </div>

          {/* Round 2: Yellow/Gold */}
          <div className="round-card round-gold animate-on-scroll">
            <div className="round-header">
              <div className="round-icon">🟡</div>
              <div>
                <span className="round-tag">Round 02</span>
                <h3 className="round-title">Market Pressure</h3>
              </div>
            </div>
            <div style={{ marginBottom: '1rem', fontStyle: 'italic', fontFamily: 'Playfair Display', opacity: 0.9 }}>
              "Growth & competition challenges."
            </div>
            <ul className="round-content-list">
              <li>Big competitor enters the market</li>
              <li>Pricing backlash & negative media</li>
              <li>Sudden legal or budget constraints</li>
            </ul>
            <div className="round-footer">
              <span className="round-footer-icon">🎤</span>
              <div>
                <strong style={{ display: 'block', color: '#fff' }}>Format</strong>
                Live boardroom discussion with judge cross-questions
              </div>
            </div>
          </div>

          {/* Round 3: Red */}
          <div className="round-card round-red animate-on-scroll slide-right">
            <div className="round-header">
              <div className="round-icon">🔴</div>
              <div>
                <span className="round-tag">Round 03</span>
                <h3 className="round-title">The Breaking Point</h3>
              </div>
            </div>
            <div style={{ marginBottom: '1rem', fontStyle: 'italic', fontFamily: 'Playfair Display', opacity: 0.9 }}>
              "High-stakes survival decisions."
            </div>
            <ul className="round-content-list">
              <li>Investor exit threats</li>
              <li>Data breaches & system failures</li>
              <li>Complex ethical dilemmas</li>
            </ul>
            <div className="round-footer">
              <span className="round-footer-icon">🚨</span>
              <div>
                <strong style={{ display: 'block', color: '#fff' }}>Format</strong>
                Emergency strategy pitch + Intense grilling
              </div>
            </div>
          </div>

        </div>

        {/* Final Boardroom Report - Full Width */}
        <div className="animate-on-scroll" style={{ marginTop: '2rem' }}>
          <div className="round-card round-final" style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 300px', paddingRight: '2rem' }}>
              <div className="round-header" style={{ borderBottom: 'none', marginBottom: '0.5rem' }}>
                <div className="round-icon">🏁</div>
                <div>
                  <h3 className="round-title">Final Boardroom Report</h3>
                </div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
                "How did your startup survive the day?" Teams present their key decisions, mistakes, lessons learned, and future roadmap.
              </p>
            </div>
            <div style={{ flex: '0 0 auto', background: 'rgba(255,255,255,0.1)', padding: '1rem 2rem', borderRadius: '50px', fontWeight: '600', letterSpacing: '1px' }}>
              THE CONCLUSION
            </div>
          </div>
        </div>

        {/* Warning Badge */}
        <div className="warning-box animate-on-scroll">
          <span style={{ fontSize: '1.5rem', verticalAlign: 'middle', marginRight: '10px' }}>⚠️</span>
          <span style={{ fontFamily: 'Orbitron', fontWeight: '600', color: 'var(--bright-gold)' }}>
            No right answers.
          </span>
          <span style={{ color: 'rgba(255,255,255,0.8)', marginLeft: '8px' }}>
            Only fast, justified decisions under pressure.
          </span>
        </div>
      </section>

      {/* Connect With Us */}
      <section className="section container animate-on-scroll" style={{ marginTop: '4rem' }}>
        <div className="luxury-glass">
          <h2 className="section-title">Connect With Us</h2>

          <div className="social-grid">
            <a href="https://twitter.com/ecellsiesgst" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Twitter</span>
            </a>
            <a href="https://instagram.com/ecellsiesgst" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Instagram</span>
            </a>
            <a href="https://linkedin.com/company/ecellsiesgst" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://medium.com/@ecellsiesgst" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
              <span>Medium</span>
            </a>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-role">E-Cell Chairperson</div>
              <div className="contact-name">Adarsh Korade</div>
              <div className="contact-phone">📞 90048 92091</div>
            </div>
            <div className="contact-card">
              <div className="contact-role">Joint Secretary</div>
              <div className="contact-name">Priya Darshini</div>
              <div className="contact-phone">📞 81040 16629</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>© 2026 E-Cell SIES GST | BIZENCE 2026</p>
          <p className="footer-tagline">Think Fast. Decide Faster. Where Decisions Define Destiny.</p>
        </div>
      </footer>
    </>
  );
};

export default Landing;