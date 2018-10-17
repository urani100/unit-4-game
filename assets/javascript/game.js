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
    var winGame = false;
    var lossGame = false;
    
   
    //genarate a random master number
    generateRandomNumber =  function(){
        var number = 0;
         number = Math.floor(Math.random() * 101) + 19;
        $('.mRandomNumber').text(number); 
        return number;
    }
    
    //generate random number for points
    generatePoints = function(){
        return points = Math.floor(Math.random() * 12) + 1;
    }
    
    //generate the points
    var feedPointArray = function(){
        for(var i = 0; i<arrPointLength; i++){
            var point =generatePoints();
            arrPoints.push(point);
       }
    }
    
    // call random numbers
    randomNumber = generateRandomNumber();
    feedPointArray();

    //generate images & assign points to them
   for(var i = 0; i<arrPointLength; i++){
    var body = $('<img>');
    body.addClass('jewels');
    body.attr('src', images[i]);
    body.attr('data-value', arrPoints[i]);
    $('.points').append(body);
   }

//If at one point the score equates the the "master random number" the user wins
//otherwise the user looses + keep a win /loss score
   var compare = function(){
    //    debugger;
       if(total=== randomNumber){
           alert(total + "  you win")
           win++
           $(".win").text(win);
           winGame = true;
        }else if(total > randomNumber){
            alert(total + "  You loose");
            loss++;
            $(".loss").text(loss);
            lossGame = true;
        }
   }

   var reset = function(){
    //    debugger;
       arrPoints = [];
       score = 0;
       randomNumber = 0;
       points = 0;
       total = 0;
       winGame = false;
       lossGame = false;
       randomNumber = generateRandomNumber();
       feedPointArray();
       $('.score').empty();
   }

   //associate clicks to points add points... evaluate points 
   $('.jewels').on("click", function(){
       if(winGame || lossGame){
        reset();
       }
       var value = ($(this).attr('data-value'));
       total+= parseInt(value);
       $('.score').text(total);
        compare();
    })

    

   
})