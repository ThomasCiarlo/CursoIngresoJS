/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var aumento;

	aumento=10;
	sueldo=document.getElementById('sueldo').value;
	
		aumento=parseInt(aumento);

			resultado=(sueldo*aumento/100);
			document.getElementById('resultado').value=resultado;



}
