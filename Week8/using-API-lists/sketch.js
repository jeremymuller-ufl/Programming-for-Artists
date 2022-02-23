/***********
 * Uses the Open Weather API.
 * You need to create an account in order to get a free API key.
 ***********/

let weatherData;
let url = 'https://api.openweathermap.org/data/2.5/forecast';
let city = 'Atlanta';
let units = 'imperial';
let apiKey = '900d32473e89bf64c8a97e7dfcdc7015';

// the '+' sign used with strings will concatenate the strings into one
let request = url + '?q=' + city + '&units=' + units + '&appid=' + apiKey;
// the full url result will look like this, try it in your browser and see for yourself:
// https://api.openweathermap.org/data/2.5/forecast?q=Atlanta&units=imperial&appid=900d32473e89bf64c8a97e7dfcdc7015

function setup() {
    createCanvas(600, 400);

    loadJSON(request, myResult);

    colorMode(HSB, 255);
    angleMode(DEGREES);

}

function draw() {
    background(0);

    if (weatherData) {
        /**** Uncomment below for a linear graph of 5-day forecast ****/
        // for (let i = 0; i < weatherData.list.length; i++) {
        //     let x = width / weatherData.list.length * i;
        //     let y = height/2;
        //     let temp = weatherData.list[i].main.temp;
        //     let humidity = weatherData.list[i].main.humidity;
        //
        //     noStroke();
        //     let hue = map(humidity, 0, 100, 0, 255);
        //     fill(255);
        //     ellipse(x, y - temp, 10, 10);
        //
        //     stroke(hue, 255, 255);
        //     line(x, y, x, y - temp);
        // }
        /***********************************************/

        /**** Uncomment below for a circular display of 5-day forecast ****/
        let incr = 360 / weatherData.list.length;
        let r = 100;
        let index = 0;
        for (let a = 0; a < 360; a += incr) {
            let temp = weatherData.list[index].main.temp;
            temp *= 2;

            let humidity = weatherData.list[index].main.humidity;

            let x = temp * cos(a) + width/2;
            let y = temp * sin(a) + height/2;

            let hue = map(humidity, 0, 100, 0, 255);


            stroke(hue, 255, 255);
            line(width/2, height/2, x, y);

            fill(255);
            noStroke();
            ellipse(x, y, 8);

            fill(0);
            ellipse(width/2, height/2, 10);

            index++;
        }
        /***********************************************/

    }


}

function myResult(data) {
    weatherData = data;
}
