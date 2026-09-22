import { useEffect, useRef } from "react";

// A subtle animated network of data nodes flowing between SAP, cloud, AI and
// enterprise systems (homepage brief, section 1: "sophisticated rather than
// flashy — closer to data moving through an enterprise architecture").
//
// - A fixed constellation of labelled "hub" systems joined by thin links.
// - Small "data packets" travel hub-to-hub along those links, pulsing the hub
//   they arrive at.
// - A light cloud of drifting particles adds depth and faint local links.
// Rendering is a single <canvas>; it pauses when off-screen / tab hidden and
// draws one static frame for users who prefer reduced motion.

interface Hub {
  id: string;
  label: string;
  // Position within the drawing area, 0..1.
  nx: number;
  ny: number;
  r: number;
  ai?: boolean;
}

const HUBS: Hub[] = [
  { id: "s4", label: "SAP S/4HANA", nx: 0.2, ny: 0.24, r: 7 },
  { id: "btp", label: "SAP BTP", nx: 0.74, ny: 0.16, r: 6 },
  { id: "ai", label: "AI", nx: 0.5, ny: 0.5, r: 10, ai: true },
  { id: "data", label: "Data", nx: 0.14, ny: 0.62, r: 5.5 },
  { id: "cloud", label: "Cloud", nx: 0.84, ny: 0.55, r: 7 },
  { id: "auto", label: "Automation", nx: 0.62, ny: 0.86, r: 5.5 },
  { id: "apps", label: "Enterprise Apps", nx: 0.32, ny: 0.88, r: 5 },
];

