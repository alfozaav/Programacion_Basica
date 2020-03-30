/*var numeros = 100;
var divisible = false;

for(var i = 1; i <= 100; i++)
{
  divisible = false;
  if(i % 3 == 0)
  {
    document.write("Fizz");
    divisible = true;
  }
  if(i % 5 == 0)
  {
    document.write("Buzz");
    divisible = true;
  }
  if(!divisible) //si no es divisible !=no, niega las cosas
  {
    document.write(i);
  }
  document.write("<br />");
}*/
//otra forma de hacerlo
/*var numeros = 100;

for(var i = 1; i <= 100; i++)
{
  if(i % 3 == 0)
  {
    document.write("Fizz");
  }
  if(i % 5 == 0)
  {
    document.write("Buzz");
  }
  if(i%3 != 0 && i % 5 != 0)//&&=y
  {
    document.write(i);
  }
  document.write("<br />");
}
*/
//otra forma
var numeros = 100;
var divisible = false;

for(var i = 1; i <= 100; i++)
{
  if(esDivisible(i,3))
  {
    document.write("Fizz");
  }
  if(esDivisible(i,5))
  {
    document.write("Buzz");
  }
  if(!esDivisible(i,3) && !esDivisible(i,5))
  {
    document.write(i);
  }
  document.write("<br />");
}

function esDivisible(num, divisor)
{
  if(num % divisor == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}
