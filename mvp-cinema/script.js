var movies = [];

function getMovies() {

    var tableMovies = document.getElementById("movies")
    var dataStatus = document.getElementById("status");
    var data = '';

    if (movies.length > 0) {

        dataStatus.innerHTML = data

        for (let i = 0; i < movies.length; i++) {
            data += `
                <tr>
                <td>${movies[i].title}</td>
                <td>${movies[i].synopsis}</td>
                <td>${movies[i].movieTime}</td>
                <td>${movies[i].parentalRating}</td>
                <td>${movies[i].audio}</td>
                <td>${movies[i].genre}</td>
                <td><button onclick="putMovie(${movies[i].id})">Editar</button></td>
                <td><button onclick="deleteMovie(${movies[i].id})">Excluir</button></td>
                </tr>
            `;
        }
        return (tableMovies.innerHTML = data);
    } else {
        tableMovies.innerHTML = data
        data = "<tr>No momento não existem filmes cadastrados</tr>"
        return (dataStatus.innerHTML = data);
    }
}


function postMovie(id = null) {
    let title = document.getElementById("title").value
    let synopsis = document.getElementById("synopsis").value
    let movieTime = document.getElementById("movie-time").value
    let parentalRating = document.getElementById("parental-rating").value
    let audio = document.getElementById("audio").value
    let genre = document.getElementById("genre").value

    const movie = {
        id: movies.length + 1,
        title: title,
        synopsis: synopsis,
        movieTime: movieTime,
        parentalRating: parentalRating,
        audio: audio,
        genre: genre
    }

    if (localStorage.getItem('token')) {
        if (!id) {
            movies.push(movie)
        } else {
            movies[id - 1].title = title
            movies[id - 1].synopsis = synopsis
            movies[id - 1].movieTime = movieTime
            movies[id - 1].parentalRating = parentalRating
            movies[id - 1].audio = audio
            movies[id - 1].genre = genre

            document.getElementById("button-edit").remove();
            document.getElementById("register-movie").style.display = "block";
        }
    } else {
        alert("Você não tem permissões para realizar essa ação! Para tal é necessário estar autenticado.")
    }


    document.getElementById("form-movie").reset();

    getMovies();
}

function putMovie(id) {
    document.getElementById("title").value = movies[id - 1].title;
    document.getElementById("synopsis").value = movies[id - 1].synopsis
    document.getElementById("movie-time").value = movies[id - 1].movieTime
    document.getElementById("parental-rating").value = movies[id - 1].parentalRating
    document.getElementById("audio").value = movies[id - 1].audio
    document.getElementById("genre").value = movies[id - 1].genre

    document.getElementById("register-movie").style.display = 'none'

    if (!document.getElementById('button-edit')) {
        document
            .getElementById("container-button-edit")
            .insertAdjacentHTML(
                "afterend",
                `<br><button id = "button-edit" onclick="postMovie(${id})">Salvar</button><br>`
            );
    }
}

function deleteMovie(id) {
    if (localStorage.getItem("token")) {
        movies.splice(movies.indexOf(id - 1), 1);
    } else {
        alert(
            "Você não tem permissões para realizar essa ação! Para tal é necessário estar autenticado."
        );
    }
    getMovies();
}


function login() {
    let emailEl = document.getElementById("email");
    let passwordEl = document.getElementById("password");

    let password = passwordEl.value;
    let email = emailEl.value;

    if (email == "root@admin.com" && password == "123456") {
        let token = Math.floor(Date.now() * Math.random()).toString(36);
        localStorage.setItem("token", token);
        window.location.href = "sistema.html";
    } else {
        alert("Usuário e/ou senha não correspondem aos nossos registros!");
        document.getElementById("loginForm").reset();
    }
}

function showMoviesContainer() {
    document.getElementById("container-movies").style.display = "block";
    getMovies();
}