// Select all the ball elements
var balls = document.querySelectorAll('.ball');

// Initialize state for each ball
var ballsData = Array.from(balls).map(() => ({
    velocityX: Math.random() * 4 - 2, // Random horizontal velocity
    velocityY: Math.random() * 4 - 2, // Random vertical velocity
    positionX: Math.random() * (window.innerWidth - 100), // Random starting position X
    positionY: Math.random() * (window.innerHeight - 100) // Random starting position Y
}));

function moveBalls() {
    balls.forEach((ball, index) => {
        // Update positions
        ballsData[index].positionX += ballsData[index].velocityX;
        ballsData[index].positionY += ballsData[index].velocityY;

        // Check for edge detection on x-axis and reverse direction if needed
        if (ballsData[index].positionX > window.innerWidth - ball.offsetWidth || ballsData[index].positionX < 0) {
            ballsData[index].velocityX *= -1;
        }

        // Check for edge detection on y-axis and reverse direction if needed
        if (ballsData[index].positionY > window.innerHeight - ball.offsetHeight || ballsData[index].positionY < 0) {
            ballsData[index].velocityY *= -1;
        }

        // Set the ball's new positions
        ball.style.left = ballsData[index].positionX + 'px';
        ball.style.top = ballsData[index].positionY + 'px';
    });
}

// Call the moveBalls function every 10 milliseconds for smoother animation
setInterval(moveBalls, 10);