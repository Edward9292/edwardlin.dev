export interface MousePos {
  x: number;
  y: number;
}

export class Particle {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  opacity: number;

  private readonly springStrength = 0.05;
  private readonly friction = 0.85;
  private readonly repelRadius = 120;
  private readonly repelStrength = 4;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.homeX = x;
    this.homeY = y;
    this.vx = 0;
    this.vy = 0;
    this.radius = Math.random() * 1.5 + 0.5;
    this.color = color;
    this.opacity = Math.random() * 0.6 + 0.4;
  }

  update(mouse: MousePos) {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Mouse repel
    if (dist < this.repelRadius && dist > 0) {
      const force = (this.repelRadius - dist) / this.repelRadius;
      this.vx -= (dx / dist) * force * this.repelStrength;
      this.vy -= (dy / dist) * force * this.repelStrength;
    }

    // Spring back to home
    const hx = this.homeX - this.x;
    const hy = this.homeY - this.y;
    this.vx += hx * this.springStrength;
    this.vy += hy * this.springStrength;

    // Friction
    this.vx *= this.friction;
    this.vy *= this.friction;

    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

export class ParticleSystem {
  private particles: Particle[] = [];
  private readonly lineDistance = 100;
  private readonly colors = ["#00f5ff", "#00f5ff", "#ff006e", "#ffffff"];

  init(width: number, height: number, count: number) {
    this.particles = [];
    const cols = Math.ceil(Math.sqrt((count * width) / height));
    const rows = Math.ceil(count / cols);
    const cellW = width / cols;
    const cellH = height / rows;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (this.particles.length >= count) break;
        const x = cellW * (i + 0.5) + (Math.random() - 0.5) * cellW * 0.6;
        const y = cellH * (j + 0.5) + (Math.random() - 0.5) * cellH * 0.6;
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.particles.push(new Particle(x, y, color));
      }
    }
  }

  update(mouse: MousePos) {
    for (const p of this.particles) {
      p.update(mouse);
    }
  }

  draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
    ctx.clearRect(0, 0, width, height);

    // Draw constellation lines
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const a = this.particles[i];
        const b = this.particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.lineDistance) {
          const alpha = (1 - dist / this.lineDistance) * 0.3;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Draw particles
    for (const p of this.particles) {
      p.draw(ctx);
    }
  }

  resize(width: number, height: number, count: number) {
    this.init(width, height, count);
  }
}
