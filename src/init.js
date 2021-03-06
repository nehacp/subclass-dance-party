$(document).ready(function() {
  window.dancers = [];

  // window.drakes = [];
  // window.lisas = [];
  var count = 0;
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
    var i = 1;
    if (dancerMakerFunction === BlinkyDancer){
      i = 10;
    }
    
    // make a dancer with a random position
    for (j=0; j < i; j++){
      var dancer = new dancerMakerFunction(
        Math.abs($('body').height() * Math.random() - 261),
        $('body').width() * Math.random(),
        Math.random() * 1000, count++
      );
      window.dancers.push(dancer);

      $('div.dancefloor').append(dancer.$node);
    }
  });
  //lineup dancers
  $('button').on('click', function(event) {
    window.dancers.forEach(dancer => {
      if (!(dancer instanceof BlinkyDancer)) {
        dancer.$node.css({'top': 'auto','bottom': '0px'});
      }
    });
  });

  //dancer on mouseover event
  $(document).on('mouseover', 'span', function(event){
    $this = window.dancers[$(this).data().index]
    //if drake
    if ($this instanceof DrakeDancer) {
      //activate drake jump
      $this.stop();
      //if lisas
    } else if ($this instanceof SimpsonDancer) {
      //she stops moving
      $this.stop();
      //if blinkyDancer
    } else if ($this instanceof BlinkyDancer) {
      //expand size
      $this.expand();
    }
  });
  //dancer on click event
  $(document).on('mouseleave', 'span', function(event){
    $this = window.dancers[$(this).data().index]
    //if drake
    if ($this instanceof DrakeDancer) {
      //activate drake jump
      $this.step();
      //if lisas
    } else if ($this instanceof SimpsonDancer) {
      //she stops moving
      $this.step();
      //if blinkyDancer
    } else if ($this instanceof BlinkyDancer) {
      //expand size
      $this.reduce();
    }
  });
  $(document).on('click', 'span', function(event){
    $this = window.dancers[$(this).data().index]
    //if drake
    if (!($this instanceof BlinkyDancer)) {
      var dancer = $this.findClosest();
      console.log('this: ', $this, 'pair:', dancer);
      dancer.jump();
      $this.jump();
    }
  });
});
