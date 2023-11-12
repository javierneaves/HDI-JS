import { formName } from './formName.js'
import { formAuto } from './formAuto.js'

export function showMailForm(formData) {

	// Obtenemos los datos ya existentes de el objeto formData
	let mail = !formData.mail ? '' : formData.mail
	let tel = !formData.tel ? '' : formData.tel

	// Borramos los botones de los vehiculos de la siguiente pagina
	let buttonContainer = document.getElementById('vehicleButton');
	buttonContainer.innerHTML = ''

  let formDescription = document.getElementById("formDescription");
  formDescription.innerHTML =
    'Muchas gracias <span class="text-primary">' +
    formData.nombre +
    "</span>. <br /><br /> Compártenos tus datos de contacto, estos son necesarios para poder generar tu cotización y enviar la póliza a tu correo.";

  var formulario = document.getElementById("contactForm");
  formulario.innerHTML = "";
	
	// Crear el primer div
	var div1 = document.createElement("div");
	div1.className = "mb-3";

	// Crear la etiqueta y el input para el correo electrónico
	var labelEmail = document.createElement("label");
	labelEmail.setAttribute("for", "email");
	labelEmail.className = "form-label fw-bold text-body-secondary";
	labelEmail.textContent = "Correo Electrónico";

	var inputEmail = document.createElement("input");
	inputEmail.setAttribute("type", "email");
	inputEmail.className = "form-control border-secondary";
	inputEmail.setAttribute("id", "email");
	inputEmail.setAttribute("placeholder", "Escribe tu correo electrónico");
	inputEmail.value = mail

	// Agregar la etiqueta y el input al primer div
	div1.appendChild(labelEmail);
	div1.appendChild(inputEmail);

	
	// Crear el segundo div
	var div2 = document.createElement("div");
	div2.className = "mb-3";
	
	// Crear la etiqueta y el input para el teléfono
	var labelTel = document.createElement("label");
	labelTel.setAttribute("for", "tel");
	labelTel.className = "form-label fw-bold text-body-secondary";
	labelTel.textContent = "Teléfono";
	
	var inputTel = document.createElement("input");
	inputTel.setAttribute("type", "text");
	inputTel.className = "form-control border-secondary";
	inputTel.setAttribute("id", "tel");
	inputTel.setAttribute("placeholder", "Escribe tu teléfono de contacto");
	inputTel.value = tel
	
	// Agregar la etiqueta y el input al segundo div
	div2.appendChild(labelTel);
	div2.appendChild(inputTel);

	
	// Crear el tercer div para los botones
	var div3 = document.createElement("div");
	div3.className = "container p-5 justify-content-between text-end";
	
	// Crear los botones Anterior y Siguiente
	var botonAnterior = document.createElement("button");
	botonAnterior.setAttribute("type", "button");
	botonAnterior.className = "btn btn-secondary btn-lg m-2";
	botonAnterior.textContent = "Anterior";
	
	var botonSiguiente = document.createElement("button");
	botonSiguiente.setAttribute("type", "button");
	botonSiguiente.className = "btn btn-primary btn-lg m-2";
	botonSiguiente.textContent = "Siguiente";
	
	// Agregar los botones al tercer div
	div3.appendChild(botonAnterior);
	div3.appendChild(botonSiguiente);
	
	// Agregar el primer div al formulario
	formulario.appendChild(div1);
	// Agregar el segundo div al formulario
	formulario.appendChild(div2);
	// Agregar el tercer div al formulario
	formulario.appendChild(div3);

	
	
	botonAnterior.addEventListener('click', function (e) {
		// guarda los valores de los formularios en el objeto
		formData = {
			...formData,
			mail: inputEmail.value,
			tel: inputTel.value
		}
		formName('active', formData)
	});

	botonSiguiente.addEventListener('click', function (e) {
		// guarda los valores de los formularios en el objeto
		formData = {
			...formData,
			mail: inputEmail.value,
			tel: inputTel.value
		}
		formAuto(formData)
	});
	
}

