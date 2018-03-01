//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num;
    var contPares=0;
    var promedio;
    var acumulador=0;
    var flag=0;
    var max;
    var min;
    var respuesta ="si";
    var contIng = 0;

    do
    {
        num=parseFloat(prompt("Ingrese un número"));

        while(num < 0)
        {
            num=parseFloat(prompt("Error. Reingrese el número"));
        }

        acumulador=acumulador+num;

        if(num%2==0)
        {
            contPares++;
        }

        if(num>max || flag == 0)
        {
            max=num;
        }

        if(num<min || flag == 0)
        {
            min=num;
            flag = 1;
        }
        contIng++;
        respuesta = prompt("¿Desea continuar?");
    }
    while(respuesta == "si")

    promedio= acumulador/contIng;

    document.write("La cantidad de números pares ingresados es " + contPares + "</br>");
    document.write("El promedio de los números ingresados es " + promedio.toFixed(1) + "</br>");
    document.write("La suma de los números es " + acumulador + "</br>");
    document.write("El número máximo es " + max + " y el mínimo es " + min);
}

