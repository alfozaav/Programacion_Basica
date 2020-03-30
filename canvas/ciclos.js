var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width; //para determinar el ancho del canvas
var lienzo = d.getContext("2d");

/*for(l = 0; l < lineas; l++)//forma mas usada de hacer ciclos
{
  yi = 300 - (l * 10);
  xf = 300 - (l * 10);
  dibujarLinea(colorcito, 300, yi, xf, 0);
  console.log("Linea " + l);
}
dibujarLinea(colorcito, 0, 1, 299, 1);
dibujarLinea(colorcito, 299, 1, 299, 299);*/

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);//maximo de lineas
  var l = 0;//comienza desde la linea 0
  var yi, xf, xi, yf;
  var colorcito = "#FAA";
  var espacio = ancho / lineas;

  while(l < lineas)//Mientras que la condicion sea verdad
  {
    yi = espacio * l;
    xf = espacio *(l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);//accion a realizar mientras se cumpla
    console.log("Linea " + l);
    l++;//que vaya de 1 en 1, o puede ser l = l + 1
  }

  dibujarLinea(colorcito, 1, 0, 1, 300);
  dibujarLinea(colorcito, 1, 299, 299, 299);
}
