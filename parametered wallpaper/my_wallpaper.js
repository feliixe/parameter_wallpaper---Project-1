//your parameter variables go here!
//let hat
let hatX = 100// x point of hat
let hatY = 97// y point of hat
let hatWidth = 50// the hat width
let hatHeight = hatWidth + 0// the hat length

//let face
let faceX = 85// x point of face
let faceY = 59// y point of face
let faceW = 30//face width
let faceH = 40// face lenghth
let roundness_radius = 50
let roundness = true; // if statement of face shape 


//let ear
let ear_X = 100// x point for ear
let ear_Y = 80// y point for ear
let ear_width = 10//ear lenghth
let ear_height = 10// ear lenghth
let ear_S = 20// free space between each ear


//let eyes
let eyes_X = 100// x point for eyes
let eyes_Y = 85// y point for eyes
let eyes_W = 5//eyes width
let eyes_H = 8// eyes lenghth
let eyes_S = 5// free space between each eye


//let cheek
cheekX = 100// point x for cheek
cheekY = 89// point y for cheek
cheekW = 2//  cheek width
cheekH = 10// cheek lenghth
cheekS = 5// free space between each cheek

//let lotus
let lotus_size = 30// the size of lotus
let lotus_angle = -80// angle count from the cen
let lotus_Y = 40//point y for lotus petal
let lotus_X = -10// point x for lotus petal
let lotus_thickness = 1// petal width
let lotus_strokeWeight = 6// line width

//let seedpod
let seedpodX = -10//point x of lotus seed pod
let seedpodY = 80// point y of lotus seed pod
let seedpodW = 80// more less number, the bigger the seedpod
let seedpodH = 20// the less, the smaller
let seedpodThickness = 20


//let arc angle
let arc_X = 100// point x of an arc
let arc_Y = 250// point y of an arc
let arc_W = 80// arc width
let arc_H = 300// arc length
let start_Angle = 0//point angle to start
let stop_Angle = 180// point angle to end


function setup_wallpaper(pWallpaper){
  //pWallpaper.output_mode (DEVELOP_GLYPH);
  //pWallpaper.output_mode(GLIDE_WALLPAPER)
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT)
  pWallpaper.show_guide (false);// set this to false when you're already to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 220;
  pWallpaper. grid_settings.row_offset = 50;
}

function wallpaper_background(){
  angleMode(DEGREES)

  background(255, 214, 89);//mustard yellow
}

function my_symbol (){
 
  
  AoDaiHat()
  AoDai()
  faceShape()
  lotus()


}
 function AoDaiHat(x, y, w, h) {
  push()
  fill(29, 73, 150); // dark navy blue
  strokeWeight(1)
  stroke (200, 217, 247)// light sky blue
  //ellipse(hatX, hatY, hatWidth, hatHeight)
  ellipse(hatX, hatY -28, hatWidth, hatHeight)
  ellipse(hatX, hatY -25, hatWidth -10, hatHeight-15);
  ellipse(hatX, hatY -21, hatWidth -20, hatHeight-30);
  ellipse(hatX, hatY -18, hatWidth -30, hatHeight-35);
  pop();
 }

 function faceShape() {
  //face shape
  push()
  fill(255, 198, 166)// skin colour
  strokeWeight (0)
  stroke(255, 198, 166)// skin colour
  if(roundness){
    rect(faceX, faceY, faceW, faceH, roundness_radius)
    
  }else{
    rect(faceX, faceY, faceW, faceH)
  }
 
  // rect(x, y, w, h, roundNess_radius )
  pop();


  //ears
  push()
  fill(255, 198, 166)// skin colour
  strokeWeight (0)
  stroke(255, 198, 166)// skin colour
  ellipse(ear_X - ear_S, ear_Y, ear_width, ear_height);//left ear
  ellipse(ear_X + ear_S, ear_Y, ear_width, ear_height);//right ear
  pop();

  //eyes
  //ellipse(eyes_X, eyes_Y, eyes_W, eyes_H)
  push()
  fill(20, 19, 18)// black
  noStroke()
  ellipse(eyes_X + eyes_S, eyes_Y, eyes_W, eyes_H);//left eye
  ellipse(eyes_X - eyes_S, eyes_Y, eyes_W, eyes_H);//right eye
  pop();

  //cheeks
  push()
  fill(247, 171, 156)// peach
  noStroke()
  ellipse(cheekX - cheekS, cheekY, cheekW, cheekH);//left cheek
  ellipse(cheekX +cheekS, cheekY, cheekW, cheekH);//right cheek
  pop();
 }

 function AoDai() {
 //AoDaidress
  push()
  fill(186, 67, 34)// bold red
  noStroke()
  //arc(x, y, w, h, start, stop)
  arc(arc_X, arc_Y, arc_W, arc_H, start_Angle +180, stop_Angle +180);//upper part of Vietnamese tarditional clothes
  pop();
  

//collar
  push()
  fill(250, 248, 247)//white
  strokeWeight(1)
  stroke(29, 73, 150)//dark navy blue
  //rect (x, y, w, h)
  rect(105, 120, 15, 50);// right AoDai collar
  rect(80, 120, 15, 50);// left AoDai collr
  pop();


  //hand
  push()
  strokeWeight (0)
  stroke(255, 198, 166)// skin colour
  fill(255, 198, 166)// skin colour
  rect(80, 165, 20, 15, roundness_radius);
  rect(100, 165, 20, 15, roundness_radius);
  // rect(x, y, w, h, roundNess_radius )
  pop();



   //sleeves
push()
fill(117, 42, 21) //dark red
noStroke()
//arc(x, y, w, h, start, stop)
arc(arc_X -10, arc_Y -120 ,  arc_W , arc_H -60, 90, 180 );//left sleeves
arc(arc_X +10, arc_Y -120, arc_W, arc_H -60, 0, 90 );//right sleeves
pop();
}

