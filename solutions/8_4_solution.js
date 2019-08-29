'use strict'
let movieStar = {
  firstname:'Johnny',
  lastname:'Bravo',
  birthday:'04-16-1974',
  weight: 200,
  gender:'male',
  eyecolor:'blue',
  haircolor:'blonde'


}


let movie = {
  moviename:'Awesome Action Movie',
  yearreleased:'2005',
  moviestar:movieStar

}

console.log(movieStar.birthday);
console.log(movie.moviestar);
console.log(movie.moviestar.firstname);

let boat = {
  boatname:'TripleEasy',
  color:'White',
  size:'Big',
  SetSail: function(movieStar){
    console.log(movieStar.firstname + " " +movieStar.lastname + " sets sail on the boat!")

  }
}

boat.SetSail(movieStar);