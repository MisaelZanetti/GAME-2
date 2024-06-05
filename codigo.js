let bird;
let xbird = 50;
let puntos = 0;
let tb;
let xtb = 810;
let tb2;
let xtb2 = 810;
let ytb2;
let tb3;
let xtb3 = 1110;
let tb4;
let xtb4 = 1110;
let ytb4;
let tb5;
let xtb5 = 1410;
let tb6;
let xtb6 = 1410;
let ytb6;
let isJumping = false;
let fzasalto = -4;
let gravedad = 0.2;

function setup() {
    createCanvas(700, 700);
    bird = createSprite(xbird, height / 2, 40, 40);
    bird.shapeColor = color(246, 243, 23);
    bird.velocity.y = 0;
    tuberias();
}

function draw() {
    background(23, 233, 243);
    isJumping = false;
    bird.velocity.y += gravedad;
    bird.position.y += bird.velocity.y;
    textAlign(CENTER);
    textSize(20);
    text(`Puntos: ${puntos}`, 660, 30);
    drawSprites();
    if (tb.position.x < -70) {
        puntos ++;
        tb.position.x = 810;
        tb2.position.x = 810;
        tb2.position.y = random(-100, 200);
        tb.position.y = tb2.position.y + 750;
    }
    if (tb3.position.x < -70) {
        puntos ++;
        tb3.position.x = 810;
        tb4.position.x = 810;
        tb4.position.y = random(-100, 200);
        tb3.position.y = tb4.position.y + 750;
    }
    if (tb5.position.x < -70) {
        puntos ++;
        tb5.position.x = 810;
        tb6.position.x = 810;
        tb6.position.y = random(-100, 200);
        tb5.position.y = tb6.position.y + 750;
    }
}

function keyPressed() {
    if (key === ' ' && !isJumping) {
        bird.velocity.y = fzasalto;
        isJumping = true;
    }
}

function tuberias() {
    ytb2 = random(-100, 200)
    tb = createSprite(xtb, ytb2 + 750, 60, 500);
    tb.shapeColor = color(48, 184, 12);
    tb.velocity.x = -3;
    tb2 = createSprite(xtb2, ytb2, 60, 500);
    tb2.shapeColor = color(48, 184, 12);
    tb2.velocity.x = -3;
    ytb4 = random(-100, 200)
    tb3 = createSprite(xtb3, ytb4 + 750, 60, 500);
    tb3.shapeColor = color(48, 184, 12);
    tb3.velocity.x = -3;
    tb4 = createSprite(xtb4, ytb4, 60, 500);
    tb4.shapeColor = color(48, 184, 12);
    tb4.velocity.x = -3;
    ytb6 = random(-100, 200);
    tb5 = createSprite(xtb5, ytb6 + 750, 60, 500);
    tb5.shapeColor = color(48, 184, 12);
    tb5.velocity.x = -3;
    tb6 = createSprite(xtb6, ytb6, 60, 500);
    tb6.shapeColor = color(48, 184, 12);
    tb6.velocity.x = -3;
}