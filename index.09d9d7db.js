let mandala = {
    layers: [
        {
            order: 10,
            patternSize: 100,
            patternOrientation: 0,
            layerSize: 50,
            layerOrientation: 0
        }
    ]
};
function drawMandala(m) {
    const canvas = document.querySelector("#canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "black";
        for (const layer of m.layers)for(let angle = 0; angle < 360; angle += 360 / layer.order){
            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate((layer.layerOrientation / 100 + angle / 180) * Math.PI);
            ctx.translate(0, -layer.layerSize / 100 * canvas.width / 2);
            ctx.rotate(layer.patternOrientation / 180 * Math.PI);
            ctx.scale(layer.patternSize / 100, layer.patternSize / 100);
            const shape = new Path2D();
            shape.moveTo(-50, 50);
            shape.lineTo(50, 50);
            shape.lineTo(0, -50);
            shape.lineTo(-50, 50);
            ctx.stroke(shape);
            ctx.restore();
        }
    } else console.log("Browser does not support <canvas>.");
}
const rangeOrder = document.querySelector("#order");
rangeOrder.addEventListener("input", (ev)=>{
    mandala.layers[0].order = ev.target.value;
    drawMandala(mandala);
});
const rangePatternSize = document.querySelector("#pattern-size");
rangePatternSize.addEventListener("input", (ev)=>{
    mandala.layers[0].patternSize = ev.target.value;
    drawMandala(mandala);
});
const rangePatternOrientation = document.querySelector("#pattern-orientation");
rangePatternOrientation.addEventListener("input", (ev)=>{
    mandala.layers[0].patternOrientation = ev.target.value;
    drawMandala(mandala);
});
const rangeLayerSize = document.querySelector("#layer-size");
rangeLayerSize.addEventListener("input", (ev)=>{
    mandala.layers[0].layerSize = ev.target.value;
    drawMandala(mandala);
});
const rangeLayerOrientation = document.querySelector("#layer-orientation");
rangeLayerOrientation.addEventListener("input", (ev)=>{
    mandala.layers[0].layerOrientation = ev.target.value;
    drawMandala(mandala);
});
window.addEventListener("load", drawMandala(mandala));

//# sourceMappingURL=index.09d9d7db.js.map
