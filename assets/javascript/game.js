$(document).ready(function(){

var game={
    images: ['assets/images/owl.jpg', 
    'assets/images/hedgehog.jpg',
    'assets/images/squirrel.jpg',
    'assets/images/rabbit.jpg'],
    arrPoints: [], // var arrPoints = new Array(4) does not work... first element is "empty"
    arrPointLength : 4,
    score: 0,
    randomNumber: 0,
    points: 0,
    total: 0,
    win: 0,
    loss: 0,
    winGame: false,
    lossGame: false,

    //genarates a the main random number
    generateRandomNumber:  function(){
        var number = 0;
         number = Math.floor(Math.random() * 101) + 19;
        $('.mRandomNumber').text(number); 
        return number;
    },

    //generates random number for points
    generatePoints : function(){
        return this.points = Math.floor(Math.random() * 12) + 1;
    },
    
    //generate the points and pushes them in an array
    feedPointArray : function(){
        for(var i = 0; i<this.arrPointLength; i++){
            var point = this.generatePoints();
            this.arrPoints.push(point);
       }
    },

    //If at one point the score equates the the random number the user wins
    //otherwise the user looses + keep a win /loss score
    compare: function(){
        if(this.total=== this.randomNumber){
           this.win++
           $(".win").text(this.win);
           this.winGame = true;
        }else if(this.total > this.randomNumber){
            this.loss++;
            $(".loss").text(this.loss);
            this.lossGame = true;
        }
    },
    
    // set up initial game
    setUp: function(){
    // call random numbers
    this.randomNumber= this.generateRandomNumber();
    //set up array
    this.feedPointArray();
    //generate images & assign points to them
    for(var i = 0; i<this.arrPointLength; i++){
        var body = $('<img>');
        body.addClass('jewels');
        body.attr('src', this.images[i]);
        body.attr('data-value', this.arrPoints[i]);
        $('.points').append(body).css('display', 'inline-block');
       }
    },
    // resets game to it original state
    reset : function(){
        this.arrPoints = [];
        this.score = 0;
        this.randomNumber = 0;
        this.points = 0;
        this.total = 0;
        this.winGame = false;
        this.lossGame = false;
        this.randomNumber = this.generateRandomNumber();
        this.feedPointArray();
        $('.score').empty();
    },

}//end of object
   
    
    // call game set up
     game.setUp();

   //on clicks function
   $('.jewels').on("click", function(){
       if(game.winGame || game.lossGame){
        game.reset();
       }
       var value = ($(this).attr('data-value'));
       game.total+= parseInt(value);
       $('.score').text(game.total);
        game.compare();
    })

})// end of document.ready