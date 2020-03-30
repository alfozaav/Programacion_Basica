var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT:37,
  RIGHT: 39
};//es una colecion de variables, mas variables dentro de una, ppor lo tanto es una linea unica y al final si lleva ;

document.addEventListener("keydown", dibujarTeclado);//keydown:cuando oprimes una tecla y keyup:cuando sueltas una teclas
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

document.addEventListener("mousedown", presionarMouse);//Cuando presionas click
document.addEventListener("mouseup", soltarMouse);//Cuando sueltas el click
document.addEventListener("mousemove", dibujarMouse);//Cuando mueves el mouse
var estado = 0;
var colorLinea = "blue";
function dibujarMouse(evento)//funcion para mousemove
{
  if (estado == 1) //solo se dibujara si esta el click del mouse presionado
  {
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
  }
  x = evento.layerX;
  y = evento.layerY;
}

function presionarMouse(evento)//funcion para mousedown
{
  estado = 1;
  x = evento.layerX;
  y = evento.layerY;
}

function soltarMouse(evento)//funcion para mouse move
{
  estado = 0;
  x = evento.layerX;
  y = evento.layerY;
}

dibujarLinea("red", x-1, y-1, x+1, y+1, papel)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  /*if(evento.keyCode == teclas.UP)
{
  console.log("Vamo' pa arriba ");
}*/
var colorcito = "green";
var movimiento = 1;
  switch(evento.keyCode)//grupos de ifs
  {

    case 38:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case 40://caso de tecla que se dispara
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;//acaba con la accion
    case 37:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case 39:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
    default:
    console.log("Otra tecla")
    break;
  }
}
