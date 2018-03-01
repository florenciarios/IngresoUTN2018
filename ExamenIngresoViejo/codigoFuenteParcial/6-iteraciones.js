//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var flag = 0;
    var importe;
    var max;
    var min;
    var cantidad=0;

    do
    {
        importe=parseInt(prompt("Ingrese importe del día"));
        if(importe>max || flag == 0)
        {
            max=importe;
        }
        if(importe<min || flag == 0)
        {
            min=importe;
            flag=1;
        }
        cantidad++;
    }
    while(cantidad<7 && importe!= 0)

    alert("El mayor importe fue " + max + " y el menor importe fue " + min);
}

