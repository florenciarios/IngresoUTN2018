/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostrar()
{	
    //declara datos
    var nombre;
    var edad;

    //toma datos de html
    nombre = document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;

    //muestra datos concatenados
    alert("Usted se llama " + nombre + " y tiene " + edad + " años.");

}

