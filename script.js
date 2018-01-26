
$(document).keydown(function (e) {



if(e.keyCode == 32) {
    $('.bird').animate({'marginBottom' : '+=100px'}, 500)
}







    //switch(e.which) 

//    {

  //  case 37:
    //    $('.bird').stop().animate({
      //      left: '-=40'
        //}); //left arrow key
        //break;
    
    //case 38:
      //  $('.bird').stop().animate({
        //    top: '-=40'
       // }); //up arrow key
        //break;
   // 
//    case 39:
  //      $('.bird').stop().animate({
    //        left: '+=40'
      //  }); //right arrow key
        //break;
    
   // case 40:
     //   $('.bird').stop().animate({
       //     top: '+=40'
        //}); //bottom arrow key
       // break;
    //}

});





function saut() {
    $('.bird').animate({'marginBottom': '+=200px'})
    
};



function down() {
    $('.bird').animate({'marginBottom': '-=200px'})
   
};


function right() {
    $('.bird').animate({'marginLeft': '+=200px'})
  
};

function left() {
    $('.bird').animate({'marginLeft': '-=200px'})
 
};



function message() {
    alert('NTM MATHIS');
}

$("#birdimg").click(function(){
    alert(" chatouille");
});




function bouge() {
    $('.pipe').animate({'marginLeft' : '-=100px'},1500, 'linear')

};
setInterval(function(){bouge()} , 10);


setTimeout('reset()', 2000); // myFunction sera exécutée au bout de 2 secondes

function reset() {
    $('.pipe').stop().animate({'marginLeft': '+=600px'})
};



var Min = 

Min + (Math.random() * (Max - Min))



