/*****************
* uses simple rules to generate Norse-like text
* check this site out for designs and runes: https://jonaslaumarkussen.com/
*****************/

let runes = [];

const rH = 50; // 50
const rW = 25; // 25
const margin = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let y = 0; y < height; y += rH+margin) {
        for (let x = 0; x < width; x += rW+margin) {
            runes.push(new Rune(x, y, rW, rH));
        }
    }
}

function draw() {
    background(255);

    for (let i = 0; i < runes.length; i++)
        runes[i].displayRune();


}