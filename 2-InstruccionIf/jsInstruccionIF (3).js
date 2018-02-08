function Mostrar() 
{
    //tomo la edad  
    var edad;

    edad = parseInt(document.getElementById("edad").value);

    //condicion IF y ELSE, si es mayor de edad o menor
    if (edad >= 18) 
    {
        alert("Usted es mayor de edad");
    }

    else 
    {
        alert("Usted es menor de edad");
    }

}//FIN DE LA FUNCIÓN