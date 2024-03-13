let angulo, raio, lua, sol, h, m, ceu;

function setup() {
    let w = windowWidth;
    createCanvas(w, w / 2);
    colorMode(HSB, w);

    ceu = color("#3BB2E3");

    angulo = -90;
    raio = w / 12;

    h = 0;
    m = 0;

    frameRate(20);
}

function draw() {
    background(ceu);
    
    m++;
    if (m === 60) {
        h++;
        h === 24 ? h = 0 : h = h;
        m = 0;
    } 

    // h = hour();
    // m = minute();
    
    angulo = 360 / 24 * h - 90;
    angulo += 360 / 24 / 60 * m;
    
    lua = mostraAstro(angulo, "#F8F8FF");
    sol = mostraAstro(angulo + 180, "#FFD700");

    ceu = color(hue(ceu), saturation(ceu), lua.y + width / 2);

    let txt = h % 12;
    txt === 0 ? txt = 12 : txt = txt;
    txt += ":";
    m < 10 ? txt += "0" + m : txt += m;
    h < 12 ? txt += " am" : txt += " pm";

    push();
    fill("#fff");
    stroke("#000");
    strokeWeight(2);
    textSize(width / 8);
    textFont("Lucida Sans");
    textAlign(CENTER, BOTTOM)
    text(txt, width / 2, height - 20);
    pop();
}

function mostraAstro(ang, cor) {
    let v = p5.Vector.fromAngle(radians(ang));
    v.mult(width / 2 - raio);

    push();
    translate(width / 2, width / 2);

    ellipseMode(RADIUS);
    noStroke();
    fill(cor);
    circle(v.x, v.y, raio);
    pop();

    return v;
}