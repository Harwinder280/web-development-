const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Set canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const balls = [];
const ballCountElement = document.createElement('div');

// Display ball count
ballCountElement.style.position = 'absolute';
ballCountElement.style.top = '10px';
ballCountElement.style.right = '10px';
ballCountElement.style.color = 'white';
document.body.appendChild(ballCountElement);

// Random number generator
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Ball class
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    if (this.x + this.size >= canvas.width || this.x - this.size <= 0) {
      this.velX = -this.velX;
    }
    if (this.y + this.size >= canvas.height || this.y - this.size <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }
}

// Initialize balls
function createBalls() {
  for (let i = 0; i < 30; i++) {
    const size = random(10, 20);
    const ball = new Ball(
      random(size, canvas.width - size),
      random(size, canvas.height - size),
      random(-7, 7),
      random(-7, 7),
      `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, 0.8)`,
      size
    );
    balls.push(ball);
  }
}

// Animation loop
function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
  }

  ballCountElement.textContent = `Ball count: ${balls.length}`;
  requestAnimationFrame(loop);
}

// Run animation
createBalls();
loop();
