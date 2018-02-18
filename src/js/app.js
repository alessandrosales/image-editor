require('fabric');

const canvas = new fabric.Canvas('canvas');
const center = canvas.getCenter();
const bg = require('../images/imovel.jpg');

//set up background of canvas
canvas.setBackgroundImage(bg, canvas.renderAll.bind(canvas), {
    originX: 'center',
    originY: 'center',
    scaleX: 1,
    scaleY: 1,
    top: center.top,
    left: center.left
})

//add circle element on canvas
function add() {
    var circle = new fabric.Circle({
        top : 15,
        left : 15,
        radius: 30,
        fill : 'rgba(255, 0, 0, 0.2)',
        stroke : 'red'
    });
    canvas.add(circle);
}

//remove element selected
function remove() {
    let selected = canvas.getActiveObject();
    canvas.remove(selected);
}

//download current canvas state
function downloadCanvas(data, fileName) {
    let link = document.createElement("a");
    document.body.appendChild(link);
    link.href = data;
    link.download = fileName;
    link.style = "display: none;";
    link.click();
    link.remove();
}

//download event
function download() {
    downloadCanvas(canvas.toDataURL({
        format: 'jpeg'
    }), bg);
}

//set up button events
document.getElementById('btn-add').onclick = add;
document.getElementById('btn-remove').onclick = remove;
document.getElementById('btn-download').onclick = download;