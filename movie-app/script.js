const APIKEY = '67f9c4aafeff6abd51bce03bd63df48c';
const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=67f9c4aafeff6abd51bce03bd63df48c&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w500';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=67f9c4aafeff6abd51bce03bd63df48c&query=';

const main = document.querySelector('main');
const form = document.querySelector('#form');
const search = document.querySelector('#search');


//initial call
getMovies(APIURL);

async function getMovies(url){ 
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData.results);
    showMovies(respData.results);
}

function showMovies(movies){
    main.innerHTML = "";
    movies.forEach(movie => {
        const movieEL = document.createElement('div');

        if(movie.poster_path){
            movieEL.classList.add('movie');
            movieEL.innerHTML = `
                <img src="${IMGPATH + movie.poster_path}" alt="${movie.title}">
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <span class="${getRated(movie.vote_average)}">${movie.vote_average}</span>
                </div>
                <div class="overview">
                    ${movie.overview}
                </div>
                
            `;
            main.appendChild(movieEL);    
        }
        
    });
}

function getRated(ranking){
    if(ranking >=8){
        return 'green';
    }
    else if(ranking >5){
        return 'yello';
    }
    else{
        return 'red';
    }
        
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    var searchTerm = search.value;

    if(searchTerm){
        getMovies(SEARCHAPI+searchTerm);
        searchTerm = '';
    }
})

