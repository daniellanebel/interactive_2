$(document).ready(function(){



$("#runner").on('mouseover', function(){
    var offset = $(this).offset();
    var goX = Math.random() < 0.3 ? -1 : 1;
    var goY = Math.random() < 0.3 ? -1 : 1;
    $(this).css('top', offset.top + 50 * goY);
    $(this).css('left', offset.left + 70 * goX);


context.fillStyle = 'rgba(255, 0.1, 0.8, 0.5)';
context.fillRect( goX, goY, 25, 25);


});


$('#runner').hover(
       function(){ $(this).removeClass('yellow') },
       function(){ $(this).addClass('black') }
)


var CANVAS_WIDTH = window.innerWidth;
var CANVAS_HEIGHT = window.innerHeight;

var FPS = 80;
    
var canvas;
var context;
var dot;

init();

function init() {
  canvas = document.getElementById('canvas');
  
  if (canvas && canvas.getContext) {
    context = canvas.getContext('2d');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
  
    createTrail();
    
    setInterval(loop, 1000 / FPS);
  }
}

function createTrail() {
  dot = {
    x: 700, 
    y: 350,
    speed: 3,
    direction: Math.PI * 2 * Math.random()
  }
}

function updatePosition() {
  var dx = dot.x + dot.speed * Math.cos(dot.direction);
  var dy = dot.y + dot.speed * Math.sin(dot.direction);
  
  if (dx < 0 || dx > CANVAS_WIDTH || dy < 0 || dy > CANVAS_HEIGHT) {
    dot.direction = Math.PI * 2 * Math.random();
    updatePosition();
  } else {
    dot.x = dx;
    dot.y = dy;
  }
}

function loop() {
  updatePosition();
  
  // Draw over the whole canvas to create the trail effect
  context.fillStyle = 'rgba(255, 255, 255, 0)';
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  // Draw the dot
  context.beginPath();
  context.fillStyle = '#f55acc';
  context.moveTo(dot.x, dot.y);
  context.arc(dot.x, dot.y, 3, 0, Math.PI*2, true);
  context.fill();
}

});





(function() {
    
    var mX, mY, distance,
        $distance = $('#distance span'),
        $element  = $('#faces-1-0');

    function calculateDistance(elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
    }

    $(document).mousemove(function(e) {  
        mX = e.pageX;
        mY = e.pageY;
        distance = calculateDistance($element, mX, mY);

    });



})();




