function buscarID(){
    const idIngresado = prompt("Ingrese ID");
    const xhr = new XMLHttpRequest();
    const url = `https://swapi.py4e.com/api/people/?page=${idIngresado}`;
    xhr.open ("GET", url, true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            try{
                const daticos = JSON.parse(xhr.responseText);
                alert("Datos" + daticos.results[0].name);
                console.log(daticos)
            }
            catch (err){
                console.log(err.message);
            }
        }

    };
    xhr.send();
}

buscarID();