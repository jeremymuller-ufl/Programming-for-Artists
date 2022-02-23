/***********
 * Uses the Open Weather API.
 * You need to create an account in order to get a free API key.
 * very boring display of data but you can see how it works
 ***********/

let weather;
let url = "https://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&appid=900d32473e89bf64c8a97e7dfcdc7015";

function setup() {
    createCanvas(400, 400);

    loadJSON(url, parseData);
}

function parseData(data) {
    // console.log(data);
    weather = data;
}

function draw() {
    background(0);

    if (weather) {
        noStroke();
        ellipse(width / 2, height / 2, weather.main.temp, weather.main.temp);

        ellipse(width/4, height/2, weather.main.humidity, weather.main.humidity);
    }
}
