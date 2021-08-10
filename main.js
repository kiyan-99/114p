function preload(){
    clown_nose = loadImage('https://i.postimg.cc/SNtgVtrt/mustache.png');
}
nosex=0;
nosey=0;
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,nosex,nosey,30,30);
}
function take_snapshot(){
    save('myimage.png')
}
function modelLoaded(){
    console.log("poesnet is started");
}
function gotPoses(results){
    console.log(results);
    nosex=results[0].pose.nose.x-15;
    nosey=results[0].pose.nose.y;
    console.log(results[0].pose.nose.x);
    console.log(results[0].pose.nose.y);
}