document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#form').addEventListener('submit', function(e) {
        e.preventDefault()
        let nomeInput = document.querySelector('#nome');
        nome = nomeInput.value;
        let mensagem = "Seja bem vindo ao Grunt!"
        let imprimir = (`Olá ${nome} ${mensagem}`);
        console.log(imprimir)

        document.querySelector('.mensagem').innerText = imprimir;
        document.querySelector('.mensagem').style.display = 'block'; 
        nomeInput.value = ""
        
        
    })
})
