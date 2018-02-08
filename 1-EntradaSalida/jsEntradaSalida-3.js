/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostrar() 
{

    //declara dato
    var nombre;

    //toma dato de doc html
    nombre = document.getElementById("elNombre").value;

    //muestra dato
    alert(nombre);


}


