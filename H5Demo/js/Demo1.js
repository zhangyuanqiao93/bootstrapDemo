/**
 * Created by Bridge on 2017/7/25.
 */

    var canvas1  = document.getElementById('canvas');
    context = canvas1.getContent('2d');

    context.font = '38pt Arial';
    context.fillStyle = 'cornflowerblue';
    context.strokeStyle = 'blue';
    context.fillText('Hello Canvas',canvas1.width/2-150,canvas1.height+150);
    context.strokeText('Hello Canvas',canvas1.width/2-150,canvas1.height+150);

    var controlContext;
    function drawGrid(strokeStyle,fillStyle) {
        controlContext.fillStyle = fillStyle;
        controlContext.strokeStyle = strokeStyle;
        controlContext.restore();
    }


    var canvas2  = document.getElementById('canvas').onfocus;