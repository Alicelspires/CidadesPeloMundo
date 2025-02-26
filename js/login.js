let logarBtn = document.querySelector("#logar")
logarBtn.addEventListener("click", logar);

function logar(event) {
    event.preventDefault();

    let email = document.querySelector('#emails').value;
    let pass = document.querySelector('#pass').value;

    const users = JSON.parse(localStorage.getItem('bag')) || [];
    const user = users.find(user => user.email === email && user.password === pass);

    if (user) {
        alert("Login feito com sucesso! Bem-vindo, " + user.login);
        window.location.href = "./index.html";
    } else {
        alert("E-mail ou senha incorretos!");
    }
    console.log("foi")
}