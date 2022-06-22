const dadosArmazenados = localStorage;

class Aluno {
	constructor() {
		this.renderizarPessoa();
		this.renderizarNomeAluno();
		this.renderizarMateria1();
        this.renderizarMateria02();
        this.renderizarMateria03();
        this.renderizarMateria04();
        this.renderizarMateria05();
	}

	getUsuarioLogado() {
		var params = (new URL(document.location)).searchParams;
		return params.get('usuarioLogado');

	}

	renderizarPessoa() {
		$('#PessoaLogadatitulo').html("Bem vindo(a)  " + this.getUsuarioLogado());
	}

	// ---info----------------------------------------------------------------------------------------------

	renderizarNomeAluno() {
		$('#nomeAluno').html(JSON.parse(localStorage.getItem('pessoas')).alunos[0].nome);
	}
	
    renderizarMateria1(){
        $('#Materia1, #matGrade01').html(JSON.parse(localStorage.getItem('pessoas')).alunos[0].diciplina[0]);
    }

    renderizarMateria02(){
        $('#Materia02, #matGrade02').html(JSON.parse(localStorage.getItem('pessoas')).alunos[1].diciplina[1]);
    }

    renderizarMateria03(){
        $('#Materia03, #matGrade03').html(JSON.parse(localStorage.getItem('pessoas')).alunos[2].diciplina[2]);
    }

    renderizarMateria04(){
        $('#Materia04, #matGrade04').html(JSON.parse(localStorage.getItem('pessoas')).alunos[3].diciplina[3]);
    }

    renderizarMateria05(){
        $('#Materia05, #matGrade05').html(JSON.parse(localStorage.getItem('pessoas')).alunos[4].diciplina[4]);
    }

        

}
aluno = new Aluno();


// ----------------calendario----------------
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
//-------------Fim calendario----------------