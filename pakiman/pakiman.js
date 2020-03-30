class Pakiman
{
  constructor(n, v, a)
  {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;

    this.imagen.src = imagenes[this.nombre];
  }
  hablar()//dentro de las clases no se escribe function porque se entiende por defecto
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);//agregar un hijo
    document.write("<p>");
    document.write("<strong>" + this.nombre + "</strong><br / >");
    document.write("Vida: " + this.vida + "<br / >");
    document.write("Ataque: " + this.ataque + "<hr />");//hr: agrega una raya al final
    document.write("</p>");
  }
}
