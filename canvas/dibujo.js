var d = document.getElementById("dibujito");/*Funcion:Obtener un elemento, en este caso obtinene el canvas de html*/
var lienzo = d.getContext("2d");/*Funciom:Especifica si el lienzo sera 2d o 3d*/

lienzo.beginPath();/*Funcion:apoyar el lapiz, comienza el trazado*/
lienzo.strokeStyle = "red";/*Atrubuto:Color del lapiz*/
lienzo.moveTo(100, 100);/*Funcion: coordenadas iniciales de la linea*/
lienzo.lineTo(200, 200);/*Funcion:coordenadas finales de la linea*/
lienzo.stroke();/*funcion: stroke dibuja la linea, es como si arrastraramos el lapiz por el papel*/
lienzo.closePath();/*Funcion:Levanta el lapiz, termina el trazado*/

dibujarLinea("pink", 10, 300, 220, 10);//Llamar la funcion de abajo con los parametros puestos
dibujarLinea("yellow", 300, 10, 10, 220);

//Utilizar funcion para hacer lo mismo
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)//Parametros dentro del parentesis
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
