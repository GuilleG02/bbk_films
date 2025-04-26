

const apiKey = '0846fd3b4749649afd28fb8e9e181aa6'; 

async function searchMovies() {

  const query = document.getElementById('searchInput').value;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-ES&query=${encodeURIComponent(query)}`;

  try {

    const response = await axios.get(url);
    const movies = response.data.results;
    displayMovies(movies);
  } catch (error) {

    console.error('Error al buscar películas:', error);
  }
}

function displayMovies(movies) {
    
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
      <h2>${movie.title}</h2>
      <p>${movie.overview}</p>
    `;
    resultsDiv.appendChild(movieCard);
  });
}











