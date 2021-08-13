//Script Test//

console.log("Hello Matching");

//apiKey

const movieKey = '1';

axios.get('www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
.then(response => {
    const data = response;
    console.log(data)
})

