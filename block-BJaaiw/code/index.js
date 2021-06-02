let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

window_width = window.innerWidth;
window_height = window.innerHeight;

canvas.width = window_width;
canvas.height = window_height;
canvas.style.background = "#ff8";

var hit_counter = 0;

class Circle {
    constructor(xpos, ypos, radius, speed, color, text) {

        this.position_x = xpos;
        this.position_y = ypos;

        this.radius = radius;

        this.speed = speed;

        this.dx = 1 * this.speed;
        this.dy = 1 * this.speed;

        this.text = text;

        this.color = color;
    }

    draw(context) {
        context.beginPath();
        context.strokeStyle = this.color;
        context.fillText(this.text, this.position_x, this.position_y);
        context.textAlign = "center";
        context.textBaseline = "middle"
        context.font = "30px Arial";
        context.lineWidth = 5;
        context.arc(this.position_x, this.position_y, this.radius, 0, Math.PI * 2);
        context.stroke();
        context.closePath();
    }

    update() {

        this.draw(context);

        if ( (this.position_x + this.radius) > window_width ) {
            this.dx = -this.dx;
            hit_counter++;
        }
        
        if ( (this.position_x - this.radius) < 0 ) {
            this.dx = -this.dx;
            hit_counter++;
        }

        if ( (this.position_y - this.radius) < 0 ) {
            this.dy = -this.dy;
            hit_counter++;
        }

        if ( (this.position_y + this.radius) > window_height ) {
            this.dy = -this.dy;
            hit_counter++;
        }

        this.position_x += this.dx;
        this.position_y += this.dy; 
        
    }
}


let getDistance = function(xpos1, ypos1, xpos2, ypos2) {
  var result = Math.sqrt(Math.pow(xpos2-xpos1, 2) + Math.pow(ypos2-ypos1, 2));
  return result;
}


let randomNumber = function(min, max) {
  var result = Math.random() * (max - min) + min;
  return result;
}


var all_circles = [];

for (var i = 0; i < 10; i++) {

  var radius = 50;
  var random_x = randomNumber(radius, (window_width - radius));
  var random_y = randomNumber(radius, (window_height - radius));

  for( var a = 0; a < all_circles.length; a++) {
    if ( (getDistance(random_x, random_y, all_circles[a].xpos, all_circles[a].ypos) - radius + all_circles[a].radius < 0) ) {
      random_x = randomNumber(radius, (window_width-radius));
      random_y = randomNumber(radius, (window_height-radius));
    }
    a = all_circles.length;
  }

  let my_circle = new Circle(random_x, random_y, radius, 2, 'Black', 'A');
  all_circles.push(my_circle);
}


let updateCircle = function() {
  requestAnimationFrame(updateCircle);
  context.clearRect(0, 0, window_width, window_height);

  all_circles.forEach(element => {
    element.update();
  })
}

updateCircle();