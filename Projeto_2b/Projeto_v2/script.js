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
            window.location.href = "professor/professor.html";
        }else if(document.login_form.txtUsuario.value=='aluno'){
            window.location.href = "aluno/aluno.html";
        }else if(document.login_form.txtUsuario.value=='responsavel'){
            window.location.href = "responsavel/responsavel.html";
        }else if(document.login_form.txtUsuario.value=='secretaria'){
            window.location.href = "secretaria/secretaria.html";
        }else if(document.login_form.txtUsuario.value=='finanças'){
            window.location.href = "financas/financas.html";
        }
    }
}