
var a = prompt("Ingrese primer numero")
var b = prompt("ingrese segundo numero")

if ((a > 0) && ( b > 0)) {
  document.write("Hay dos numeros positivos: primer positivo " + a + " Segundo positivo " + b)
}
if ((a < 0 && b < 0)){

  document.write("Hay dos numero negativos: primer negativo " + a + " Segundo negativo " + b)
}



if ((a > 0) && ( b < 0)) {
  document.write("Uno positivo y otro negativo: primer positivo " + a + " Segundo negativo " + b)
}

if ((a < 0 && b > 0)){
  document.write("Uno negativo y otro positivo: primer negativo " + a + " Segundo positivo " + b)
}