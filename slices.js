function hourSlices() {
    push();
    ellipseMode(RADIUS);
    colorMode(HSL);
    translate(width / 2, width / 2);
    let r = width / 2 - raio * 2;
    for (let i = 0; i < 360; i += 360 / 24) {
            fill(i, 100, 50);
            arc(0, 0, r, r, radians(i - 360 / 24), radians(i), PIE);
    }
    pop();
}

function minSlice() {
    let a0 = radians(360 / 24 * h - 90);
    let a1 = radians(360 / 24 / 60 * m)
    push();
    ellipseMode(RADIUS);
    translate(width / 2, width / 2);
    let r = width / 2 - raio * 2;
    fill("#000");
    arc(0, 0, r, r, a0, a0 + a1);
    pop();
}