// Front end logic.
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import pokeArray from './pokedex.js'
import pokeSpeciesArray from './pokedex.js'

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
        // Get information from pokemon API
        $.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then(function(response) {
          // populate pokedex dropdown menu with sprites
              $("#row1").append(`<div id='` + (j) + `'class='pokemonSprites col-1'><img src='${response.sprites.front_default}' alt='placeholder image of a pokemon for our pokedex.'></div>`)
              pokeArray.push(response);
        }).then(function(){
          // Get species array information from API
          $.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`).then(function(response) {
                pokeSpeciesArray.push(response);
          }).then(function(){
            console.log(pokeArray[10]);
            console.log(pokeArray[131]);
            console.log(pokeSpeciesArray);
          }).fail(function(){
            console.log("Species was NOT successful!")
          });
        }).then(function(){
          // Make it so we can click any of the pokemon sprites and give their click a function
          $("#" + j).click(function(event){
            let arrayNumber = (event.currentTarget.id);
            console.log(arrayNumber);
            // populate INFO CARD with SPRITES from selection


            if (`${pokeArray[(arrayNumber - 1)].species.name}` == "nidoran-f") {
                $("#pokemonAnimation").html(`<img class='idle' style='height:${parseFloat((pokeArray[(arrayNumber -1)].height)/10) * 10}vh;' src='https://www.pkparaiso.com/imagenes/xy/sprites/animados/nidoran_f.gif'>`);
                $("#pokemonEvolveFromSprite").slideUp();
                $("#pokemonEvolveFromSprite").empty();
              } else if (`${pokeArray[(arrayNumber - 1)].species.name}` == "nidoran-m") {
                $("#pokemonAnimation").html(`<img class='idle' style='height:${parseFloat((pokeArray[(arrayNumber -1)].height)/10) * 10}vh;' src='https://www.pkparaiso.com/imagenes/xy/sprites/animados/nidoran_m.gif'>`);
                $("#pokemonEvolveFromSprite").slideUp();
                $("#pokemonEvolveFromSprite").empty();
              } else if (`${pokeArray[(arrayNumber - 1)].species.name}` == "mr-mime") {
                $("#pokemonAnimation").html(`<img class='idle' style='height:${parseFloat((pokeArray[(arrayNumber -1)].height)/10) * 10}vh;' src='https://www.pkparaiso.com/imagenes/xy/sprites/animados/mr._mime.gif'>`);
                $("#pokemonEvolveFromSprite").slideUp();
                $("#pokemonEvolveFromSprite").empty();
              } else {
                $("#pokemonAnimation").html(`<img class='idle' style='height:${parseFloat((pokeArray[(arrayNumber -1)].height)/10) * 10}vh;' src='https://www.pkparaiso.com/imagenes/xy/sprites/animados/${pokeArray[(arrayNumber - 1)].species.name}.gif'>`);
                // populate INFO CARD with evolved from SPRITE
                if (`${pokeSpeciesArray[(arrayNumber - 1)].evolves_from_species}` == "null" || `${pokeSpeciesArray[(arrayNumber - 1)].evolves_from_species.name}` == "pichu" || `${pokeSpeciesArray[(arrayNumber - 1)].evolves_from_species.name}` == "cleffa" || `${pokeSpeciesArray[(arrayNumber - 1)].evolves_from_species.name}` == "igglybuff" || `${pokeSpeciesArray[(arrayNumber - 1)].evolves_from_species.name}` == "happiny" || `${pokeSpeciesArray[(arrayNumber - 1)].evolves_from_species.name}` == "mime-jr" || `${pokeSpeciesArray[(arrayNumber - 1)].evolves_from_species.name}` == "smoochum" || `${pokeSpeciesArray[(arrayNumber - 1)].evolves_from_species.name}` == "elekid" || `${pokeSpeciesArray[(arrayNumber - 1)].evolves_from_species.name}` == "magby" || `${pokeSpeciesArray[(arrayNumber - 1)].evolves_from_species.name}` == "munchlax" || `${pokeSpeciesArray[(arrayNumber - 1)].evolves_from_species.name}` == "tyrogue") {
                  $("#pokemonEvolveFromSprite").slideUp();
                  $("#pokemonEvolveFromSprite").empty();
                } else if (`${pokeArray[(arrayNumber - 1)].species.name}` == "nidorina") {
                  $("#pokemonEvolveFromSprite").hide();
                  $("#pokemonEvolveFromSprite").html(`<div class='card bg-light border-dark' id='evolvesFromCard'><h6 class='evolvesText'>${pokeArray[(arrayNumber - 1)].species.name.charAt(0).toUpperCase() + pokeArray[(arrayNumber - 1)].species.name.substring(1)} evolves from ${pokeArray[(arrayNumber - 2)].species.name.charAt(0).toUpperCase() + pokeArray[(arrayNumber - 2)].species.name.substring(1)}</h6></div><img class='idle' style='height:${parseFloat((pokeArray[(arrayNumber -2)].height)/10) * 10}vh;' src='https://www.pkparaiso.com/imagenes/xy/sprites/animados/nidoran_f.gif'>`);
                  $("#pokemonEvolveFromSprite").slideDown();
                } else if (`${pokeArray[(arrayNumber - 1)].species.name}` == "nidorino") {
                  $("#pokemonEvolveFromSprite").hide();
                  $("#pokemonEvolveFromSprite").html(`<div class='card bg-light border-dark' id='evolvesFromCard'><h6 class='evolvesText'>${pokeArray[(arrayNumber - 1)].species.name.charAt(0).toUpperCase() + pokeArray[(arrayNumber - 1)].species.name.substring(1)} evolves from ${pokeArray[(arrayNumber - 2)].species.name.charAt(0).toUpperCase() + pokeArray[(arrayNumber - 2)].species.name.substring(1)}</h6></div><img class='idle' style='height:${parseFloat((pokeArray[(arrayNumber -2)].height)/10) * 10}vh;' src='https://www.pkparaiso.com/imagenes/xy/sprites/animados/nidoran_m.gif'>`);
                  $("#pokemonEvolveFromSprite").slideDown();
                } else {
                  $("#pokemonEvolveFromSprite").hide();
                  $("#pokemonEvolveFromSprite").html(`<div class='card bg-light border-dark' id='evolvesFromCard'><h6 class='evolvesText'>${pokeArray[(arrayNumber - 1)].species.name.charAt(0).toUpperCase() + pokeArray[(arrayNumber - 1)].species.name.substring(1)} evolves from ${pokeArray[(arrayNumber - 2)].species.name.charAt(0).toUpperCase() + pokeArray[(arrayNumber - 2)].species.name.substring(1)}</h6></div><img class='idle' style='height:${parseFloat((pokeArray[(arrayNumber -2)].height)/10) * 10}vh;' src='https://www.pkparaiso.com/imagenes/xy/sprites/animados/${pokeArray[(arrayNumber - 2)].species.name}.gif'>`);
                  $("#pokemonEvolveFromSprite").slideDown();
                }
              }



            // populate INFO CARD with Name from selection
            $("#pokemonInfoName").html(`<h4 class='nameText'>${pokeArray[(arrayNumber - 1)].species.name.charAt(0).toUpperCase() + pokeArray[(arrayNumber - 1)].species.name.substring(1)}</h4><hr>`);
            // populate INFO CARD with Description from selection
            if (pokeSpeciesArray[(arrayNumber - 1)].flavor_text_entries.length > 0) {
              let description = (`${pokeSpeciesArray[(arrayNumber - 1)].flavor_text_entries[(pokeSpeciesArray[(arrayNumber - 1)].flavor_text_entries.length-1)].flavor_text}`);
              let fixedDescription = description.replace("\f", " ");
              $('#pokemonInfoDescription').html('<h6>' + fixedDescription + '</h6><hr>');
            }
            // populate INFO CARD with TYPE from selection
            if (pokeArray[(arrayNumber - 1)].types.length > 0) {
              $('#pokemonInfoType').empty();
              for(let t=0; t< pokeArray[(arrayNumber - 1)].types.length; t++) {
                $("#pokemonInfoType").append(`<h6>Type `+ (t+1)+ `: ${pokeArray[(arrayNumber - 1)].types[t].type.name}</h6>`);
              }
            }


            // populate INFO CARD with HABITAT information
            $('#pokemonInfoHabitat').html(`<h6>Habitat: ${pokeSpeciesArray[(arrayNumber - 1)].habitat.name.charAt(0).toUpperCase() + pokeSpeciesArray[(arrayNumber - 1)].habitat.name.substring(1)}</h6>`)

            // populate INFO CARD with HEIGHT and WEIGHT information
            $('#pokemonInfoHeight').html(`<h6>Height: ${parseFloat(pokeArray[(arrayNumber - 1)].height)/10}m</h6>`);
            $('#pokemonInfoWeight').html(`<h6>Weight: ${parseFloat(pokeArray[(arrayNumber - 1)].weight)/10}kg</h6>`);




            // populate INFO CARD with RANDOM MOVES from selection
            // KNOWN BUG -- SOMETIMES RETURNS NO RESULT FOR POKEMON WITH FEW MOVES
            if (pokeArray[(arrayNumber - 1)].moves.length > 0) {
              $('#pokemonInfoSampleStatement').html("<h6>Sample Moves: </h6>");
              $('#pokemonInfoMoves1').empty();
              $('#pokemonInfoMoves2').empty();
              $('#pokemonInfoMoves3').empty();
              for(let m=0; m< 3; m++) {
                $('#pokemonInfoMoves' + (m+1)).append(`<h6>${pokeArray[(arrayNumber - 1)].moves[Math.floor(Math.random() * `${pokeArray[(arrayNumber - 1)].moves[m].move.name}`.length)].move.name}</h6>`);
              }
            } else if (pokeArray[(arrayNumber - 1)].moves == undefined){
              $('#pokemonInfoSampleStatement').html("<h6>Sample Moves: None</h6>");

            } else {
              $('#pokemonInfoSampleStatement').html("<h6>Sample Moves: </h6>");
              $('#pokemonInfoMoves1').append(`<h6>${pokeArray[(arrayNumber - 1)].moves[0].move.name}</h6>`);
            }
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
