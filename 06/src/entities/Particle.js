export class Particle {
  constructor(ctx, maxW, maxH) {
    this.x = Math.random() * maxW;
    this.y = Math.random() * maxH;
    this.ctx = ctx
    this.size = Math.random() * 70 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  draw() {
    this.ctx.fillStyle = `rgba(100, 200, 100, 1)`;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }
}