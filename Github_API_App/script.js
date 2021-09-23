const APIURL = 'https://api.github.com/users/'
const MAIN = document.querySelector('main');
const FORM = document.querySelector('form');
const SEARCH = document.querySelector('#search');

async function getUser(user){
    const resp = await fetch(APIURL + user);
    const respData = await resp.json();
     
    console.log(respData);
    createUserCard(respData);
    getRepos(user);
}

async function getRepos(user){
    const resp = await fetch(APIURL + user + '/repos');
    const respData = await resp.json();

    console.log(respData);
    addReposToCard(respData);
}

function createUserCard(user){
    // const card = document.createElement('div');
    // card.classList.add('card');

    cardHTML = `
    <div class='card'>
        <div class="avatar">
            <img id="image_con" src=${user.avatar_url} alt=${user.name}>
        </div>
        <div class="infoBox">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul class="info">
                
                <li>followers ${user.followers}</li>
                
                <li>follwing ${user.following}</li>
                
                <li>repo ${user.public_repos}</li>
            </ul>
            <h4>repos</h4>
            <div class='repo' id='repos'>
            </div>
        </div>
    </div>
    `
    MAIN.innerHTML = cardHTML;
    // MAIN.appendChild('card');
}

function addReposToCard(repos){
    const reposEl = document.querySelector('#repos');


    repos
        .sort((a,b)=>b.stargazers_count - a.stargazers_count)
        .slice(0,9)
        .forEach((repo) => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo');

        repoEl.href = repo.html_url; 
        repoEl.target = "_blank";
        repoEl.innerText = repo.name;

        reposEl.appendChild(repoEl);
    })
}

function nonUser(){
    cardHTML = `
    <div class='card'>
        <div class="avatar">
            <img id="image_con" src="https://blog.kakaocdn.net/dn/pbPzJ/btqDuqUUNBt/2nQHXRRCgz7qDUpt7K8fv1/img.png" alt="">
        </div>
        <div class="infoBox">
            <h2>Users Not Found</h2>
            <p><b>You need to check your keyword</b></p>
            <ul class="info">
                <li>None</li>
                <li>None</li>
                <li>None</li>
            </ul>
        </div>
    </div>
    
    `
    MAIN.innerHTML = cardHTML;

}

FORM.addEventListener('submit', (e)=>{
    e.preventDefault();
    const searchTerm = SEARCH.value;
    console.log(searchTerm);

    if(searchTerm){
        getUser(searchTerm);
        searchTerm.value = "";
    }
    // else{
    //     nonUser();
    // }
});

