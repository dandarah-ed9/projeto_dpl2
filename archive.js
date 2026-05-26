var canvas = document.getElementById('gameCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mesa1 = canvas.getContext('2d');
var mesa2 = canvas.getContext('2d');
var perna1 = canvas.getContext('2d');
var perna2 = canvas.getContext('2d');
var perna3 = canvas.getContext('2d');
var perna4 = canvas.getContext('2d');
var piso  = canvas.getContext('2d');
var estojo = canvas.getContext('2d');
var lapis = canvas.getContext('2d');
var borracha = canvas.getContext('2d');
var regua = canvas.getContext('2d');

var x = {};
document.addEventListener("keydown", (event)=>{
    x[event.key] = true;
});
document.addEventListener("keyup", (event)=> {
    x[event.key] = false;
});

function animate(){
    requestAnimationFrame(animate);

    estojo.fillStyle = 'green'
    if (x["ArrowRight"]) x + 10; 
    if (x["ArrowLeft"])  x - 10; 
    estojo.fillRect(x, 430, 100, 200);
}

mesa1.fillStyle = 'brown';
mesa1.fillRect(0, 70, 700, 50);

mesa2.fillStyle = 'brown';
mesa2.fillRect(820, 70, 700, 50);

perna1.fillStyle = 'black';
perna1.fillRect(0, 120, 80, 400);

perna2.fillStyle = 'black';
perna2.fillRect(620, 120, 80, 400);

perna3.fillStyle = 'black';
perna3.fillRect(820, 120, 80, 400);

perna4.fillStyle = 'black';
perna4.fillRect(1440, 120, 80, 400);

piso.fillStyle = 'gray'
piso.fillRect(0, 430, 3000, 400);