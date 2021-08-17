class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Start');
    this.greeting = createElement('h2');
    this.title = createElement('h1');
    this.title2 = createElement('h3');
    this.reset = createButton('Reset');
    this.image = createImg('alauddin.jpg');
    this.image1 = createImg('padmavati1.jpg');
    this.image2 = createImg('backgroung.jpeg');
    this.name = null;
    this.story = createElement('h4')
    this.story2 = createElement('h4')
    this.story3 = createElement('h4')
    this.button1 = createButton('Play');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Legendary Chronicles");
    this.title.position(displayWidth/2 - 130, 50);
    this.title2.html("The Best One Rules");
    this.title2.position(displayWidth/2 - 50, 100);
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);
    this.image.position(10, 100);
    this.image.size (400, 400);

    this.image1.position(width-400, 100);
    this.image1.size (400, 400);

    this.image2.position(0, height-230);
    this.image2.size (width,230);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.name = this.input.value();
     // playerCount+=1;
      //player.index = playerCount;
     // player.update();
     // player.updateCount(playerCount);
      this.greeting.html("Hello " + this.name)
      this.greeting.position(displayWidth/2 - 40 ,200);

       this.story.html("Once there was two rulers who were fighting for Queen Padmavati")
       this.story.position(450, 250);
        this.story2.html("The best ruler who answers the question of Padmavati's father")
        this.story3.html("will win her and the kingdom and take her to home");
        this.story3.position(450, 350);
        this.story2.position(450, 300);

        this.button1.position(600, 400);
    });
    this.button1.mousePressed(()=>{
      this.greeting.hide();
    this.story.hide();
    this.story2.hide();
    this.story3.hide();
    this.image.hide();
    this.image1.hide();
    this.image2.hide();
    startQuiz=1
    this.button1.hide();
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
