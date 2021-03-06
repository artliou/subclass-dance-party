$(document).ready(function() {
  window.dancers = [];
  var colors = ['palevioletred', 'red', 'yellow', 'peachpuff', 'orchid', 'seashell', 'blue', 'orange', 'black', 'dodgerblue', 'lightpink'];
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
    // var randomColor = colors[Math.floor(Math.random() * 11)];
    window.dancers.push(dancer.$node);
    $('body').append(dancer.$node);
  });

  $('.lineUp').on('click', function(event) {
    console.log(window.dancers);
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    }
  });
});
  
  // $('.interact').on('click', function(event) {
    
    
  // });
  //   // var tempDancers = window.dancers;
  //   // for (var i = 0; i < tempDancers.length; i++) {
  //   //   for (var j = i + 1; j < tempDancers.length; j++) {
    //     var shortestDisance = Infinity;
    //     var curntDistance = Math.hypot(dancers[i].top - 
    //       dancers[j].top, dancers[i].left - dancers[j].left);
    //     console.log(currentDistance);
    //     if (currentDistance < shortestDisance) {
    //       shortestDisance = currentDistance;
    //       tempDancers.length = tempDancers.length - 2;
    //       tempDancers[i].css('border', '10px solid yellow');
    //       tempDancers[j].css('border', '10px solid black');       
    //       tempDancers.splice(i, 1);
    //       tempDancers.splice(j, 1);
    //     }
    //     //Do something, then remove;
    //     // tempDancers[i].css('border', '10px solid yellow');
    //     // tempDancers[j].css('border', '10px solid black');       
    //     // tempDancers.splice(i, 1);
    //     // tempDancers.splice(j, 1);
    //   }
    // }

