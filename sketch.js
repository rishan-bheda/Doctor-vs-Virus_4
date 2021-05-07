var marketImg, virus, virusImg, doctor, doctorImg, npc1, npc2, npc3, npc4, npc5, npc6, manImg1, manImg2, womanImg1, womanImg2, coughSound;

var healthyPeople = 6;
var infectedPeople = 0;

var scoreTest = false;

function preload(){

    marketImg = loadImage("images/market.jpg");
    virusImg = loadImage("images/virus.png");
    doctorImg = loadImage("images/doctor.png");
    manImg1 = loadImage("images/man-1.png");
    manImg2 = loadImage("images/man-2.png");
    womanImg1 = loadImage("images/woman-1.png");
    womanImg2 = loadImage("images/woman-2.png");
    coughSound = loadSound("sounds/coughingSound.mp3");

}

function setup() {

    createCanvas(1550,800);

    virus = createSprite(1450, 700, 50, 50);
    virus.addImage(virusImg);
    virus.scale = 0.25;
    virus.setCollider("rectangle", 0, 0, 150, 150);

    doctor = createSprite(100, 700, 50, 50);
    doctor.addImage(doctorImg);
    doctor.scale = 0.25;
    doctor.setCollider("rectangle", 0, 0, 150, 150);

    npc1 = createSprite(random(550,1000),random(230,700),50,50);
    npc2 = createSprite(random(550,1000),random(230,700),50,50);
    npc3 = createSprite(random(550,1000),random(230,700),50,50);
    npc4 = createSprite(random(550,1000),random(230,700),50,50);
    npc5 = createSprite(random(550,1000),random(230,700),50,50);
    npc6 = createSprite(random(550,1000),random(230,700),50,50);

    npc1.scale = 0.75;
    npc2.scale = 0.75;
    npc3.scale = 0.75;
    npc4.scale = 0.75;
    npc5.scale = 0.75;
    npc6.scale = 0.75;

    npc1.debug = true;
    virus.debug = true;
    doctor.debug = true;

    randomImage();

}

function draw() {

    background(marketImg); 

    fill("green");
    strokeWeight(7);
    textSize(30);
    text("Healthy People : " + healthyPeople, 100, 100);

    fill("red");
    text("Infected People : " + infectedPeople, 1250, 100);


    //console.log(frameCount);

    if(frameCount%300 === 0){

        coughSound.play();

    }
    // virus movement
      
    if(keyDown(RIGHT_ARROW)){

        virus.x = virus.x + 5;

    }

    if(keyDown(LEFT_ARROW)){

        virus.x = virus.x - 5;

    }

    if(keyDown(UP_ARROW)){

        virus.y = virus.y - 5;

    }
    
    if(keyDown(DOWN_ARROW)){

        virus.y = virus.y + 5;

    }

    // doctor movement

    if(keyDown("d")){

        doctor.x = doctor.x + 5;

    }

    if(keyDown("a")){

        doctor.x = doctor.x - 5;

    }

    if(keyDown("w")){

        doctor.y = doctor.y - 5;

    }
    
    if(keyDown("s")){

        doctor.y = doctor.y + 5;

    }

    spawnPeople();

    /*if(npc1.lifetime === 0){

        infectedPeople+=1;

    }*/

    drawSprites();
}

function gameOver(){

    if(healthyPeople === 6/*npc1.lifetime === 0 && npc2.lifetime === 0 && npc3.lifetime === 0 && npc4.lifetime === 0 && npc5.lifetime === 0 && npc6.lifetime === 0*/){

        alert("Game Over, Virus Won");
        
        console.log(npc1.lifetime);

    }

}

