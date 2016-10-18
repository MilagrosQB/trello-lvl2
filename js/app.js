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

});

