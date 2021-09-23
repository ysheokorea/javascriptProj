const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=67f9c4aafeff6abd51bce03bd63df48c&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w500/';
const SEARCHURL = 'https://api.themoviedb.org/3/search/movie?&api_key=67f9c4aafeff6abd51bce03bd63df48c&query=';
const contentEl = document.querySelector('.content-container');
const formEl = document.querySelector('#form');

getMovies(APIURL);

async function getMovies(url){
    const resp = await fetch(url);
    const respData = await resp.json();
    const respData_results = respData.results;

    console.log(respData_results);
    showMovies(respData_results);
}

formEl.addEventListener('submit', (e)=>{
    e.preventDefault();
    const searchEl = document.querySelector('#search');
    const searchValue = searchEl.value;
    const searchURL = SEARCHURL+searchValue;
    console.log(searchURL);
    getMovies(searchURL);
})

function showMovies(data){
    contentEl.innerHTML = '';
    data.forEach(movie=>{
        const movieEl = document.createElement('div');
        const moive_img_El = movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <div id="moive_img">
                <img src=${IMGPATH+movie.poster_path}>
            </div>
            <div id="movie_info">
                <span id="title">${movie.original_title}</span>
                <span id=${movieRanking(movie.vote_average)}>${movie.vote_average}</span>
            </div>
            <div>
                <button><a href="" download="${IMGPATH+movie.poster_path}">download</a></button>
            </div>
        `;
        

        contentEl.appendChild(movieEl);
    });
}


function movieRanking(rank){
    if(rank>8){
        return 'vote_average_green';
    }
    else if(rank>5){
        return 'vote_average_yellow';
    }
    else{
        return 'vote_average_red';
    }
}

