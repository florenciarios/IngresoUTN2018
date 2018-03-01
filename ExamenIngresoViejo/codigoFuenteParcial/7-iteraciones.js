//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var nota;
    var sexo;
    var contH = 0;
    var acumulador = 0;
    var notaBaja;
    var promedio;
    var flag = 0;

   for(var i=1;i<7;i++)
   {
        nota = parseInt(prompt("Ingrese la nota"));

        while(nota <0 || nota >10)
        {
            nota = parseInt(prompt("Error. Reingrese la nota"));
        }

        sexo = prompt("Ingrese el sexo");

        while(!(sexo == "h" || sexo == "m"))
        {
            sexo = prompt("Error. Reingrese el sexo");
        }

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
   }
    
    promedio=acumulador/6;

    alert("El promedio de las notas es " + promedio.toFixed(1) + "\nLa nota más baja fue " + notaBaja + "\nLos varones aprobados son " + contH);  

}

