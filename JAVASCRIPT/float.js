window.onload = function() {
var resetStorage = document.getElementById("emptyStorage");
resetStorage.onclick = clearStorage;
}
function clearStorage() {
localStorage.clear();
alert("Storage is Empty");
}
// POP UP INSTRUCTIONS

alert("The small fish floats randomly. Use  ' s ',  ' e ',  ' f ' & ' d '  keys to rapidly move the large fish. Arrows keys move one pixel at a time. Fish 'Kiss' with a heart and score, when placed lip to lip. A 'Kiss' has one pixel tolerance it is NOT easy.");
      /**
       * Delay for a number of milliseconds
       */
      function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
      }
var score = localStorage.getItem("highscore", score);
//document.getElementById("currentnote").innerHTML = score;
//console.log("pre function: " + score);
function functionADD() {
//console.log("after function: " + score);
document.getElementById("currentnote").innerHTML = score;
score++;
sleep(500);
console.log("After Increment: " + score);
//   localStorage.setItem("score", JSON.stringify(score));
var highscore = localStorage.getItem("highscore", score);
if(highscore !== null){
   if (score > highscore) {
      localStorage.setItem("highscore", score );
      }
}else{
      localStorage.setItem("highscore", score );
}
}

var mxt = 0;
var gx = 0;
do {
      function GetBox () {
        var div = document.getElementById ("floater");
            if (div.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
              var rect = div.getBoundingClientRect ();
              mx = rect.left;
              my = rect.top;
              mw = rect.right - rect.left;
              mh = rect.bottom - rect.top;
              //The collision calibrates different for each collision / kiss. You Must slow down both fish to 'calibrate'
             mmt = my+78;
             mxt= mx + 135;

             
             // floater mmt = my+78;
             // floater mxt= mx + 135;
            //  myraright mmt = my+58;
            //  myraright mxt= mx + 194;
            //  document.getElementById("left").innerHTML = (" Left: " + Math.round(mxt) + "\n Top: " + Math.round(mmt) + "\n Width: " + mw + "\n Height: " + mh);
//               console.log(Math.round(mxt) );

                 document.getElementById("left").innerHTML = (" Left: " + Math.round(mxt) + "\n Top: " + Math.round(mmt) );
            }
            else {
              alert ("Your browser does not support this example!");
            }             //document.querySelector('#myraright').innerHTML = mmt;
      }
// second segment of do loop ---  start get ElementById image1
          function GetFish () {
           var div = document.getElementById ("image1");
            if (div.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
              var rect = div.getBoundingClientRect ();
              gx = rect.left;
              gy = rect.top;
              w = rect.right - rect.left;
              h = rect.bottom - rect.top;
              var  mt = gy+165;
              rightLip =  gx + (mt + 155) 
          //    document.getElementById("right").innerHTML = (" Right: " + gx + "\n Top: " + mt + "\n Width: " + w + "\n Height: " + h);
             document.getElementById("right").innerHTML = (" Right: " + gx + "\n Top: " + mt );
             
              if (Math.round(mxt)+1 == gx && Math.round(mmt) == mt) {
                functionADD();
                tempAlert("<h1> KISS ! </h1>",2000);
                function tempAlert(msg,duration) 
                {
                 var el = document.createElement("div");
                 el.setAttribute("style","position:absolute;top:40%;left:25%;background-image:url('heart.png');background-repeat: no-repeat;");
                 el.innerHTML = msg;
                 setTimeout(function(){
                  el.parentNode.removeChild(el);
                 },duration);
                 document.body.appendChild(el);
                }
              }
            }
            else {
              alert ("Your browser does not support this program");
            }
          }
       // End get ElementById image1 second segment of do loop ---  

       // set interval between getting position of selections 
            setInterval(GetFish, 5);
            setInterval(GetBox, 5);
            }
            while(mxt != gx && mmt != mt){
 }
 /// End of do loop

    $(document).ready(function(){
        animateDiv();
    });
function float(){
    // Using lesson: Getting Window Dimensions
      var h = $(window).height() - 75;
      var w = $(window).width() -35; 
  // Use var h and w defined for a specific area of float
    //  var h = 100;
    //  var w = 200;
     //The +200 and +500 is to set them apart yet facing each other without too much overlap 
      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);
      return [nh,nw];    
}

function animateDiv(){
    var newq = float();
    var oldq = $('.a').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
};
function calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = .03;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;
}


    $(document).ready(function(){
    animateDivm();
 });
function float1(){
    // if you wish  Window - viewport dimensions
 var hm = $(window).height() - 75;
 var wm = $(window).width() - 25;  
 //   var hm = 100;
 //   var wm = 200;
    var nhm = Math.floor(Math.random() * hm -150);
    var nwm = Math.floor(Math.random() * wm - 200);
    return [nhm,nwm];    
 }

function animateDivm(){
    var myral = float1();
    var oldq = $('.b').offset();
    var speed = calcSpeed2([oldq.top, oldq.left], myral);
        $('.b').animate({ top: myral[0], left: myral[1] }, speed, function(){
      animateDivm();        
    });
};

function calcSpeed2(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = .01;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;
}
//Start Animate .c
 $(document).ready(function(){
    animateDivC();
 });
function floatC(){
    // if you wish  Window - viewport dimensions
 var hm = $(window).height() - 75;
 var wm = $(window).width() - 75;  
 //   var hm = 100;
 //   var wm = 200;
    var nhm = Math.floor(Math.random() * hm -50);
    var nwm = Math.floor(Math.random() * wm - 100);
    return [nhm,nwm];    
 }

function animateDivC(){
    var newC = floatC();
    var oldC = $('.c').offset();
    var speed = calcSpeedC([oldC.top, oldC.left], newC);
        $('.c').animate({ top: newC[0], left: newC[1] }, speed, function(){
      animateDivC();        
    });
};

function calcSpeedC(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = .03;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;
}
//End Animate .c
//Start .d
 $(document).ready(function(){
    animateDivD();
 });
function floatD(){
    // if you wish  Window - viewport dimensions
 var hm = $(window).height();
 var wm = $(window).width() ;  
 //   var hm = 100;
 //   var wm = 200;
    var nhm = Math.floor(Math.random() * hm );
    var nwm = Math.floor(Math.random() * wm );
    return [nhm,nwm];    
 }

function animateDivD(){
    var newC = floatD();
    var oldC = $('.d').offset();
    var speed = calcSpeedD([oldC.top, oldC.left], newC);
        $('.d').animate({ top: newC[0], left: newC[1] }, speed, function(){
      animateDivD();        
    });
};

function calcSpeedD(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = .04;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;
}
//End Animate .d

$(function(){
        var x = 0;
        setInterval(function(){
            x-=1;
            $('body').css('background-position', x + 'px 0');
        }, 300);
    })

function myFunction() {
    location.reload();
}