class Rune {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color(0);
        this.points = [];
        this.lines = [];
        this.p1 = floor(random(4));
        this.p2 = floor(random(4)) + 4;

        this.doOffset = random(100) < 50;
        this.twoStrokes = random(100) < 50;
        this.addCircle = random(100) < 5;

        for (let x = 0; x < 2; x++) {
            for (let y = 0; y < 4; y++) {
                this.points.push(createVector(x * this.w, y * (this.h/4)));
            }
        }

        this.setRune();
    }

    setRune() {
        let offset = 0;
        if (this.doOffset) {
            offset = this.w/2;
        }
        this.lines.push({'x1': this.points[0].x + offset, 'y1': this.points[0].y, 'x2': this.points[3].x + offset, 'y2': this.points[3].y});
        this.lines.push({'x1': this.points[this.p1].x, 'y1': this.points[this.p1].y, 'x2': this.points[this.p2].x, 'y2': this.points[this.p2].y});

        if (this.twoStrokes) {
            let p1 = (this.p1+1) % 4;
            let p2 = this.p2;
            this.lines.push({'x1': this.points[p1].x, 'y1': this.points[p1].y, 'x2': this.points[p2].x, 'y2': this.points[p2].y});
        }

    }

    setColor(c) {
        this.color = c;
    }

    displayRune() {
        strokeWeight(3);
        push();
        translate(this.x, this.y);

        // line(this.points[0].x, this.points[0].y, this.points[6].x, this.points[6].y);

        // for (let i = 0; i < this.points.length; i++) {
        //     const p = this.points[i];
        //     strokeWeight(10);
        //     stroke('red');
        //     point(p.x, p.y);
            
        // }

        strokeWeight(3);
        stroke(this.color);
        for (let i = 0; i < this.lines.length; i++) {
            line(this.lines[i].x1, this.lines[i].y1, this.lines[i].x2, this.lines[i].y2);
        }

        

        pop();
    }
}
