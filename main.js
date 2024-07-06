function tocaSom(idElementoAudio){
    document.querySelector (idElementoAudio).play()
}
const listaDeTeclas = document.querySelectorAll('.tecla');
//while = enquanto  length = comprimento   contador++ = a mesma coisa que contador + 1.
for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio)
    tecla.onclick = function (){ 
        tocaSom(idAudio);
    }
    //contador = contador + 1; //contador é igual contador + 1 pois se não adicionar o +1 o variavel contador ira começar em 0 assim ocasionando um erro.
   //console.log(contador) //mostra o processo no console do navegador.
}
