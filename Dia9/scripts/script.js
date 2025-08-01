  let idactual = 1;

 function buscarpokemon(idaa = null){
    const idpokemon = idaa || document.getElementById("buscador").value.trim().toLowerCase();
    const xhr = new XMLHttpRequest();
    const url = `https://pokeapi.co/api/v2/pokemon/${idpokemon}/`;
    xhr.open("GET", url , true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            try{
                const daticos = JSON.parse(xhr.responseText);
    
                let posicioncita = document.getElementById("posicion");
                let nombre = document.getElementById("nombrepoo");
                let img = document.getElementById("pokeii");

                posicioncita.innerHTML = daticos.id;
                nombre.innerHTML = daticos.name;
                img.src = daticos.sprites.front_default;
                idactual = daticos.id;

                console.log(daticos.id);
                    
                
            }
            catch(err){
               console.log(err.message);
            }
        }
       
    };
    xhr.send();

};
document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    buscarpokemon();
});

buscarpokemon(idactual);