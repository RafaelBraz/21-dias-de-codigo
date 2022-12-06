import { Particle } from './entities/Particle.js';
import './style.scss';

const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const particlesArray = [];

function generateBackground() {
  for(let i = 0; i < 25; i++) {
    particlesArray.push(new Particle(ctx, canvas.width, canvas.height));
  }
  setInterval(() => { particlesArray.push(new Particle(ctx, canvas.width, canvas.height)); }, 250);
}
generateBackground();
console.log(particlesArray);

function handleParticles() {
  for(let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}
animate();
