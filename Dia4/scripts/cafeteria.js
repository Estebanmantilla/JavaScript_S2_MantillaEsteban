lstaIngredientes = []
listaCategorias = []
listaHamburguesas = []
listaChef = []




boleanito = true
while ( boleanito == true){
    let opcion1 = prompt (`Bienvenido a la cafeteria de CampusLands
    seleccione la opcion numerica que desee ver
    1. ingredientes
    2. categorias
    3. hamburguesas
    4. chefs
    5. salir`);
    if(opcion1 == "1"){
        let opcionIngredientes = prompt (`Que opcion desea tomar con los ingredientes
        1. añadir ingrediente
        2. ver ingredientes
        3. actualizar ingrediente
        4. eliminar ingrediente`)
        if(opcionIngredientes == "1"){
            let nombre = prompt(`dame el nombre del ingrediente`);
            let descripcion = prompt (`descripcion del ingrediente`)
            let precio = prompt (`dame el valor`)
            let stock = prompt (`dame el stock del ingrediente`)
            let nuevalista = {
                "nombre": nombre,
                "descripcion": descripcion,
                "precio": precio,
                "stock": stock, 
            }
            let guardar = prompt (`presione s para guardar o c guardar`).toLowerCase
            if(guardar == "s"){
                lstaIngredientes.push(nuevalista)
                alert(`ingrediente guardado`);
            }
            else if (guardar == "c"){
                alert(`no se guardo el ingrediente`);

            }
        }
        if(opcionIngredientes == "2"){
            alert(lstaIngredientes);
        }
    }
    if(opcion1 == "2"){
        let opcionCategorias = prompt (`Que opcion desea tomar con las categorias
        1. añadir categoria
        2. ver categoria
        3. actualizar categoria
        4. eliminar categoria`)
    }
    if(opcion1 == "3"){
        let opcionHamburguesas = prompt (`Que opcion desea tomar con las hamburguesas
        1. añadir hamburguesa
        2. ver hamburguesa
        3. actualizar hamburguesa
        4. eliminar hamburguesa`)
    }
    if(opcion1 == "4"){
        let opcionChef = prompt (`Que opcion desea tomar con los chefs
        1. añadir chef
        2. ver chefs
        3. actualizar chef
        4. eliminar chef`)
    }
    if(opcion1 == "5"){
        boleaito = false
    }

}

