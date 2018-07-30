function mostrar()
{	
	var numeroUno;
	var numeroDos;
	var cuenta;

		numeroUno=prompt("ingrese el primer numero");
		numeroDos=prompt("ingrese el segundo numero");

			if (numeroUno==numeroDos) {

				alert(numeroUno+numeroDos);
			}

			else{

					if (numeroUno>numeroDos) {

					numeroUno=parseInt(numeroUno);
					numeroDos=parseInt(numeroDos);

					cuenta=numeroUno-numeroDos;

						alert("su resultado es "+cuenta);


					}

					else {

						if (numeroUno<numeroDos) {

					numeroUno=parseInt(numeroUno);
					numeroDos=parseInt(numeroDos);

					cuenta=numeroUno+numeroDos;

						alert("su resultado es "+cuenta);

												}
					}
				}

						if (cuenta>10) {

							alert("la suma de "+cuenta+" y supero el 10");
						}

							
}
