function Mostrar()
{
    var num;
    var contPares=0;
    var i;

    num=parseInt(prompt("Ingrese un número"));

    for(i=1;i<=num;i++)
    {
        if(i%2==0)
        {
            contPares++;
            console.log(i);
        }

    }

    console.log("La cantidad de números pares encontrados es " + contPares);

}//FIN DE LA FUNCIÓN