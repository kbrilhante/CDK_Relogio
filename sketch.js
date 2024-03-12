let sol, lua, raio, h, m, ceu;

function setup() {
    createCanvas(800, 400);
    ellipseMode(RADIUS);
    colorMode(HSL, width * 1.8);
    textSize(80);
    textAlign(CENTER, BOTTOM);
    textFont("Lucida Sans");
    raio = 40;
    h = 0;
    m = 0;
    ceu = color("#3BB2E3");
    frameRate(10);
}

function draw() {
    // m++;
    // if(m === 60) {
    //     m = 0;
    //     h++;
    // }
    // if(h === 24) {
    //     h = 0;
    // }

    h = hour();
    m = minute();
    
    let angulo = 360 / 24 * h - 90;
    angulo += 360 / 24 / 60 * m;
    let t = width / 2 - raio;
    lua = p5.Vector.fromAngle(radians(angulo));
    lua.mult(t);
    sol = p5.Vector.fromAngle(radians(angulo + 180));
    sol.mult(t);
    
    ceu = color(hue(ceu), hue(ceu), lua.y + width / 2);
    background(ceu);
    // desenha sol e lua
    push();
    translate(width / 2, width / 2);
    noStroke();
    // lua
    fill("#F8F8FF");
    circle(lua.x, lua.y, raio);
    //sol
    fill("#FFFF00");
    circle(sol.x, sol.y, raio);
    pop();

    let txt = h % 12;
    txt === 0 ? txt = 12 : txt = txt;
    txt < 10 ? txt = "0" + txt : txt = txt;
    txt += ":";
    m < 10 ? m = "0" + m : m = m;
    txt += m;
    h < 12 ? txt += " am" : txt += " pm";
    fill("#fff");
    text(txt, width / 2, height - 10);
}