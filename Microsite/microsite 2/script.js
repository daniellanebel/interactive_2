$(document).ready(function(){



$('.position-1').hover(
       function(){ $(this).addClass('position-2') },
       function(){ $(this).removeClass('position-1');
});



$('.position-2').hover(
       function(){ $(this).addClass('position-3') },
       function(){ $(this).removeClass('position-2'):
});





});