document.addEventListener('mousemove',function(event){
 
 
  // let width = (event.pageY / window.innerHeight) * 100
  // let height = (event.pageX / window.innerWidth) * 100

let xOrY = false
if(event.pageX > event.pageY){
	var width = event.pageX
	var height = event.pageX
	var smaller = event.pageY
	xOrY = true
} else {
	var width = event.pageY
	var height = event.pageY
	var smaller = event.pageX
	xOrY = false
}

	let faces = document.querySelectorAll('.faces-1')
	console.log(smaller)

for(let counter = 0; counter < faces.length; counter++){
	faces[counter].style.width = faces[counter].style.height = width +'px'

	if(xOrY){
		faces[counter].style.transform = 'translateY(-'+ (width - smaller + 50 ) +'px)'	
	} else {
		faces[counter].style.transform = 'translateX(-'+ (width - smaller + 50 ) +'px)'
	}



if(width > 150){

	document.getElementById('faces-1-0').src='2_pink.svg';
	document.getElementById('faces-1-1').src='2_purple.svg';
	document.getElementById('faces-1-2').src='2_yellow.svg';
	document.getElementById('faces-1-3').src='2_pink.svg';
	document.getElementById('faces-1-4').src='2_yellow.svg';
	document.getElementById('faces-1-5').src='2_yellow.svg';
	document.getElementById('faces-1-6').src='2_pink.svg';
	document.getElementById('faces-1-7').src='2_yellow.svg';
	document.getElementById('faces-1-8').src='2_blue.svg';
	document.getElementById('faces-1-9').src='2_yellow.svg';
	document.getElementById('faces-1-10').src='2_pink.svg';
	document.getElementById('faces-1-11').src='2_purple.svg';
	document.getElementById('faces-1-12').src='2_yellow.svg';
	document.getElementById('faces-1-13').src='2_yellow.svg';
	document.getElementById('faces-1-10').src='2_pink.svg';
	document.getElementById('faces-1-11').src='2_purple.svg';
	document.getElementById('faces-1-12').src='2_yellow.svg';
	document.getElementById('faces-1-13').src='2_yellow.svg';

	document.getElementById('faces-1-14').src='2_blue.svg';
	document.getElementById('faces-1-15').src='2_purple.svg';
	document.getElementById('faces-1-16').src='2_pink.svg';
	document.getElementById('faces-1-17').src='2_blue.svg';
	document.getElementById('faces-1-18').src='2_yellow.svg';
	document.getElementById('faces-1-19').src='2_blue.svg';
	document.getElementById('faces-1-20').src='2_purple.svg';
	document.getElementById('faces-1-21').src='2_pink.svg';
	document.getElementById('faces-1-22').src='2_blue.svg';
	document.getElementById('faces-1-23').src='2_yellow.svg';
	document.getElementById('faces-1-24').src='2_blue.svg';
	document.getElementById('faces-1-25').src='2_purple.svg';
	document.getElementById('faces-1-26').src='2_yellow.svg';
	document.getElementById('faces-1-27').src='2_blue.svg';
	document.getElementById('faces-1-28').src='2_blue.svg';
	document.getElementById('faces-1-29').src='2_yellow.svg';
	document.getElementById('faces-1-30').src='2_pink.svg';
	document.getElementById('faces-1-31').src='2_purple.svg';
	document.getElementById('faces-1-32').src='2_yellow.svg';
	document.getElementById('faces-1-33').src='2_blue.svg';
	document.getElementById('faces-1-34').src='2_purple.svg';
	document.getElementById('faces-1-35').src='2_pink.svg';
	document.getElementById('faces-1-36').src='2_yellow.svg';
	document.getElementById('faces-1-37').src='2_pink.svg';
	document.getElementById('faces-1-38').src='2_purple.svg';
	document.getElementById('faces-1-39').src='2_yellow.svg';
	document.getElementById('faces-1-40').src='2_yellow.svg';







}

if(width > 250){
	document.getElementById('faces-1-0').src='3_pink.svg';
	document.getElementById('faces-1-1').src='3_purple.svg';
	document.getElementById('faces-1-2').src='3_yellow.svg';
	document.getElementById('faces-1-3').src='3_pink.svg';
	document.getElementById('faces-1-4').src='3_yellow.svg';
	document.getElementById('faces-1-5').src='3_yellow.svg';
	document.getElementById('faces-1-6').src='3_pink.svg';
	document.getElementById('faces-1-7').src='3_yellow.svg';
	document.getElementById('faces-1-8').src='3_blue.svg';
	document.getElementById('faces-1-9').src='3_yellow.svg';
	document.getElementById('faces-1-10').src='3_pink.svg';
	document.getElementById('faces-1-11').src='3_purple.svg';
	document.getElementById('faces-1-12').src='3_yellow.svg';
	document.getElementById('faces-1-13').src='3_yellow.svg';
	document.getElementById('faces-1-10').src='3_pink.svg';
	document.getElementById('faces-1-11').src='3_purple.svg';
	document.getElementById('faces-1-12').src='3_yellow.svg';
}


if(width > 500){
	document.getElementById('down').style.marginTop = '1600px'; 
}
if(width > 300){
    document.getElementById('down').style.marginTop = '200px'; 
}else{
	document.getElementById('down').style.marginTop = '20px'; 
}

if(width < 150){
	document.getElementById('faces-1-0').src='1_pink.svg';
	document.getElementById('faces-1-1').src='1_purple.svg';
	document.getElementById('faces-1-2').src='1_yellow.svg';
	document.getElementById('faces-1-3').src='1_pink.svg';
	document.getElementById('faces-1-4').src='1_yellow.svg';
	document.getElementById('faces-1-5').src='1_yellow.svg';
	document.getElementById('faces-1-6').src='1_pink.svg';
	document.getElementById('faces-1-7').src='1_yellow.svg';
	document.getElementById('faces-1-8').src='1_blue.svg';
	document.getElementById('faces-1-9').src='1_yellow.svg';
	document.getElementById('faces-1-10').src='1_pink.svg';
	document.getElementById('faces-1-11').src='1_purple.svg';
	document.getElementById('faces-1-12').src='1_yellow.svg';
	document.getElementById('faces-1-13').src='1_yellow.svg';
	document.getElementById('faces-1-10').src='1_pink.svg';
	document.getElementById('faces-1-11').src='1_purple.svg';
	document.getElementById('faces-1-12').src='1_yellow.svg';
	document.getElementById('faces-1-13').src='1_yellow.svg';

	document.getElementById('faces-1-14').src='1_blue.svg';
	document.getElementById('faces-1-15').src='1_purple.svg';
	document.getElementById('faces-1-16').src='1_pink.svg';
	document.getElementById('faces-1-17').src='1_blue.svg';
	document.getElementById('faces-1-18').src='1_yellow.svg';
	document.getElementById('faces-1-19').src='1_blue.svg';
	document.getElementById('faces-1-20').src='1_purple.svg';
	document.getElementById('faces-1-21').src='1_pink.svg';
	document.getElementById('faces-1-22').src='1_blue.svg';
	document.getElementById('faces-1-23').src='1_yellow.svg';
	document.getElementById('faces-1-24').src='1_blue.svg';
	document.getElementById('faces-1-25').src='1_purple.svg';
	document.getElementById('faces-1-26').src='1_yellow.svg';
	document.getElementById('faces-1-27').src='1_blue.svg';
	document.getElementById('faces-1-28').src='1_blue.svg';
	document.getElementById('faces-1-29').src='1_yellow.svg';
	document.getElementById('faces-1-30').src='1_pink.svg';
	document.getElementById('faces-1-31').src='1_purple.svg';
	document.getElementById('faces-1-32').src='1_yellow.svg';
	document.getElementById('faces-1-33').src='1_blue.svg';
	document.getElementById('faces-1-34').src='1_purple.svg';
	document.getElementById('faces-1-35').src='1_pink.svg';
	document.getElementById('faces-1-36').src='1_yellow.svg';
	document.getElementById('faces-1-37').src='1_pink.svg';
	document.getElementById('faces-1-38').src='1_purple.svg';
	document.getElementById('faces-1-39').src='1_yellow.svg';
	document.getElementById('faces-1-40').src='1_yellow.svg';
}




document.addEventListener('mousemove',function(event){
	document.querySelectorAll('#.faces-1').src='1_yellow.svg';
})

	

}

  // document.getElementById('faces-1-0').style.width = width + "px";
   
  // document.getElementById('faces-1-0').style.height = height + "px";



  // document.getElementById('faces-1-1').style.width = width + "px";
   
  // document.getElementById('faces-1-1').style.height = height + "px";



  //  document.getElementById('faces-1-2').style.width = width + "px";
   
  // document.getElementById('faces-1-2').style.height = height + "px";



  //    document.getElementById('faces-1-3').style.width = width + "px";
   
  // document.getElementById('faces-1-3').style.height = height + "px";


  // document.getElementById('faces-1-4').style.width = width + "px";
   
  // document.getElementById('faces-1-4').style.height = height + "px";


  //   document.getElementById('faces-1-5').style.width = width + "px";
   
  // document.getElementById('faces-1-5').style.height = height + "px";



  //   document.getElementById('faces-1-6').style.width = width + "px";
   
  // document.getElementById('faces-1-6').style.height = height + "px";


  //     document.getElementById('faces-1-7').style.width = width + "px";
   
  // document.getElementById('faces-1-7').style.height = height + "px";



  //       document.getElementById('faces-1-8').style.width = width + "px";
   
  // document.getElementById('faces-1-8').style.height = height + "px";



  //       document.getElementById('faces-1-9').style.width = width + "px";
   
  // document.getElementById('faces-1-9').style.height = height + "px";



  //       document.getElementById('faces-1-10').style.width = width + "px";
   
  // document.getElementById('faces-1-10').style.height = height + "px";





  //     document.getElementById('faces-1-11').style.width = width + "px";
   
  // document.getElementById('faces-1-11').style.height = height + "px";




  //     document.getElementById('faces-1-12').style.width = width + "px";
   
  // document.getElementById('faces-1-12').style.height = height + "px";



  //     document.getElementById('faces-1-13').style.width = width + "px";
   
  // document.getElementById('faces-1-13').style.height = height + "px";



  //     document.getElementById('faces-1-14').style.width = width + "px";
   
  // document.getElementById('faces-1-14').style.height = height + "px";



  
  //     document.getElementById('faces-1-15').style.width = width + "px";
   
  // document.getElementById('faces-1-15').style.height = height + "px";
  
  
  //     document.getElementById('faces-1-16').style.width = width + "px";
   
  // document.getElementById('faces-1-16').style.height = height + "px";



  //      document.getElementById('faces-1-17').style.width = width + "px";
   
  // document.getElementById('faces-1-17').style.height = height + "px";



  //      document.getElementById('faces-1-18').style.width = width + "px";
   
  // document.getElementById('faces-1-18').style.height = height + "px";




  //    document.getElementById('faces-1-19').style.width = width + "px";
   
  // document.getElementById('faces-1-19').style.height = height + "px";
  



  //    document.getElementById('faces-1-20').style.width = width + "px";
   
  // document.getElementById('faces-1-20').style.height = height + "px";



  //    document.getElementById('faces-1-21').style.width = width + "px";
   
  // document.getElementById('faces-1-21').style.height = height + "px";

  
  

  //      document.getElementById('faces-1-22').style.width = width + "px";
   
  // document.getElementById('faces-1-22').style.height = height + "px";
  
  
})

