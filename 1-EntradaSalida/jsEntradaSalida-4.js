/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{
	//declara dato
	var nombre;

	//toma dato
	nombre = prompt("Su nombre");

    //muestra dato
	document.getElementById("elNombre").value = nombre;
}

