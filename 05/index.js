let canvas = document.getElementById("board");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

canvas.addEventListener('mousemove', (event) => {
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = '#202020';
  ctx.fillRect(0, 0, canvas.width, canvas.height); 
  ctx.globalCompositeOperation = "destination-out";
  ctx.fillStyle = 'black';
  ctx.arc(event.x, event.y, 100, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
});
