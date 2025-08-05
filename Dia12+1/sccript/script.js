function buscarpersonaje(){
    const token = "0f0937122941f18daac456bca195d0f3";
    let imagen = document.getElementById("imgheroe")
    let nombre = document.getElementById("nombresito")


    const personaje = document.getElementById("nombre").value.trim();
    const xhr = new XMLHttpRequest();
    const url = `https://superheroapi.com/api.php/${token}/search/${personaje}`

    xhr.open("GET", url, true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
           try{
             const daticos = JSON.parse(xhr.responseText);
             console.log (daticos)
             for(let i = 0; i < daticos.results.length; i++){

                let resultados = document.getElementById("resultado")
                resultados.innerHTML = `
                <div class="card">
                <img src="${daticos["results"][i]["image"]["url"]}" alt="">
                <h3>${daticos["results"][i]["name"]}    </h3>
            </div>
                
                `
               
             }
             
           }
           catch(err){
            console.log(err.message)
           }
        };
    };
    xhr.send()

}