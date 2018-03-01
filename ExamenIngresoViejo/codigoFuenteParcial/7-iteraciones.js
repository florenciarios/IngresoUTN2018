//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var nota;
    var sexo;
    var contH = 0;
    var acumulador = 0;
    var notaBaja;
    var promedio;
    var cantPreg = 0;
    var flag = 0;

    do
    {
        nota = parseInt(prompt("Ingrese la nota"));
        sexo = prompt("Ingrese el sexo");

        acumulador = acumulador + nota;

        if(sexo == "h" && nota >= 6)
        {
            contH++;
        }

        if(nota<notaBaja || flag == 0)
        {
            notaBaja=nota;
            flag = 1;
        }

        cantPreg++;
    
    }
    while(nota >= 0 && nota <= 10 && cantPreg < 6)

    promedio=acumulador/6;

    alert("El promedio de las notas es " + promedio.toFixed(1) + ", la nota más baja fue " + notaBaja + " y los varones aprobados son " + contH);


}

