import {showMailForm} from './formMail.js'

formName()

export function formName(active, formData) {
    let testData = !formData ? 'no data' : formData
    console.log(testData);
    var form = document.getElementById("contactForm");
    form.innerHTML = ""
    // Crear div
    var divNombre = document.createElement("div");
    divNombre.classList.add("mb-3");

    // Crear label para Nombre
    var labelNombre = document.createElement("label");
    labelNombre.setAttribute("for", "nombre");
    labelNombre.classList.add("form-label", "fw-bold", "text-body-secondary");
    labelNombre.innerText = "Nombre";

    // Crear input para Nombre
    var inputNombre = document.createElement("input");
    inputNombre.setAttribute("type", "text");
    inputNombre.classList.add("form-control", "border-secondary");
    inputNombre.setAttribute("id", "nombre");
    inputNombre.setAttribute("placeholder", "Escribe tu nombre");
    inputNombre.value = !formData ? '' : formData.nombre
    // Agregar label e input al div
    divNombre.appendChild(labelNombre);
    divNombre.appendChild(inputNombre);

    // Repetir el mismo proceso para el Codigo Postal

    // Crear div
    var divCodigoPostal = document.createElement("div");
    divCodigoPostal.classList.add("mb-3");

    // Crear label para Codigo Postal
    var labelCodigoPostal = document.createElement("label");
    labelCodigoPostal.setAttribute("for", "codigoPostal");
    labelCodigoPostal.classList.add("form-label", "fw-bold", "text-body-secondary");
    labelCodigoPostal.innerText = "Codigo Postal";

    // Crear input para Codigo Postal
    var inputCodigoPostal = document.createElement("input");
    inputCodigoPostal.setAttribute("type", "number");
    inputCodigoPostal.classList.add("form-control", "border-secondary");
    inputCodigoPostal.setAttribute("id", "codigoPostal");
    inputCodigoPostal.setAttribute("placeholder", "Escribe tu Codigo Postal");
    inputCodigoPostal.value = !formData ? '' : formData.cp
    // Agregar label e input al div
    divCodigoPostal.appendChild(labelCodigoPostal);
    divCodigoPostal.appendChild(inputCodigoPostal);

    // Crear div para el botón
    var divBoton = document.createElement("div");
    divBoton.classList.add("container", "p-5", "text-end");

    // Crear botón
    var boton = document.createElement("button");
    boton.setAttribute("type", "button");
    boton.classList.add("btn", "btn-primary", "btn-lg");
    boton.setAttribute("id", "btnFormName");
    boton.innerText = "Siguiente";
    boton.disabled =  !active ?  true : false;

    // Agregar botón al div
    divBoton.appendChild(boton);

    // Agregar los elementos creados al body del documento
    form.appendChild(divNombre);
    form.appendChild(divCodigoPostal);
    form.appendChild(divBoton);
    
   // Validacion de formulario

    var alert = document.createElement("div");
    // alert.className = "alert alert-danger";
    alert.setAttribute("role", "alert");
    form.appendChild(alert)
    var regex = /^\d{5}$/;

    inputCodigoPostal.addEventListener('input', function (e) {
        
        // Verifica si el código postal cumple con la expresión regular
        if (regex.test(e.target.value)) {
            // Registro valido
            boton.disabled = false;
            alert.textContent = "Codigo postal valido!";
            alert.className = "alert alert-success";
            inputCodigoPostal.addEventListener('blur', function (e) {
                alert.textContent = ''
                alert.className = ''
            });

        } else if (!e.target.value){
            boton.disabled = true;
            alert.textContent = ''
            alert.className = ''
            inputCodigoPostal.addEventListener('blur', function (e) {
                alert.textContent = "";
                alert.className = "";
            });
        } else {
            boton.disabled = true;
            alert.textContent = "Ingrese 5 digitos en Codigo Postal!";
            alert.className = "alert alert-danger";
            inputCodigoPostal.addEventListener('blur', function (e) {
                alert.textContent = "Ingrese 5 digitos en Codigo Postal!";
                alert.className = "alert alert-danger";
            });
        }
    
    });

    inputNombre.addEventListener('input', function (e) {
        let nombreValidation = e.target.value
        if(!nombreValidation){
            inputNombre.className = "form-control border-danger"
        } else {
            inputNombre.className = "form-control border-secondary"
        }
    });

    // envio de formulario 

    boton.addEventListener('click', function (e) {
        if (!inputNombre.value) {
            inputNombre.className = "form-control border-danger"
            return
        } else {
            
            formData = {  
                nombre: inputNombre.value,
                cp: inputCodigoPostal.value
            }

            showMailForm(formData)
            
        }
    });
    
    
  }