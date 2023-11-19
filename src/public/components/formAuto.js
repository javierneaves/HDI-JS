import { showMailForm } from "./formMail.js";
import { catalogYear } from "./catalogo.js"

export function formAuto(formData){
    // Habilita el boton de progress del coche
    let carProgressIcon = document.getElementById('carProgressIcon');

    carProgressIcon.disabled = false

    let year = !formData.year ? '' : formData.year
    let brand = !formData.brand ? '' : formData.brand
    let model = !formData.model ? '' : formData.model
    let version = !formData.version ? '' : formData.version

    // Escribe el saludo para esta pagina
    let formDescription = document.getElementById("formDescription");
    formDescription.innerHTML =
    'Gracias <span class="text-primary">' +
    formData.nombre +
    "</span>. <br /><br /> Selecciona el tipo de auto que tienes.";

    // Suponiendo que tienes un elemento en el DOM con el id "miFormulario"
    var formulario = document.getElementById("contactForm");
    formulario.innerHTML = ""

    // Crea los botones de los vehiculos
    let buttonContainer = document.getElementById('vehicleButton');
    buttonContainer.innerHTML = ''

    // Crear el primer botón
    var button1 = document.createElement("button");
    button1.type = "button";
    button1.className = "btn btn-outline-secondary vehicleBtn p-2";

    // Crear la imagen para el primer botón
    var img1 = document.createElement("img");
    img1.alt = "jsx-a11y/alt-text";
    img1.className = "form_tipoVehiculo_img";
    img1.src = 'data:image/jpeg;base64,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'

    button1.appendChild(img1)

    // Crear el segundo botón
    var button2 = document.createElement("button");
    button2.type = "button";
    button2.className = "btn btn-outline-secondary vehicleBtn p-2";

    // Crear la imagen para el primer botón
    var img2 = document.createElement("img");
    img2.alt = "jsx-a11y/alt-text";
    img2.className = "form_tipoVehiculo_img";
    img2.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAByAI0DASIAAhEBAxEB/8QAHgABAAICAwEBAQAAAAAAAAAAAAgJBgcEBQoCAwH/xAA9EAABBAIBAgQCBQkHBQAAAAADAQIEBQAGBwgSCRETFBUhFhkiV5UXIzFVVpbS09QyM0J3krbWNjc4dbT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9/GMYwGMYwGMYwGMYwGMYwGMYwGMYwGMYwGMYwGMYwGMYwGMYwGM/IxgxgmkSDCjx44iGOcxGCCEImKQpjFIrWDENjXPIR7msYxqucqIirkUd/64Omfjw0iFYcjwthtYziDfV6XEl7ST1A+aFEtlWifQBKx/kJwpVwAiEVze382ZRhLPGVY3nir8VRnPbrnGu/3DWo5GvuJOvUDXuTs7fJIlhsTmjeqk+05qPa1o1UXcRzRYwnih7HZu9LXemi7sHSWq6uMm6z5bjsRil9X2UHjwilag2verQTXIjGq/1e1FwLdcZUGfxJeXIwTSZPS9aR48cRDnOe02YQQBExSFMYpNNawYhsa55CPc1jGNVzlREVcnT0r9QbOpPjSVvjtb+isys2m01WyqmWK2kf3cCBU2o5MSY6HBI8J4F3C7mEjNcKSyQNHEY1hHBJPGMYDGMYDGMYDGMYDGM1dyLzZxNxKBDci7/rerPez1Q186e011JF+lSw6GC2VdzRJ8kcSJXmY1XMRzkV7UUNo5pDnjn/j/AKe9QftO7TnPlS/Xj63rUFWEu9msgjR6xIAXfZDFB3idY2sr04NeMokKR8uTCiS4r7R4nXTvSrIFRQN/3EzEckY1ZQQ6utO9PPtUh9gtquxAJ3l596VBit808wf2u2p6w6g6nlTndnLfUNRWm6a7Cc91Zx/RSY8SsBCilISk1xxpTxK2jhEM+XZKjHyryU0iTl7J8pzQmPU6j1U9f852wbbem4o4ILKUlZWBHLbVT4wSqgkqaRpYMndJw/NULsV7Ij1IT+6+FOCo3VLZucddAHTVoIAOmaeXfrYaMUttvU0lqwj0anqIyjjJB11oXP8ANw2GqpB2NVGPlF8lc6N0TxUuM4EWNBg8PbVChQo4YkOHEtKCNFiRYw2hjxo0cImBBHAFjBBCJjBiGxrGNa1qInI+td4++6fcvxqk/gwMZ8TnStN03jjimPqGpaxqsd+3W4ng1uhqqMLhCpGemNwqyJFY4Y/8DFarWf4UTLa9c/6eof8A01X/APCDPPr1idYmtdTGtabR0Wm3msl1m8n2xz20+BMHKHLgNhtCFsNqOY9jk73Of9lW/JPnkt6vxUtAgVldBfxVuBHwoMSI8jbqlRr3Ro4wue1FZ5o1ysVyIvzRF+fzwLIOav8As5yz/lnvn+1rXIP+Fh/4+bj/AJybD/snjzNRb34nmibdo+5apG4v22HI2fVNi14Es9xTEDFNdVEytFIMwbO94gPktKRjPtuY1Ub81TNA9IfW1q3Tbxrd6Nd6Rf7LLtd4stsHOqrCuiRxR51DrVOyI8ctqkcYZKIpnPavYrDjan2muwPQPjKofrXePvun3L8apP4MfWu8ffdPuX41SfwYFr2Mqh+td4++6fcvxqk/gyUfTL1f6h1Mz9qqaPWL/V7PVodfYmDbmgzAToM8x43qxpMJ/wCbNGkCYwwDiZ3MkBIAhe07QhLvGMYDGM1LztyYTh3iLe+SgVw7aVqtKsuDXGI8UeTYy5casrmSnjVCpDbOnRyTEE5hnRmFaJ7CK17Qrn62uuq+03YbfhrhmaOsuapfY7pvbGikSqycUbHnodaRUMGPNhDJ6NtcPGWXBmKaDXCiT4Tprey4D8Pzi/cteo+VeVd+tuZJ+5RQ7Erqq0t63XJ7J/kZXTrWYyLulxLc5FSVKlSNdlDMpo0mtacKkXHehnpi1vlXVtx5y5w1jX91Tk6+lzdUFYEkmNGdAvNhj7dbHjgkDAB1vfqsWOM6kliFTlM30485jj9j1M8ubptu+0XRT0sRh64KAAFBttjQKSqiV8UcQbj66GbBjufR6zr1Yqn2qfCQsucYjqQbUdHmwrgJEW+19APT/L+BTgcN0VxBK6JJj1epM3fZYJ2sex8e4lUlLs19EM1ika8VtIGRjSqjkRD/AG8t0zqr6P8Adpcapod70eHOK2OMMPYtfmacz1TIjRQwy9opKetPIR3kBoIcw/cXsGFX+oLvhVO4B6G+liBAref9il8kcizIYZcmmAa9V0ZJA0RSwdb1eXD+G1zlYX2cna7MxZi954jmqjQx/ql488O/qbK7VOOD2fFXIVghHUwVLc1E2XKf3SEjxqq9nW2p2/Y5pEJVVUmNaPjIRsMoRDEYIW6N1/XHta9lHSPY9qOY9tbBc1zXJ5tc1yAVHNcioqKiqiovmi+WfX0c179RU34XB/kZUPwnyhyj0Z8zVvTfzlbEvOLtgJFjaLs73GLApR2UhY9Ra08mUNZQNfPN8qnYtfkm9vrc71bOCRIgZBby5HA6b6Oa9+oqb8Lg/wAjH0c179RU34XB/kZ3OMDpvo5r36ipvwuD/Izh2Ndp1RBlWdtA1mrrYIXyZthYxauFBhxxp5kPKlyRijxwjT5vKYjGNT5uciZz769qdYo7jZL6cGspKGsnXFvYSFVoIVbWxiS5soqoiu7ARwkIqNRz3dvaxrnKiLS1Ei8teJByRbyz3Fhx/wBOul2ftxRxr6rFexvrRxNieoGLc7pYxXDlzZctxa7VIMoSCYdXx410E67zrI6MtfnvrZm/arLkCexhSUembBsMBrX9yKVlrR6zYVcljO37aRJkgiebVQbkVM2txry708cvuQXHWz6Jsk70iH+Djhx63YEji/vZDtcuYNdesjj809Q7q5As807np5p51u2UjwweJZC6jIprHk2zhkdX2+wQy7Js7UMq+gc5LYFpRa3IUSM9Vx9SjFAxzne1T1+8bfux6UOn7nbW5PI3RZvh9b3fWSDshas66uY6x7ILnGiAel6Vu2adaGkxyLUXSzJFEaQFGRPRio6xihYP1Hcj1vAnHLt9r+JE5FM28rad9LURY1e2GCeOYUlva2IaO7fArY3tGxUN8NO0tjOr4jlC2Spx16eGtefSbnLqE2T4d8H+kEJ958I9T1vhXxbb5s/4d63t4nq+x9x7X1PaRe/0u724fP02yW6IeqHYuVA7BxFy00sPmDj1p2SST4y19jsFVXS21lg6zhKMTI+x6/YOFBuRoMDpQ5EaX6CyBWREjfwsTZenvxAt443s41XcweZ7G+nMsopjjPCq7h9zvVBNENyeTJQnBLVW1eZjmoRxDxJhRAC+YFy+MYwGYXyLoWv8o6Ps3H+0iOWh2qrLWT/alQEsCOcw0eZDM5hWDmQZYY82I8ojBbIjiUwTC7xuzTGB5++kzrEgdL8LkTQN8rt02ijS/jv1Oqq/h3br82Ge5jbMhh20+E+ElqRKYqxYrSCZLizpDwikSCvkbq8PcpouudUHUndQkttlBHtDimnE9FPIjV9vve0xGSVRjXLbTn0JJgxmQg0jxnk9NCjc63CXomkT5J5s7TdVmTJRXnky5evVEiTIMRyuIY5zQ3lMV7lVzyEe57nKquVVzn/RuhbSS9bDT10WhnRJsGVUwoceHAJFsRlFOEsWMMQWtlMMVDdrEV6kc5yqqquBT70HcE6n1AO5D6g+a44eRb2VvU+ki1ewDWVV/FmVlVe21zZQHKkKxaYWwQYFTXHE6trAQ5CMhuVYKw8/69elzjHVeLJfNnGev1nHG0aFaa8eWPUIzKGttIFrf11JHeKtrGxoddcVdrZwZ8KzrxRDegOUGR7h/sSQ9Q0huefDs3jba2No9hyjwbtFglhCnx0mAiu9JChr5r7mBAswazs44SMhXMGxriRbccMRISOACJND+XIHLXP/AF+kpOMuPOMZ2i8ZktodjsN9NNMsawqxfzkebfbMSsqa5sOAx750LXa4R59jNYEjHzHgjNjhlXVPIlc29CHDHNd5G9bb9fm1DbS1aBHEMCeWfp2wSCuENWxQ3l7WUloRvcKO2S0Edqd7gjzLNL8Ubjuq07VKvadK5Dtdmrdbo6/YrSKmuvjWd5CrIsa1sI75N2GQ4M2cI8kanCMvYVPUY1/mmWWaFxxrug8caxxjBjiste1rXoOv9llGjmbaDjBayXMsIqsdFIezlKadMZ6aidIkE7W9vkmc38nXH37Cab+7FJ/Q4Fdn1q3Dv3d8l/6NW/5Bj61bh37u+S/9Grf8gyxP8nXH37Cab+7FJ/Q4/J1x9+wmm/uxSf0OBTl1MeIVpnMXDe0cbaXqu66/abQ+pjSrK5+CjiMqYlrEsbCMj663lye+cOG2E9voqIkY8gRFRr/nlfLljP4D8OzibWNU9xTWnLLKD6ST46uiWDou41Fju9+w0gbhnSRKAKv1swyIrlo1PXkVrBtZlsacd8foqKmi6cioqKiprFIioqfNFRUg+aKi/NFT9Gai6qOCWdQfDtxocWTGr7+JMh7HqE2X3NgxtjqRSgRhzVEMhBw59fOsqkxxDI+Iyf7tgZCx/blDUnTh0acG6nxTqsjZtC1jfdq2jWau52K822pg7D2y7qBHnlhUgLEUmJVQq71/ZwpVcGPOOwXupEl5jO7YecnaLXdHfWXwzsHE6nqdP5OmV1bbamKZKmDBCtL6Jr+0VIQEJJmnqzCm113SglLJ9tegVsLtFXRAgaD1q839M+u1/EXNXB95e2OqRh0GsWciwk61MlV8BntKmufLbQ3tVscQIhMhwb2mM5DQY4XOZaSEJKJk/DXHfNXVp1Ba51Hc0ayTS+PtHJBmadr8mJLhMsCUksthr9dUQrJzZ0qEK3L8bvtjlgbFtjgWtgBZHKwNQGL9U+wwumfrr0fmWDWzyVF/rNfsWzwakUeL8UJKZf6XscSMj3hhy5hK2FW25klPGhLSUKUYjDObKzg8X77I6oevnUuWtE1HYIOqavUAffmtmxO+nhw9VuqocqyNDPIhAdY2k1kOtiDkyJMrycZrEGKX7W6S216gv2gZe0dPdMjOI6M22rIVk2O4qNQrgNmAMgnERjEIo0ar0Y1HeaNTy/tTQ0VCMwaKlqaUUh7SHFU10OuGcjW9rSGZDCFpHtb9lr3o5yN+SKifLA7bGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYDGMYH/9k='
    
    button2.appendChild(img2)

    // Agrega los botones al contenido, el button container se debe borrar al cambiar la vista
    buttonContainer.appendChild(button1)
    buttonContainer.appendChild(button2)

    // Crear el primer div
    var div1 = document.createElement("div");

    div1.className = "mb-3";

    // Crear la etiqueta y el select para el año
    var labelYear = document.createElement("label");
    labelYear.setAttribute("for", "vehicleYear");
    labelYear.className = "form-label fw-bold text-body-secondary";
    labelYear.textContent = "Año";

    var selectYear = document.createElement("select");
    selectYear.className = "form-select";
    selectYear.setAttribute("aria-label", "Default select example");
    
    // Opciones para el año
    var years = catalogYear
    
    // Crear opciones y agregarlas al select
    for (var i = 0; i < years.length; i++) {
        var option = document.createElement("option");
        option.textContent = years[i];
        selectYear.appendChild(option);
    }
    
    selectYear.value = year
    // Agregar la etiqueta y el select al primer div
    div1.appendChild(labelYear);
    div1.appendChild(selectYear);

    // Agregar el primer div al formulario
    formulario.appendChild(div1);

    // Crear el segundo div
    var div2 = document.createElement("div");
    div2.className = "mb-3";

    // Crear la etiqueta y el select para la marca
    var labelBrand = document.createElement("label");
    labelBrand.setAttribute("for", "vehicleBrand");
    labelBrand.className = "form-label fw-bold text-body-secondary";
    labelBrand.textContent = "Marca";

    var selectBrand = document.createElement("select");
    selectBrand.className = "form-select";
    selectBrand.setAttribute("aria-label", "Default select example");
    
    // Opciones para la marca
    var brands = ["Selecciona tu marca", "ACURA", "ALFA ROMEO", "AUDI", "BAIC", "BMW", "BUICK", "CADILLAC", "CHEVROLET", "CHRYSLER", "DODGE", "FAW", "FIAT", "FORD", "GMC"];
    
    // Crear opciones y agregarlas al select
    for (var i = 0; i < brands.length; i++) {
        var option = document.createElement("option");
        option.textContent = brands[i];
        selectBrand.appendChild(option);
    }
    
    selectBrand.value = brand
    // Agregar la etiqueta y el select al segundo div
    div2.appendChild(labelBrand);
    div2.appendChild(selectBrand);

    // Agregar el segundo div al formulario
    formulario.appendChild(div2);

    // Crear los siguientes divs y selects de manera similar
    // ...
        // Crear el tercer div
        var div3 = document.createElement("div");
        div3.className = "mb-3";
    
        // Crear la etiqueta y el select para la marca
        var labelModel = document.createElement("label");
        labelModel.setAttribute("for", "vehicleBrand");
        labelModel.className = "form-label fw-bold text-body-secondary";
        labelModel.textContent = "Modelo";
    
        var selectModel = document.createElement("select");
        selectModel.className = "form-select";
        selectModel.setAttribute("aria-label", "Default select example");
    
        // Opciones para la marca
        var models = ["Selecciona tu modelo", "X1", "X2", "X3", "X4"];
    
        // Crear opciones y agregarlas al select
        for (var i = 0; i < models.length; i++) {
            var option = document.createElement("option");
            option.textContent = models[i];
            selectModel.appendChild(option);
        }
        selectModel.value = model
        // Agregar la etiqueta y el select al segundo div
        div3.appendChild(labelModel);
        div3.appendChild(selectModel);
    
        // Agregar el tercer div al formulario
        formulario.appendChild(div3);

   // ...
        // Crear el tercer div
        var div4 = document.createElement("div");
        div4.className = "mb-3";
        
        // Crear la etiqueta y el select para la marca
        var labelVersion = document.createElement("label");
        labelVersion.setAttribute("for", "vehicleBrand");
        labelVersion.className = "form-label fw-bold text-body-secondary";
        labelVersion.textContent = "Versión";
    
        var selectVersion = document.createElement("select");
        selectVersion.className = "form-select";
        selectVersion.setAttribute("aria-label", "Default select example");
    
        // Opciones para la marca
        var models = ["Selecciona tu versión", "DYNAMIC", "RS3", "S LINE", "S3"];
      
        // Crear opciones y agregarlas al select
        for (var i = 0; i < models.length; i++) {
            var option = document.createElement("option");
            option.textContent = models[i];
            selectVersion.appendChild(option);
        }
        selectVersion.value = version
        // Agregar la etiqueta y el select al segundo div
        div4.appendChild(labelVersion);
        div4.appendChild(selectVersion);
    
        // Agregar el tercer div al formulario
        formulario.appendChild(div4);

        // Crear el tercer div para los botones
        var divBotones = document.createElement("div");
        divBotones.className = "container p-5 justify-content-between text-end";
        
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
        divBotones.appendChild(botonAnterior);
        divBotones.appendChild(botonSiguiente);

        // Agregar el tercer div al formulario
        formulario.appendChild(divBotones);

        // Fucniones de los botones

        botonAnterior.addEventListener('click', function (e) {
            // Guarda los valores que se hayan ingresado en el formulario
            formData = {
                ...formData,
                year: selectYear.value,
                brand: selectBrand.value,
                model: selectModel.value,
                version: selectVersion.value,
            }

            showMailForm(formData)
        });

        botonSiguiente.addEventListener('click', function (e) {
            // Guardar los valores ingresados en el formulario
            formData = {
                ...formData,
                year: selectYear.value,
                brand: selectBrand.value,
                model: selectModel.value,
                version: selectVersion.value,
            }
        });

        console.log(formData);

        // Tablas de seleccion



}