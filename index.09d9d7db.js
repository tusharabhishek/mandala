const colors = {
    babyBlue: "#89CFF0",
    electricBlue: "#7DF9FF",
    aqua: "#00FFFF"
};
let loaded = false;
const image = new Image();
image.onload = function() {
    loaded = true;
};
image.src = "images/sample-primitives/primitive_1.png";
function clear(canvas) {
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}
const grid = {
    symOrder: 8,
    divisions: 12,
    radialInc: 10,
    orientation: 0,
    draw (canvas) {
        const context = canvas.getContext("2d");
        const { width, height } = canvas;
        context.save();
        context.translate(width / 2, height / 2);
        // draw concentric circles
        for(let i = 0; i < width / 2; i += this.radialInc){
            context.save();
            context.strokeStyle = colors.aqua;
            context.beginPath();
            context.arc(0, 0, i, 0, toRad(360));
            context.closePath();
            context.stroke();
            context.restore();
        }
        // minor axes
        for(let i = 0; i < this.symOrder * this.divisions; i++){
            context.save();
            context.rotate(toRad(this.orientation) + toRad(i * (360 / (this.symOrder * this.divisions))));
            context.strokeStyle = colors.electricBlue;
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(width / 2, 0);
            context.closePath();
            context.stroke();
            context.restore();
        }
        // major axes
        for(let i = 0; i < this.symOrder; i++){
            context.save();
            context.rotate(toRad(this.orientation) + toRad(i * (360 / this.symOrder)));
            context.strokeStyle = colors.babyBlue;
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(width / 2, 0);
            context.closePath();
            context.stroke();
            context.restore();
        }
        context.restore();
    }
};
function drawImage(canvas) {
    console.log(image);
    if (loaded) {
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0);
    }
}
function drawLoop() {
    window.requestAnimationFrame(drawLoop);
    const canvas = document.querySelector("#main-canvas");
    clear(canvas);
    grid.draw(canvas);
    drawImage(canvas);
}
window.requestAnimationFrame(drawLoop);
function toRad(deg) {
    return Math.PI * deg / 180;
}

//# sourceMappingURL=index.09d9d7db.js.map
