const genreApi = '?api_key=47359816eaddb6638823a824dbadf6e0'; 
const movieGenreSelect = document.getElementById('movie__genre');
const dropMenuTitle = document.createElement('option');
const selectElement = document.getElementById('movie__genre');
const genreIDNumberInOrder = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770, 53, 10752, 37]
let result = [];
let selectedGenreID = 0; 

// displaying drop down box options
dropMenuTitle.setAttribute('value','genre');
movieGenreSelect.appendChild(dropMenuTitle)
dropMenuTitle.innerHTML = "Pick a genre";
const genreList = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Sci-Fi", "TV Movie", "Thriller", "War", "Western"]
for(let i = 0; i < genreList.length; i++){
    const option = document.createElement('option');
    option.setAttribute('value','genre');
    option.value = String(i + 1);
    movieGenreSelect.appendChild(option);
    option.innerHTML = genreList[i];
}

// listening to dropdown options. turn that value into genre ID and putting that ID number into selectedGenreID variable
selectElement.addEventListener('change', function(){
    selectedGenreID = genreIDNumberInOrder[selectElement.selectedIndex]
});

// initializing axios.get
gettingMovieData();
gettingCocktailData();


function gettingMovieData(){
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=47359816eaddb6638823a824dbadf6e0&with_genres=${selectedGenreID}`)
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
})}

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

