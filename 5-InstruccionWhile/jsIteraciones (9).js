function Mostrar()
{

	var flag=0;
	// declarar variables
	
	var respuesta='si';
	var numero;
	var min;
	var max;

	do
	{
		numero = parseInt(prompt("Ingrese un numero"));

		if( numero > max || flag == 0)
		{
			max=numero;
		}
		if( numero < min || flag == 0)
		{
			min=numero;
			flag=1;
		
		}
	
		respuesta = prompt("¿Desea ingresar otro numero?");
	}
	while(respuesta == 'si')

	document.getElementById("maximo").value=max;
	document.getElementById("minimo").value=min;



}//FIN DE LA FUNCIÓN