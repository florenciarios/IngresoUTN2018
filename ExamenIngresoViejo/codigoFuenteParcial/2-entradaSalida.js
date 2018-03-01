//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe;
    var precioFinal;
    var iva;

    importe = parseInt(prompt("Ingrese el precio del producto"));
    iva = 21/100*importe;
    precioFinal = iva + importe;

    document.getElementById("importe").value=precioFinal

}

