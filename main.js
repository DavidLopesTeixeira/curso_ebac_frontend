$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();   // pega o valor do campo de entrada

        const novoItem = $('<li></li>').text(novaTarefa); // cria um novo elemento <li>
        $('#nova-tarefa').val(''); // limpa valor do  campo 
        $('ul').append(novoItem); // adiciona o novo item na lista
    });

    $('ul').on('click', 'li', function () {
        $(this).toggleClass('riscado');    // muda a classe de riscado no item clicado
    });
});
