
class Aluno {
    constructor() {
        this.id = 1;
        this.arrayAluno = [];

    }
    salvar() {
        let aluno = this.lerDados();

        if (this.validarCampo(aluno)) {
            this.adicionar(aluno);
        }

        this.listaTabela();
        this.cancelar();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        for (let i = 0; i < this.arrayAluno.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_faltas = tr.insertCell();
            let td_a1 = tr.insertCell();
            let td_a2 = tr.insertCell();
            let td_media = tr.insertCell();
            let td_acao = tr.insertCell();

            td_id.innerText = this.arrayAluno[i].id;
            td_nome.innerText = this.arrayAluno[i].nomeAluno;
            td_faltas.innerText = this.arrayAluno[i].faltas;
            td_a1.innerText = this.arrayAluno[i].a1;
            td_a2.innerText = this.arrayAluno[i].a2;
            td_media.innerText = this.arrayAluno[i].media;

            let imgEdit = document.createElement('img');
            imgEdit.src = '../img/edit.png';

            let imgDelet = document.createElement('img');
            imgDelet.src = '../img/delete.png';

            imgDelet.setAttribute("onclick", "aluno.deletar(" + this.arrayAluno[i].id + ")");

            td_acao.appendChild(imgEdit);
            td_acao.appendChild(imgDelet);
        }
    }

    adicionar(aluno) {
        this.arrayAluno.push(aluno);
        this.id++;
    }

    lerDados() {
        let aluno = {}

        aluno.id = this.id;
        aluno.nomeAluno = document.getElementById('nome').value;
        aluno.faltas = document.getElementById('faltas').value;
        aluno.a1 = document.getElementById('a1').value;
        aluno.a2 = document.getElementById('a2').value;
        aluno.media = document.getElementById('media').value;

        return aluno;
    }

    validarCampo(aluno) {
        let msg = '';

        if (aluno.nomeAluno == '') {
            msg += '- informe o nome do aluno \n';
        }
        if (aluno.faltas == '') {
            msg += '- informe o numero de faltas \n';
        }
        if (aluno.a1 == '') {
            msg += '- informe a nota a1 \n';
        }
        if (aluno.a2 == '') {
            msg += '- informe a nota a2 \n';
        }
        if (aluno.media == '') {
            msg += '- informe a media \n';
        }
        if (msg != '') {
            alert(msg);
            return false
        }
        return true;
    }
    cancelar() {
        document.getElementById('nome').value = '';
        document.getElementById('faltas').value = '';
        document.getElementById('a1').value = '';
        document.getElementById('a2').value = '';
        aluno.media = document.getElementById('media').value = '';

    }
    deletar(id) {
        var x;
        var r = confirm("Você deseja deletar um aluno?");
        if (r == true) {
            alert('Você ta deletando uma aluno')
            let tbody = document.getElementById('tbody');
            for (let i = 0; i < this.arrayAluno.length; i++) {
                if (this.arrayAluno[i].id == id) {
                    this.arrayAluno.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        } else {
            x = "Você cancelou";
        }
    }
}
var aluno = new Aluno();