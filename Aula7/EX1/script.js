function interacao() {
    var nome = prompt("Informe o nome do aluno:");

    var n1 = prompt("Me informe o valor da primeira nota :");

    var n2 = prompt("Me informe o valor da segunda nota :");

    window.alert('Você tirou ' + n1 + ' na primeira prova, e tirou ' + n2 + ' na segunda prova!'); 

    n1 = parseInt(n1);
    n2 = parseInt(n2);

    var soma= n1 + n2;

    window.alert('a soma é: ' + soma);

    var media = soma/2 ;
    
    window.alert('A média é: ' + media);
   
    if (media >= 6) 
        window.alert('você foi aprovado');
      else 
        window.alert('você não foi aprovado');
     
}
    