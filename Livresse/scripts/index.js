const genreApi = '?api_key=47359816eaddb6638823a824dbadf6e0'; 
const movieGenreSelect = document.getElementById('movie__genre');
const dropMenuTitle = document.createElement('option');
let result = [];
// genre ID
    // 28 = action
    // 12 = adventure
    // 16 = animation
    // 35 = comedy
    // 80 = crime
    // 99 = documentary
    // 18 = drama
    // 10751 = family
    // 14 = fantasy
    // 36 = history
    // 27 = horror
    // 10402 = music
    // 9648 = mystery
    // 10749 = romance
    // 878 = sci-fi
    // 10770 = tv movie
    // 53 = thriller
    // 10752 = war
    // 37 = western
// image
// http://image.tmdb.org/t/p/
// postersize: "w92", "w154", "w185", "w342", "w500", "w780", "original"
dropMenuTitle.setAttribute('value','genre');
movieGenreSelect.appendChild(dropMenuTitle)

dropMenuTitle.innerHTML = "Pick a genre";

const genreList = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Sci-Fi", "TV Movie", "Thriller", "War", "Western"]

for(let i = 0; i < genreList.length; i++){

            const option = document.createElement('option');
            option.setAttribute('value','genre');
            movieGenreSelect.appendChild(option);
    
            option.innerHTML = genreList[i];
        }

// const selectedGenre = //value
let genreNumber = 53//selectedGenre
// let pageNumber = 2
gettingMovieData();
gettingCocktailData();

function gettingMovieData(){
    
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=47359816eaddb6638823a824dbadf6e0&with_genres=${genreNumber}`)
    .then(response => {
    // let results = response.data.results
    console.log(response);
    for(let i = 0; i > response.data.results.length;i++){
    result = [{
        "title": response.data.results[i].title,
        "overview": response.data.result[i].overview,
        "posterURL": `http://image.tmdb.org/t/p/w500${response.data.result[i].poster_path}`,
        "id": response.data.result[i].id
        }];
    }
    let randomNumber = Math.floor(Math.random()*10);
    displayMovie(result[randomNumber]);
})
}
// let randomNumber = Math.floor(Math.random()*10);
// displayMovie(selectedGenre[randomNumber])

function gettingCocktailData(){
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => {
    console.log(response.data.drinks[0]);
    displayCocktail();
    })
} 

function displayMovie(){

}

function displayCocktail(){

}

// movieButton.addEventListener("click", () => {
//     let randomNumber = Math.floor(Math.random()*10);
//     displayMovie(selectedGenre[randomNumber])

// });

// cocktailButton.addEventListener("click", () => {
//     let randomNumber = Math.floor(Math.random()*10);
//     displayCocktail(selectedGenre[randomNumber])
// });


// axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php%27')
// .then(response => {
//     console.log(response);
// })     
