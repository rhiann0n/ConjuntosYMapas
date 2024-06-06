window.onload = function () {
    /**
     * Operaciones con Conjuntos => Set
     * @type {Set<any>}
     */
    //buscar en un conjunto
    let conjunto = new Set().add(1).add(2).add(11);
    if (conjunto.has(11)){
        console.log("Encontrado");
    } else {
        console.log("No encontrado");
    }
    //eliminar un valor
        conjunto.delete(2);
    console.log(conjunto);
    //eliminar todos los valores
    conjunto.clear();
    console.log(conjunto);
    //convertir el conjunto en un array
    let array = [conjunto];
    console.log(array);
    //unir arrays en un conjunto
    let array1 = [1,2,3,4,5];
    let array2 = [6,7,8,9,10];
    let array3 = [1,11,9,12,7];
    let numeros = new Set(array1, array2, array3);
    //se agrega cada array recorriéndolo y agreando cada valor al conjunto
    //de esta manera se garantiza que no haya duplicados
    for (let i = 0; i < array1.length; i++) {
        numeros.add(array1[i]);
    }
    for (let i = 0; i < array2.length; i++) {
        numeros.add(array2[i]);
    }
    for (let i = 0; i < array3.length; i++) {
        numeros.add(array3[i]);
    }
    console.log(numeros);

    /**
     * Creación de la agenda con mapas
     */

    let agenda = new Map();
    let boton = document.querySelector(".boton");
    boton.addEventListener("click", function (){
        let nombre = document.querySelector("#nombre").value;
        let telefono = document.querySelector("#telefono").value;
        if (/^[a-zA-ZáéíóúÁÉÍÚñÑ\s]+$/.test(nombre.trim()) && telefono.match(/^\d{9}$/)){
            //como en los arrays agregar era push, en los conjuntos es add, y en los mapas
            //es set
            //let longitud = agenda.size;
            //agenda.set(nombre, telefono);
            //if (agenda.size==longitud+1){
            //    mostrarAgenda(nombre, telefono);
            //}
            //OTRA FORMA, MÁS EFECTIVA DE COMPOROBAR SI SE REALIZA LA INSERCIÓN EN EL MAP
            if (!agenda.has(nombre)){
                agenda.set(nombre, telefono);
                mostrarAgenda(nombre, telefono);
            }

        } else {
            document.querySelector(".error").textContent="¡Los datos de nombre y teléfono son obligatorios!";
        }
    })
}

function mostrarAgenda(nombre, telefono){
    let tabla = document.querySelector("#agenda");
        let fila = document.createElement("tr");
        //crea una fila en la tabla
        tabla.appendChild(fila);
        //diseña y crea la celda del nombre del contacto
        let celda1 = document.createElement("td");
        celda1.classList.add("celda");
        celda1.textContent = nombre;
        tabla.appendChild(celda1);
        //diseña y crea la celda del teléfono del contacto
        let celda2 = document.createElement("td");
        celda2.classList.add("celda");
        celda2.textContent = telefono;
        tabla.appendChild(celda2);
    document.querySelector("#nombre").value="";
    document.querySelector("#telefono").value="";
}