window.addEventListener("load",function(){
	var containerGrand = document.getElementById("containerGrand");	
	var containerFather = document.getElementById("containerFather");
	var addList = document.getElementById("addList");
	var formCard = document.getElementById("formCard");	
	var addInput = document.getElementById("addInput");
	var btnSave = document.getElementById("btnSave");
	var btnCerrar = document.getElementById("btnCerrar");

	addList.addEventListener("click",function(e){
		e.preventDefault();
		mostrarformCard();
		addInput.focus();
	});

	btnSave.addEventListener("click",function(e){
		e.preventDefault();
		imprimirCard();
		addInput.value = "";
	});

	function mostrarformCard(){
		containerFather.style.display = "block";
		addList.style.display = "none";
		formCard.style.display = "block";
	}


	function imprimirCard(){
		var lista = document.createElement("div");
		var inputValue = document.createTextNode(addInput.value);
		var agregarNuevaTarjeta = document.createElement("a");
		var textTarjeta = document.createTextNode("Añadir una tarjeta ...");
		
		agregarLista();
		function agregarLista(){
		containerFather.style.display = "none";
		addList.style.display = "inline-block";
				lista.appendChild(inputValue);
				lista.classList.add("lista");
				containerGrand.insertBefore(lista,addList.previousSibling);
				lista.style.display = "inline-block";
				lista.style.cssFloat = "left";
				agregarNuevaTarjeta.appendChild(textTarjeta);
				lista.appendChild(agregarNuevaTarjeta);
				agregarNuevaTarjeta.classList.add("tarjeta");
			}

		agregarNuevaTarjeta.addEventListener("click", tarjetaCreada);
			function tarjetaCreada(){
					agregarNuevaTarjeta.remove();
			var area = document.createElement("textarea");
					area.classList.add("areaTexto");
					lista.appendChild(area);
					lista.insertBefore(area,inputValue.nextSibling);
			var nuevoBoton = document.createElement("button");
			var nodeBoton = document.createTextNode("Añadir");
					nuevoBoton.classList.add("nuevoBoton");
					nuevoBoton.appendChild(nodeBoton);
					lista.appendChild(area);
					lista.appendChild(nuevoBoton);

					nuevoBoton.addEventListener("click", nuevoGuardar);
						function nuevoGuardar(){
								area.style.display = "none";
								nuevoBoton.style.display = "none";
						var listaTarjeta = document.createElement("textarea");
								listaTarjeta.focus();
						var textListTarjeta = document.createTextNode(area.value);
								listaTarjeta.classList.add("areaTarjeta");
								listaTarjeta.appendChild(textListTarjeta);
								lista.appendChild(listaTarjeta);
								lista.appendChild(agregarNuevaTarjeta);

					}; 
		};
	}
});

