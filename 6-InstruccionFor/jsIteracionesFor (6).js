function Mostrar()
{


for(;;)
{
    var num = prompt("Ingrese un numero");
    var numPar = 0;
    var pregunta

    if(num %2 == 0)
    {
        numPar++;
    }

    pregunta = prompt("Quiere ingresar otro?")
    if(pregunta == "no")
    {
        break;
    }

    
}

alert("La cantidad de números pares encontrados son " + numPar + " y los números son " + num);

}//FIN DE LA FUNCIÓN