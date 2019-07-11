// Front end logic.
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
$(document).ready(function() {
// backend logic
// arrays for pokemon to inhabit
let pokeArray = [];
let pokeSpeciesArray = [];

// audio for music and muting
var myAudio = document.getElementById('myAudio');
document.getElementById('myLoopingAudio').loop = true;
var myLoopingAudio = document.getElementById('myLoopingAudio');
const introSongDuration = (myAudio.duration * 1000);

setTimeout(function(){
  if (myAudio.muted == false) {
    myLoopingAudio.play();
  }
},introSongDuration);

let backgroundValue = '';
  myAudio.play();

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

          }).fail(function(){
            alert("Species API call failure. Try again!")
          });
        }).then(function(){
          // Allows for sprites in the list to be clicked
          $("#" + j).click(function(event){
            // once clicked, the following functions will perform
            // all refactored variables for use later
            let arrayNumber = (event.currentTarget.id);
            let height = (parseFloat((pokeArray[(arrayNumber -1)].height)/10) * 10);
            let previousPokeName = '';
            let previousPokeHeight = '';
            if ((arrayNumber - 2) < 0) {
              previousPokeName = '';
              previousPokeHeight = '';
            } else {
              previousPokeName = pokeArray[(arrayNumber - 2)].species.name;
              previousPokeHeight = (parseFloat((pokeArray[(arrayNumber -2)].height)/10) * 10);
            }
            let evolvesFromDisplayName = (previousPokeName.charAt(0).toUpperCase() + previousPokeName.substring(1));
            let pokemonName = pokeArray[(arrayNumber - 1)].species.name;
            let evolvesFromSpecies = pokeSpeciesArray[(arrayNumber - 1)].evolves_from_species;
            let evolvesFromSpeciesSlideUpEmpty = function(){
              $("#pokemonEvolveFromSprite").slideUp();
              $("#pokemonEvolveFromSprite").empty();
            };

            // populate INFO CARD with SPRITES from selection

            if (`${pokemonName}` == "nidoran-f") {
                $("#pokemonAnimation").html(`<img class='idle' style='height:${height}vh;' src='https://www.pkparaiso.com/imagenes/xy/sprites/animados/nidoran_f.gif'>`);
                evolvesFromSpeciesSlideUpEmpty();
              } else if (`${pokemonName}` == "nidoran-m") {
                $("#pokemonAnimation").html(`<img class='idle' style='height:${height}vh;' src='https://www.pkparaiso.com/imagenes/xy/sprites/animados/nidoran_m.gif'>`);
                evolvesFromSpeciesSlideUpEmpty();
              } else if (`${pokemonName}` == "mr-mime") {
                $("#pokemonAnimation").html(`<img class='idle' style='height:${height}vh;' src='https://www.pkparaiso.com/imagenes/xy/sprites/animados/mr._mime.gif'>`);
                evolvesFromSpeciesSlideUpEmpty();
              } else {
                $("#pokemonAnimation").html(`<img class='idle' style='height:${height}vh;' src='https://www.pkparaiso.com/imagenes/xy/sprites/animados/${pokemonName}.gif'>`);

                // populate background with evolved from SPRITE and TEXT

                if (`${evolvesFromSpecies}` == "null") {
                  let evolvesFromSpeciesName = '';
                  evolvesFromSpeciesSlideUpEmpty();
                } else {
                  let evolvesFromSpeciesName = pokeSpeciesArray[(arrayNumber - 1)].evolves_from_species.name;
                  if (`${evolvesFromSpeciesName}` == "pichu" || `${evolvesFromSpeciesName}` == "cleffa" || `${evolvesFromSpeciesName}` == "igglybuff" || `${evolvesFromSpeciesName}` == "happiny" || `${evolvesFromSpeciesName}` == "mime-jr" || `${evolvesFromSpeciesName}` == "smoochum" || `${evolvesFromSpeciesName}` == "elekid" || `${evolvesFromSpeciesName}` == "magby" || `${evolvesFromSpeciesName}` == "munchlax" || `${evolvesFromSpeciesName}` == "tyrogue") {
                    evolvesFromSpeciesSlideUpEmpty();
                  } else if (`${pokemonName}` == "nidorina") {
                    $("#pokemonEvolveFromSprite").hide();
                    $("#pokemonEvolveFromSprite").html(`<div class='card bg-light border-dark' id='evolvesFromCard'><h6 class='evolvesText'>${pokemonName.charAt(0).toUpperCase() + pokemonName.substring(1)} evolves from ${evolvesFromDisplayName}</h6></div><img class='idle' style='height:${previousPokeHeight}vh;' src='https://www.pkparaiso.com/imagenes/xy/sprites/animados/nidoran_f.gif'>`);
                    $("#pokemonEvolveFromSprite").slideDown();
                  } else if (`${pokemonName}` == "nidorino") {
                    $("#pokemonEvolveFromSprite").hide();
                    $("#pokemonEvolveFromSprite").html(`<div class='card bg-light border-dark' id='evolvesFromCard'><h6 class='evolvesText'>${pokemonName.charAt(0).toUpperCase() + pokemonName.substring(1)} evolves from ${evolvesFromDisplayName}</h6></div><img class='idle' style='height:${previousPokeHeight}vh;' src='https://www.pkparaiso.com/imagenes/xy/sprites/animados/nidoran_m.gif'>`);
                    $("#pokemonEvolveFromSprite").slideDown();
                  } else if (`${pokemonName}` == "jolteon") {
                    evolvesFromSpeciesSlideUpEmpty();
                    $("#pokemonEvolveFromSprite").html(`<div class='card bg-light border-dark' id='evolvesFromCard'><h6 class='evolvesText'>${pokeArray[(arrayNumber -1)].species.name.charAt(0).toUpperCase() + pokeArray[(arrayNumber -1)].species.name.substring(1)} evolves from ${pokeArray[(arrayNumber - 3)].species.name.charAt(0).toUpperCase() + pokeArray[(arrayNumber -3)].species.name.substring(1)}</h6></div><img class='idle' style='height:${parseFloat((pokeArray[(arrayNumber -3)].height)/10) * 10}vh;' src='https://www.pkparaiso.com/imagenes/xy/sprites/animados/${pokeArray[(arrayNumber - 3)].species.name}.gif'>`);
                    $("#pokemonEvolveFromSprite").slideDown();
                  } else if (`${pokemonName}` == "flareon") {
                    $("#pokemonEvolveFromSprite").hide();
                    $("#pokemonEvolveFromSprite").html(`<div class='card bg-light border-dark' id='evolvesFromCard'><h6 class='evolvesText'>${pokeArray[(arrayNumber -1)].species.name.charAt(0).toUpperCase() + pokeArray[(arrayNumber -1)].species.name.substring(1)} evolves from ${pokeArray[(arrayNumber - 4)].species.name.charAt(0).toUpperCase() + pokeArray[(arrayNumber -4)].species.name.substring(1)}</h6></div><img class='idle' style='height:${parseFloat((pokeArray[(arrayNumber -4)].height)/10) * 10}vh;' src='https://www.pkparaiso.com/imagenes/xy/sprites/animados/${pokeArray[(arrayNumber - 4)].species.name}.gif'>`);
                    $("#pokemonEvolveFromSprite").slideDown();
                  } else {
                    $("#pokemonEvolveFromSprite").hide();
                    $("#pokemonEvolveFromSprite").html(`<div class='card bg-light border-dark' id='evolvesFromCard'><h6 class='evolvesText'>${pokemonName.charAt(0).toUpperCase() + pokemonName.substring(1)} evolves from ${evolvesFromDisplayName}</h6></div><img class='idle' style='height:${previousPokeHeight}vh;' src='https://www.pkparaiso.com/imagenes/xy/sprites/animados/${previousPokeName}.gif'>`);
                    $("#pokemonEvolveFromSprite").slideDown();
                  }
                }
              }



            // populate INFO CARD with Name from selection

            $("#pokemonInfoName").html(`<h4 class='nameText'>${pokemonName.charAt(0).toUpperCase() + pokemonName.substring(1)}</h4><hr>`);

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

            $('#pokemonInfoHeight').html(`<h6>Height: ${height * 10}m</h6>`);
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
          alert("Pokemon API call failed. Try again!");
        });
      }, i*60);
    }



}, 0);


