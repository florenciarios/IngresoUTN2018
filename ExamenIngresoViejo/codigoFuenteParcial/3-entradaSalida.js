//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var ancho = parseFloat(document.getElementById("ancho").value);
    var largo = parseFloat(document.getElementById("largo").value);
    var alambrado;

    alambrado = (ancho*2+largo*2)*6;

    alert("Se necesitan " + alambrado + " metros de alambre");

}

