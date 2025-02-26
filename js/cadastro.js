let cadastro = document.querySelector('#cadastro')
cadastro.addEventListener('click', cadastrar);

function cadastrar() {

    let fullName = document.querySelector("#name").value;
    let userName = document.querySelector("#login").value;
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#password").value;

    const user = {
        id: Date.now(),
        name: fullName,
        login: userName,
        email: email,
        password: pass,
    };

    const users = JSON.parse(localStorage.getItem("bag")) || [];
    users.push(user);
    localStorage.setItem("bag", JSON.stringify(users));

    alert("Usuário cadastrado com sucesso!");
    window.location.href = "./index.html";
}