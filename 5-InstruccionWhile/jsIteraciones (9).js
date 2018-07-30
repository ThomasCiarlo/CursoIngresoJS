function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var numero;
	var max;
	var min;

	while(respuesta!='no')
	{
		numero=parseInt(prompt("ingresar numero"));

			if (numero>max||contador==0) {

				max=numero;
			}

			

			if (numero<min||contador==0) {

				min=numero;
			}

				contador++;

					respuesta=prompt("desea continuar");
	
	}


		document.getElementById('maximo').value=max;
		document.getElementById('minimo').value=min;

}//FIN DE LA FUNCIÓN