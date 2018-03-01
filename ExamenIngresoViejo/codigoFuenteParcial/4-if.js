//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
//hice el ejemplo de concatenar y parseint
function Mostrar()
{
    var num1 = prompt("Ingrese el primer número");
    var num2 = prompt("Ingrese el segundo número");
    var resultado;

    if(num1 == num2)
    {
        resultado=num1*num2;
    }
    else if(parseInt(num1)<parseInt(num2))
    {
        num1=parseInt(num1);
        num2=parseInt(num2);
        resultado=num1+num2;
    }
    else
    {
        resultado=num1-num2;
    }

    document.write("El resultado es " + resultado);

}

