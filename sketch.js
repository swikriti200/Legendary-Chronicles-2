var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var startQuiz=0


var form, player, game;


function preload(){
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.start();
}


function draw(){
 if(startQuiz==1){
    quiz=new Quiz();
    quiz.display();
 }
}
