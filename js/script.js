window.onload = banco; // Chama a função ao carregar a página

function banco() {
    const dadosIniciais = [
        { id: 1, name: "Alice Silva", login: "AliceSilva", email: "alicelspires@gmail.com", password: "1234" },
        { id: 2, name: "Emilia Chaves", login: "Emi", email: "emilia.chaves@gmail.com", password: "1234@" },
        { id: 3, name: "Alex Miler", login: "AlexM", email: "alexMiler@gmail.com", password: "12345" },
    ];

    if (!localStorage.getItem('bag')) {
        localStorage.setItem('bag', JSON.stringify(dadosIniciais));
    }
}

function buscar() {
    let nomeUsuario = document.querySelector("#buscar").value.trim();

    const users = JSON.parse(localStorage.getItem("bag")) || [];
    const user = users.find((u) => u.login === nomeUsuario);

    if (user) {
        document.querySelector("#ids").value = user.id;
        document.querySelector("#names").value = user.name;
        document.querySelector("#emails").value = user.email;

        alert("Usuário encontrado");
    } else {
        alert("Usuário não encontrado!");
    }
}

function atualizar() {
    let id = document.querySelector("#idAtualizar").value.trim();
    let newEmail = document.querySelector("#atualizar")?.value.trim();

    let users = JSON.parse(localStorage.getItem("bag")) || [];
    let userIndex = users.findIndex((u) => u.id == id);

    if (userIndex !== -1) {
        if (newEmail !== "" && newEmail !== null && newEmail !== undefined) {
            users[userIndex].email = newEmail;
        }

        // if (newEmail) users[userIndex].email = newEmail;

        localStorage.setItem("bag", JSON.stringify(users));
        alert("Usuário atualizado com sucesso!");
    } else {
        alert("Usuário não encontrado para atualização!");
    }
}

function deletar() {
    let login = document.querySelector("#loginValue").value.trim();

    let users = JSON.parse(localStorage.getItem("bag")) || [];
    let userIndex = users.findIndex((u) => u.login === login);

    if (userIndex !== -1) {
        users.splice(userIndex, 1); // Remove o usuário da array
        localStorage.setItem("bag", JSON.stringify(users)); // Atualiza o localStorage
        alert("Usuário deletado com sucesso!");
    } else {
        alert("Usuário não encontrado!");
    }
}