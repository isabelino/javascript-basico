const promesa = new Promise((resolve,reject) =>{
    
    setTimeout(()=>{
        const exito = true;

        if(exito){
            resolve();
        }else{
            reject();
        }

    },3000);

});

promesa.then(()=>{
    alert('Funciono');
});

promesa.catch(()=>{
    alert('No funciono');
});