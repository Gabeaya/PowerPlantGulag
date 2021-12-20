import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { plant1, feed, blueFood, hydrate, superWater, heroWater, light, enlighten, plant2, plant3} from './triangle.js';
$(document).ready(function() {
//functionality buttons to add extra plants
  $('#addDracaena').click(function() {
    $('.grow2').show();
    $('#addDracaena').hide();
  });

  $('#addPrayer').click(function() {
    $('.grow3').show();
    $('#addPrayer').hide();
  });

  //the three functions increment the properties of Monty
  $('#hydrate').click(function() { //Htmls "add H20" button clicked
    const newState = plant1(superWater); //we pass our superWater Factory function into our state control function to create object property
    $('#hydration-value').text(`Hydration: ${newState.water}`);//we apply our new state into the value box to be displayed
    // note that the water2 in the last part of the line 10 must correspond with the string passed into superWater factory function
  });
  // increments a value of 1 to the soil property
  $('#feed').click(function() {
    const newState = plant1(feed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });
  // increments a value of 5 to the light property
  $('#light').click(function() {
    const newState = plant1(enlighten);
    $('#light-value').text(`Light: ${newState.light}`);
  });

  $('#show-state').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = plant1();
    $('.monty-values').toggle();
    $('#hydration-value').text(`Hydration: ${currentState.water}`);
    $('#soil-value').text(`Soil: ${currentState.soil}`);
    $('#light-value').text(`Light: ${currentState.light}`);
    
  });

  // the 3  below affect Darcy's properties
  $('#hydrate2').click(function() {
    const newState = plant2(hydrate);
    $('#hydration-value2').text(`Hydration: ${newState.water}`);
  });
  $('#feed2').click(function() {
    const newState = plant2(blueFood);
    $('#soil-value2').text(`Soil: ${newState.soil}`);
  });
  $('#light2').click(function() {
    const newState = plant2(enlighten);
    $('#light-value2').text(`Light: ${newState.light}`);
  });
  $('#show-state2').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = plant2();
    $('.darcy-values').toggle();
    $('#hydration-value2').text(`Hydration: ${currentState.water}`);
    $('#soil-value2').text(`Soil: ${currentState.soil}`);
    $('#light-value2').text(`Light: ${currentState.light}`);
  });

  // PAT THE PLANT's properties
  $('#hydrate3').click(function() {
    const newState = plant3(heroWater);
  $('#hydration-value3').text(`Hydration: ${newState.water}`);
  });
  $('#feed3').click(function() {
    const newState = plant3(blueFood);
    $('#soil-value3').text(`Soil: ${newState.soil}`);
  });
  $('#light3').click(function() {
    const newState = plant3(light);
    $('#light-value3').text(`Light: ${newState.light}`);
  });
  $('#show-state3').click(function() {
    const currentState = plant3();
    $('.pat-values').toggle();
    $('#hydration-value3').text(`Hydration: ${currentState.water}`);
    $('#soil-value3').text(`Soil: ${currentState.soil}`);
    $('#light-value3').text(`Light: ${currentState.light}`);
  });
  //win button?
  $('#submit').click(function() {
    /* eslint-disable no-console */
    console.log("high");
    const currentState = plant1()
    console.log(`${currentState.water}`);
    if (currentState.water === 5 && currentState.soil === 5 && currentState.light === 5) {
      console.log("You Win!");
    }
    else{
      console.log("Try again next round");
    }
    /* eslint-disable no-console */
  });

});


