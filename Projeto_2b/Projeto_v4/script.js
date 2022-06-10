var nome1 = "Violet"
var nome2 = "Emanuel"
function Login() {

    vai = true;
    if (document.login_form.txtUsuario.value == '') {
        alert("Favor colocar o Usuário !");
        document.login_form.txtUsuario.focus();
        vai = false;
        return;
    }
    if (document.login_form.txtSenha.value == '') {
        alert("Favor colocar a Senha !");
        document.login_form.txtSenha.focus();
        vai = false;
        return;
    }
    if (vai == true) {
        // professor
        if (document.login_form.txtUsuario.value == 'Violet') {
            window.location.href = "professor/professor.html";
            export var nome1 = "Violet";

        } else if (document.login_form.txtUsuario.value == 'Emanuel') {
            window.location.href = "professor/professor.html";
            const nome2 = "Emanuel";
            
        }
        // ---------------------------------------------------------------------------
        // aluno
        else if (document.login_form.txtUsuario.value == 'aluno') {
            window.location.href = "aluno/aluno.html";
        }
        // ---------------------------------------------------------------------------
        // responsavel
        else if (document.login_form.txtUsuario.value == 'responsavel') {
            window.location.href = "responsavel/responsavel.html";
        }
        // ---------------------------------------------------------------------------
        // secretaria
        else if (document.login_form.txtUsuario.value == 'secretaria') {
            window.location.href = "secretaria/secretaria.html";
        }
        // ---------------------------------------------------------------------------
        // finanças
        else if (document.login_form.txtUsuario.value == 'finanças') {
            window.location.href = "financas/financas.html";
        }
    }
}