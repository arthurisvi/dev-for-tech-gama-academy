function login() {
    let emailEl = document.getElementById("email");
    let passwordEl = document.getElementById("password");

    let password = passwordEl.value;
    let email = emailEl.value;

    if (email == "root@admin.com" && password == "123456") {
        window.location.href = "sistema.html";
    } else {
        alert("Usuário e/ou senha não correspondem aos nossos registros!");
        document.getElementById("loginForm").reset();
    }
}

function showMoviesContainer() {
    document.getElementById("container-movies").style.display = "block";
}