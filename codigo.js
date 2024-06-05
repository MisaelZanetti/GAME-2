let bird;
let xbird = 50;
let tuberias;
let xtuberias = 50;
let isJumping = false;
let fzasalto = -5;
let gravedad = 0.2;

function setup() {
    createCanvas(700, 700);
    bird = createSprite(xbird, height / 2, 40, 40);
    bird.shapeColor = color(246, 243, 23);
    bird.velocity.y = 0;
    tuberias();
}

function draw() {
    background(220);
    isJumping = false;
    bird.velocity.y += gravedad;
    bird.position.y += bird.velocity.y;
    drawSprites();
}

function keyPressed() {
    if (key === ' ' && !isJumping) {
        bird.velocity.y = fzasalto;
        isJumping = true;
    }
}

function tuberias() {
    bird = createSprite(xbird, height / 2, 40, 40);
    bird.shapeColor = color(246, 243, 23);
    bird.velocity.y = 0;
}