window.onload = () => {

    const canvas = document.createElement("canvas");
    canvas.style.width = `${document.documentElement.clientWidth}px`;
    canvas.style.height = `${document.documentElement.clientHeight}px`;
    canvas.style.margin = "0px";
    canvas.style.background = "#000";
    document.body.appendChild(canvas);

    const context = canvas.getContext('2d');

    const ballImg = new Image();
    ballImg.src = "ball.png";
    ballImg.onload = () => {

        fireballBtn.addEventListener('click', () => {
            let x = 40;
            let start = Date.now();
            let timer = setInterval(function () {
                context.clearRect(0, 0, canvas.width, canvas.height);
                let timePassed = Date.now() - start;
                if (timePassed >= 2000) {
                    clearInterval(timer);
                    return;
                }
                else {
                    x++
                    context.drawImage(ballImg, x, Math.sin(x/20)*10 + 40, 50, 25);
                }
            }, 15);
        });

    };

}