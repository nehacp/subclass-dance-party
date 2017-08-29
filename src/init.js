$(document).ready(function() {
  window.drakes = [];
  window.lisas = [];
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    if (dancerMakerFunctionName === 'DrakeDancer'){
    window.drakes.push(dancer);
    } else if (dancerMakerFunctionName === 'SimpsonDancer'){
    window.lisas.push(dancer);
    }
    $('div.dancefloor').append(dancer.$node);
  });
  
  //work in progress
  $('button').on('click', function(event){
    var left = 10;
    var bottom = 100;

    for (var i = 0; i < 5; i++){
      $(window.drakes[i][0]).css('left', left);
      $(window.drakes[i][0]).css('bottom', bottom);
    }
  })
});
