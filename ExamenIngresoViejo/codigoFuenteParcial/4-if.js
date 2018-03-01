//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var num1 = parseFloat(prompt("Ingrese el primer número"));
    var num2 = parseFloat(prompt("Ingrese el segundo número"));
    var resultado;

    if(num1 == num2)
    {
        resultado=num1*num2;
    }
    else if(num1>num2)
    {
        resultado=num1-num2;
    }
    else
    {
        resultado=num1+num2;
    }

    document.write("El resultado es " + resultado);

}

