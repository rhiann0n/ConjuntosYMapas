window.onload = function (){
    /**
     * Los Conjuntos en JS no permiten duplicados; en caso de existir, los ignora.
     * @type {Set<string>}
     */
    let conjunto = new Set ( ["uno", "dos", "tres", "uno"]);
    let nombres = new Set ("Irene", "Florin", "Rubén", "Irina");
    //recorrido con for(item of array)
    for (numero of conjunto) {
        console.log(numero);
    }
    for (nombre of nombres){
        console.log(nombre);
    }
    /*
     * Vamos a hacer una Agenda Telefónica para practicar los conjuntos.
     */
    let boton = document.querySelector(".boton");
    let agenda = new Set();
    let tabla = document.querySelector("#agenda")
    boton.addEventListener("click", function (){
        let nombre = document.querySelector("#nombre").value;
        let telefono = document.querySelector("#telefono").value;
        if (/^[a-zA-ZáéíóúÁÉÍÚñÑ\s]+$/.test(nombre.trim()) && telefono.match(/^\d{9}$/)) { //validar que no esté vacío
            //agrega el elemento al conjunto
            agenda.add([nombre, telefono]);
            /console.log(agenda);
            //agrega ese contacto a la tabla
            let fila = document.createElement("tr");
            //crea una fila en la tabla
            tabla.appendChild(fila)
            //diseña y crea la celda de nombre del contacto
            let celda1 = document.createElement("td");
            celda1.classList.add("celda");
            celda1.textContent = nombre;
            tabla.appendChild(celda1);
            //diseña y crea la celda del teléfono del contacto
            let celda2 =document.createElement("td");
            celda2.classList.add("celda");
            celda2.textContent = telefono;
            tabla.appendChild(celda2);

        } else {
            document.querySelector(".error").textContent="¡Los datos de nombre y teléfono son obligatorios!"
        }
        document.querySelector("#nombre").value="";
        document.querySelector("#telefono").value="";

    })

}