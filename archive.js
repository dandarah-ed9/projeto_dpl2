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
var lapis = canvas.getContext('2d');
var borracha = canvas.getContext('2d');
var regua = canvas.getContext('2d');

mesa1.fillStyle = 'brown';
mesa1.fillRect(40, 70, 700, 50);

mesa2.fillStyle = 'brown';
mesa2.fillRect(820, 70, 700, 50);

perna1.fillStyle = 'gray';
perna1.fillRect(40, 120, 80, 400);

perna2.fillStyle = 'gray';
perna2.fillRect(660, 120, 80, 400);

perna3.fillStyle = 'gray';
perna3.fillRect(820, 120, 80, 400);

perna4.fillStyle = 'gray';
perna4.fillRect(1440, 120, 80, 400);