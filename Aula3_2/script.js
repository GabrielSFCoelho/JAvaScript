function mostrarnumero() {
    let para = document.createElement('p');
    para.textContent =  '1,2,3,4,5,6,7,8,9,10';
    document.body.appendChild(para);
}
const botoes = document.querySelectorAll('button');
for(var i = 1; i < botoes.length ; i++) {
    botoes [i].addEventListener('click', mostrarnumero);
}


function mostrartexto() {
    let para = document.createElement('p');
    para.textContent = 'texto';
    document.body.appendChild(para);
}
const botoes = document.querySelectorAll('button');
for(var i = 1; i < botoes.length ; i++) {
    botoes [i].addEventListener('click', mostrartexto);
}