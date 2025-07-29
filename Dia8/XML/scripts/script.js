// consumo API
// mediante xml

// modularizar el consumo de la api
function buscarPersona(){
    // const nombre = prompt("ingresar el nombre del personaje")
    const xhr = new XMLHttpRequest();// importacion de xml
    const nombreUsar = prompt("Ingrese el nombre a usar");
    const url = `https://rickandmortyapi.com/api/character?name=${nombreUsar}`;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function (){
       if (xhr.readyState === 4 && xhr.status === 200){
        try{
            const daticos = JSON.parse(xhr.responseText);
            alert( "the character is: name:"+daticos["results"][0]["name"]+ "Status:"+daticos["results"][0]["status"]);
        }
        catch(err){
            console.log(err.message);
        }
       }
    };
    xhr.send();
}

buscarPersona();
