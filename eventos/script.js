console.log("Ola mundo");

const botao = document.getElementById("botaoFalante");

botao.addEventListener('click', () => alert("fui clicado!!!"));
botao.addEventListener('mouseover', () => {
    alert ("assedio");
});

const divs = document.querySelectorAll("div");
divs.forEach((item, key) => {
    item.addEventListener("click", () => {
        alert("clique na div" + key);
    });
});

const qualBotao = (evt) => {
    alert(`voce clicou em "${evt.currentTarget.textContent}"`);
}

const botoes = document.querySelectorAll("button");
botoes.forEach(botao => {
    botao.addEventListener("click", qualBotao);
});