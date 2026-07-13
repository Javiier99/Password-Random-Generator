

const buttom = document.querySelector(".buttom");
const password = document.querySelector(".contraseña");




buttom.addEventListener("click" , ()=>{


    numeroCaracteresContraseñas = (Math.floor(Math.random()*10)) + 30;
    let contador = 0
    let contraseña = ""
    while(numeroCaracteresContraseñas != contador){
        const letras = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const simbolos = "!·$%&/()=?¿'`[]}{{-^*Ç¨_";
        const numeroEscogido = Math.floor(Math.random() * 10);
        const letraEscogida = letras[Math.floor(Math.random() * letras.length)];
        const simbolosEscogidos = simbolos[Math.floor(Math.random() * simbolos.length)];

        // * Generar un numero switch aleatorio
        const listaNumero = [1,2,3]
        const numeroAleatorio = listaNumero[Math.floor(Math.random() * listaNumero.length)];

        // * Empezar a darle valor a la contraseña
        switch (numeroAleatorio){
            case 1:
                const letras = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                const letraEscogida = letras[Math.floor(Math.random() * letras.length)];
                contraseña += letraEscogida;
                break
            case 2: 
                const simbolos = "!·$%&/()=?¿'`[]}{{-^*Ç¨_";
                const simbolosEscogidos = simbolos[Math.floor(Math.random() * simbolos.length)];
                contraseña += simbolosEscogidos;
                break
            case 3: 
                const numeroEscogido = Math.floor(Math.random() * 10);
                contraseña += numeroEscogido;
                break
        }
        contador = contador + 1;
        
    };


    password.innerHTML = contraseña;


});


password.addEventListener("click", ()=>{

    const contraseña = password.innerHTML;
    navigator.clipboard.writeText(contraseña).then(()=>{
        password.innerHTML = `¡Cópiado!`;

        setTimeout(()=>{
            password.innerHTML = contraseña;
        },1500);
    });

});