function spawnPeople(){

    //virus touching npcs

    if(virus.isTouching(npc1)){

        fill("red");  
        ellipse(npc1.x, npc1.y + 150, 50, 50);

        npc1.lifetime = 350;

        scoreTest = true;

    }

    if(virus.isTouching(npc2)){

        fill("red");  
        ellipse(npc2.x, npc2.y + 150, 50, 50);

        npc2.lifetime = 350;

    }

    if(virus.isTouching(npc3)){

        fill("red");  
        ellipse(npc3.x, npc3.y + 150, 50, 50);

        npc3.lifetime = 350;

    }

    if(virus.isTouching(npc4)){

        fill("red");  
        ellipse(npc4.x, npc4.y + 150, 50, 50);

        npc4.lifetime = 350;

        

    }

    if(virus.isTouching(npc5)){

        fill("red");  
        ellipse(npc5.x, npc5.y + 150, 50, 50);

        npc5.lifetime = 350;

    }

    if(virus.isTouching(npc6)){

        fill("red");  
        ellipse(npc6.x, npc6.y + 150, 50, 50);

        npc6.lifetime = 350;
    }

    //doctor touching npcs

    if(doctor.isTouching(npc1)){

        fill("green");  
        ellipse(npc1.x, npc1.y + 150, 50, 50);

        npc1.lifetime = -350;

        infectedPeople-=1;
        healthyPeople+=1;

    }

    if(doctor.isTouching(npc2)){

        fill("green");  
        ellipse(npc2.x, npc2.y + 150, 50, 50);

        npc2.lifetime = -350;

        infectedPeople-=1;
        healthyPeople+=1;

    }

    if(doctor.isTouching(npc3)){

        fill("green");  
        ellipse(npc3.x, npc3.y + 150, 50, 50);

        npc3.lifetime = -350;

        infectedPeople-=1;
        healthyPeople+=1;

    }

    if(doctor.isTouching(npc4)){

        fill("green");  
        ellipse(npc4.x, npc4.y + 150, 50, 50);

        npc4.lifetime = -350;

        infectedPeople-=1;
        healthyPeople+=1;

    }

    if(doctor.isTouching(npc5)){

        fill("green");  
        ellipse(npc5.x, npc5.y + 150, 50, 50);

        npc5.lifetime = -350;

        infectedPeople-=1;
        healthyPeople+=1;

    }

    if(doctor.isTouching(npc6)){

        fill("green");  
        ellipse(npc6.x, npc6.y + 150, 50, 50);

        npc6.lifetime = -350;

        infectedPeople-=1;
        healthyPeople+=1;

    }

    if(npc1.x >= 1010 && npc1.y <= 444){

        npc1.x = npc1.x - 20;

    }
    else if(npc1.x <= 570 && npc1.y <= 444){

        npc1.x = npc1.x + 20;

    }


    if(npc2.x >= 1010 && npc2.y <= 444){

        npc2.x = npc2.x - 20;

    }
    else if(npc2.x <= 570 && npc2.y <= 444){

        npc2.x = npc2.x + 20;

    }


    if(npc3.x >= 1010 && npc3.y <= 444){

        npc3.x = npc3.x - 20;

    }
    else if(npc3.x <= 570 && npc3.y <= 444){

        npc3.x = npc3.x + 20;

    }


    if(npc4.x >= 1010 && npc4.y <= 444){

        npc4.x = npc4.x - 20;

    }
    else if(npc4.x <= 570 && npc4.y <= 444){

        npc4.x = npc4.x + 20;

    }


    if(npc5.x >= 1010 && npc5.y <= 444){

        npc5.x = npc5.x - 20;

    }
    else if(npc5.x <= 570 && npc5.y <= 444){

        npc5.x = npc5.x + 20;

    }

    
    if(npc6.x >= 1010 && npc6.y <= 444){

        npc6.x = npc6.x - 20;

    }
    else if(npc6.x <= 570 && npc6.y <= 444){

        npc6.x = npc6.x + 20;

    }

}

function randomImage(){

    var randomNum = Math.round(random(1,4));

    switch (randomNum){

        case 1: npc1.addImage(manImg1)
                npc2.addImage(womanImg1)

        break;

        case 2: npc1.addImage(manImg2)
                npc2.addImage(womanImg2)

        break;

        case 3: npc1.addImage(womanImg1)
                npc2.addImage(manImg1)

        break;

        case 4: npc1.addImage(womanImg2)
                npc2.addImage(manImg2)

        break;

    }

    var randomNum2 = Math.round(random(1,4));

    switch (randomNum2){

        case 1: npc3.addImage(womanImg1)
                npc4.addImage(manImg1)

        break;

        case 2: npc3.addImage(womanImg2)
                npc4.addImage(manImg2)

        break;

        case 3: npc3.addImage(manImg1)
                npc4.addImage(womanImg1)

        break;

        case 4: npc3.addImage(manImg2)
                npc4.addImage(womanImg2)

        break;

    }

    var randomNum3 = Math.round(random(1,4));

    switch (randomNum3){

        case 1: npc5.addImage(womanImg1)
                npc6.addImage(manImg1)

        break;

        case 2: npc5.addImage(womanImg2)
                npc6.addImage(manImg2)

        break;

        case 3: npc5.addImage(manImg1)
                npc6.addImage(womanImg1)

        break;

        case 4: npc5.addImage(manImg2)
                npc6.addImage(womanImg2)

        break;

    }

}