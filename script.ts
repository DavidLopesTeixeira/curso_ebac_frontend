// função multiplicação  n1 tipo numero, n2 tipo numero, retorno tipo numero
// A função irá retornar a multiplicação de dois numeros
function multiplicacao(n1: number, n2:number):number {
    return n1 * n2;
};


// função saudação nome tipo string, retorno tipo string
//A função irá retornar a saudação concatenada com o nome
function saudacao(nome: string):string {
    return `Olá ${nome}`;
};


console.log(multiplicacao(12, 5));
console.log(saudacao("David"));