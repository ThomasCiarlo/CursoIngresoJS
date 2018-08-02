function mostrar()
{

	var ingresar;
	var resto;

	
		ingresar=prompt("ingresar el numero");	


		for (numero=0;numero<=ingresar;numero++) 

		{	
			
			resto=ingresar/numero;

				if (resto==1||resto==ingresar) {

					console.log(numero);
				}
			
				

		}



}//FIN DE LA FUNCIÓN