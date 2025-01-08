const dado = document.querySelector('.dado');
const botonLanzar = document.querySelector('.lanzar');

const dadoAleatorio = () =>{

    const aleatorio = Math.floor(Math.random() * 10);

    if(aleatorio >= 1 && aleatorio <= 6){
        dadoLanzado(aleatorio)
    }else{
        dadoAleatorio();
    }
}

const dadoLanzado = (aleatorio) => {
    dado.style.animation = 'none';

    // Forzar el reinicio re-renderizando el elemento
    void dado.offsetWidth;

    dado.style.animation = 'rolling 3s';

    setTimeout(() => {
        switch (aleatorio) {
            case 1:
                dado.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;
            case 6:
                dado.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;
            case 2:
                dado.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;
            case 5:
                dado.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
            case 3:
                dado.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;
            case 4:
                dado.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;
            default:
                break;
        }

        dado.style.animation = 'none';
    }, 3000);
};




botonLanzar.addEventListener('click', dadoAleatorio);