/**********************************************/
/* Helpers for Adding Movie Fun Facts */
/**********************************************/
const addMovieFunFacts = (movies) => {
  // Create a dictionary of { genre: movieCount } for all genres
  // Example: { "Comedy": 300, "Action": 250, "Drama": 390 }
  const genreCounts = {}
  movies.forEach((movie) => {
    movie.genres.forEach(genre => {
      if (!genreCounts[genre]) {
        genreCounts[genre] = 0;
      }
      genreCounts[genre] += 1;
    });
  });

  // Reduce: Calculate the average cast size for all movies
  const totalCastings = movies.reduce((totalCastings, movie) => {
    return totalCastings + movie.cast.length
  }, 0);
  const averageCastSize = totalCastings / movies.length;

  // Target the spans and insert the data
  document.querySelector('span#number-of-movies').textContent = movies.length;
  document.querySelector('span#average-cast-size').textContent = averageCastSize.toFixed(2);

  // Get the genres by name
  const genres = Object.keys(genreCounts);

  // Sort the genre names according to their value in genreCounts
  genres.sort((genreA, genreB) => {
    return genreCounts[genreA] > genreCounts[genreB] ? -1 : 1
  })

  // Get the 5 most popular
  const top5Genres = genres.slice(0, 5);

  // Target the list which will contain the genre counts
  const genreCountList = document.querySelector("#genre-count-list");

  // For each top 5 genre, create a list item and append it to the genreCountList
  top5Genres.forEach((genre) => {
    // 1. Create the new element
    const li = document.createElement('li');

    // 2. Modify the element
    li.innerHTML = `<strong>${genre}</strong> with ${genreCounts[genre]} movies`;

    // 3. Append the element
    genreCountList.append(li);
  });
}

/**********************************************/
/* Helpers for Adding Movie Cards to the List */
/**********************************************/

const addMovies = (movies) => {
  // 1. Grab the movies list container
  // 2. For each movie in the movies array...
  // 3. Add a list item with the following structure to the movies list:

  /* 
  <li>
    <h3>The Grudge (2020)</h3>
    <img src="thumbnail.jpg" alt="Movie poster for The Grudge">
    <p>Horror, Supernatural</p>
  </li>
  */
}



/**************************************/
/* Load the movies and invoke helpers */
/**************************************/
const main = async () => {
  const movies = await fetch('./movies.json').then(res => res.json());

  addMovieFunFacts(movies);
  addMovies(movies);
}

main();