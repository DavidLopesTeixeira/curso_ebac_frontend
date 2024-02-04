// Classe de astração
function Animal(nome, patas, comida) {
    this.nome = nome;
    this.patas = patas;
    this.comida = comida;
}

//Classes herdeiras
function Cachorro(nome, patas, comida, raca) {
    Animal.call(this, nome, patas, comida);
    this.raca = raca;
    this.latir = function () {
        if (this.nome === "Caramelo") {
            console.log(
                `O ${this.nome} da raça ${this.raca} Late: Au auuuu vou pegar você`
            );
        } else {
            console.log(`O ${this.nome} da raça ${this.raca} Late: Au auuuu!`);
        }
    };
}

function Gato(nome, patas, comida, raca, cor) {
    Animal.call(this, nome, patas, comida);
    this.raca = raca;
    this.cor = cor;
    this.miar = function () {
        console.log(
            `O ${this.nome} da ${this.raca} com cor ${this.cor} Mia: Miau  miau`
        );
    };
}

// instancias
const rex = new Cachorro("Rex", 4, "ração", "Husky");
const caramelo = new Cachorro("Caramelo", 4, "Odeia ração", "Vira-latas");
const frajola = new Gato("Frajola", 4, "Peixe", "Vira-latas", "Branco e preto");

console.log(rex);
rex.latir();

console.log(frajola);
frajola.miar();

console.log(caramelo);
caramelo.latir();

/*Olá boa tarde só fiquei com uma duvida, as propriedades latir e miar
retorna [Function (anonymous)] no console é comum isso ocorrer ?
*/
