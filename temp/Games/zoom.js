<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>
<canvas id="canvas"></canvas>

<script>
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Initial zoom and pan values
let zoom = 1.0;
let panX = 0;
let panY = 0;
let oriX = 0;
let oriY = 0;


let scale       = 1;
let scaleFactor = 0.2;
let scrollX     = 0;
let scrollY     = 0;

function pan(dx, dy) {
  panX = oriX + dx;
  panY = oriY + dy;
}
function zoomIn(x, y) {
  zoom *= 1.1;
  panX = (panX - x) * 1.1 + x;
  panY = (panY - y) * 1.1 + y;
}

function zoomOut(x, y) {
  zoom /= 1.1;
  panX = (panX - x) / 1.1 + x;
  panY = (panY - y) / 1.1 + y;
}


function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Apply the transformation matrix
  ctx.setTransform(zoom, 0, 0, zoom, panX, panY);

  
ctx.beginPath();
ctx.rect(0, 0, 150, 100);
ctx.stroke();

  // Reset the transformation matrix for future draws
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}
canvas.addEventListener('wheel', (event) => {
  event.preventDefault();
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;   


  if (event.deltaY < 0)   
 {
    zoomIn(x, y);
  } else {
    zoomOut(x, y);
  }
  draw();
});

let lastPanTime = 0;
const panThrottle = 10; // milliseconds



canvas.addEventListener('mousedown', (event) => {
  let startX = event.offsetX;
  let startY = event.offsetY;
  
  
  	console.log(startX,startY);

  const onMouseMove = (e) => {
  
    dx = e.offsetX - startX;
    dy = e.offsetY - startY;
    
    
    
  	console.log(dx);
    pan(dx, dy);
    draw();
  };
  
  window.addEventListener('mouseup', ()=>{
  	oriX =  panX;
    oriY =  panY;
  });

  window.addEventListener('mousemove', onMouseMove);

  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', onMouseMove);
  });
});


</script>

</body>
</html>

