// Front end logic.
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#comicButton').click(function() {
    let pokemonName = $('#enteredPokemonName').val();
    $('#enteredPokemonName').val("");

      let request = new XMLHttpRequest();
      const url = `https://CORS-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/${pokemonName}/
      `;

      request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
        }
      }

      request.open("GET", url, true);
      request.send();

      const getElements = function(response) {
      // $('.showDefault').html(`<img src="${response.sprites.front_default}">`);
      // $('.showShiny').html(`<img src="${response.sprites.front_shiny}">`);
      $('.showShiny').text(`${response.types}`);


$('.showDefault').text(`${response.habitat.name}`);
$('.showShiny').text(`${response.evolves_from_species.name}`);
$('.showShiny').text(`${response.evolves_from_species.name}`);

// if (response.moves.length > 0) {
    //   for(let i=0; i< response.moves.length; i++) {
    //  $('.showDefault').append(`${response.moves[i].move.name}` + "<br>");

    // }

    // }


//For type info:  ${response.pokemon.types}
//For Move info: ${response.pokemon.moves}
//For Description info: ${response.pokemon-species.flavor-text-entries.flavor-text.language.en}
//For Habitat info: ${response.pokemon-species.habitat}
//For Evolution info: ${response.pokemon-species.evolves_from_species}
//For Sprites info: ${response.pokemon.sprites}


    }
  });
});
