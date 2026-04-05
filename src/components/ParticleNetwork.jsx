import React, { useState, useEffect, useRef, useCallback } from 'react';

/* ─── constants ──────────────────────────────────────────── */

const CONNECT_DIST  = 150;
const MOUSE_DIST    = 120;
const REPEL_FORCE   = 0.22;
const BASE_SPEED    = 0.38;
const MAX_PARTICLES = 200;

/* ─── particle factory ───────────────────────────────────── */

function mkParticle(w, h, atX, atY) {
  const angle = Math.random() * Math.PI * 2;
  const spd   = (Math.random() * 0.6 + 0.3) * BASE_SPEED;
  return {
    x:  atX ?? Math.random() * w,
    y:  atY ?? Math.random() * h,
    vx: Math.cos(angle) * spd,
    vy: Math.sin(angle) * spd,
    r:  Math.random() * 1.0 + 1.8,
  };
}

/* ─── core hook ──────────────────────────────────────────── */

// getHeight: (wrapperEl) => number — computed each init call
function useParticles(canvasRef, wrapperRef, getHeight) {
  const stateRef = useRef({ particles: [], raf: null, mouse: { x: -9999, y: -9999 } });

  const tick = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { particles, mouse } = stateRef.current;
    const dpr  = canvas._dpr || 1;
    const ctx  = canvas.getContext('2d');
    const cssW = canvas.width  / dpr;
    const cssH = canvas.height / dpr;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /* update positions */
    for (const p of particles) {
      const dx   = p.x - mouse.x;
      const dy   = p.y - mouse.y;
      const dist = Math.hypot(dx, dy);

      if (dist < MOUSE_DIST && dist > 0) {
        const f = ((MOUSE_DIST - dist) / MOUSE_DIST) * REPEL_FORCE;
        p.vx += (dx / dist) * f;
        p.vy += (dy / dist) * f;
      }

      p.vx *= 0.985;
      p.vy *= 0.985;

      const spd = Math.hypot(p.vx, p.vy);
      if (spd > BASE_SPEED * 3)    { p.vx = (p.vx / spd) * BASE_SPEED * 3; p.vy = (p.vy / spd) * BASE_SPEED * 3; }
      if (spd < BASE_SPEED * 0.08) { const a = Math.random() * Math.PI * 2; p.vx += Math.cos(a) * 0.04; p.vy += Math.sin(a) * 0.04; }

      p.x += p.vx;  p.y += p.vy;

      if (p.x < p.r)        { p.x = p.r;        p.vx =  Math.abs(p.vx); }
      if (p.x > cssW - p.r) { p.x = cssW - p.r; p.vx = -Math.abs(p.vx); }
      if (p.y < p.r)        { p.y = p.r;         p.vy =  Math.abs(p.vy); }
      if (p.y > cssH - p.r) { p.y = cssH - p.r;  p.vy = -Math.abs(p.vy); }
    }

    /* particle–particle connections */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
        if (d >= CONNECT_DIST) continue;
        const a = (1 - d / CONNECT_DIST) * 0.45;
        ctx.strokeStyle = `rgba(148,163,184,${a})`;
        ctx.lineWidth   = dpr * 0.7;
        ctx.beginPath();
        ctx.moveTo(particles[i].x * dpr, particles[i].y * dpr);
        ctx.lineTo(particles[j].x * dpr, particles[j].y * dpr);
        ctx.stroke();
      }

      /* mouse connections */
      const md = Math.hypot(particles[i].x - mouse.x, particles[i].y - mouse.y);
      if (md < CONNECT_DIST) {
        const a = (1 - md / CONNECT_DIST) * 0.65;
        ctx.strokeStyle = `rgba(239,68,68,${a})`;
        ctx.lineWidth   = dpr * 0.9;
        ctx.beginPath();
        ctx.moveTo(particles[i].x * dpr, particles[i].y * dpr);
        ctx.lineTo(mouse.x * dpr, mouse.y * dpr);
        ctx.stroke();
      }
    }

    /* particles */
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x * dpr, p.y * dpr, p.r * dpr, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(239,68,68,0.85)';
      ctx.fill();
    }
  }, [canvasRef]);

  const init = useCallback(() => {
    const canvas  = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const dpr  = window.devicePixelRatio || 1;
    const cssW = wrapper.clientWidth;
    const cssH = typeof getHeight === 'function' ? getHeight(wrapper) : getHeight;

    canvas.width        = Math.round(cssW * dpr);
    canvas.height       = Math.round(cssH * dpr);
    canvas.style.width  = cssW + 'px';
    canvas.style.height = cssH + 'px';
    canvas._dpr         = dpr;

    // ~1 particle per 4 000 px², capped at MAX_PARTICLES
    const count = Math.min(MAX_PARTICLES, Math.max(40, Math.round((cssW * cssH) / 4000)));
    stateRef.current.particles = Array.from({ length: count }, () => mkParticle(cssW, cssH));
  }, [canvasRef, wrapperRef, getHeight]);

  const start = useCallback(() => {
    const s   = stateRef.current;
    const run = () => { s.raf = requestAnimationFrame(run); tick(); };
    s.raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(s.raf);
  }, [tick]);

  const addAt = useCallback((cssX, cssY) => {
    const s = stateRef.current;
    if (s.particles.length >= MAX_PARTICLES) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr  = canvas._dpr || 1;
    const cssW = canvas.width  / dpr;
    const cssH = canvas.height / dpr;
    for (let i = 0; i < 6; i++) {
      s.particles.push(mkParticle(cssW, cssH,
        cssX + (Math.random() - 0.5) * 28,
        cssY + (Math.random() - 0.5) * 28,
      ));
    }
  }, [canvasRef]);

  return { init, start, addAt, stateRef };
}

