let canvas = document.getElementById("board");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

ctx.beginPath();
ctx.fillStyle = '#202020';
ctx.fillRect(0, 0, canvas.width, canvas.height); 
ctx.closePath();

let mouseDown = false;

let mouse = {
  x: null,
  y: null,
};

canvas.addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
})

canvas.addEventListener('mousedown', (event) => {
  if (event.ctrlKey) {
    ctx.globalCompositeOperation = "source-out";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = '#202020';
    ctx.fillRect(0, 0, canvas.width, canvas.height); 
    ctx.closePath();
  } else {
    mouseDown = true;
  }
});

canvas.addEventListener('mouseup', (event) => {
  mouseDown = false;
});

function animate() {
  if(mouseDown) {
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(mouse.x, mouse.y, 100, 0, Math.PI * 2);
    ctx.fill();
  }
  requestAnimationFrame(animate);
}
animate();