difference=0;
left_WristX=0;
right_WristX=0;

function setup () {
    canvas= createCanvas(500,501);
    canvas.position(850, 400);

    video=createCapture(VIDEO);
    video.size(600, 600);

    posenet= ml5.poseNet(video, foundResult)
    posenet.on("pose", gotPoses);
}
function foundResult() {
    console.log("It made a great journey");
}
function gotPoses (result) {
    if (result.length > 0) {
    console.log(result);
}
}
function draw() {}

