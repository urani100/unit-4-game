$(document).ready(function(){

    //place everything in an object

    var images=['assets/images/bird.jpg', 
                'assets/images/part-1.png',
                'assets/images/part-2.png',
                'assets/images/part-3.png'];
    var arrPoints = []; // var arrPoints = new Array(4) does not work... first element is "empty"
    var arrPointLength = 4;
    var score = 0;
    var randomNumber = 0;
    var points = 0;
    var total = 0;
    var win = 0;
    var loss = 0;
    
   
    //genarate a random master number
    generateRandomNumber =  function(){
        var number = 0;
         number = Math.floor(Math.random() * 101) + 19;
        $('.mRandomNumber').text(number); 
        return number;
    }//end of generateRandomNumber
    
    //generate random number for points
    generatePoints = function(){
        return points = Math.floor(Math.random() * 12) + 1;
    }
    
    // genarate a random number
    var randomNumber = generateRandomNumber();
    
    //generate the points
    
    for(var i = 0; i<arrPointLength; i++){
        var point =generatePoints();
        arrPoints.push(point);
   }

    //generate images & assign points to them
   
   for(var i = 0; i<arrPointLength; i++){
    var body = $('<img>');
    body.addClass('jewels');
    body.attr('src', images[i]);
    body.attr('data-value', arrPoints[i]);
    $('.points').append(body);
   }

//If at one point the score equates the the "master random number" the user wins
//otherwise the user looses + keep a win score
   var compare = function(){
       if(total=== randomNumber){
           alert(total + "  you win")
           win++
           $(".win").text(win);
        }else if(total > randomNumber){
            alert(total + "  You loose");
            loss++;
        }
   }
   
   //associate clicks to points add points... evaluate points 
   $('.jewels').on("click", function(){
       var value = ($(this).attr('data-value'));
       total+= parseInt(value);
       $('.score').text(total);
        compare();
    })

//Reset the game  after a win or a loss

})