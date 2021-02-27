var a = prompt ("Ingrese primer numero")
var b = prompt ("Ingrese segundo numero")
var c = prompt ("Ingrese tercer numero")
        
        if (a == b && a == c)
{
    document.write("Estos numeros son iguales")
    
}
if (a > b && a > c)
{
    document.write(a + " es el mayor de estos numeros")
}

if (b > a && b > c)
{
    document.write(b + " es el mayor de estos numeros")
}

if (c > b && c > a)
{
    document.write(c + " es el mayor de estos numeros")
}