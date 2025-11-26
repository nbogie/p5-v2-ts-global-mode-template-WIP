//TODO: move most test code to a separate workout script

import "p5/global";
import p5 from "p5";
import { collect } from "./utils.ts";

//just checking this ts setup can handle the p5 value.
p5.disableFriendlyErrors = false;

//This setup function WON'T be placed on the window object automatically, because we're in a module.
//so p5.js won't find it - without us doing more config (see later)

window.setup = async function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
};

window.draw = function draw() {
    background(30);
    //an example comment within a function
    drawSomeCircles(12);
};

window.mousePressed = function mousePressed() {
    drawRandomCirclesNearMouse(10);
    redraw();
};

window.windowResized = function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
};

/** draw a number of random-sized circles around the canvas
 * @param numCircles - how many circles should be drawn
 */
function drawSomeCircles(numCircles: number) {
    for (let i = 0; i < numCircles; i++) {
        const col: p5.Color = color("lime");
        fill(col);
        const offset = p5.Vector.fromAngle(
            random(TWO_PI),
            min(width, height) * 0.4
        );
        const pos = offset.add(width / 2, height / 2);

        circle(pos.x, pos.y, 20);
    }

    const myNumbers = collect(100, () => random(0, 5));
    console.log({ myNumbers });
}

function drawRandomCirclesNearMouse(numCircles: number) {
    noStroke();
    for (let i = 0; i < numCircles; i++) {
        const offset = p5.Vector.random2D().mult(random(30, 100));
        const radiusFraction = map(offset.mag(), 0, 100, 0, 1, true);
        const { x, y } = offset.copy().add(mouseX, mouseY);
        const diameter = random(10, 100);
        const myColour: p5.Color = lerpColor(
            color("magenta"),
            color("cyan"),
            radiusFraction
        );
        fill(myColour);
        circle(x, y, diameter);
    }
}
