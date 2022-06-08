function MostrarMenu(menu) 
{

    var display = document.getElementById(menu).style.display;

    if (display == "none") 
    {
        document.getElementById(menu).style.display = 'block';
    }

    else
    {
        document.getElementById(menu).style.display = 'none';
    }
}
/*
    if(nome == "professor")
    {
        window.location.href = "Professor.html"
    }else if (nome == "aluno"){
        window.location.href = "Aluno.html"
    }else if(nome == "responsavel"){
        window.location.href = "Responsavel.html"
    }else if( nome =="secretaria"){
        window.location.href = "Secretaria.html"
    }
}
*/