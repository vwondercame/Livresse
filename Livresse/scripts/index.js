const genreApi = '?api_key=47359816eaddb6638823a824dbadf6e0'; 
const movieGenreSelect = document.getElementById('movie__genre');
const dropMenuTitle = document.createElement('option');
const selectElement = document.getElementById('movie__genre');
const genreIDNumberInOrder = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770, 53, 10752, 37]
let result = [];
let selectedGenreID = 0; 
let movieTitleBox = document.querySelector('.movie__title');
let movieDescriptionBox = document.querySelector('.movie__description');
let moviePosterBox = document.querySelector('.movie__poster-image');
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let cocktailTitleBox = document.querySelector('.cocktail__title');
let cocktailDescriptionBox = document.querySelector('.cocktail__description');
let cocktailPosterBox = document.querySelector('.cocktail__poster-image');
let resultCocktail = [];

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
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=47359816eaddb6638823a824dbadf6e0&with_genres=28`)
    .then(response => {
    console.log(response.data.results);

    for(let i = 0; i < response.data.results.length; i++){
    result.push({
        title : response.data.results[i].title,
        overview : response.data.results[i].overview,
        posterURL : `http://image.tmdb.org/t/p/w500${response.data.results[i].poster_path}`
    });
    }

    let randomNumber = Math.floor(Math.random()*10);
    displayMovie(result[randomNumber]);
})}

function gettingCocktailData(){
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => {
    console.log(response.data.drinks[0]);
    resultCocktail.push({
        title : response.data.drinks[0].strDrink,
        ingredients : [response.data.drinks[0].strIngredient1,response.data.drinks[0].strIngredient2,response.data.drinks[0].strIngredient3],
        instructions : response.data.drinks[0].strInstructions,
        image : response.data.drinks[0].strDrinkThumb
    })
    displayCocktail(resultCocktail[0]);
    })
} 

function displayMovie(movie){
    movieTitleBox.innerText = movie.title
    movieDescriptionBox.innerText = movie.overview
    moviePosterBox.src = movie.posterURL
}

function displayCocktail(cocktail){
    cocktailTitleBox.innerText = cocktail.title
    cocktailDescriptionBox.innerText = cocktail.ingredients + " " + cocktail.instructions
    cocktailPosterBox.src = cocktail.image
}

button1.addEventListener("click", () => {
    const ranNum = Math.floor(Math.random()*10);
    displayMovie(result[ranNum])
});

button2.addEventListener("click", () => {
    const ranNum2 = Math.floor(Math.random()*10);
    displayCocktail(result[ranNum2])
});
