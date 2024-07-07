    function tocaSom(seletorAudio){
    const elemento = document.querySelector (seletorAudio);
    
if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
}
else {
 // alert('Elemento não encontrado')
 console.log('Elemento não encontrado ou seletor invalido');
}
}
    const listaDeTeclas = document.querySelectorAll('.tecla');
//while = enquanto  length = comprimento   contador++ = a mesma coisa que contador + 1.
    for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio)
    tecla.onclick = function (){ 
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){ //tecla pressionada
        //console.log(evento.code == 'Space' || evento.code === 'Enter') //pra ver console
        if (evento.code === 'Space'|| evento.code === 'Enter' )
        tecla.classList.add('ativa');

}
    tecla.onkeyup = function(){ //soltou a tecla
        tecla.classList.remove('ativa');
    }
    //contador = contador + 1; //contador é igual contador + 1 pois se não adicionar o +1 o variavel contador ira começar em 0 assim ocasionando um erro.
   //console.log(contador) //mostra o processo no console do navegador.
}
