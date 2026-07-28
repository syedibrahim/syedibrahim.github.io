"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface Packet {
  from: number;
  to: number;
  progress: number;
  speed: number;
}

const NODE_DENSITY = 1 / 22000;
const LINK_DISTANCE = 170;
const MOUSE_RADIUS = 140;

export default function PipelineBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let packets: Packet[] = [];
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    const getColors = () => {
      const styles = getComputedStyle(document.documentElement);
      return {
        node: styles.getPropertyValue("--canvas-node").trim(),
        edge: styles.getPropertyValue("--canvas-edge").trim(),
        packet: styles.getPropertyValue("--canvas-packet").trim(),
      };
    };

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect?.width ?? window.innerWidth;
      height = rect?.height ?? window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(24, Math.floor(width * height * NODE_DENSITY));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: 1.5 + Math.random() * 1.5,
      }));
      packets = [];
    };

    const spawnPacket = () => {
      if (nodes.length < 2 || packets.length > nodes.length / 2) return;
      const from = Math.floor(Math.random() * nodes.length);
      let nearest = -1;
      let nearestDist = Infinity;
      for (let i = 0; i < nodes.length; i++) {
        if (i === from) continue;
        const dx = nodes[i].x - nodes[from].x;
        const dy = nodes[i].y - nodes[from].y;
        const d = dx * dx + dy * dy;
        if (d < nearestDist && d < LINK_DISTANCE * LINK_DISTANCE) {
          nearestDist = d;
          nearest = i;
        }
      }
      if (nearest >= 0) {
        packets.push({
          from,
          to: nearest,
          progress: 0,
          speed: 0.008 + Math.random() * 0.012,
        });
      }
    };

    const draw = () => {
      const colors = getColors();
      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          node.x += (dx / dist) * force * 1.2;
          node.y += (dy / dist) * force * 1.2;
        }

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.25;
            ctx.strokeStyle = `rgba(${colors.edge}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        ctx.fillStyle = `rgba(${colors.node}, 0.6)`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (Math.random() < 0.08) spawnPacket();
      packets = packets.filter((p) => p.progress <= 1);
      for (const packet of packets) {
        packet.progress += packet.speed;
        const from = nodes[packet.from];
        const to = nodes[packet.to];
        if (!from || !to) continue;
        const x = from.x + (to.x - from.x) * packet.progress;
        const y = from.y + (to.y - from.y) * packet.progress;
        ctx.fillStyle = `rgba(${colors.packet}, 0.9)`;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(${colors.packet}, 0.25)`;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const drawStatic = () => {
      const colors = getColors();
      ctx.clearRect(0, 0, width, height);
      for (const node of nodes) {
        ctx.fillStyle = `rgba(${colors.node}, 0.5)`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const onResize = () => {
      resize();
      if (reducedMotion) drawStatic();
    };

    resize();
    if (reducedMotion) {
      drawStatic();
    } else {
      draw();
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseleave", onMouseLeave);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
