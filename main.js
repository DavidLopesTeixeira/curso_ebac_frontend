document.addEventListener("DOMContentLoaded", function () {
    const avatar = document.getElementById("avatar");
    const name = document.getElementById("name");
    const userName = document.getElementById("userName");
    const repositories = document.getElementById("repositories");
    const followers = document.getElementById("followers");
    const following = document.getElementById("following");
    const profile = document.getElementById("profile");
    const searchName = "DavidLopesTeixeira";
    const endpoint = `https://api.github.com/users/${searchName}`;

    fetch(endpoint)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (json) {
            const resposta = json;
            console.log(resposta);
            name.innerHTML = resposta.name;
            userName.innerHTML = ` @${resposta.login}`;
            repositories.innerHTML = resposta.public_repos;
            followers.innerHTML = resposta.followers;
            following.innerHTML = resposta.following;
            avatar.src = resposta.avatar_url;
            profile.href = resposta.html_url;
            const message = resposta.message;
            console.log(message);
        });
});

//rota https://api.github.com/users/DavidLopesTeixeira