const LINKS: [string, string][] = [
  ["s4", "btp"],
  ["s4", "ai"],
  ["s4", "data"],
  ["btp", "ai"],
  ["btp", "cloud"],
  ["ai", "data"],
  ["ai", "cloud"],
  ["ai", "auto"],
  ["cloud", "auto"],
  ["data", "apps"],
  ["apps", "auto"],
  ["apps", "ai"],
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

interface Packet {
  from: number;
  to: number;
  t: number;
  speed: number;
}

interface Pulse {
  hub: number;
  age: number;
}

const CYAN = "34,211,238";
const VIOLET = "139,123,255";
const BLUE = "91,140,255";

export function DataNetworkCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let running = false;
    let visible = true;
    let last = 0;

    const hubIndex = new Map(HUBS.map((h, i) => [h.id, i]));
    const edges = LINKS.map(([a, b]) => [hubIndex.get(a)!, hubIndex.get(b)!] as [number, number]);
    const neighbours: number[][] = HUBS.map(() => []);
    edges.forEach(([a, b]) => {
      neighbours[a].push(b);
      neighbours[b].push(a);
    });

    let hubPos: { x: number; y: number }[] = [];
    let particles: Particle[] = [];
    const packets: Packet[] = [];
    const pulses: Pulse[] = [];

    function layout() {
      const rect = host!.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // On wide screens the constellation lives in the right ~55% (the
      // headline sits on the left); on narrow screens it spans the width and
      // is dimmed by the caller.
      const wide = width >= 1024;
      const x0 = wide ? width * 0.46 : width * 0.06;
      const xw = wide ? width * 0.5 : width * 0.88;
      const y0 = height * (wide ? 0.1 : 0.08);
      const yh = height * (wide ? 0.72 : 0.7);
      hubPos = HUBS.map((h) => ({ x: x0 + h.nx * xw, y: y0 + h.ny * yh }));

      const count = Math.round(Math.min(56, Math.max(24, (width * height) / 22000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: Math.random() * 1.2 + 0.4,
      }));
    }

    function spawnPacket() {
      const [a, b] = edges[Math.floor(Math.random() * edges.length)];
      const forward = Math.random() > 0.5;
      packets.push({
        from: forward ? a : b,
        to: forward ? b : a,
        t: 0,
        speed: 0.00022 + Math.random() * 0.00022,
      });
    }

    function draw(dt: number, animate: boolean) {
      const c = ctx!;
      c.clearRect(0, 0, width, height);

      // --- drifting particles and their faint local links
      if (animate) {
        for (const p of particles) {
          p.x += p.vx * dt * 0.06;
          p.y += p.vy * dt * 0.06;
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;
        }
      }
      const linkDist = 120;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            c.strokeStyle = `rgba(${BLUE},${(1 - d / linkDist) * 0.16})`;
            c.lineWidth = 0.6;
            c.beginPath();
            c.moveTo(p.x, p.y);
            c.lineTo(q.x, q.y);
            c.stroke();
          }
        }
        c.fillStyle = `rgba(${BLUE},0.45)`;
        c.beginPath();
        c.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        c.fill();
      }

      // --- hub links
      for (const [a, b] of edges) {
        const A = hubPos[a];
        const B = hubPos[b];
        const g = c.createLinearGradient(A.x, A.y, B.x, B.y);
        g.addColorStop(0, `rgba(${CYAN},0.28)`);
        g.addColorStop(1, `rgba(${VIOLET},0.28)`);
        c.strokeStyle = g;
        c.lineWidth = 1;
        c.beginPath();
        c.moveTo(A.x, A.y);
        c.lineTo(B.x, B.y);
        c.stroke();
      }

      // --- packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const pk = packets[i];
        if (animate) pk.t += pk.speed * dt;
        if (pk.t >= 1) {
          pulses.push({ hub: pk.to, age: 0 });
          const options = neighbours[pk.to].filter((n) => n !== pk.from);
          const next = options.length ? options[Math.floor(Math.random() * options.length)] : pk.from;
          // Continue along the network most of the time, otherwise retire.
          if (Math.random() < 0.72) {
            pk.from = pk.to;
            pk.to = next;
            pk.t = 0;
          } else {
            packets.splice(i, 1);
            continue;
          }
        }
        const A = hubPos[pk.from];
        const B = hubPos[pk.to];
        const ease = pk.t * pk.t * (3 - 2 * pk.t);
        const x = A.x + (B.x - A.x) * ease;
        const y = A.y + (B.y - A.y) * ease;
        // Short fading trail.
        for (let k = 1; k <= 5; k++) {
          const te = Math.max(0, pk.t - k * 0.018);
          const ee = te * te * (3 - 2 * te);
          c.fillStyle = `rgba(${CYAN},${0.32 - k * 0.055})`;
          c.beginPath();
          c.arc(A.x + (B.x - A.x) * ee, A.y + (B.y - A.y) * ee, 2.2 - k * 0.25, 0, Math.PI * 2);
          c.fill();
        }
        const glow = c.createRadialGradient(x, y, 0, x, y, 10);
        glow.addColorStop(0, `rgba(${CYAN},0.85)`);
        glow.addColorStop(1, `rgba(${CYAN},0)`);
        c.fillStyle = glow;
        c.beginPath();
        c.arc(x, y, 10, 0, Math.PI * 2);
        c.fill();
        c.fillStyle = "#ffffff";
        c.beginPath();
        c.arc(x, y, 1.8, 0, Math.PI * 2);
        c.fill();
      }

      // --- arrival pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pu = pulses[i];
        if (animate) pu.age += dt;
        const life = pu.age / 900;
        if (life >= 1) {
          pulses.splice(i, 1);
          continue;
        }
        const H = hubPos[pu.hub];
        c.strokeStyle = `rgba(${CYAN},${0.5 * (1 - life)})`;
        c.lineWidth = 1.2;
        c.beginPath();
        c.arc(H.x, H.y, HUBS[pu.hub].r + life * 22, 0, Math.PI * 2);
        c.stroke();
      }

      // --- hubs
      const showLabels = width >= 640;
      HUBS.forEach((h, i) => {
        const { x, y } = hubPos[i];
        const halo = c.createRadialGradient(x, y, 0, x, y, h.r * 4.2);
        halo.addColorStop(0, h.ai ? `rgba(${VIOLET},0.55)` : `rgba(${CYAN},0.32)`);
        halo.addColorStop(1, "rgba(0,0,0,0)");
        c.fillStyle = halo;
        c.beginPath();
        c.arc(x, y, h.r * 4.2, 0, Math.PI * 2);
        c.fill();

        c.strokeStyle = h.ai ? `rgba(${VIOLET},0.9)` : `rgba(${CYAN},0.75)`;
        c.lineWidth = 1.4;
        c.fillStyle = "rgba(5,11,31,0.92)";
        c.beginPath();
        c.arc(x, y, h.r, 0, Math.PI * 2);
        c.fill();
        c.stroke();

        c.fillStyle = h.ai ? `rgba(${VIOLET},1)` : `rgba(${CYAN},1)`;
        c.beginPath();
        c.arc(x, y, h.r * 0.38, 0, Math.PI * 2);
        c.fill();

        if (showLabels) {
          c.font = "600 11px Inter, system-ui, sans-serif";
          c.textAlign = "center";
          c.fillStyle = "rgba(255,255,255,0.62)";
          c.fillText(h.label.toUpperCase(), x, y + h.r + 18);
        }
      });
    }

    function frame(now: number) {
      if (!running) return;
      const dt = Math.min(48, now - last || 16);
      last = now;
      if (packets.length < 7 && Math.random() < 0.05) spawnPacket();
      draw(dt, true);
      raf = requestAnimationFrame(frame);
    }

    function start() {
      if (running || reduced) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    function syncRunning() {
      if (visible && !document.hidden) start();
      else stop();
    }

    layout();
    if (reduced) {
      // A static, still-legible frame: a couple of packets mid-flight.
      spawnPacket();
      spawnPacket();
      packets.forEach((p, i) => (p.t = 0.35 + i * 0.3));
      draw(0, false);
    } else {
      for (let i = 0; i < 4; i++) {
        spawnPacket();
        packets[i].t = Math.random();
      }
      syncRunning();
    }

    const ro = new ResizeObserver(() => {
      layout();
      if (reduced) draw(0, false);
    });
    ro.observe(host);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        syncRunning();
      },
      { threshold: 0 }
    );
    io.observe(host);

    document.addEventListener("visibilitychange", syncRunning);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", syncRunning);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
