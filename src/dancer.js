var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img class="dancer"></img>');
  this.$node.draggable();
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  setTimeout(this.getAtMe.bind(this), 1000);
  this.bustCount = 1;
};

Dancer.prototype.step = function() {
  var that = this;
  setTimeout(function(){that.step();}, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    position: 'fixed',
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.getAtMe = function(){
  for (var i = 0; i < dancers.length; i++){
    if (!(this instanceof dancers[i].constructor)){
      var yDiff = Math.abs(this.$node.offset().top - dancers[i].$node.offset().top);
      var xDiff = Math.abs(this.$node.offset().left - dancers[i].$node.offset().left);
      if (yDiff < 75 && xDiff < 100){
        $('.danceOff').toggle("pulsate", 1200, function(){
          $('.danceOff').toggle("pulsate", 1200);
        });
        danceFloor.timeToStep(dancers.indexOf(this), i);
        return;
      }
    }
  }
};

Dancer.prototype.bustMove = function(effectName, optionVal, duration) {
  $(this.$node).effect(effectName, {distance : (optionVal * this.bustCount)}, duration * this.bustCount);
  this.bustCount++;
}
