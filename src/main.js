// Front end logic.
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
// HTML elements and button logic

// let pokemonnumber = 151;

// backend logic

let pokeArray = [];
let pokeSpeciesArray = [];


// front end

setTimeout(function(){
    for (let i = 1; i <= 151; i++) {
      setTimeout (function(){
        let j = parseInt(i);
        $.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then(function(response) {

          console.log(response);

              $("#row1").append(`<div id='` + (j) + `'class='pokemonSprites col-1'><img src='${response.sprites.front_default}' alt='placeholder image of a pokemon for our pokedex.'></div>`)
              pokeArray.push(response);

          console.log("Success");
        }).then(function(){
          $("#" + j).click(function(event){
            debugger;
            let arrayNumber = (event.currentTarget.id);
            console.log("Give me this number: " + arrayNumber);
            $("#pokemonAnimation").html(`<img class='idle' src='${pokeArray[(arrayNumber - 1)].sprites.front_default}'>`);
          });
        }).fail(function(){
          console.log("Failure");
        });
      }, i*60);
    }



}, 0);
//



  // for (var j = 0; j < 16; j++) {
  //   for (var i = 0; i < 10; i++) {
  //     $("#row" + (j + 1)).append(`"<div id='pokeSprite" + (i + 1) + "'class='pokemonSprites col-1'><img src='${response2.sprites.front_default}' alt='placeholder image of a pokemon for our pokedex.'></div>"`)
  //   }
  // }


setInterval(function(){
  if (parseInt($("#backgroundSlider").val()) === 1){
    $("#background1").show();
    $("#background2").hide();
    $("#background3").hide();
    $("#background4").hide();
    $("#background5").hide();

  } else if (parseInt($("#backgroundSlider").val()) === 2){
    $("#background1").hide();
    $("#background2").show();
    $("#background3").hide();
    $("#background4").hide();
    $("#background5").hide();
  } else if (parseInt($("#backgroundSlider").val()) === 3){
    $("#background1").hide();
    $("#background2").hide();
    $("#background3").show();
    $("#background4").hide();
    $("#background5").hide();
  } else if (parseInt($("#backgroundSlider").val()) === 4){
    $("#background1").hide();
    $("#background2").hide();
    $("#background3").hide();
    $("#background4").show();
    $("#background5").hide();
  } else {
    $("#background1").hide();
    $("#background2").hide();
    $("#background3").hide();
    $("#background4").hide();
    $("#background5").show();

  }
}, 30);


$("#pokedexButton").click(function(){
  $("#pokedexcard").slideToggle(200);
});

$("#backgroundButton").click(function(){
  $("#environmentCard").slideToggle(200);
});

$("#infoButton").click(function(){
  $("#infoCard").slideToggle(200);
});


// button logic
$("#soundIsOn").click(function(){
  $("#soundIsOff").show();
  $("#soundIsOn").hide();
});
$("#soundIsOff").click(function(){
  $("#soundIsOn").show();
  $("#soundIsOff").hide();
});









// LISA front end logic





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

    }
    request.open("GET", url, true);
    request.send();


    const getElements = function(response) {
      //To get Pokemon habitat: ***** "pokemon-species"
      $('.showHabitat').text(`${response.habitat.name}`);

      //To get Pokemon evolves from: ***** "pokemon-species"

      if (`${response.evolves_from_species}` == "null") {
        $('.showEvolution').text("This is a Basic Pokemon"); }
        else {
          $('.showEvolution').html("Evolves from:" + "<br>" + `${response.evolves_from_species.name}`);
        }

        //To get Pokemon description: ***** "pokemon-species"
        if (response.flavor_text_entries.length > 0) {
          var description = (`${response.flavor_text_entries[(response.flavor_text_entries.length-1)].flavor_text}`);
          var fixedDescription = description.replace("\f", " ");
          $('.showDescription').text(fixedDescription);


          console.log(`${response.flavor_text_entries[(response.flavor_text_entries.length-1)].flavor_text}`);
        }

      }


      // SPRITE TYPE MOVES


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
