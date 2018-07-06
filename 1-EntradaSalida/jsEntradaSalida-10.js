/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var descuento;
	

	importe=document.getElementById('importe').value;
	descuento=0.75;

		importe=parseInt(importe);
	

			resultado=(importe*descuento);
			document.getElementById('resultado').value=resultado;
	
}
