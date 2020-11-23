    var canvas = document.getElementById("beer");
    var ctx = canvas.getContext("2d");


      // layer7/Rectangle
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

      // layer5/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(132.0, 168.1);
      ctx.bezierCurveTo(134.1, 176.3, 133.1, 178.3, 126.9, 178.3);
      ctx.bezierCurveTo(105.1, 178.3, 83.3, 178.2, 61.5, 178.3);
      ctx.bezierCurveTo(58.5, 178.3, 56.8, 177.2, 57.0, 172.9);
      ctx.bezierCurveTo(57.2, 169.8, 56.7, 166.0, 60.7, 167.2);
      ctx.bezierCurveTo(62.2, 168.7, 64.0, 167.9, 65.6, 167.9);
      ctx.bezierCurveTo(87.7, 168.1, 109.9, 167.8, 132.0, 168.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(206, 218, 221)";
      ctx.fill();
      ctx.restore();

      // layer3/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(113.1, 63.3);
      ctx.bezierCurveTo(113.1, 63.3, 141.3, 67.2, 137.7, 57.0);
      ctx.bezierCurveTo(137.7, 57.0, 138.5, 46.1, 124.1, 51.3);
      ctx.bezierCurveTo(124.1, 51.3, 122.0, 59.6, 113.1, 63.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(201, 215, 219)";
      ctx.fill();

      // layer3/Path
      ctx.beginPath();
      ctx.moveTo(132.8, 82.4);
      ctx.lineTo(133.0, 89.8);
      ctx.bezierCurveTo(133.0, 89.8, 145.8, 89.7, 145.9, 94.8);
      ctx.lineTo(145.9, 140.7);
      ctx.bezierCurveTo(145.9, 140.7, 139.0, 147.0, 133.0, 146.0);
      ctx.lineTo(133.0, 154.0);
      ctx.bezierCurveTo(133.0, 154.0, 152.5, 156.5, 152.8, 148.7);
      ctx.bezierCurveTo(153.0, 141.0, 152.8, 87.2, 152.8, 87.2);
      ctx.bezierCurveTo(152.8, 87.2, 154.7, 78.8, 132.8, 82.4);
      ctx.closePath();
      ctx.fill();

      // layer3/Path
      ctx.beginPath();
      ctx.moveTo(62.4, 63.0);
      ctx.lineTo(128.4, 62.1);
      ctx.bezierCurveTo(130.9, 62.0, 133.0, 64.1, 133.0, 66.6);
      ctx.lineTo(133.0, 166.0);
      ctx.bezierCurveTo(133.0, 168.5, 131.0, 170.5, 128.5, 170.5);
      ctx.lineTo(62.5, 171.0);
      ctx.bezierCurveTo(60.0, 171.0, 58.0, 169.0, 58.0, 166.5);
      ctx.lineTo(58.0, 67.5);
      ctx.bezierCurveTo(58.0, 65.0, 60.0, 63.0, 62.4, 63.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(242, 184, 59)";
      ctx.fill();
      ctx.restore();

      // layer6/Rectangle
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(69.0, 167.0);
      ctx.lineTo(69.0, 167.0);
      ctx.bezierCurveTo(66.8, 167.0, 65.0, 165.2, 65.0, 163.0);
      ctx.lineTo(65.0, 76.0);
      ctx.bezierCurveTo(65.0, 73.8, 66.8, 72.0, 69.0, 72.0);
      ctx.lineTo(69.0, 72.0);
      ctx.bezierCurveTo(71.2, 72.0, 73.0, 73.8, 73.0, 76.0);
      ctx.lineTo(73.0, 163.0);
      ctx.bezierCurveTo(73.0, 165.2, 71.2, 167.0, 69.0, 167.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(210, 157, 52)";
      ctx.fill();

      // layer6/Rectangle
      ctx.beginPath();
      ctx.moveTo(86.0, 166.0);
      ctx.lineTo(86.0, 166.0);
      ctx.bezierCurveTo(83.8, 166.0, 82.0, 164.2, 82.0, 162.0);
      ctx.lineTo(82.0, 75.0);
      ctx.bezierCurveTo(82.0, 72.8, 83.8, 71.0, 86.0, 71.0);
      ctx.lineTo(86.0, 71.0);
      ctx.bezierCurveTo(88.2, 71.0, 90.0, 72.8, 90.0, 75.0);
      ctx.lineTo(90.0, 162.0);
      ctx.bezierCurveTo(90.0, 164.2, 88.2, 166.0, 86.0, 166.0);
      ctx.closePath();
      ctx.fill();

      // layer6/Rectangle
      ctx.beginPath();
      ctx.moveTo(104.0, 166.0);
      ctx.lineTo(104.0, 166.0);
      ctx.bezierCurveTo(101.8, 166.0, 100.0, 164.2, 100.0, 162.0);
      ctx.lineTo(100.0, 75.0);
      ctx.bezierCurveTo(100.0, 72.8, 101.8, 71.0, 104.0, 71.0);
      ctx.lineTo(104.0, 71.0);
      ctx.bezierCurveTo(106.2, 71.0, 108.0, 72.8, 108.0, 75.0);
      ctx.lineTo(108.0, 162.0);
      ctx.bezierCurveTo(108.0, 164.2, 106.2, 166.0, 104.0, 166.0);
      ctx.closePath();
      ctx.fill();

      // layer6/Rectangle
      ctx.beginPath();
      ctx.moveTo(122.0, 166.0);
      ctx.lineTo(122.0, 166.0);
      ctx.bezierCurveTo(119.8, 166.0, 118.0, 164.2, 118.0, 162.0);
      ctx.lineTo(118.0, 75.0);
      ctx.bezierCurveTo(118.0, 72.8, 119.8, 71.0, 122.0, 71.0);
      ctx.lineTo(122.0, 71.0);
      ctx.bezierCurveTo(124.2, 71.0, 126.0, 72.8, 126.0, 75.0);
      ctx.lineTo(126.0, 162.0);
      ctx.bezierCurveTo(126.0, 164.2, 124.2, 166.0, 122.0, 166.0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // layer4/
      ctx.save();
      ctx.restore();

      // layer2/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(70.0, 28.0);
      ctx.bezierCurveTo(70.0, 28.0, 49.0, 25.0, 52.0, 49.0);
      ctx.bezierCurveTo(52.0, 49.0, 29.4, 63.5, 53.7, 79.2);
      ctx.bezierCurveTo(53.7, 79.2, 74.0, 85.0, 76.0, 63.0);
      ctx.bezierCurveTo(76.0, 63.0, 93.0, 74.0, 102.0, 63.0);
      ctx.bezierCurveTo(102.0, 63.0, 118.0, 66.0, 123.0, 56.0);
      ctx.bezierCurveTo(123.0, 56.0, 124.0, 51.0, 135.0, 51.0);
      ctx.bezierCurveTo(135.0, 51.0, 141.0, 34.0, 121.0, 31.0);
      ctx.bezierCurveTo(121.0, 31.0, 104.0, 34.0, 102.0, 23.0);
      ctx.bezierCurveTo(102.0, 23.0, 84.0, 1.0, 70.0, 28.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(251, 255, 224)";
      ctx.fill();
      ctx.restore();