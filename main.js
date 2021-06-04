canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
rover_height=90;
rover_width=60;
rover_x=10;
rover_y=10;
image1_rover="rover.png";

var mars_imgs=["images (1).jpg","images (2).jpg","mars.jpg","images.jpg"];

var bckd_img=Math.floor(Math.random()*4);

image2_mars=mars_imgs[bckd_img];

function add(){
    background_imageTag= new Image();
    background_imageTag.onload= background_load;
    background_imageTag.src= image2_mars;

    rover_imageTag= new Image();
    rover_imageTag.onload= rover_load;
    rover_imageTag.src= image1_rover;
}
 
function rover_load(){
    ctx.drawImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height);
}

function background_load(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keyPressed=e.keyCode;

    if(keyPressed=='38'){
        up();
        console.log("up");
    }

    if(keyPressed=='40'){
        down();
        console.log("down");
    }

    if(keyPressed=='37'){
        left();
        console.log("left");
    }

    if(keyPressed=='39'){
        right();
        console.log("right");
    }
}

function up(){

    if(rover_y>=0){
        rover_y -= 10;
        console.log("rover Y= "+rover_y + "rover X="+rover_x);
        background_load();
        rover_load();
    }
}

function down(){

    if(rover_y<=600){
        rover_y += 10;
        console.log("rover Y= "+rover_y + "rover X="+rover_x);
        background_load();
        rover_load();
    }
}

function left(){

    if(rover_x>=0){
        rover_x -= 10;
        console.log("rover Y= "+rover_y + "rover X="+rover_x);
        background_load();
        rover_load();
    }
}

function right(){

    if(rover_x<=800){
        rover_x += 10;
        console.log("rover Y= "+rover_y + "rover X="+rover_x);
        background_load();
        rover_load();
    }
}