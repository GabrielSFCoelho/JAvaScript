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