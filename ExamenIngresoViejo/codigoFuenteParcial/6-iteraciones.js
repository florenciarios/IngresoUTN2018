//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe;
    var max;
    var min;
    var flag = 0;
        
    for(var i=0;i<7;i++ )
    {

        importe=parseInt(prompt("Ingrese importe del día"));

        while(importe <= 0)
        {
            importe=parseInt(prompt("Error. Ingrese un numero positivo"));
        }

        if(importe>max || flag == 0)
        {
            max=importe;
        }
        if(importe<min || flag == 0)
        {
            min=importe;
            flag=1;
        }
    }

    alert("El menor importe fue " + min + " y el mayor importe fue " + max);
    


}

