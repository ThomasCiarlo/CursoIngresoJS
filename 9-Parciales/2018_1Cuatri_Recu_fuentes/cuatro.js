function mostrar()
{ 
	var numeroUno;
	var numeroDos;
	var cuenta;

		numeroUno=prompt("Ingresar numero uno");
		numeroDos=prompt("Ingresar numero dos");
		


			if (numeroUno==numeroDos) {
				cuenta=numeroUno+numeroDos

				

			}

			else{
				if (numeroUno>numeroDos) {
					cuenta=numeroUno/numeroDos;

					

				}

		
			}

			alert(cuenta);

			if (numeroUno<numeroDos) {



					numeroUno=parseInt(numeroUno);
					numeroDos=parseInt(numeroDos);	

					cuenta=(numeroUno+numeroDos);
										

				}

			else{	


					if (cuenta>50) {
						alert("la suma es "+cuenta+ " y es menor a 50");
					}

					else{
						alert(cuenta);
				
					}
				}				
								
			

			



			
}
