function Mostrar()
{
    var num;
    var i;
    var primo = true;

    num=parseInt(prompt("Ingrese un número"));

    for(i=2;i<num;i++)
    {
        if(num%i == 0)
        {
            primo=false;
            break;
        }
    }

    if(primo)
    {
        alert("El número es primo");
    }
    else
    {
        alert("El número no es primo");
    }


}//FIN DE LA FUNCIÓN