function lotus() {

  //lotus pedicel
noFill()
strokeWeight(4)
stroke(120, 191, 84)
//arc(x, y, w, h, start, stop)
arc(lotus_X-5, lotus_Y+5, 10, 90, start_Angle +2, stop_Angle -90);


fill(245, 171, 196)
strokeWeight(3)
stroke(250, 110, 157)

  // lotus petal side bottom
  lotusFlower(lotus_X -12, lotus_Y +5, lotus_angle -75, lotus_size, lotus_thickness +0.05);
  lotusFlower(lotus_X +12, lotus_Y +5, lotus_angle +75, lotus_size, lotus_thickness +0.05);

  // // lotus petal center side
  lotusFlower(lotus_X -9 , lotus_Y, lotus_angle -35, lotus_size -4 , lotus_thickness);
  lotusFlower(lotus_X +9 , lotus_Y, lotus_angle +35, lotus_size -4, lotus_thickness);
  
  // // lotus petal center
  lotusFlower(lotus_X, lotus_Y -5, lotus_angle, lotus_size +5, lotus_thickness +0.5); 


  //seedpod pedicel
  push()
  noFill();
  strokeWeight(5)
  stroke(127, 173, 80)
  //arc(x,y,w,h,start,stop)
  arc(seedpodX +60, seedpodY +30, 120, 110, start_Angle +130, stop_Angle +10);//right bottom corner
  pop();

  //seedpod
  push()
  stroke(127, 173, 80)
  strokeWeight(2)
  fill (127, 173, 80)// baby green colour
 //arc(x, y, w, h, start, stop)
 //arc (seedpodX +3, seedpodY, seedpodW +40, seedpodH, 210 , 180)
 arc (seedpodX, seedpodY, seedpodW , seedpodH +30, start_Angle , stop_Angle)
 pop();

  //seedpod surface
  push()
  fill(178, 230, 145)
  strokeWeight(3)
  stroke(127, 173, 80)// grass colour
  //ellipse (x, y, w, h)
  ellipse(seedpodX ,seedpodY, seedpodW, seedpodH);
  fill(72, 105, 51)// moss colour

  
  pop();

  //lotus bud pedicel
  push()


  //lotus bud pedicel
  push()
  noFill();
 strokeWeight( lotus_strokeWeight)
  stroke(127, 173, 80)
  //arc(x, y, w, h, start, stop)
  arc(lotus_X +30, lotus_Y-50, 90, 100, -20, 70);//right bottom corner
  
  
  pop();

  // // lotus buds
 //lotusFlower(166, 80, -140, 35, 2);
 //lotusFlower(162, 90, -160, 25, 3);
 //lotusFlower(177, 83, -97, 27, 3);
  //pop();

  // // lotus buds
  push//
  
  lotusFlower(lotus_X +66, lotus_Y -75, lotus_angle -20, lotus_size +28, lotus_thickness);
  lotusFlower(lotus_X +62, lotus_Y -65, lotus_angle -90, lotus_size +14, lotus_thickness);
  lotusFlower(lotus_X +77, lotus_Y -72, lotus_angle +20, lotus_size +10, lotus_thickness);
pop();


}
function lotusFlower(x, y, angle, size, parameter) {
  // Your implementation of drawing the drop using the provided parameters
  // ...
  }

function lotusFlower(x, y, t, r, A) {  // // this code method was a reword from Black Lotusは高値の高嶺の花！by reona396 (https://openprocessing.org/sketch/870195)
  push();
  translate(x, y);
  rotate(t);
  beginShape();
  for (let theta = 0; theta < 360; theta++) { 
  let R = r / (A * sin(theta / 2) + 1);
  vertex(R * cos(theta), R * sin(theta));
  }
  endShape(CLOSE);
  pop();
  }
