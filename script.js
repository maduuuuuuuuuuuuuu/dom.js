const removeErro = (evt) => {
    evt.currentTarget.classList.remove("invalido");
}

const processarForm = (evt) => {
    evt.preventDefault();

    const usuario = document.getElementById("usuario");
    const senha = document.getElementById("senha");
    const repetesenha = document.getElementById("repetesenha");
    const cidade = document.getElementById("cidade");
    const deacordo = document.getElementById("deacordo");

    if (usuario.value.trim().lenght === 0) {
        usuario.classList.add("invalido");
        usuario.focus();
        return;
    }

    if (senha.value.trim().lenght < 8) {
        senha.classList.add("invalido");
        senha.focus();
        return;
    }

    if (repetesenha.value !== senha.value) {
        repetesenha.classList.add("invalido");
        repetesenha.focus();
        return;
    }

    if (!deacordo.checked) {
        deacordo.classList.add("invalido");
        deacordo.focus();
        return;
    }

    const novoUsuario= {
        usuario: usuario.value.trim(),
        senha: senha.value,
        cidade: cidade.value,
    };

    console.log(novoUsuario);
};

const iniciar = () => {
    document.forms[0].addEventListener("submit", processarForm);

    document
    .querySelectorAll("input, select")
    .forEach((campo) => campo.addEventListener("input", removeErro));
};

document,addEventListener("DOMContentLoaded", iniciar);