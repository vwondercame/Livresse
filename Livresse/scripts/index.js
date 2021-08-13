const genreApi = '?api_key=47359816eaddb6638823a824dbadf6e0'; 

const movieGenreSelect = document.getElementById('movie__genre');

//'?api_key=47359816eaddb6638823a824dbadf6e0'//
// 'https://api.themoviedb.org/3//genre/movie/list${apiKeyMovie}'
//https://api.themoviedb.org/3//genre/movie/list$?api_key=47359816eaddb6638823a824dbadf6e0
 
// const cocktailApi =

const dropMenuTitle = document.createElement('option');
dropMenuTitle.setAttribute('value','genre');
movieGenreSelect.appendChild(dropMenuTitle)

dropMenuTitle.innerHTML = "Pick a genre";


axios.get(`https://api.themoviedb.org/3//genre/movie/list${genreApi}`)
.then(response => {
    console.log(response);

    // const data = response.data.na
    // console.log(data);
})

//     const genre = response.data.Genre;
//     console.log(genre);

    

//     for(let i = 0; i < genre.length; i++){
//         const option = document.createElement('option');
//         option.setAttribute('value','genre');
//         movieGenreSelect.appendChild(option);

//         option.innerHTML = genre;


//     }
// })

const genrelst = ['Comedy', 'Action', 'Sci-fi', 'Horror', 'Romance','Documentary']

for(let i = 0; i < genrelst.length; i++){

            const option = document.createElement('option');
            option.setAttribute('value','genre');
            movieGenreSelect.appendChild(option);
    
            option.innerHTML = genrelst[i];
    
    
        }

// axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php%27')
// .then(response => {
//     console.log(response);
// })        