/* ─── mouse/touch tracking helper ───────────────────────── */

function bindMouse(el, stateRef, touch = false) {
  const onMove  = (e) => { const r = el.getBoundingClientRect(); stateRef.current.mouse = { x: e.clientX - r.left, y: e.clientY - r.top }; };
  const onLeave = ()  => { stateRef.current.mouse = { x: -9999, y: -9999 }; };
  const onTouch = (e) => { e.preventDefault(); const r = el.getBoundingClientRect(), t = e.touches[0]; stateRef.current.mouse = { x: t.clientX - r.left, y: t.clientY - r.top }; };

  el.addEventListener('mousemove', onMove);
  el.addEventListener('mouseleave', onLeave);
  if (touch) el.addEventListener('touchmove', onTouch, { passive: false });

  return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); if (touch) el.removeEventListener('touchmove', onTouch); };
}

/* ─── icon ───────────────────────────────────────────────── */

const NetworkIcon = () => (
  <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
    <circle cx='8'  cy='3'  r='1.4' fill='currentColor'/>
    <circle cx='3'  cy='12' r='1.4' fill='currentColor'/>
    <circle cx='13' cy='12' r='1.4' fill='currentColor'/>
    <line x1='8' y1='3' x2='3'  y2='12' stroke='currentColor' strokeWidth='0.9' opacity='0.6'/>
    <line x1='8' y1='3' x2='13' y2='12' stroke='currentColor' strokeWidth='0.9' opacity='0.6'/>
    <line x1='3' y1='12' x2='13' y2='12' stroke='currentColor' strokeWidth='0.9' opacity='0.6'/>
  </svg>
);

/* ─── desktop strip ─────────────────────────────────────── */

// fills from the canvas top down to ~48 px above the viewport bottom
const desktopHeight = (wrapper) =>
  Math.max(160, window.innerHeight - wrapper.getBoundingClientRect().top - 48);

