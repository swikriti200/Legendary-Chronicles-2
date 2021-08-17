class Quiz {

    constructor() {
      this.title = createElement('h1');
      this.title2 = createElement('h3');
      this.input1 = createInput("Enter Answer");
      this.input2 = createInput("Enter Answer");
      this.input3 = createInput("Enter Answer");
      this.input4 = createInput("Enter Answer");
      this.a1 = createElement('h3')
      this.a2 = createElement('h3')
      this.a3 = createElement('h3')
      this.a4 = createElement('h3')
      this.a5 = createElement('h3')
      this.button1 = createButton('Submit');
      this.clue1=null;
      this.clue2=null;
      this.clue3=null;
      this.clue4=null;
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
     // this.title.html("Legendary Chronicles");
      //this.title.position(displayWidth/2,50);
      this.title2.html("Give the right answer to rule the kingdom.");
      this.title2.position(displayWidth/2 - 50, 120);
      //this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
     // this.button.position(displayWidth/2 + 30, displayHeight/2);
     // this.reset.position(displayWidth-100,20);
     // this.image.position(10, 100);
     // this.image.size (400, 400);
  
     // this.image1.position(width-400, 100);
     // this.image1.size (400, 400);
  
     // this.image2.position(0, height-230);
     // this.image2.size (width,230);
  
         this.a1.html("What are the four pillars of king to rule a kindom?")
         this.a1.position(450, 150);
          this.a2.html("Clue1: Neccesity to survive.")
          this.a3.html("Clue2: To wear and protect yourself.");
          this.a4.html("Clue3: You can but anything using this.")
          this.a5.html("Clue4: 3/4th of the world is covered with it.");
          this.a3.position(350, 250);
          this.a2.position(350, 200);
          this.a4.position(350, 300);
          this.a5.position(350, 350);
           
          this.input1.position(700, 200);
          this.input2.position(700, 250);
          this.input3.position(700, 300);
          this.input4.position(700, 350);

          this.button1.position(600, 500);
          
     // this.image.hide();
     // this.image1.hide();
     // this.image2.hide();
     
     this.button1.mousePressed(()=>{
        this.a1.hide();
      this.a2.hide();
      this.a3.hide();
      this.a4.hide();
      this.a5.hide();
      this.button1.hide();
      this.clue1 = this.input1.value();
      this.clue2 = this.input2.value();
      this.clue2 = this.input3.value();
      this.clue4 = this.input4.value();
      });
       
      
    }
  }
  