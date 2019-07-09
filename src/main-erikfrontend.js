// Front end logic.
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  let pokemonnumber = 151;

  for (var j = 0; j < 16; j++) {
    for (var i = 0; i < 10; i++) {
      $("#row" + (j + 1)).append("<div id='pokeSprite" + (i + 1) + "'class='pokemonSprites col-1'><img src='https://www.pkparaiso.com/imagenes/xy/sprites/animados/mew.gif' alt='placeholder image of a pokemon for our pokedex.'></div>")
    }
  }


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
});
