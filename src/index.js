import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { stateControl, feed, blueFood, hydrate, superWater, heroWater, light, enlighten, plant2} from './triangle.js';
$(document).ready(function() {
//the three functions increment the properties of Monty
  $('#hydrate').click(function() { //Htmls "add H20" button clicked
    const newState = stateControl(superWater); //we pass our superWater Factory function into our state control function to create object property
    $('#hydration-value').text(`Hydration: ${newState.water}`);//we apply our new state into the value box to be displayed
    // note that the water2 in the last part of the line 10 must correspond with the string passed into superWater factory function
  });
  // increments a value of 1 to the soil property
  $('#feed').click(function() {
    const newState = stateControl(feed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });
  // increments a value of 5 to the light property
  $('#light').click(function() {
    const newState = stateControl(enlighten);
    $('#light-value').text(`Light: ${newState.light2}`);
  });

  $('#show-state').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = stateControl();
    $('.monty-values').toggle();
    $('#hydration-value').text(`Hydration: ${currentState.water}`);
    $('#soil-value').text(`Soil: ${currentState.soil}`);
    $('#light-value').text(`Light: ${currentState.light2}`);
    
  });

// the 3  below affect Darcy's properties
  $('#2hydrate').click(function() {
    const newState = plant2(hydrate);
    $('#2hydration-value').text(`Hydration: ${newState.water}`);
  });
  $('#2feed').click(function() {
    const newState = stateControl(blueFood);
    $('#2soil-value').text(`Soil: ${newState.soil2}`);
  });
  $('#2light').click(function() {
    const newState = stateControl(light);
    $('#2light-value').text(`Light: ${newState.light}`);
  });
  $('#show-state2').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = stateControl();
    $('.darcy-values').toggle();
    $('#2hydration-value').text(`Hydration: ${currentState.water}`);
    $('#2soil-value').text(`Soil: ${currentState.soil2}`);
    $('#2light-value').text(`Light: ${currentState.light}`);
  });

// pat the plant's properties
  $('#3hydrate').click(function() {
    const newState = stateControl(superWater);
  $('#3hydration-value').text(`Hydration: ${newState.water}`);
  });
});


