var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

/*for(var pakin in coleccion)//ciclo especial: solo va a operar por la cantidad de objetos en el array
//in: trae el indice del array
{
    console.log(coleccion[freddito]);
}*/
//tambien se puede gracias a la actualizacion
for(var pakin of coleccion)//no muestra indices, el in si
{
    pakin.mostrar();//no tienes que especificar la coleccion
}
