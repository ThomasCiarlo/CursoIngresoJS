function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var RANDOM;

	document.getElementById("FormIngreso").innerHTML=
	
	RANDOM=Math.floor(Math.random() * 11);

	if (RANDOM<=10&&RANDOM>=9) {
		alert("Exelente");

	}

	else{
		if (RANDOM<9&&RANDOM>=4) {
			alert("APROBÓ");

		}

		else{
			alert("Vamos, la proxima se puede");			
		}
	}

}//FIN DE LA FUNCIÓN