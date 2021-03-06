$(document).ready(function(){
  window.dancers = [];
  window.danceFloor = new DiscoFloor();
  var constructors = ["Magee","Marcus","Fred","Phillip"];

  $(".danceOff").hide();
  $(".floorSelector").on("change", function(){
    var floorFunction = window[$(this).val()];
    window.danceFloor = new floorFunction();
  })
  $(".lineUpButton").on("click", danceFloor.LineEmUp);

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
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
    var dancerMakerFunctionName = constructors[Math.floor(Math.random() * constructors.length)];
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      ($("body").height() * .85) * Math.random(),
      ($("body").width() * .85)* Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });
});

