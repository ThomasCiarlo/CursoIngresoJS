function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";




		while(respuesta=="si"){

				acumulador=acumulador+parseInt(prompt("ingrese el numero"));
			

					contador++;
				
					respuesta=prompt("desea continuar");
			}



				document.getElementById('suma').value=acumulador;
				document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN