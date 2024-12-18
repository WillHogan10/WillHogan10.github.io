var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    

    function createSawBlade(x, y){
      var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap("img/sawblade.png");
    sawBladeHitZone.addChild(obstacleImage);
    obstacleImage.x = -25;
    obstacleImage.y = -25;
    }
    createSawBlade(800, 500);
    createSawBlade(500, 550);
    createSawBlade(750, 480);


    
    function createEnemy(x, y) {
      var enemy = game.createGameItem("enemy", 25);
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = x;
      enemy.y = y;
      game.addGameItem(enemy);
      enemy.velocityX = - 5;
      enemy.rotationalVelocity = 500;
  
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-25)
      }; 
  
      enemy.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.flyTo(700, 490);
      };
    };
    createEnemy(600, 500);
    createEnemy(900, 490);
    

    function createReward(x, y) {
      var reward = game.createGameItem("reward", 25);
      var blueSquare = draw.rect(50, 50, "blue");
      blueSquare.x = -25;
      blueSquare.y = -25;
      reward.addChild(blueSquare);
      reward.x = x;
      reward.y = y;
      game.addGameItem(reward);
      reward.velocityX = - 5;
      reward.rotationalVelocity = 500;
  
      reward.onPlayerCollision = function () {
        game.changeIntegrity(25)
      }; 
  
      reward.onProjectileCollision = function () {
        game.increaseScore(100);
        reward.fadeOut();
      };
    };
    createReward(500, 490);
    createReward(800, 490);
    createReward(1200, 490);

    function createMarker(x, y) {
      var marker = game.createGameItem("marker", 25);
      var greenMarker = draw.rect(50, 50, "green");
      greenMarker.x = -25;
      greenMarker.y = -25;
      marker.addChild(greenMarker);
      marker.x = x;
      marker.y = y;
      game.addGameItem(marker);
      marker.velocityX = - 5;
      marker.rotationalVelocity = 500;

      marker.onProjectileCollision = function (){
        location.reload();
      };
        
      
      
      marker.onPlayerCollision = function (){
        location.reload();
      };


    };
    createMarker(2200, 520);


    function startLevel() {
      // TODO 13 goes below here
      



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
