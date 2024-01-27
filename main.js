function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video , 170, 130, 300, 250);
    tint(tint_color);
    fill('red');
    circle(75, 85, 100);
    circle(75, 430, 100);
    circle(560, 430, 100);
    circle(560, 85, 100);
    fill('green');
    rect(120, 50, 400, 50);
    rect(120, 400, 400, 50);
    rect(50, 130, 50, 250);
    rect(540, 130, 50, 250);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}


