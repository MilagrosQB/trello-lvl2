window.addEventListener("load",function(){
	var containerMain = document.getElementById("containerMain");
	var containerGrand = document.getElementById("containerGrand");	
	var containerFather = document.getElementById("containerFather");
	var addList = document.getElementById("addList");
	var formCard = document.getElementById("formCard");	
	var addInput = document.getElementById("addInput");
	var btnSave = document.getElementById("btnSave");
	var btnCerrar = document.getElementById("btnCerrar");
  var contador = 1;	

	addList.addEventListener("click",function(e){
		e.preventDefault();
		mostrarformCard();
		addInput.focus();
	});

	function mostrarformCard(){
		containerFather.style.display = "block";
		addList.style.display = "none";
		btnSave.disabled = true;
    addInput.addEventListener("keyup", validate);
    addInput.value = "";
	}

  function validate() {
  	var addInputValue = document.getElementById("addInput").value;

  	if (addInputValue.length === 0 && areaValue.length === 0) {
  		btnSave.disabled = true;
  	} else {
  		btnSave.disabled = false;
  	}
  }

	btnSave.addEventListener("click",function(e){
		e.preventDefault();
		imprimirCard();
		addInput.value = "";
	});

	btnCerrar.addEventListener("click", function(e){
		e.preventDefault();
		containerFather.style.display = "none";
		addList.style.display = "inline-block";
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

			containerGrand.setAttribute("ondragover", "true");
			lista.addEventListener("dragover", onDrop);
			lista.addEventListener("drop", onOver);
		}

		agregarNuevaTarjeta.addEventListener("click", tarjetaCreada);
	
		function tarjetaCreada(){
			agregarNuevaTarjeta.remove();
			var area = document.createElement("textarea");
				area.classList.add("areaTexto");
				lista.appendChild(area);
				lista.insertBefore(area,inputValue.nextSibling);
			var nuevoBoton = document.createElement("button");
				nuevoBoton.setAttribute("id", "newbtn");
			var nodeBoton = document.createTextNode("Añadir");
				nuevoBoton.classList.add("nuevoBoton");
				nuevoBoton.appendChild(nodeBoton);
				lista.appendChild(area);
				lista.appendChild(nuevoBoton);

			nuevoBoton.addEventListener("click", nuevoGuardar);
				function nuevoGuardar(){
					var listaTarjeta = document.createElement("div");
						area.style.display = "none";
						nuevoBoton.style.display = "none";
						listaTarjeta.focus();
						listaTarjeta.classList.add("areaTarjeta");
					var textListTarjeta = document.createTextNode(area.value);
      			listaTarjeta.setAttribute("draggable", "true");
        		listaTarjeta.setAttribute("id", contador++);							
						listaTarjeta.appendChild(textListTarjeta);
						lista.appendChild(listaTarjeta);
						lista.appendChild(agregarNuevaTarjeta);
					var areaValue = document.querySelector("areaTarjeta");							
	    		
	    		listaTarjeta.addEventListener("dragstart", onStart);
		  		litaTarjeta.addEventListener("drop", onDrop);
	  			listaTarjeta.addEventListener("dragleave", onOver);	
				};
		};

  	function onStart(e){
  		e.dataTransfer.setData("text", e.target.id);
  	}

  	function onDrop(e){
  		e.preventDefault();
  	}

  	function onOver(e){
  		e.preventDefault();
  		var dropId = e.dataTransfer.getData("text");
  		this.insertBefore(document.getElementById(dropId),e.target);
  	}
 	}
});