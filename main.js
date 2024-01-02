const formulario = document.getElementById('formulario');
const mensagemDiv = document.getElementById('mensagem');


formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = parseFloat(document.getElementById('numeroA').value);
    const numeroB = parseFloat(document.getElementById('numeroB').value);

    if (numeroB > numeroA) {
       /*const mensagem = `O Número B: ${numeroB} é maior que o Número A: ${numeroA}.`;  (Desabilitei porque achei que ficou um pouco confuso para o usuário.)*/
        mensagemDiv.textContent = mensagem;
        mensagemDiv.textContent = ' Número B é maior que número A.';                     //Optei por utilizar esse que fica mais claro o entendimento.)
        mensagemDiv.style.color = 'green';

        
    } else {
        /*const mensagem = `O Número A: ${numeroA} Número B deve ser maior que número A: ${numeroB}.`; (Desabilitei porque achei que ficou um pouco confuso para o usuário.)*/
        mensagemDiv.textContent = mensagem;
        mensagemDiv.textContent = ' Número B deve ser maior que número A.';     //Optei por utilizar esse que fica mais claro o entendimento.)
        mensagemDiv.style.color = 'red';
    }
});
