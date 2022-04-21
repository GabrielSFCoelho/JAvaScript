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
        }
    }
}
function ExibirIframe(Iframe) 
{

    var display = document.getElementById(Iframe).style.display;

    if (display == "none") 
    {
        document.getElementById(Iframe).style.display = 'block';
    }
    else
    {
        document.getElementById(Iframe).style.display = 'none';
    }
}