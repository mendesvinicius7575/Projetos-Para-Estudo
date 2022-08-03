

function verificarPessoa(){

    var nome = window.document.getElementById('nomepessoa');
    var nomef = String(nome.value);

    var mostrar = window.document.getElementById('nota');

    var vel = window.document.getElementById('velmulta');
    var velf = Number(vel.value);

    var model = window.document.getElementById('modelocarro');
    var modelo = String(model.value);

    if(velf > 70){
        mostrar.innerHTML = `O(A) Senhor(a) ${nomef} levou multa de R$200 por estar na velocidade de ${velf}Km/h utilizando o carro de modelo ${modelo}`;
    }else{
        mostrar.innerHTML = `O(A) Senhor(a) ${nomef} não levou multa!`
    }
    
}

function verificarMulta(){

    var m = window.document.getElementById('modelocarro');
    var modelo = String(m.value);

    var vel = window.document.getElementById('velmulta');
    var velf = Number(vel.value);

    var mostrar = window.document.getElementById('nota');

    if(modelo === 'fusca' && velf > 100){
        mostrar.innerHTML = `Modelo Fusca está acima de 100Km/h`
    }else{
        mostrar.innerHTML = `Não é um Fusca ou não esta acima de 100km/h `
    }
}