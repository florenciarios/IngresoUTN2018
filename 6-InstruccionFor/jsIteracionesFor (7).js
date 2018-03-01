function Mostrar()
{
    var num;
    var i;
    var contDiv=0;

    num=parseInt(prompt("Ingrese un número"));

    for(i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            contDiv++;
            console.log(i);
        }
    }

    console.log("La cantidad de divisores encontrados es " + contDiv);


}//FIN DE LA FUNCIÓN