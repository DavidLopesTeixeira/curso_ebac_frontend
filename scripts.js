// Criação da classe aluno
class Aluno {
    constructor(nomeAluno, notaAluno) {
        this.nome = nomeAluno;
        this.nota = notaAluno;
    }
}

// Guardar os alunos e respectivas notas em um array
const alunos = [
    new Aluno("Marcelo", 7),
    new Aluno("Bruna", 8),
    new Aluno("Alexandre", 5),
    new Aluno("Thiago", 6),
    new Aluno("Monoque", 10),
    new Aluno("Maikon", 2),
    new Aluno("Joana", 10),
];

// Função p checar alunos Aprovados
function checarAlunos(alunos) {
    const alunosAprovados = [];
    alunos.map((aluno) => {
        if (aluno.nota >= 6) {
            alunosAprovados.push(aluno);
        }
    });
    return alunosAprovados;
}

// Chamando a função checarAlunos com o array de alunos e exibindo o resultado
const exibeAlunosAprovados = checarAlunos(alunos);
console.log(checarAlunos(exibeAlunosAprovados));