const DesktopParticles = () => {
  const canvasRef  = useRef(null);
  const wrapperRef = useRef(null);
  const { init, start, addAt, stateRef } = useParticles(canvasRef, wrapperRef, desktopHeight);

  useEffect(() => {
    init();
    const stop   = start();
    const obs    = new ResizeObserver(() => requestAnimationFrame(init));
    if (wrapperRef.current) obs.observe(wrapperRef.current);
    const unbind = wrapperRef.current ? bindMouse(wrapperRef.current, stateRef) : () => {};
    return () => { stop(); obs.disconnect(); unbind(); };
  }, [init, start, stateRef]);

  const handleClick = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) addAt(e.clientX - rect.left, e.clientY - rect.top);
  };

  return (
    <div className='hidden md:block mt-8 w-full'>
      <div
        ref={wrapperRef}
        onClick={handleClick}
        className='rounded-lg overflow-hidden cursor-crosshair'
      >
        <canvas ref={canvasRef} className='block' />
      </div>
    </div>
  );
};

/* ─── mobile fullscreen modal ───────────────────────────── */

const MobileModal = ({ onClose }) => {
  const canvasRef  = useRef(null);
  const wrapperRef = useRef(null);
  const h = typeof window !== 'undefined' ? Math.round(window.innerHeight * 0.65) : 400;
  const { init, start, addAt, stateRef } = useParticles(canvasRef, wrapperRef, h);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    init();
    const stop   = start();
    const unbind = wrapperRef.current ? bindMouse(wrapperRef.current, stateRef, true) : () => {};
    return () => { stop(); unbind(); document.body.style.overflow = ''; };
  }, [init, start, stateRef]);

  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [onClose]);

  const handleClick = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) addAt(e.clientX - rect.left, e.clientY - rect.top);
  };

  return (
    <div className='fixed inset-0 z-50 flex flex-col bg-[#030810]'
         style={{ animation: 'particleFadeIn 0.2s ease' }}>
      <div className='flex items-center justify-between px-5 pt-12 pb-4 border-b border-slate-700/40'>
        <div>
          <p className='text-xs tracking-[0.2em] uppercase text-slate-300 font-semibold'>Particle Network</p>
          <p className='text-[11px] text-slate-500 mt-0.5'>Touch to repel · tap to spawn</p>
        </div>
        <button onClick={onClose} aria-label='Close'
          className='w-9 h-9 flex items-center justify-center rounded-full border border-slate-600 text-slate-300 active:border-red-400 active:text-red-400 transition-colors'>
          <svg width='11' height='11' viewBox='0 0 11 11' fill='none'>
            <path d='M1 1l9 9M10 1L1 10' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round'/>
          </svg>
        </button>
      </div>
      <div className='flex-1 flex flex-col justify-center px-4 py-6'>
        <div ref={wrapperRef} onClick={handleClick}
             className='rounded-2xl overflow-hidden border border-slate-700/50 bg-[#050d1a]'>
          <canvas ref={canvasRef} className='block' />
        </div>
        <p className='text-center text-[11px] text-slate-500 mt-4 tracking-widest uppercase select-none'>Tap anywhere to add particles</p>
      </div>
    </div>
  );
};

/* ─── floating easter egg ────────────────────────────────── */

const FloatingEgg = ({ onClick }) => (
  <button onClick={onClick} aria-label='Open particle network'
    className='fixed md:hidden bottom-6 left-5 z-40 w-10 h-10 rounded-full flex items-center justify-center
               bg-slate-900/80 border border-slate-700/60 text-red-400/80 backdrop-blur-sm
               transition-all duration-300 hover:border-red-400/70 hover:text-red-400'
    style={{ animation: 'eggPulse 3.5s ease-in-out infinite' }}>
    <NetworkIcon />
  </button>
);

/* ─── export ─────────────────────────────────────────────── */

const ParticleNetwork = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <style>{`
        @keyframes eggPulse {
          0%,100% { box-shadow: 0 0 8px rgba(239,68,68,0.15); }
          50%      { box-shadow: 0 0 18px rgba(239,68,68,0.35), 0 0 32px rgba(239,68,68,0.08); }
        }
        @keyframes particleFadeIn {
          from { opacity:0; } to { opacity:1; }
        }
      `}</style>
      <DesktopParticles />
      <FloatingEgg onClick={() => setOpen(true)} />
      {open && <MobileModal onClose={() => setOpen(false)} />}
    </>
  );
};

export default ParticleNetwork;
