const dadosArmazenados = localStorage;

class Secretaria {
	constructor() {
		this.renderizarNomeFinanceiro();
		this.renderizarTurma();
		this.renderizarDisciplina();
		this.renderizarAluno1();
        this.renderizarAluno2();
        this.renderizarAluno3();
        this.renderizarAluno4();
        this.renderizarSobreAluno1();
        this.renderizarSobreAluno2();
        this.renderizarSobreAluno3();
        this.renderizarSobreAluno4();
        this.renderizarDisciplina1();
        this.renderizarDisciplina2();
        this.renderizarDisciplina3();
        this.renderizarDisciplina4();
		
	}

	getUsuarioLogado() {
		var params = (new URL(document.location)).searchParams;
		return params.get('usuarioLogado');

	}

	renderizarNomeFinanceiro() {
		$('#PessoaLogadaSec').html("Bem vindo(a) " + this.getUsuarioLogado());
	}

	// ---nome aluno----------------------------------------------------------------------------------------------

	renderizarAluno1() {
		$('#secAluno, #secAlunos').html(JSON.parse(localStorage.getItem('pessoas')).alunos[0].nome);
	}
	renderizarAluno2() {
		$('#secAluno1, #secAlunos1').html(JSON.parse(localStorage.getItem('pessoas')).alunos[1].nome);
	}
    renderizarAluno3() {
		$('#secAluno2, #secAlunos2').html(JSON.parse(localStorage.getItem('pessoas')).alunos[2].nome);
	}
    renderizarAluno4() {
		$('#secAluno3, #secAlunos3').html(JSON.parse(localStorage.getItem('pessoas')).alunos[3].nome);
	}
    // ---sobrenome aluno----------------------------------------------------------------------------------------------
    renderizarSobreAluno1() {
		$('#sobreAlunos, #sobreAluno').html(JSON.parse(localStorage.getItem('pessoas')).alunos[0].sobrenome);
	}
    renderizarSobreAluno2() {
		$('#sobreAlunos1, #sobreAluno1').html(JSON.parse(localStorage.getItem('pessoas')).alunos[1].sobrenome);
	}
    renderizarSobreAluno3() {
		$('#sobreAlunos2, #sobreAluno2').html(JSON.parse(localStorage.getItem('pessoas')).alunos[2].sobrenome);
	}
    renderizarSobreAluno4() {
		$('#sobreAlunos3, #sobreAluno3').html(JSON.parse(localStorage.getItem('pessoas')).alunos[3].sobrenome);
	}
    // ---materias aluno----------------------------------------------------------------------------------------------
    renderizarDisciplina1() {
		$('#Disciplinas').html(JSON.parse(localStorage.getItem('pessoas')).alunos[0].diciplina.join(", "));
	}
    renderizarDisciplina2() {
		$('#Disciplinas1').html(JSON.parse(localStorage.getItem('pessoas')).alunos[1].diciplina.join(", "));
	}
    renderizarDisciplina3() {
		$('#Disciplinas2').html(JSON.parse(localStorage.getItem('pessoas')).alunos[2].diciplina.join(", "));
	}
    renderizarDisciplina4() {
		$('#Disciplinas3').html(JSON.parse(localStorage.getItem('pessoas')).alunos[3].diciplina.join(", "));
	}

    
	
	renderizarTurma() {
		var turmas = JSON.parse(localStorage.getItem('turma'))['Turmas'];
		jQuery.map(Object.keys(turmas), function (turma) {

			$('#turma, #turma2').append(`<option value="${turma}">${turma}</option>`);
		});
	}


	renderizarDisciplina() {
		var disciplinas = JSON.parse(localStorage.getItem('pessoas')).alunos[0].diciplina
		$.map((disciplinas), function (disciplina) {

			$('#disciplina, #disciplina2').append(`<option value="${disciplina}">${disciplina}</option>`);
		});
	}


	registrarEventos() {
		var that = this;
		$('#disciplinas').on('change', function () {
			var disciplinas = $('#disciplinas, #disciplina2').val();
			var turma = $('#turmas, #turma2').val();
		})

	}

}
secretaria = new Secretaria();
