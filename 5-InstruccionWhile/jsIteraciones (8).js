function Mostrar()
{
	var numero;
	var positivo = 0;
	var negativo = 1;
	var respuesta = "si";
	var flag = 0;

	do
	{
		numero = parseInt(prompt("Ingrese un numero"));
			if(numero >= 0)
			{
				positivo = positivo + numero;
			}

			else
			{
				negativo = negativo * numero;
				flag = 1;
			}

		respuesta = prompt("¿Desea ingresar otro numero?");
	}
	while(respuesta == "si")

document.getElementById("suma").value=positivo;

	if(flag == 0)
	{
		negativo = 0;
	}

document.getElementById("producto").value=negativo;

}//FIN DE LA FUNCIÓN