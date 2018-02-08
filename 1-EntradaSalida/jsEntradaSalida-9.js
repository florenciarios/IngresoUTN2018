/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{   
    //declaro datos
    var sueldo;
    var aumento;
    var resultado;

    //realizo operaciones
    sueldo = parseInt(document.getElementById("sueldo").value);
    aumento = 10 / 100 * sueldo;
    resultado = sueldo + aumento;

    //muestro resultado
    document.getElementById("resultado").value = resultado;

	
}
