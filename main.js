noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;



function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}

function modelloaded() {
    console.log('posenet is initialized');
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+leftWristX+" rightWristX = "+rightWristX+" difference = "+difference);
}
}

function draw() {
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    document.getElementById("square").innerHTML = "Width and Height of the Square Will be " +difference+"px."
        square(noseX, noseY, difference); 
    //drawing a square at the x and y 
    //position of my nose and the 
    //differnce between the left and 
    //right wrist and making that the 
    //side length of the square
}

    //Why I should use WebGL? WebGL is 
    //blindingly fast and fully utilizes 
    //hardware acceleration, making it 
    //suitable for games or complex 
    //visualizations.