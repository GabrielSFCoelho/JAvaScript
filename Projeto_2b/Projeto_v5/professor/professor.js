const dadosArmazenados = localStorage;

class Professor {
	constructor() {
		this.renderizarDisciplinas();
		this.renderizarTurmas();
		this.registrarEventos();
	}

	getUsuarioLogado() {
		var params = (new URL(document.location)).searchParams;
		return params.get('usuarioLogado');

	}

	renderizarDisciplinas() {
		var disciplinas = this.getDisciplinasDoProfessorLogado();
		$.map(disciplinas, function (disciplina) {
			$('#selectMaterias').append(`<option value="${disciplina}">${disciplina}</option>`);
		});
	}

	getDisciplinasDoProfessorLogado() {
		var pessoaLogada = this.getUsuarioLogado();
		var pessoas = JSON.parse((dadosArmazenados.getItem('pessoas')));
		var disciplinas = pessoas['professores'].filter(professor => professor.nome == pessoaLogada)[0].diciplinas;
		return disciplinas;
	}

	renderizarTurmas() {
		var turmas = JSON.parse(localStorage.getItem('turma'))['Turmas'];
		$.map(Object.keys(turmas), function (turma) {
			$('#turmas').append(`<option value="${turma}">${turma}</option>`);
		});
	}

	obterAlunosPorDisciplinaETurma(disciplina, turma) {
		var alunosFiltrados = JSON.parse(dadosArmazenados.getItem('pessoas'))['alunos'];
		if (disciplina) {
			alunosFiltrados = alunosFiltrados.filter(aluno => aluno.diciplina.includes(disciplina));
		}

		if (turma) {
			var alunosDaTurma = JSON.parse(dadosArmazenados.getItem('turma'))['Turmas'][turma]['Nome'];
			alunosFiltrados = alunosFiltrados.filter(aluno => alunosDaTurma.includes(aluno.nome + ' ' + aluno.sobrenome));
		}

		return alunosFiltrados;
	}

	renderizarListaDeAlunos(alunos) {
		var that = this;
		$('#tbody').html('');
		$('#tbody').append(
			$.map(alunos, function (aluno) {
				return $('<tr>').append(
					$('<td>').text(aluno.nome + ' ' + aluno.sobrenome),
					$('<td>').text(that.obterFaltasDoAluno(aluno)),
					$('<td>').text(that.obterNotas(aluno)['A1']),
					$('<td>').text(that.obterNotas(aluno)['A2']),
					$('<td>').text(that.obterNotas(aluno)['media'])
				)
			})
		)
	}

	obterFaltasDoAluno(aluno) {
		var qtdFaltas = 0;
		var todasFaltas = JSON.parse(dadosArmazenados.getItem('faltas'))['NotasAluno'];
		var faltasDoAluno = todasFaltas.filter(falta => falta.nome == aluno.nome && falta.sobrenome == aluno.sobrenome)[0]['disciplina'][0];

		var disciplina = $('#selectMaterias').val();
		if (disciplina) {
			var faltasDisciplina = Object.keys(faltasDoAluno).filter(falta => falta == disciplina);
			qtdFaltas = faltasDoAluno[faltasDisciplina[0]][0]['faltas'];
		} else {
			for (let falta of Object.keys(faltasDoAluno)) {
				if (this.getDisciplinasDoProfessorLogado().includes(falta)) {
					qtdFaltas += faltasDoAluno[falta][0]['faltas'];
				}
			}
		}
		return qtdFaltas;
	}

	obterNotas(aluno) {
		return JSON.parse(dadosArmazenados.getItem('notas'))[aluno.nome + ' ' + aluno.sobrenome];
	}

	registrarEventos() {
		var that = this;
		$('select').on('change', function () {
			var disciplina = $('#selectMaterias').val();
			var turma = $('#turmas').val();
			var alunos = that.obterAlunosPorDisciplinaETurma(disciplina, turma);
			that.renderizarListaDeAlunos(alunos);
		})
	}
}

var professor = new Professor();
professor.renderizarListaDeAlunos(
	professor.obterAlunosPorDisciplinaETurma(null, null)
);


document.getElementById('aqui').innerHTML = "Ola, " + 'usuarioLogado' + ", seja bem vindo!"





// ------------------relatorio--------------------------
var capturando = "";
function capturar() {
	capturando = document.getElementById('valor').value;
	document.getElementById('valorDigitado').innerHTML = capturando;
}
var capturando = "";
function capturarum() {
	capturando = document.getElementById('valor1').value;
	document.getElementById('valorDigitado1').innerHTML = capturando;
}
var capturando = "";
function capturardois() {
	capturando = document.getElementById('valor2').value;
	document.getElementById('valorDigitado2').innerHTML = capturando;
}

// ---------------------calendario---------------------------
const date = new Date();

const renderCalendar = () => {
	date.setDate(1);

	const monthDays = document.querySelector(".days");

	const lastDay = new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0
	).getDate();

	const prevLastDay = new Date(
		date.getFullYear(),
		date.getMonth(),
		0
	).getDate();

	const firstDayIndex = date.getDay();

	const lastDayIndex = new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0
	).getDay();

	const nextDays = 7 - lastDayIndex - 1;

	const months = [
		"Janeiro",
		"Fevereiro",
		"Março",
		"Abril",
		"Maio",
		"Junho",
		"Julho",
		"Agosto",
		"Setembro",
		"Outrubro",
		"Novembro",
		"Dezembro",
	];

	document.querySelector(".date h1").innerHTML = months[date.getMonth()];

	document.querySelector(".date p").innerHTML = new Date().toDateString();

	let days = "";

	for (let x = firstDayIndex; x > 0; x--) {
		days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
	}

	for (let i = 1; i <= lastDay; i++) {
		if (
			i === new Date().getDate() &&
			date.getMonth() === new Date().getMonth()
		) {
			days += `<div class="today">${i}</div>`;
		} else {
			days += `<div>${i}</div>`;
		}
	}

	for (let j = 1; j <= nextDays; j++) {
		days += `<div class="next-date">${j}</div>`;
		monthDays.innerHTML = days;
	}
};

document.querySelector(".prev").addEventListener("click", () => {
	date.setMonth(date.getMonth() - 1);
	renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
	date.setMonth(date.getMonth() + 1);
	renderCalendar();
});

renderCalendar();
//----------------------- FIM CALENDARIO------------------------------