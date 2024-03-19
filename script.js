document.getElementById('botao_formulario').addEventListener('click', function(event) { 
    var nome = document.getElementById('nome').value;
    var dataNasc = document.getElementById('dataNasc').value;
    var email = document.getElementById('email').value;
    var rg = document.getElementById('rg').value;
    var opcao = document.getElementById('opcao').value;

    if (!nome || !dataNasc || !email || !rg || !opcao) {
        console.log('Todos os campos são obrigatórios.');
        event.preventDefault();
        return;
    }

    var rgFormatado = /^(\d{2})(\d{3})(\d{3})-(\d{1})$/;

    if (!rgFormatado.test(rg)) {
        console.log('RG inválido. O formato deve ser xx.xxx.xxx-x');
        event.preventDefault();
        return;
    }

    var emailFormatado = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailFormatado.test(email)) {
        console.log('Email inválido. Por favor, insira um email válido.');
        event.preventDefault();
        return;
    }

    console.log(nome);
    console.log(dataNasc);
    console.log(email);
    console.log(rg);
    console.log(opcao);
});
