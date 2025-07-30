function buscarID(){
    const idIngresado = prompt("Ingrese ID");
    const xhr = new XMLHttpRequest();
    const url = `https://swapi.py4e.com/api/people/${idIngresado}/`;
    xhr.open ("GET", url, true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            try{
                const daticos = JSON.parse(xhr.responseText);
                let mensaje = "Nombre: \n\n";
                for (let valorid in daticos){
                    if (Array.isArray(daticos[valorid])){
                        mensaje += `${valorid}:\n`;
                        daticos[valorid].forEach((valorArray,i)=> {
                    mensaje += `-${valorArray}\n`;
                });
                    }else{
                        mensaje += `${valorid}: ${daticos[valorid]}\n`;
                    }
                }
                alert(mensaje);
                
            }
            catch (err){
                console.log(err.message);
            }
        }

    };
    xhr.send();
}

buscarID();