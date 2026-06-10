// 這個 p5 物件處理塗鴉與撕紙破壞
let paintLayer;
const p5Canvas = new p5((p) => {
    p.setup = () => {
        let cnv = p.createCanvas(p.windowWidth, p.windowHeight);
        cnv.position(0,0);
        cnv.style('pointer-events', 'none'); // 平常讓滑鼠穿透
        p.clear();
    };

    p.draw = () => {
        if (p.mouseIsPressed) {
            p.stroke(255, 50, 50); // 塗鴉顏色
            p.strokeWeight(3);
            p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
            // 觸發 JS 通知：有人正在塗鴉！
            window.parent.postMessage('doodling', '*');
        }
    };

    window.enableDrawing = () => {
        p.select('canvas').style('pointer-events', 'auto');
    };

    window.clearCanvas = () => {
        p.clear();
        p.select('canvas').style('pointer-events', 'none');
    };
});