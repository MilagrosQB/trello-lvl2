window.addEventListener("load",function(){
	var containerMain = document.getElementById("containerMain");
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

	function mostrarformCard(){
		containerFather.style.display = "block";
		addList.style.display = "none";
	}

	btnSave.addEventListener("click",function(e){
		e.preventDefault();
		imprimirCard();
		addInput.value = "";
	});

	btnCerrar.addEventListener("click", function(e){
		e.preventDefault();
		containerFather.style.display = "none";
		addList.style.display = "block";
		addInput.value = "";
	})

	function imprimirCard(){
		var lista = document.createElement("div");
		var inputValue = document.createTextNode(addInput.value);
		var agregarNuevaTarjeta = document.createElement("a");
		var textTarjeta = document.createTextNode("Añadir una tarjeta ...");
		
		agregarLista();
		function agregarLista(){
				containerFather.style.display = "none";
			var divNew = document.createElement("div");
				containerGrand.appendChild(divNew);
				divNew.style.display = "inline-block";
				divNew.appendChild(addList);
				addList.style.display = "inline-block";
				lista.appendChild(inputValue);
				lista.classList.add("lista");
				containerGrand.appendChild(lista);
				lista.style.display = "inline-block";
				agregarNuevaTarjeta.appendChild(textTarjeta);
				lista.appendChild(agregarNuevaTarjeta);
				agregarNuevaTarjeta.classList.add("tarjeta");
				containerGrand.appendChild(addList);
				containerGrand.appendChild(formCard);
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
