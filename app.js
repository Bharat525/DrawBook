// Here we have variable
const canvas = document.getElementById('draw');
// console.log(canvas);
const ctx = canvas.getContext('2d');

const clearEl = document.getElementById('clearBtn');

// HERE WE HAVE Window WIDTH AND HEIGHT
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// HERE WE HAVE ADD SOME STYLE TO CANVAS WHO IS CTX;
ctx.strokeStyle = "#ff0000";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
ctx.globalCompositeOepration = "multiply"

let isDrawing = false;
console.log(ctx)

let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true


// HERE WE HAVE DRAW FUNCTION
function draw(e) {
    if (!isDrawing) return
    // console.log(e);
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.lineWidth = hue;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++

    if(hue >= 360){
       hue = 0;
    }

    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction =!direction;
    } 
    if(direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }


}


// here we have event Handler
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {

    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mouseup', () => isDrawing = false);


const imgEl = document.getElementById('offMouse')
console.log(imgEl)

// imgEl.addEventListener('click', onclck);

function onclck(){
    var image = document.getElementById('offMouse');
  if(image.src.match('myIcnnew')){
      image.src = "img/myIconnew.png"
  }else{
      image.src = "img/myIcon.png"
  }
}

clearEl.addEventListener('click', ClearDraw);

function ClearDraw(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
};