// logic for introduction animations

  setTimeout(function(){

    $("#pokemonTitle").fadeIn(1000);
    setTimeout(function(){
      $("#pokemonTitle").fadeOut(1000);
      setTimeout(function(){
        $("#pokedexTitle").fadeIn(1000);
        setTimeout(function(){
          $("#titleScreen").fadeOut(1000);
          setTimeout(function(){
            $("#mainBoard").slideDown(3000);
            setTimeout(function(){
              setTimeout(function(){
                  $("#background1").fadeIn(1000);

                  setInterval(function(){
                    backgroundValue = parseInt($("#backgroundSlider").val());
                    if (backgroundValue === 1){
                      $("#background1").show();
                      $("#background2").hide();
                      $("#background3").hide();
                      $("#background4").hide();
                      $("#background5").hide();

                    } else if (backgroundValue === 2){
                      $("#background1").hide();
                      $("#background2").show();
                      $("#background3").hide();
                      $("#background4").hide();
                      $("#background5").hide();
                    } else if (backgroundValue === 3){
                      $("#background1").hide();
                      $("#background2").hide();
                      $("#background3").show();
                      $("#background4").hide();
                      $("#background5").hide();
                    } else if (backgroundValue === 4){
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

              }, 3500);
            }, 1000);
          }, 1500);
        }, 1500);
      }, 1500);
    }, 4000);
  }, 2000);

// Button logic

  $("#pokedexButton").click(function(){
    $("#pokedexcard").slideToggle(200);
  });

  $("#backgroundButton").click(function(){
    $("#environmentCard").slideToggle(200);
  });

  $("#infoButton").click(function(){
    $("#infoCard").slideToggle(200);
  });

  $("#pictureButton").click(function(){
   window.print();
  });

  $("#soundIsOn").click(function(){
    myAudio.muted=true;
    myLoopingAudio.pause();
    $("#soundIsOff").show();
    $("#soundIsOn").hide();
  });
  $("#soundIsOff").click(function(){
    myLoopingAudio.play();
    $("#soundIsOn").show();
    $("#soundIsOff").hide();
  });
});
