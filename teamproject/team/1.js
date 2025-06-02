let isRaining = false;
let clouds = [];
let cars = [];
let rainDrops = [];
let faceState = 0; // 0 - грусть, 1 - радость, 2 - удивление
let face2State = 0; // 0 - обычное лицо, 1 - новая эмоция
let x2 = 600;
let y2 = 360;
let speed2 = 5;
let legFrame = 0;
let slide = 0
function setup() {
  createCanvas(900, 700);
  let fs = fullscreen();

  for (let i = 0; i < 6; i++) {
    clouds[i] = {
      x: random(width),
      y: random(50, 150),
      size: random(60, 100),
      speed: random(0.3, 0.6),
    };
  }

  for (let i = 0; i < 6; i++) {
    cars[i] = {
      x: random(width),
      y: random(height - 60, height - 40),
      color: color(random(100, 255), random(100, 255), random(100, 255)),
      speed: random(2, 3),
    };
  }

  for (let i = 0; i < 1000; i++) {
    rainDrops[i] = {
      x: random(width),
      y: random(-height, 0),
      speed: 8,
    };
  }
}

function draw() {
  
  
  

  background(220);

  if (slide === 0) {
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(50);
    text("Моё крутое название", width / 2, height / 2);
    textSize(20);
    text("Нажми 2 для анимации", width / 2, height / 2 + 60);
  } else if (slide === 1) {
    drawScene(); // твоя анимация
  } else if (slide === 2) {
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(40);
    text("Всем спасибо! До свидания!", width / 2, height / 2);
    textSize(20);
    text("Нажми 1 для названия", width / 2, height / 2 + 50);}
    function drawScene(){
  background(!isRaining ? color(135, 206, 235) : color(100, 130, 160));

  if (!isRaining) {
    drawSun();
  }

  drawClouds();
  drawRoad();
  drawSoongsilBuildings();

  if (isRaining) {
    drawRain();
  }

  drawCars();
  drawCharacters();
}

function drawRoad() {
  fill(128);
  noStroke();
  rect(0, height - 80, width, 80);
  stroke(255);
  strokeWeight(4);
  for (let i = 0; i < width; i += 40) {
    line(i, height - 40, i + 20, height - 40);
  }
}

function drawSoongsilBuildings() {
  drawHyungnamBuilding(20, height - 14 * 40 - 80);
  drawLibrary(190, height - 6 * 40 - 80);
  drawJoMansikBuilding(460, height - 7 * 40 - 80);
  drawITBuilding(690, height - 6 * 40 - 80);
}

function drawHyungnamBuilding(x, y) {
  let floors = 14;
  let floorHeight = 40;
  let buildingWidth = 160;
  fill(220);
  noStroke();
  rect(x, y, buildingWidth, floors * floorHeight);

  for (let i = 0; i < floors; i++) {
    for (let j = 0; j < 4; j++) {
      let windowX = x + 15 + j * 35;
      let windowY = y + 40 + i * 35;
      fill(isRaining ? color(250, 255, 150) : color(200, 200, 200));
      rect(windowX, windowY, 25, 25, 5);
    }
  }
  fill(0);
  textSize(18);
  textAlign(CENTER, BOTTOM);
  text("형남공학관", x + buildingWidth / 2, y + 25);
}

function drawLibrary(x, y) {
  let floors = 6;
  let floorHeight = 40;
  let buildingWidth = 255;
  fill(200, 180, 150);
  noStroke();
  rect(x, y, buildingWidth, floors * floorHeight);

  for (let i = 0; i < floors; i++) {
    for (let j = 0; j < 5; j++) {
      let windowX = x + 20 + j * 45;
      let windowY = y + 35 + i * 35;
      fill(isRaining ? color(250, 255, 150) : color(200, 200, 200));
      rect(windowX, windowY, 35, 25, 5);
    }
  }
  fill(0);
  textSize(18);
  textAlign(CENTER, BOTTOM);
  text("중앙도서관", x + buildingWidth / 2, y + 25);
}

function drawJoMansikBuilding(x, y) {
  let floors = 7;
  let floorHeight = 40;
  let buildingWidth = 210;
  fill(220);
  noStroke();
  rect(x, y, buildingWidth, floors * floorHeight);

  for (let i = 0; i < floors; i++) {
    for (let j = 0; j < 4; j++) {
      let windowX = x + 20 + j * 45;
      let windowY = y + 35 + i * 35;
      fill(isRaining ? color(250, 255, 150) : color(200, 200, 200));
      rect(windowX, windowY, 35, 25, 5);
    }
  }
  fill(0);
  textSize(18);
  textAlign(CENTER, BOTTOM);
  text("조만식기념관", x + buildingWidth / 2, y + 25);
}

function drawITBuilding(x, y) {
  let floors = 6;
  let floorHeight = 40;
  let buildingWidth = 200;
  fill('#b9d6f2');
  noStroke();
  rect(x, y, buildingWidth, floors * floorHeight);

  for (let i = 0; i < floors; i++) {
    for (let j = 0; j < 4; j++) {
      let windowX = x + 20 + j * 45;
      let windowY = y + 35 + i * 35;
      fill(isRaining ? color(250, 255, 150) : color(200, 200, 200));
      rect(windowX, windowY, 30, 25, 5);
    }
  }
  fill(0);
  textSize(18);
  textAlign(CENTER, BOTTOM);
  text("정보과학관", x + buildingWidth / 2, y + 25);
}

function drawSun() {
  fill(255, 204, 0);
  noStroke();
  ellipse(600, 100, 80, 80);
}

function drawClouds() {
  for (let cloud of clouds) {
    fill(isRaining ? color(50, 50, 50, 200) : color(255, 255, 255, 190));
    noStroke();
    ellipse(cloud.x, cloud.y, cloud.size, cloud.size * 0.6);
    ellipse(cloud.x + 20, cloud.y + 10, cloud.size * 0.8, cloud.size * 0.5);
    ellipse(cloud.x - 20, cloud.y + 10, cloud.size * 0.8, cloud.size * 0.5);

    cloud.x += cloud.speed;
    if (cloud.x > width + 100) cloud.x = -100;
  }
}

function drawRain() {
  stroke(180, 220, 255);
  strokeWeight(4);

  for (let i = 0; i < rainDrops.length; i++) {
    let drop = rainDrops[i];
    line(drop.x, drop.y, drop.x, drop.y + 5);
    drop.y += drop.speed;

    if (drop.y > height) {
      rainDrops[i] = {
        x: random(width),
        y: random(-100, 0),
        speed: 8,
      };
    }
  }
}

function drawCars() {
  for (let car of cars) {
    fill(car.color);
    noStroke();
    rect(car.x, car.y, 50, 25, 5);

    fill(0);
    ellipse(car.x + 10, car.y + 25, 10, 10);
    ellipse(car.x + 40, car.y + 25, 10, 10);

    fill(200);
    rect(car.x + 30, car.y + 5, 10, 10, 2);
    rect(car.x + 10, car.y + 5, 10, 10, 2);

    car.x += car.speed;
    if (car.x > width + 100) car.x = -100;
  }
}

function drawCharacters() {
   
  //глова 
  noStroke();
  rectMode(CENTER);
  fill("#5A3E34");
  rect(200,355,80,90,20,20,0,0); //hair back
  
  //neck
  fill("#E2C495");
  rect(200,378,20,50);
  
  fill("#F9E1B9");
  ellipse(200,350,60,60); //head
  ellipse(200,360,60,60);
  
  ellipse(170,360,15,20); //ear left
  ellipse(230,360,15,20); //ear right
  fill("#E2C495");
  ellipse(169,360,5,8); //ear shadow left
  ellipse(231,360,5,8);  //ear shadow right
  
  //hair
  fill("#5A3E34");
  rect(200,330,60,30); //челка
  fill("#F9E1B9");
  triangle(200,330,194,345,206,345); //залысина
  stroke("#F9E1B9");
  strokeWeight(1);
  line(200,324,200,313); //пробор
  
  // face
  if (faceState === 2){
    stroke(0);   
    noFill();
    arc(185,354,10,4,0,PI); // eye left
    arc(215,354,10,4,0,PI); //eye right
    
    stroke(0);
    noFill();
    arc(185,346,10,2,PI,0); //eyebrow left
    arc(215,346,10,2,PI,0); //eyebrow right 
    
    noStroke();
    fill("#EC60A09E");
    ellipse(180,360,10,5); //cheek l
    ellipse(220,360,10,5); //cheek r
    
    fill("#E2C495");
    ellipse(200,367,3,6); //nose
    
    stroke("#3D1017"); // lips
    noFill();
    arc(200,380,10,4,0,PI);
  } else if (faceState === 0){
    // грустное выражение
    noStroke();   
    fill(255);
    ellipse(185,354,12,8); // eye left
    ellipse(215,354,12,8); //eye right
    fill("#009688");
    ellipse(185,356,6,6); //радужка л
    ellipse(215,356,6,6); //радужка п
    fill(0);
    ellipse(185,356,3,3); //pupil left
    ellipse(215,356,3,3);// pupil right
    fill(255);
    ellipse(186,354,3,3); //блики л
    ellipse(184,356,2,2);
    ellipse(216,354,3,3); //блики right
    ellipse(214,356,2,2);
    stroke(0);
    noFill();
    arc(185,347,10,2,0,PI); //eyebrow left
    arc(215,347,10,2,0,PI); //eyebrow right 
    
    noStroke();
    fill("#E2C495");
    ellipse(200,367,3,6); //nose
    
    stroke("#3D1017"); // lips
    noFill();
    arc(200,380,10,4,PI,0);
  } else if (faceState === 1){
    noStroke()   
  fill(255)
  ellipse(185,354,12,8) // eye left
  ellipse(215,354,12,8) //eye right
  fill("#009688")
  ellipse(188,355,6,6) //радужка л
  ellipse(218,355,6,6) //радужка п
  fill(0)
  ellipse(188,355,5,5) //pupil left
  ellipse(218,355,5,5)// pupil right
  fill(255)
  ellipse(188,354,4,4) //блики л
  ellipse(186,356,2,2)
  ellipse(218,354,4,4) //блики right
  ellipse(216,356,2,2)
  stroke(0)
  noFill()
  arc(185,346,10,2,0,PI) //eyebrow left

  arc(215,346,10,2,0,PI) //eyebrow right 
  
  noStroke()
  fill("#E2C495")
  ellipse(200,367,3,6) //nose
  stroke("#3D1017") //lips
  fill("#3D1017")
  ellipse(200,380,5,6)
  }
  
  // body
  noStroke();
  fill("#C1CBD5");
  rectMode(CENTER);
  rect(200,453,70,100,20,20,0,0);
 
  fill("#0F2235");
  rect(200,517,70,30); //nax
  rect(180,580,30,100); //leg left
  rect(220,580,30,100); //leg right 
  fill("#8D0505");
  triangle(180,645,188,630,172,630); //shoe left
  triangle(220,645,228,630,212,630); //shoe right 

  // bag
  noStroke();
  fill("#8B0505");
  rect(200,510,50,28,5,5,5,5);
  stroke("#FFC107"); //zip bag
  strokeWeight(1);
  line(200,510,223,500);
  line(200,510,177,500);

  // arms
  stroke("#F9E1B9");
  strokeWeight(20);
  line(175,418,175,470); //arm left
  line(175,470,190,495); 
  line(225,418,225,470); //arm right
  line(225,470,210,495);
  
  stroke("#8D9CAA");
  strokeWeight(0.5);
  fill("#C1CBD5");
  rect(175,418,20,20,15,15,0,0); // sleave left
  rect(225,418,20,20,15,15,0,0); // sleave right
  noStroke()
  

// === Второй персонаж ===
if (keyIsDown(LEFT_ARROW)) {
  x2 -= speed2;
  legFrame = (frameCount % 20 < 10) ? 0 : 1; // шагание
}
if (keyIsDown(RIGHT_ARROW)) {
  x2 += speed2;
  legFrame = (frameCount % 20 < 10) ? 0 : 1; // шагание
}

// тело второго персонажа
noStroke();

  fill("#C7ADAD")
rect(x2,y2 +10,75,110,30,30,0,0) // back hair
  fill("#D5BC95")
  rect(x2,y2 + 40, 20,30) //neck
  noFill()
  stroke("#F7D9AB") // залысина2
  strokeWeight(1)
  line(x2,y2,x2,y2-40)
  noStroke()
fill("#F7D9AB");
ellipse(x2, y2, 60, 70); // голова
  ellipse(x2-30,y2,10,20) //ear left
  ellipse(x2+30,y2,10,20)// ear right
  fill("#D5BC95")
  ellipse(x2-30,y2,5,8) // l ear shadow
  ellipse(x2+30,y2 ,5,8)// r ear shadow
  
  //face
  fill("#F2F4F7")
  ellipse(x2+15,y2,12,8) // eye right
  ellipse(x2-15,y2,12,8) //eye left
  fill("#795548")
  ellipse(x2-17,y2-0.5,7,7) //радужка п
  ellipse(x2+12,y2-0.5,7,7) //радужка л
  fill(0)
  ellipse(x2-17,y2-0.5,4,4) //pupil п
  ellipse(x2+12,y2-0.5,4,4) //pupil л
  fill(255)
  ellipse(x2-16,y2-1,3,3) //блики r
  ellipse(x2+13,y2-1,3,3) //блики l
  noFill()
  stroke("#3F0E0A")
  arc(x2,y2+20,10,4,0,PI) //рот наоборот
  stroke("#8D7979")
  strokeWeight(1.5)
  arc(x2+15,y2-10,10,2,PI,0) //eyebrow r
  arc(x2-15,y2-10,10,2,PI,0) //eyebrow l
   noStroke()
  fill("#D5BC95")
  ellipse(x2-2,y2+8, 3,6) //nose
  
   // body
 fill("#F7D9AB");
if (legFrame === 0) {
  // ноги прямо
  rect(x2 - 17, y2 + 210, 22, 110, 20);
  rect(x2 + 17, y2 + 210, 22, 110, 20);
} else {
  // ноги разведены
  rect(x2 - 22, y2 + 210, 22, 110, 20);
  rect(x2 + 22, y2 + 210, 22, 110, 20);
}

  ellipse(x2-66,y2+110,20)
fill("#393E5A");
rect(x2, y2 + 100, 68, 110,22,22,22,22); //туловище
   triangle(x2,y2+55,x2-55,y2+180,x2+55,y2+180) // skirt
  noFill()
  stroke("#393E5A")
  strokeWeight(20)
  line(x2-20,y2+58,x2-66,y2+110) //arm left
  line(x2+20,y2+58,x2+55,y2+130) //arn right
 
  stroke("#CED9E4")
  strokeWeight(4)
  line(x2-32,y2+133,x2+32,y2+133) //belt
  circle(x2+10,y2+133,10)
  circle(x2,y2+55,5)//пуговицы
  circle(x2,y2+85,5)
  circle(x2,y2+115,5)
 noStroke()
  fill(0);
if (legFrame === 0) {
  // обычное положение
  ellipse(x2 - 17, y2 + 252, 23, 36); // левая туфля
  ellipse(x2 + 17, y2 + 252, 23, 36); // правая туфля
  
  
} else {
  // шаг — туфли врозь
  ellipse(x2 - 22, y2 + 252, 23, 36); // левая туфля
  ellipse(x2 + 22, y2 + 252, 23, 36); // правая туфля
  
}

  fill("#F7D9AB")
  fill("#F7D9AB");
if (legFrame === 0) {
  ellipse(x2 - 17, y2 + 242, 20, 30); // левая щиколотка
  ellipse(x2 + 17, y2 + 242, 20, 30); // правая щиколотка
} else {
  ellipse(x2 - 22, y2 + 242, 20, 30); // шаг врозь
  ellipse(x2 + 22, y2 + 242, 20, 30);
}

  ellipse(x2-70,y2+112,20) //3,14zda
  ellipse(x2+57,y2+132,20) //3,14zda 2
  
 // UMBRELLLAAAAAA
  fill("#B48FF5")
  arc(x2-68,y2-60,250,100,PI,0,) //купол
  fill("#68558A")
  circle(x2-90,y2-60,10)// шарики
  circle(x2-140,y2-60,10)
  circle(x2-190,y2-60,10)
  circle(x2-40,y2-60,10)
   circle(x2+55,y2-60,10)
  circle(x2+10,y2-60,10)
  circle(x2-70,y2-110,10)
  
   
  stroke("#7F8081")
  strokeWeight(5)
  line(x2-68,y2-60,x2-68,y2+112)
  
  // Здесь полностью твой код персонажа...
  // Последняя строка:
  
  
  rectMode(CORNER); // <-- ВАЖНО: вернули обычный режим рисования
}
}
function keyPressed() {
    let fs = fullscreen();
    fullscreen(!fs); //
  if (key === 'r' || key === 'R') {
    isRaining = true;
  } else if (key === 's' || key === 'S') {
    isRaining = false;
  }
   if (key === 'H' || key === 'h') {
    faceState = 2; // радость
  } else if (key === 'W' || key === 'w') {
    faceState = 1; // удивление / нейтральное
  } else if (key === 'D' || key === 'd') {
    faceState = 0; // грусть
  }
 
  if (key === '1') {
    slide = 0;  // первый слайд — название
  } else if (key === '2') {
    slide = 1;  // второй слайд — анимация
  } else if (key === '3') {
    slide = 2;  // третий слайд — спасибо
  
  }




}
