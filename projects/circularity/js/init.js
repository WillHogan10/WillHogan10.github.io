var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle; 
        var circles = [];
        
        
        
        
        
        


        // TODO 2 : Create a function that draws a circle 
        function drawCircle() {
            circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);
            physikz.addRandomVelocity(circle, canvas, 25, 25);
            view.addChild(circle);
            circles.push(circle);
        }

        // TODO 3 / 7 : Call the drawCircle() function
        for (var i = 1; i <= 100; i++){
            drawCircle(i);
        }



        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //
        
            for (var i = 0; i < circles.length; i++){
                physikz.updatePosition(circles[i]);
                game.checkCirclePosition(circles[i]);

            } 

            
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
           // they were deleted because the hard coded values are not needed and we created a loop to repeat all of the previous hard coded data. 
           

            // TODO 9 : Iterate over the array
           
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {
        var rightEdge = circle.x + circle.radius;
        var leftEdge = circle.x - circle.radius;
        var topEdge = circle.y + circle.radius;
        var bottomEdge = circle.y - circle.radius;

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            
            if (leftEdge > canvas.width ) {
                circle.x = 0;
            }
            
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if (rightEdge < 0){
                circle.x = canvas.width;
                // this if statement checks that if the circle goes past the left side it comes back on the right 

            } 
            if (bottomEdge > canvas.height){
                circle.y = 0;
                // this if statement checks if the circle goes lower than the screen it sets it back to the top.  

            }
            if (topEdge < 0){
                circle.y = canvas.height;
                // this checks that if the circle goes off the top then it sets it back to the bottom. 

            }





            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
