const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Helper function to generate random colors
function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgba(${r}, ${g}, ${b}, 0.8)`;
}

// Helper function to generate random numbers
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Ball object constructor
function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

// Ball methods
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

Ball.prototype.update = function () {
  if (this.x + this.size >= canvas.width || this.x - this.size <= 0) {
    this.velX = -this.velX;
  }
  if (this.y + this.size >= canvas.height || this.y - this.size <= 0) {
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
};

Ball.prototype.collisionDetect = function (balls) {
  for (let i = 0; i < balls.length; i++) {
    if (this !== balls[i]) {
      const dx = this.x - balls[i].x;
      const dy = this.y - balls[i].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[i].size) {
        this.color = balls[i].color = randomColor();
      }
    }
  }
};

// Initialize balls
let balls = [];
while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    random(size, canvas.width - size),
    random(size, canvas.height - size),
    random(-7, 7),
    random(-7, 7),
    randomColor(),
    size
  );

  balls.push(ball);
}

// Animation loop
function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect(balls);
  }

  requestAnimationFrame(loop);
}

loop();

// Resize canvas on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
