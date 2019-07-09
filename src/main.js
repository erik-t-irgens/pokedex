// Front end logic.
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $('#comicButton').click(function() {
    let pokemonName = $('#enteredPokemonName').val();
    $('#enteredPokemonName').val("");

    // let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://CORS-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon-species/${pokemonName}/
      `;

      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);
        }
        // else {
        //     reject(Error(request.statusText));
        // }
      }
      request.open("GET", url, true);
      request.send();
    // });

      const getElements = function(response) {
      // $('.showShiny').html(`<img src="${response.sprites.front_shiny}">`);

//To get Pokemon habitat: ***** "pokemon-species"
$('.showHabitat').text(`${response.habitat.name}`);

//To get Pokemon evolves from: ***** "pokemon-species"

if (`${response.evolves_from_species}` == "null") {
   $('.showEvolution').text("This is a Basic Pokemon"); }
else {
  $('.showEvolution').html("Evolves from:" + "<br>" + `${response.evolves_from_species.name}`);
}

// console.log(`${response.evolves_from_species.name}`);


//To get Pokemon description: ***** "pokemon-species"
    if (response.flavor_text_entries.length > 0) {
          // for(let i=0; i< response.flavor_text_entries.length; i++) {
          var description = (`${response.flavor_text_entries[(response.flavor_text_entries.length-1)].flavor_text}`);
          var fixedDescription = description.replace("\f", " ");
         $('.showDescription').text(fixedDescription);
        // }

console.log(`${response.flavor_text_entries[(response.flavor_text_entries.length-1)].flavor_text}`);
  }



    }

    let request2 = new XMLHttpRequest();
    const url2 = `https://CORS-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/${pokemonName}/
    `;

    request2.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response2 = JSON.parse(this.responseText);
      getElements2(response2);
      }
    }

    request2.open("GET", url2, true);
    request2.send();

    const getElements2 = function(response2) {
//To get defautlt sprite: *****"pokemon"
      $('.showDefault').html(`<img src="${response2.sprites.front_default}">`);

//To get Pokemon type: ***** "pokemon"
      if (response2.types.length > 0) {
          $('.showTypes').empty();
        for(let i=0; i< response2.types.length; i++) {
          $('.showTypes').append(`${response2.types[i].type.name}` + "<br>");
        }

      }

      if (response2.moves.length > 0) {
         $('.showMoves').empty();
      for(let i=0; i< 3; i++) {
     // $('.showMoves').append(`${response2.moves[i].move.name}` + "<br>");
     // var movesArray = [`${response2.moves[i].move.name}`];
     // var randomMoves = movesArray[Math.floor(Math.random() * movesArray.length)];
     $('.showMoves').append(`${response2.moves[Math.floor(Math.random() * `${response2.moves[i].move.name}`.length)].move.name}` + "<br>");
     // console.log(randomMoves);

    }

    }

  };
  });
});
