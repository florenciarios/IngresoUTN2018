function Mostrar()
{
	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero;

	while(respuesta == "si")
	{
		numero = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numero;
		contador++;

		respuesta = prompt("¿Desea ingresar otro numero?");
	}

/* otra forma de hacerlo:

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta = "si";

do
{
	numero = parseInt(prompt("Ingrese un numero"));
	acumulador = acumulador + numero;
	contador++;
	respuesta = prompt("¿Desea ingresar otro numero?");
}
while(respuesta == "si");
*/


document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN