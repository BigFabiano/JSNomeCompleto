let nome = prompt('Digite seu nome: ');
let sbNome = prompt('Digite seu sobre nome: ');

function mostrarNavegador(){
    document.querySelector('#output').innerHTML = 'Nome Completo: ' + nome + ' ' + sbNome + '<br>'+'<br>' + 'Nome Catalago: ' + sbNome.toUpperCase() + ' ' + nome;
    
}

function mostrarAlert(){
    alert('Nome Completo: ' + nome + ' ' + sbNome);
    alert('Nome Catalago: ' + sbNome.toUpperCase() + ' ' + nome);
}
