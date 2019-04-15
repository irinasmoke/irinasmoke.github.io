
  var starFieldWidth = 1400;
  var starFieldHeight = document.body.clientWidth; 
  var nstars = 60;
  var starspeed = 3;


//Setup page on page load
(function () {
  addStars(starFieldWidth, starFieldHeight, nstars);
  animateStars(starFieldWidth, starspeed);
})();


// TODO: make some stars bigger than others, and have some blue,
// red or white
function addStars(starFieldWidth, starFieldHeight, noOfStars) {
  var starField = document.getElementById('star-field');
  var numberOfStars = noOfStars;
  
  for (var i = 0; i < numberOfStars; i++) {
    var star = document.createElement('div');
  	star.className = 'star';
    var topOffset = Math.floor((Math.random() * starFieldHeight) + 1);
    var leftOffset = Math.floor((Math.random() * starFieldWidth) + 1);
    star.style.left = topOffset + 'px';
    star.style.bottom = leftOffset + 'px';
    star.style.position = 'absolute';
  	starField.appendChild(star);
  }
}

function animateStars(starFieldWidth, speed) {
  var starField = document.getElementById('star-field');
  var stars = starField.childNodes;
  
  function getStarColor(index) {
    if (index % 8 == 0)
      return 'red';
    else if (index % 10 == 0)
      return 'yellow';
    else if (index % 17 == 0)
      return 'blue';
    else
      return 'white';
  }
  
  function getStarDistance(index) {
    if (index % 6 == 0)
      return '';
    else if (index % 9 == 0)
      return 'near';
    else if (index % 2 == 0)
      return 'far';
    else
      return 0;
  }
  
  function getStarRelativeSpeed(index) {
    if (index % 6 == 0)
      return 1;
    else if (index % 9 == 0)
      return 2;
    else if (index % 2 == 0)
      return -1;
    else
      return 0;
  }
  
  setInterval(function() {
    for (var i = 1; i < stars.length; i++) {
      stars[i].className = 'star' + ' ' + getStarColor(i) + ' ' + getStarDistance(i); 

      var currentLeft = parseInt(stars[i].style.bottom, 10);
      var leftChangeAmount = speed + getStarRelativeSpeed(i);
      var leftDiff;
      if (currentLeft - leftChangeAmount < 0) {
        leftDiff = currentLeft - leftChangeAmount + starFieldWidth;
      }
      else {
        leftDiff = currentLeft - leftChangeAmount;
      }
      stars[i].style.bottom = (leftDiff) + 'px';
    }
    
  }, 20);
  
}


//On page resize, refresh stars 
onresize = function() {
  //Remove the existing stars
  document.querySelectorAll('.star').forEach(function(a){
    a.remove()
  })
  //Add stars back in for the correct width
  addStars(document.body.clientHeight, document.body.clientWidth, nstars);
  }
window.addEventListener("resize", onresize);


//Removes stars from the background
function resetBackground(){

}