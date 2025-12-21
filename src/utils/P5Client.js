import p5 from "p5";

export function P5Client() {

  new p5((sketch) => {
    let particles = [];

    sketch.setup = () => {
        sketch.createCanvas(window.innerWidth, window.innerHeight);
        for (let i = 0; i < 80; i++) {
        particles.push({
            x: sketch.random(sketch.width),
            y: sketch.random(sketch.height),
            r: sketch.random(2, 5),
            dx: sketch.random(-1, 1),
            dy: sketch.random(-1, 1)
        });
        }
    };

    sketch.draw = () => {
      sketch.clear();
      sketch.background(20, 20, 40, 150);
      sketch.noStroke();
      sketch.fill(200, 100, 255);

      for (let p of particles) {
        sketch.circle(p.x, p.y, p.r * 2);
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > sketch.width) p.dx *= -1;
        if (p.y < 0 || p.y > sketch.height) p.dy *= -1;
      }
    };

    sketch.windowResized = () => {
      sketch.resizeCanvas(window.innerWidth, window.innerHeight);
    };
  }, document.getElementById("p5-container"));
}