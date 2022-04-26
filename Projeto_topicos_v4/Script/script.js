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

function MostrarChat(chat) 
{

    var display = document.getElementById(chat).style.display;

    if (display == "none") 
    {
        document.getElementById(chat).style.display = 'block';
    }

    else
    {
        document.getElementById(chat).style.display = 'none';
    }
}

function Login()
{

    vai=true;
    if(document.login_form.txtUsuario.value=='')
    {
        alert("Favor colocar o Usuário !");
        document.login_form.txtUsuario.focus();
        vai=false;
        return;
    }
    if(document.login_form.txtSenha.value=='')
    {
        alert("Favor colocar a Senha !");
        document.login_form.txtSenha.focus();
        vai=false;
        return;
    }
    if(vai==true)
    {
        
        if(document.login_form.txtUsuario.value=='professor')
        {
            window.location.href = "Professor.html";
        }else if(document.login_form.txtUsuario.value=='aluno'){
            window.location.href = "Aluno.html";
        }else if(document.login_form.txtUsuario.value=='responsavel'){
            window.location.href = "Responsavel.html";
        }else if(document.login_form.txtUsuario.value=='secretaria'){
            window.location.href = "Secretaria.html";
        }else if(document.login_form.txtUsuario.value=='finanças'){
            window.location.href = "finanças.html";
        }
    }
}

function ExibirIframe(Chat) 
{

    var display = document.getElementById(Chat).style.display;

    if (display == "none") 
    {
        document.getElementById(Chat).style.display = 'block';
    }
    else
    {
        document.getElementById(Chat).style.display = 'none';
    }
}

function ExibirIframeNota(Nota) 
{

    var display = document.getElementById(Nota).style.display;

    if (display == "none") 
    {
        document.getElementById(Nota).style.display = 'block';
    }
    else
    {
        document.getElementById(Nota).style.display = 'none';
    }
}

function ExibirIframeAula(Aula) 
{

    var display = document.getElementById(Aula).style.display;

    if (display == "none") 
    {
        document.getElementById(Aula).style.display = 'block';
    }
    else
    {
        document.getElementById(Aula).style.display = 'none';
    }
}

function ExibirIframeGrade(Grade) 
{

    var display = document.getElementById(Grade).style.display;

    if (display == "none") 
    {
        document.getElementById(Grade).style.display = 'block';
    }
    else
    {
        document.getElementById(Grade).style.display = 'none';
    }
}

function ExibirIframeFinanceiro(Financeiro) 
{

    var display = document.getElementById(Financeiro).style.display;

    if (display == "none") 
    {
        document.getElementById(Financeiro).style.display = 'block';
    }
    else
    {
        document.getElementById(Financeiro).style.display = 'none';
    }
}

function ExibirIframeMaterias(Materias) 
{

    var display = document.getElementById(Materias).style.display;

    if (display == "none") 
    {
        document.getElementById(Materias).style.display = 'block';
    }
    else
    {
        document.getElementById(Materias).style.display = 'none';
    }
}

function ExibirIframeRelatorio(Relatorio) 
{

    var display = document.getElementById(Relatorio).style.display;

    if (display == "none") 
    {
        document.getElementById(Relatorio).style.display = 'block';
    }
    else
    {
        document.getElementById(Relatorio).style.display = 'none';
    }
}

function ExibirIframeRematricula(Rematricula) 
{

    var display = document.getElementById(Rematricula).style.display;

    if (display == "none") 
    {
        document.getElementById(Rematricula).style.display = 'block';
    }
    else
    {
        document.getElementById(Rematricula).style.display = 'none';
    }
}

function MostrarNota1(Nota1) 
{

    var display = document.getElementById(Nota1).style.display;

    if (display == "none") 
    {
        document.getElementById(Nota1).style.display = 'block';
    }
        
    else
    {
        document.getElementById(Nota1).style.display = 'none';
    }
}

function MostrarNota2(Nota2) 
{

    var display = document.getElementById(Nota2).style.display;

    if (display == "none") 
    {
        document.getElementById(Nota2).style.display = 'block';
    }

    else
    {
        document.getElementById(Nota2).style.display = 'none';
    }
}

function MostrarNota3(Nota3) 
{

    var display = document.getElementById(Nota3).style.display;

    if (display == "none") 
    {
        document.getElementById(Nota3).style.display = 'block';
    }

    else
    {
        document.getElementById(Nota3).style.display = 'none';
    }
}

function MostrarNota4(Nota4) 
{

    var display = document.getElementById(Nota4).style.display;

    if (display == "none") 
    {
        document.getElementById(Nota4).style.display = 'block';
    }

    else
    {
        document.getElementById(Nota4).style.display = 'none';
    }
}

function MostrarMatricula(matricula) 
{

    var display = document.getElementById(matricula).style.display;

    if (display == "none") 
    {
        document.getElementById(matricula).style.display = 'block';
    }

    else
    {
        document.getElementById(matricula).style.display = 'none';
    }
}

function MostrarExtras(extras) 
{

    var display = document.getElementById(extras).style.display;

    if (display == "none") 
    {
        document.getElementById(extras).style.display = 'block';
    }

    else
    {
        document.getElementById(extras).style.display = 'none';
    }
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
