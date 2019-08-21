/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const roundNumber = (number, digits) => Math.round(number * 10 ** digits) / 10 ** digits;

function ratesAverage(movies){
  let sum = 0;
  let avg = 0;
  for (let val of movies) {
    if (val.rate) {
    sum += parseFloat(val.rate);
  }
 }
  avg = sum / movies.length;
  return roundNumber (avg, 2);
}


// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (movies) {
  const dramaMovies = movies.filter(movie => {
    if (movie.genre.includes('Drama')) {
      return true;
    } else {
      return false;
    }
  });
    if (dramaMovies.length === 0) return 0;
    const averageDramaMovieRating = ratesAverage(dramaMovies);
    return averageDramaMovieRating;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
// 2 função                                                  !!!
const orderByDuration = movies => movies.sort((first, second) => {
  if (first.duration > second.duration) {
    return 1;
  } else if ( first.duration < second.duration) {
    return -1;
  } else if ( first.title > second.title) {
    return 1
  } else if ( first.title < second.title) {
    return -1
  } else {
    return 0
  }
});

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

const howManyMovies = movies => movies.filter(movie => {
  return movie.genre.includes('Drama') && movie.director === "Steven Spielberg";
}).length;

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
//incompleto!
// 2 função                                                  !!!
const orderAlphabetically = movies => movies.sort((first, second) => {
  if (first.title > second.title) {
    return 1;
  } else if (first.title < second.title) {
    return -1;
  } else {
    return 0;
  }
})
.map(movie => movie.title);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes



// BONUS Iteration: Best yearly rate average - Best yearly rate average


