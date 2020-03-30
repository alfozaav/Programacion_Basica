var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url : "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var cerdo = {
  url : "cerdo.png",
  cargaOK: false
};
var teclas = {
  UP : 38,
  DOWN : 40,
  LEFT : 37,
  RIGHT : 39
};
var cantidad = aleatorio(5, 25);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);//load:cuando este cargado el objeto

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarCerdo()
{
  cerdo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(cerdo.cargaOK)
  {
    papel.drawImage(cerdo.imagen, 0, 0);
  }
}
while (dibujar == true)
{
  cerdo.addEventListener("keyup", moverCerdo);
}

function moverCerdo(evento){
  if (evento.keyCode == teclas.UP)
  {
    alert("funciona");
  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor (Math.random() * (maxi - min + 1)) + min;
  return resultado;//retorna la linea de codigo que invoco la funcion el valor
}
