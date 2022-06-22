// -----------------------JSON --------------------------
const dadosArmazenados = localStorage;

class Responsavel 
{
	constructor() 
    {
        this.renderizarResponsavelLogado();
        this.renderizarNomedoFilho();
		this.renderizarAula1();
        this.renderizarAula2();
        this.renderizarAula3();
        this.renderizarAula4();
        this.renderizarMateriaEx();
        this.renderizarMateriaEx2();
	}

	getUsuarioLogado()  
    {
		var params = (new URL(document.location)).searchParams;
		return params.get('usuarioLogado');
	}

	renderizarResponsavelLogado() 
    {
		$('#tituloLogado').html("Bem vindo(a)" + this.getUsuarioLogado());
	}

	// ---info----------------------------------------------------------------------------------------------

    renderizarNomedoFilho()
    {
        $('#nomedoFilho').html(JSON.parse(localStorage.getItem('pessoas')).alunos[2].nome);
    }

    renderizarAula1()
    {
        $('#aula1, #materiaSeg, #RemMat1').html(JSON.parse(localStorage.getItem('pessoas')).alunos[2].diciplina[0]);
    }

    renderizarAula2()
    {
        $('#aula2, #materiaTer, #RemMat2').html(JSON.parse(localStorage.getItem('pessoas')).alunos[2].diciplina[1]);
    }

    renderizarAula3()
    {
        $('#aula3, #materiaQua, #RemMat3').html(JSON.parse(localStorage.getItem('pessoas')).alunos[2].diciplina[2]);
    }

    renderizarAula4()
    {
        $('#aula4, #materiaQui, #RemMat4').html(JSON.parse(localStorage.getItem('pessoas')).alunos[2].diciplina[3]);
    }

    renderizarMateriaEx()
    {
        $('#materiaex1, #materiaSex, #RemMatEx1').html(JSON.parse(localStorage.getItem('pessoas')).alunos[0].DiciplinaEx[0]);
    }

    renderizarMateriaEx2()
    {
        $('#RemMatEx2').html(JSON.parse(localStorage.getItem('pessoas')).alunos[0].DiciplinaEx[1]);
    }
}

responsavel = new Responsavel();








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