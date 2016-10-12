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

	function mostrarformCard(){
		containerFather.style.display = "inline-block";
		addList.style.display = "none";
		formCard.style.display = "inline-block";
	}
	
	btnSave.addEventListener("click",function(e){
		e.preventDefault();
		imprimirCard();
		addInput.value = "";
	});

	/*btnCerrar.addEventListener("click", function(e){
		e.preventDefault();
	})*/

	function imprimirCard(){
		var lista = document.createElement("div");
		var node = document.createTextNode(addInput.value);
		var newCard = document.createElement("a");
		var textTarjeta = document.createTextNode("Añadir una tarjeta ...")
		
		containerFather.style.display = "none";
		addList.style.display = "inline-block";
				lista.appendChild(node);
				lista.classList.add("lista");
		containerGrand.insertBefore(lista,addList.previousSibling);
				lista.style.display = "inline-block";
				lista.style.cssFloat = "left";
		newCard.appendChild(textTarjeta);
				lista.appendChild(newCard);
		newCard.classList.add("tarjeta");

		newCard.addEventListener("click", function(){
				newCard.style.display = "none";
			var area = document.createElement("textarea");
					area.classList.add("areaTexto");
					lista.appendChild(area);
					lista.insertBefore(area,node.nextSibling);
			var nuevoBoton = document.createElement("button");
			var nodeBoton = document.createTextNode("Añadir");
					nuevoBoton.classList.add("nuevoBoton");
					nuevoBoton.appendChild(nodeBoton);
					lista.appendChild(nuevoBoton);
					lista.insertBefore(nuevoBoton,area.nextSibling);

		nuevoBoton.addEventListener("click",function(){
			area.style.display= "none";
			nuevoBoton.style.display="none";
			newCard.style.display="block"
			var listaTarjeta = document.createElement("textarea");
					listaTarjeta.focus();
			var nodeListTarjeta = document.createTextNode(area.value);
					listaTarjeta.classList.add("areaTarjeta");
					listaTarjeta.appendChild(nodeListTarjeta);
					lista.appendChild(listaTarjeta);
					lista.insertBefore(listaTarjeta,node.nextSibling);
				}); 
			});
		}
	});

