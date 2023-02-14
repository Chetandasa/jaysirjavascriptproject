//load the swiping effect slider image library

function call(){

  SearchForMovie();

  MovieDetails();

  MovieImages();

}




//three endpoints so three fetch calls

//fetch call to get all the data

function SearchForMovie() {
  console.log(`SearchForMovie entered`); //caveman debugging - see if the function is being called


  //https://api.themoviedb.org/3/search/movie?api_key=&language=en-US&query=pathaan&page=1&include_adult=false
  //build my full URI
  //base URL
  let baseURL = "https://api.themoviedb.org/3/";
  //endpoint
  let endpoint = "search/movie";
  //api key
  let apikey = "e2dd97327971caa44b0520b1526f4a3b";

  let extrathings = "&language=en-US"; 

  let fullURI = baseURL + endpoint + "?api_key=" + apikey + extrathings;

  //do some caveman debugging and confirm the FULL URI is working

  console.log(fullURI);

  //fetch call

  fetch(fullURI) //waits for the api to resolve and returns a response

      .then((response) => response.json()) //convert response to json, wait for conversion to happen

      .then((data) => {
          //wait for the data to arrive as json
          console.log(`Recieved stuff using the fetch API`);
          console.log(data); //do whatever you want with it.
          UpdateMovieInformation(data);
      })
      .catch((error) => {
          console.log(error);
      });

  console.log(`SearchForMovie leaving`);
}

function UpdateMovieInformation(data) {
  console.log(`Entering updateMovieInformation`);

  console.log(data);

  let resultsarray = data.results;
  let movieitem = resultsarray(0);

  

  let movietitle = document.getElementById("movietitle");

  movietitle.textContent = movieitem.original_title;

  console.log(`Leaving updateMovieInformation`);
}

