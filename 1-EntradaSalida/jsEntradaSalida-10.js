/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{   
    // declaro datos
	var importe;
    var descuento;
    var resultado;

    //realizo operaciones
    importe = parseFloat(document.getElementById("importe").value);
    descuento = 25 / 100 * importe;
    resultado = importe - descuento;

    //muestro resultado y ajusto cantidad de decimales 
    document.getElementById("resultado").value = resultado.toFixed(2);
}
