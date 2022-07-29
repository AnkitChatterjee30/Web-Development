score = 0;
cross = true;
audiogo = new Audio("Die_Game.mp3");
movement = new Audio("Click.mp3");
music = new Audio("Power.mp3");
win = new Audio("Game_Win.mp3")
setTimeout(() => {
    music.play()
}, 500);
document.onkeydown = function (e) {
    console.log("Key code is ", e.keyCode)
    if (e.keyCode == 38) {
        goat = document.querySelector('.goat');
        goat.classList.add('animateGoat')
        setTimeout(() => {
            goat.classList.remove('animateGoat')
            movement.play()
        }, 700);
    }
    if (e.keyCode == 39) {
        goat = document.querySelector('.goat');
        goatX = parseInt(window.getComputedStyle(goat, null).getPropertyValue('left'));
        movement.play()
        goat.style.left = goatX + 112 + "px";
    }
    if (e.keyCode == 37) {
        goat = document.querySelector('.goat');
        goatX = parseInt(window.getComputedStyle(goat, null).getPropertyValue('left'));
        movement.play()
        goat.style.left = (goatX - 112) + "px";
    }
}
setInterval(() => {
    goat = document.querySelector('.goat');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    gx = parseInt(window.getComputedStyle(goat, null).getPropertyValue('left'));
    gy = parseInt(window.getComputedStyle(goat, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(gx - ox);
    offsetY = Math.abs(gy - oy);
    if (offsetX < 73 && offsetY < 82) {
        gameOver.innerHTML = "Game Over - Reload to play again"
        obstacle.classList.remove('obstacleAni');
        audiogo.loop=false;
        audiogo.play()
        movement.pause();
        win.pause()
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        win.play()
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {


            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
    }
}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score : " + score;

}