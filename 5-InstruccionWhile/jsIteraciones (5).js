function Mostrar()
{

var sexo = prompt("Ingrese f ó m .");

//no hace falta agregar los datos de sexo con mayus

while( !(sexo == "f" || sexo == "m"|| sexo == "F" || sexo == "M"))
{
    sexo=prompt("Error. Reingrese.")
}

document.getElementById("Sexo").value=sexo;

}//FIN DE LA FUNCIÓN