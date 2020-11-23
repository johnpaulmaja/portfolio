var canvas = document.getElementById("cigarette");
var ctx = canvas.getContext("2d");

 // layer3/Rectangle
 ctx.save();
 ctx.beginPath();
 ctx.moveTo(200.0, 200.0);
 ctx.lineTo(0.0, 200.0);
 ctx.lineTo(0.0, 0.0);
 ctx.lineTo(200.0, 0.0);
 ctx.lineTo(200.0, 200.0);
 ctx.closePath();
 ctx.fillStyle = "rgb(168, 168, 168)";
 ctx.fill();
 ctx.restore();

 // layer2/Rectangle
 ctx.save();
 ctx.beginPath();
 ctx.moveTo(72.0, 120.0);
 ctx.lineTo(21.0, 120.0);
 ctx.lineTo(21.0, 106.0);
 ctx.lineTo(72.0, 106.0);
 ctx.lineTo(72.0, 120.0);
 ctx.closePath();
 ctx.fillStyle = "rgb(229, 142, 27)";
 ctx.fill();

 // layer2/Rectangle
 ctx.beginPath();
 ctx.moveTo(81.0, 120.0);
 ctx.lineTo(72.0, 120.0);
 ctx.lineTo(72.0, 106.0);
 ctx.lineTo(81.0, 106.0);
 ctx.lineTo(81.0, 120.0);
 ctx.closePath();
 ctx.fillStyle = "rgb(224, 224, 224)";
 ctx.fill();

 // layer2/Rectangle
 ctx.beginPath();
 ctx.moveTo(89.0, 120.0);
 ctx.lineTo(81.0, 120.0);
 ctx.lineTo(81.0, 106.0);
 ctx.lineTo(89.0, 106.0);
 ctx.lineTo(89.0, 120.0);
 ctx.closePath();
 ctx.fillStyle = "rgb(236, 236, 236)";
 ctx.fill();

 // layer2/Rectangle
 ctx.beginPath();
 ctx.moveTo(166.0, 120.0);
 ctx.lineTo(89.0, 120.0);
 ctx.lineTo(89.0, 106.0);
 ctx.lineTo(166.0, 106.0);
 ctx.lineTo(166.0, 120.0);
 ctx.closePath();
 ctx.fillStyle = "rgb(224, 224, 224)";
 ctx.fill();

 // layer2/Rectangle
 ctx.beginPath();
 ctx.moveTo(170.0, 120.0);
 ctx.lineTo(166.0, 120.0);
 ctx.lineTo(166.0, 106.0);
 ctx.lineTo(170.0, 106.0);
 ctx.lineTo(170.0, 120.0);
 ctx.closePath();
 ctx.fillStyle = "rgb(0, 0, 0)";
 ctx.fill();

 // layer2/Path
 ctx.beginPath();
 ctx.moveTo(169.9, 102.8);
 ctx.bezierCurveTo(167.4, 101.8, 166.0, 96.9, 168.6, 94.4);
 ctx.bezierCurveTo(169.4, 93.6, 170.3, 93.0, 171.4, 92.6);
 ctx.bezierCurveTo(175.5, 91.0, 176.6, 83.3, 172.5, 80.5);
 ctx.bezierCurveTo(171.6, 79.8, 170.6, 79.1, 169.7, 78.4);
 ctx.bezierCurveTo(169.8, 78.3, 169.9, 78.2, 170.0, 78.2);
 ctx.bezierCurveTo(172.4, 78.8, 175.3, 82.2, 175.6, 84.8);
 ctx.bezierCurveTo(176.0, 88.4, 174.7, 91.4, 171.9, 92.9);
 ctx.bezierCurveTo(171.5, 93.1, 171.1, 93.4, 170.7, 93.6);
 ctx.bezierCurveTo(166.8, 95.4, 167.2, 99.6, 169.3, 101.8);
 ctx.bezierCurveTo(169.5, 102.0, 169.9, 102.2, 169.9, 102.8);
 ctx.closePath();
 ctx.fillStyle = "rgb(14, 14, 14)";
 ctx.fill();

 // layer2/Path
 ctx.beginPath();
 ctx.moveTo(173.7, 104.5);
 ctx.bezierCurveTo(170.1, 101.9, 170.3, 97.3, 174.0, 95.0);
 ctx.bezierCurveTo(175.1, 94.3, 176.3, 93.9, 177.2, 92.9);
 ctx.bezierCurveTo(179.3, 90.6, 180.1, 85.1, 176.7, 82.4);
 ctx.bezierCurveTo(175.7, 81.6, 174.7, 80.9, 173.4, 80.0);
 ctx.bezierCurveTo(176.9, 80.6, 179.8, 84.5, 179.6, 87.9);
 ctx.bezierCurveTo(179.4, 91.1, 178.2, 93.6, 175.1, 95.1);
 ctx.bezierCurveTo(171.0, 97.1, 170.5, 100.4, 173.6, 103.9);
 ctx.bezierCurveTo(173.8, 104.0, 173.9, 104.2, 173.7, 104.5);
 ctx.closePath();
 ctx.fillStyle = "rgb(12, 12, 12)";
 ctx.fill();

 // layer2/Ellipse
 ctx.beginPath();
 ctx.moveTo(28.0, 109.0);
 ctx.bezierCurveTo(28.0, 109.6, 27.1, 110.0, 26.0, 110.0);
 ctx.bezierCurveTo(24.9, 110.0, 24.0, 109.6, 24.0, 109.0);
 ctx.bezierCurveTo(24.0, 108.4, 24.9, 108.0, 26.0, 108.0);
 ctx.bezierCurveTo(27.1, 108.0, 28.0, 108.4, 28.0, 109.0);
 ctx.closePath();
 ctx.fillStyle = "rgb(205, 205, 205)";
 ctx.fill();

 // layer2/Ellipse
 ctx.beginPath();
 ctx.moveTo(35.0, 117.0);
 ctx.bezierCurveTo(35.0, 117.6, 34.1, 118.0, 33.0, 118.0);
 ctx.bezierCurveTo(31.9, 118.0, 31.0, 117.6, 31.0, 117.0);
 ctx.bezierCurveTo(31.0, 116.4, 31.9, 116.0, 33.0, 116.0);
 ctx.bezierCurveTo(34.1, 116.0, 35.0, 116.4, 35.0, 117.0);
 ctx.closePath();
 ctx.fill();

 // layer2/Ellipse
 ctx.beginPath();
 ctx.moveTo(43.0, 109.0);
 ctx.bezierCurveTo(43.0, 109.6, 42.1, 110.0, 41.0, 110.0);
 ctx.bezierCurveTo(39.9, 110.0, 39.0, 109.6, 39.0, 109.0);
 ctx.bezierCurveTo(39.0, 108.4, 39.9, 108.0, 41.0, 108.0);
 ctx.bezierCurveTo(42.1, 108.0, 43.0, 108.4, 43.0, 109.0);
 ctx.closePath();
 ctx.fill();

 // layer2/Ellipse
 ctx.beginPath();
 ctx.moveTo(51.0, 117.0);
 ctx.bezierCurveTo(51.0, 117.6, 50.1, 118.0, 49.0, 118.0);
 ctx.bezierCurveTo(47.9, 118.0, 47.0, 117.6, 47.0, 117.0);
 ctx.bezierCurveTo(47.0, 116.4, 47.9, 116.0, 49.0, 116.0);
 ctx.bezierCurveTo(50.1, 116.0, 51.0, 116.4, 51.0, 117.0);
 ctx.closePath();
 ctx.fill();

 // layer2/Ellipse
 ctx.beginPath();
 ctx.moveTo(57.0, 109.0);
 ctx.bezierCurveTo(57.0, 109.6, 56.1, 110.0, 55.0, 110.0);
 ctx.bezierCurveTo(53.9, 110.0, 53.0, 109.6, 53.0, 109.0);
 ctx.bezierCurveTo(53.0, 108.4, 53.9, 108.0, 55.0, 108.0);
 ctx.bezierCurveTo(56.1, 108.0, 57.0, 108.4, 57.0, 109.0);
 ctx.closePath();
 ctx.fill();

 // layer2/Ellipse
 ctx.beginPath();
 ctx.moveTo(65.0, 117.0);
 ctx.bezierCurveTo(65.0, 117.6, 64.1, 118.0, 63.0, 118.0);
 ctx.bezierCurveTo(61.9, 118.0, 61.0, 117.6, 61.0, 117.0);
 ctx.bezierCurveTo(61.0, 116.4, 61.9, 116.0, 63.0, 116.0);
 ctx.bezierCurveTo(64.1, 116.0, 65.0, 116.4, 65.0, 117.0);
 ctx.closePath();
 ctx.fill();

 // layer2/Ellipse
 ctx.beginPath();
 ctx.moveTo(71.0, 109.0);
 ctx.bezierCurveTo(71.0, 109.6, 70.1, 110.0, 69.0, 110.0);
 ctx.bezierCurveTo(67.9, 110.0, 67.0, 109.6, 67.0, 109.0);
 ctx.bezierCurveTo(67.0, 108.4, 67.9, 108.0, 69.0, 108.0);
 ctx.bezierCurveTo(70.1, 108.0, 71.0, 108.4, 71.0, 109.0);
 ctx.closePath();
 ctx.fill();
 ctx.restore();