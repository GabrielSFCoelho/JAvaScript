const dadosArmazenados = localStorage;

class Financeiro {
	constructor() {
		this.renderizarNomeFinanceiro();
		this.renderizarTurmas();
		this.renderizarDisciplinas();
		this.renderizarAluno1();
		this.renderizarsobreNome1();
		this.renderizarMaterias1();
		this.renderizarAluno2();
		this.renderizarsobreNome2();
		this.renderizarMaterias2();
		this.renderizarAluno3();
		this.renderizarsobreNome3();
		this.renderizarMaterias3();
		this.renderizarAluno4();
		this.renderizarsobreNome4();
		this.renderizarMaterias4();
		// this.renderizarResponsavel();
	}

	getUsuarioLogado() {
		var params = (new URL(document.location)).searchParams;
		return params.get('usuarioLogado');

	}

	renderizarNomeFinanceiro() {
		$('#PessoaLogada').html("Bem vindo(a) " + this.getUsuarioLogado());
	}

	// ---aluno1----------------------------------------------------------------------------------------------

	renderizarAluno1() {
		$('#Aluno1').html(JSON.parse(localStorage.getItem('pessoas')).alunos[0].nome);
	}
	renderizarsobreNome1() {
		$('#SobreNome1').html(JSON.parse(localStorage.getItem('pessoas')).alunos[0].sobrenome);
	}
	renderizarMaterias1() {
		$('#Materia1').html(JSON.parse(localStorage.getItem('pessoas')).alunos[0].diciplina.join(", "));
	}

	// ---aluno2----------------------------------------------------------------------------------------------

	renderizarAluno2() {
		$('#Aluno2').html(JSON.parse(localStorage.getItem('pessoas')).alunos[1].nome);
	}
	renderizarsobreNome2() {
		$('#SobreNome2').html(JSON.parse(localStorage.getItem('pessoas')).alunos[1].sobrenome);
	}
	renderizarMaterias2() {
		$('#Materia2').html(JSON.parse(localStorage.getItem('pessoas')).alunos[1].diciplina.join(", "));
	}

	// ---aluno3----------------------------------------------------------------------------------------------

	renderizarAluno3() {
		$('#Aluno3').html(JSON.parse(localStorage.getItem('pessoas')).alunos[2].nome);
	}
	renderizarsobreNome3() {
		$('#SobreNome3').html(JSON.parse(localStorage.getItem('pessoas')).alunos[2].sobrenome);
	}
	renderizarMaterias3() {
		$('#Materia3').html(JSON.parse(localStorage.getItem('pessoas')).alunos[2].diciplina.join(", "));
	}

	// ---aluno4----------------------------------------------------------------------------------------------

	renderizarAluno4() {
		$('#Aluno4').html(JSON.parse(localStorage.getItem('pessoas')).alunos[3].nome);
	}
	renderizarsobreNome4() {
		$('#SobreNome4').html(JSON.parse(localStorage.getItem('pessoas')).alunos[3].sobrenome);
	}
	renderizarMaterias4() {
		$('#Materia4').html(JSON.parse(localStorage.getItem('pessoas')).alunos[3].diciplina.join(", "));
	}
	
	// -------------------------------------------------------------------------------------------------------
	renderizarTurmas() {
		var turmas = JSON.parse(localStorage.getItem('turma'))['Turmas'];
		jQuery.map(Object.keys(turmas), function (turma) {

			$('#turmas').append(`<option value="${turma}">${turma}</option>`);
		});
	}


	renderizarDisciplinas() {
		var disciplinas = JSON.parse(localStorage.getItem('pessoas')).alunos[0].diciplina
		$.map((disciplinas), function (disciplina) {

			$('#disciplinas').append(`<option value="${disciplina}">${disciplina}</option>`);
		});
	}

	// renderizarResponsavel() {
	// 	var turmas = JSON.parse(localStorage.getItem('Pessoas')).responsaveis.nome;
	// 	$.map(Object.keys(responsaveis), function (responsavel) {
	// 		// coloca no select a a turma do professor logado em todos os selects
	// 		$('#resp').append(`<option value="${responsavel}">${responsavel}</option>`);
	// 	});
	// }


	registrarEventos() {
		var that = this;
		$('#disciplinas').on('change', function () {
			var disciplinas = $('#disciplinas').val();
			var turma = $('#turmas').val();
		})

	}

}
financeiro = new Financeiro();
