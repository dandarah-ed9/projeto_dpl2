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

var borrachaCtx = canvas.getContext('2d');
var lapisCtx = canvas.getContext('2d');
var reguaCtx = canvas.getContext('2d');
var estojo = canvas.getContext('2d');

var teclas = {}; 
var x = 100;

var gravidade = 0.015;

var borrachaX = Math.random()*1200;
var borrachaY = 40;
var velBorracha = 0;

var lapisX = Math.random()*1200;
var lapisY = 40;
var velLapis = 1;

var reguaX = Math.random()*1200;
var reguaY = 40;
var velRegua = 2;

document.addEventListener('keydown', e => teclas[e.key] = true);
document.addEventListener('keyup', e => teclas[e.key] = false);

function animate() {
    requestAnimationFrame(animate);

    estojo.clearRect(0, 0, canvas.width, canvas.height);

    mesa1.fillStyle = 'brown';
    mesa1.fillRect(40, 70, 700, 50);

    mesa2.fillStyle = 'brown';
    mesa2.fillRect(820, 70, 700, 50);

    perna1.fillStyle = 'black';
    perna1.fillRect(40, 120, 80, 400);
    perna2.fillStyle = 'black';
    perna2.fillRect(660, 120, 80, 400);
    perna3.fillStyle = 'black';
    perna3.fillRect(820, 120, 80, 400);
    perna4.fillStyle = 'black';
    perna4.fillRect(1440, 120, 80, 400);

    piso.fillStyle = 'gray';
    piso.fillRect(0, 450, 2000, 400);

    if (teclas['ArrowLeft']) 
        x -= 15;
    if (teclas['ArrowRight'])
         x += 15;

    estojo.fillStyle = "purple";
    estojo.fillRect(x, 500, 200, 100);

    velBorracha += gravidade;
    borrachaY += velBorracha;

    if (borrachaY > 550) {
        borrachaY = 40;
        borrachaX = Math.random() * (canvas.width - 50);
        velBorracha = 0;
    }

    borrachaCtx.fillStyle = "pink";
    borrachaCtx.fillRect(borrachaX, borrachaY, 50, 30);

    if (x < borrachaX + 50 && x + 200 > borrachaX && 500 < borrachaY + 30) {
        borrachaY = 40;
        borrachaX = Math.random()*(canvas.width - 50);
        velBorracha = 0;
    }

    velLapis += gravidade;
    lapisY += velLapis;

    if (lapisY > 550) {
        lapisY = 40;
        lapisX = Math.random() * (canvas.width - 50);
        velLapis = 0;
    }

    lapisCtx.fillStyle = "yellow";
    lapisCtx.fillRect(lapisX, lapisY, 20, 60);

    if (x < lapisX + 20 && x + 200 > lapisX && 500 < lapisY + 60) {
        lapisY = 40;
        lapisX = Math.random()*(canvas.width - 20);
        velLapis = 0;
    }
 
    velRegua += gravidade;
    reguaY += velRegua;

    if (reguaY > 550) {
        reguaY = 40;
        reguaX = Math.random() * (canvas.width - 100);
        velRegua = 0;
    }

    reguaCtx.fillStyle = "blue";
    reguaCtx.fillRect(reguaX, reguaY, 100, 20);

    if (x < reguaX + 100 && x + 200 > reguaX && 500 < reguaY + 20) {
        reguaY = 40;
        reguaX = Math.random()*(canvas.width - 100);
        velRegua = 0;
    }
}

animate();