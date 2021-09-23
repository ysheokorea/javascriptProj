const API_URL = "https://api.github.com/users/";
const body = document.querySelector('body');
const form = document.querySelector('.form');
const search = document.querySelector('#search');
const main = document.querySelector('main');


async function getUser(username){
    const resp = await fetch(API_URL + username);
    const respData = await resp.json();

    show(respData);
    getRepo(username);
}

async function getRepo(username){
    const resp = await fetch(API_URL + username + '/repos');
    const respData = await resp.json();
    var user_data = {name:'',url_:''};

    respData.forEach(user=>{
        user_data.name = user.name;
        user_data.url_ = user.html_url;
// name
// html_url
//         
    })
    addRepo(user_data);

}
function addRepo(userjson){
    const repoTerm = document.createElement('div');
    repoTerm.classList.add('repo_term');

    repoTerm.innerHTML = `
        <p>${userjson.name}</p>
        <p>${userjson.url_}</p>
    `;
    document.querySelector('.repo_').appendChild(repoTerm);
}

function show(username){
    main.innerHTML = '';
    const userTerm = document.createElement('div');
    userTerm.classList.add('user_');

    userTerm.innerHTML = `
        <div class="avatar_">
            <img src=${username.avatar_url}>
        </div>
        <div class="user_info_">
            <h2>${username.name}</h2>
            <h3>${username.bio}</h3>
            <ul>
                <li>${username.public_repos}</li>
                <li>${username.public_gists}</li>
                <li>${username.followers}</li>
            </ul>
            <div class="repo_">
            </div>
        </div>
        
    `;
    var append_ = main.appendChild(userTerm);
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    var searchTerm = search.value;

    if(searchTerm){
        getUser(searchTerm);
        searchTerm = "";
    }
})