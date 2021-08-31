

let numFrames = 10*60;
let capture;
let lowerLimit;
let upperLimit;

let angle = 30;
function setup() {
  let canvas = createCanvas(1200, 1200, WEBGL);
  angleMode(DEGREES);
  pixelDensity(2);
  frameRate(30);


  canvas.id('canvas');

  capture = new CCapture({
      format: 'png',
      name: 'frames'
  });

  lowerLimit = createSlider(-360,360,-360,1);
  lowerLimit.position(240, 1100);
  lowerLimit.style('width', '720px');


  upperLimit = createSlider(-360,360,360,1);
  upperLimit.position(240, 1150);
  upperLimit.style('width', '720px');




}

function draw() {

// rendering frames

    // if (frameCount === 1){
    //     console.log('Start Recording');
    //     capture.start();
    // }
    //
    // if (frameCount === numFrames){
    //     console.log('Recording done');
    //     noLoop();
    //     capture.stop();
    //     capture.save();
    //     return;
    // }



    //translate(width / 2, height / 2);
    scale(1, -1);
  background(40,40,40);

  //ambientLight(255);
  //pointLight(200,-200,0,0)
  //circle(0,0,50);
  //rotateZ(angle);
  //rotateX(-angle);
  //rotateY(angle);
  line(-450, 0, 450, 0);
  line(0,-450,0,450);




  for (var i = -450; i <= 450; i = i + 90){
      smooth();
      line(i, -5, i, 5);
      line(-5, i, 5, i);
  }

  //rotateX(-angle);


    //angleMode(DEGREES)

    for (var i = lowerLimit.value(); i <= upperLimit.value(); i += 10){
        //angleMode(RADIANS)
        smooth();
        strokeWeight(2);
        stroke(255, 150, 150);

        line(i, 0, i, 100*sin(i));
        stroke(250, 200, 50);
        //line(i, 0, 0, i, 100*sin(i),0);
        //line(i, 0, i, 100*sin(i));
    }

    beginShape();
    for(let i = -360; i <= 360; i++) {
        const x = i;
        const y = 100*sin(i);
        //const y = 0.005*x**2 - 0.4*x + 1
        strokeWeight(2);
        noFill();
        vertex(x, y);
    }
    endShape();




   //angle += 1;


//capture.capture(document.getElementById('canvas'));

}



// function mousePressed(){
//     saveFrames('Js-coordinate', 'png', 1, 2);
// }
