
      var canvas = document.getElementById("gun");
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

      // layer2/Group
      ctx.save();

      // layer2/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(171.0, 80.5);
      ctx.bezierCurveTo(166.0, 86.5, 161.3, 92.0, 156.6, 97.6);
      ctx.bezierCurveTo(156.0, 98.4, 155.2, 98.4, 154.3, 98.4);
      ctx.bezierCurveTo(142.6, 98.4, 131.0, 98.4, 119.3, 98.3);
      ctx.bezierCurveTo(117.6, 98.3, 117.0, 98.8, 116.5, 100.2);
      ctx.bezierCurveTo(115.5, 103.4, 114.5, 106.5, 113.2, 109.5);
      ctx.bezierCurveTo(110.6, 115.7, 104.4, 119.7, 97.2, 119.7);
      ctx.bezierCurveTo(90.1, 119.8, 83.1, 119.8, 76.0, 119.7);
      ctx.bezierCurveTo(74.5, 119.7, 74.0, 120.1, 73.6, 121.5);
      ctx.bezierCurveTo(70.3, 133.1, 66.9, 144.7, 63.6, 156.3);
      ctx.bezierCurveTo(63.2, 157.7, 62.6, 158.0, 61.2, 158.0);
      ctx.bezierCurveTo(53.7, 157.9, 46.2, 158.0, 38.8, 158.0);
      ctx.bezierCurveTo(27.2, 158.0, 19.8, 149.2, 22.7, 138.9);
      ctx.bezierCurveTo(25.3, 129.4, 28.1, 119.9, 30.9, 110.4);
      ctx.bezierCurveTo(32.7, 103.9, 28.3, 98.5, 21.1, 98.3);
      ctx.bezierCurveTo(19.4, 98.3, 17.3, 99.0, 16.2, 98.0);
      ctx.bezierCurveTo(15.2, 97.0, 16.0, 95.1, 15.9, 93.6);
      ctx.bezierCurveTo(15.9, 89.9, 16.0, 86.2, 15.9, 82.5);
      ctx.bezierCurveTo(15.8, 80.9, 16.3, 80.5, 18.1, 80.5);
      ctx.bezierCurveTo(47.0, 80.5, 76.0, 80.5, 104.9, 80.5);
      ctx.bezierCurveTo(125.9, 80.5, 146.9, 80.5, 168.0, 80.5);
      ctx.bezierCurveTo(168.8, 80.5, 169.7, 80.5, 171.0, 80.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(236, 180, 92)";
      ctx.fill();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(71.4, 76.8);
      ctx.bezierCurveTo(73.5, 72.1, 75.5, 67.6, 77.5, 63.2);
      ctx.bezierCurveTo(79.3, 59.1, 81.2, 55.0, 83.0, 50.8);
      ctx.bezierCurveTo(83.5, 49.6, 84.3, 49.2, 85.7, 49.2);
      ctx.bezierCurveTo(106.6, 49.3, 127.4, 49.2, 148.3, 49.3);
      ctx.bezierCurveTo(150.3, 49.3, 151.1, 48.9, 150.8, 47.0);
      ctx.bezierCurveTo(150.6, 45.4, 150.9, 43.8, 150.8, 42.3);
      ctx.bezierCurveTo(150.7, 41.3, 151.1, 41.0, 152.2, 41.0);
      ctx.bezierCurveTo(154.9, 41.1, 157.7, 41.1, 160.5, 41.0);
      ctx.bezierCurveTo(161.8, 41.0, 162.1, 41.5, 162.0, 42.5);
      ctx.bezierCurveTo(162.0, 44.4, 162.1, 46.2, 162.0, 48.0);
      ctx.bezierCurveTo(162.0, 49.0, 162.3, 49.3, 163.4, 49.3);
      ctx.bezierCurveTo(168.0, 49.5, 168.0, 49.5, 168.0, 45.2);
      ctx.bezierCurveTo(168.0, 41.0, 168.0, 41.0, 172.6, 41.0);
      ctx.bezierCurveTo(174.2, 41.0, 175.9, 41.1, 177.5, 41.0);
      ctx.bezierCurveTo(178.9, 40.9, 179.4, 41.3, 179.3, 42.6);
      ctx.bezierCurveTo(179.2, 44.4, 179.4, 46.1, 179.3, 47.9);
      ctx.bezierCurveTo(179.2, 48.9, 179.6, 49.3, 180.7, 49.3);
      ctx.bezierCurveTo(182.7, 49.2, 184.7, 49.3, 186.6, 49.3);
      ctx.bezierCurveTo(187.7, 49.2, 188.0, 49.5, 188.0, 50.5);
      ctx.bezierCurveTo(188.0, 58.9, 188.0, 67.2, 188.0, 75.5);
      ctx.bezierCurveTo(188.0, 76.5, 187.7, 76.9, 186.6, 76.8);
      ctx.bezierCurveTo(186.4, 76.8, 186.1, 76.8, 185.8, 76.8);
      ctx.bezierCurveTo(148.4, 76.8, 111.0, 76.8, 73.6, 76.8);
      ctx.bezierCurveTo(73.0, 76.8, 72.4, 76.8, 71.4, 76.8);
      ctx.closePath();
      ctx.fill();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(37.0, 49.3);
      ctx.bezierCurveTo(41.1, 49.3, 45.3, 49.3, 49.4, 49.2);
      ctx.bezierCurveTo(50.9, 49.2, 51.4, 49.4, 50.7, 50.9);
      ctx.bezierCurveTo(47.0, 59.1, 43.3, 67.3, 39.7, 75.5);
      ctx.bezierCurveTo(39.2, 76.5, 38.7, 76.8, 37.6, 76.8);
      ctx.bezierCurveTo(29.6, 76.8, 21.6, 76.8, 13.6, 76.8);
      ctx.bezierCurveTo(12.3, 76.8, 12.0, 76.5, 12.0, 75.3);
      ctx.bezierCurveTo(12.1, 70.4, 12.0, 65.4, 12.0, 60.5);
      ctx.bezierCurveTo(12.0, 59.6, 12.2, 59.0, 12.9, 58.3);
      ctx.bezierCurveTo(15.9, 55.6, 18.9, 52.9, 21.9, 50.1);
      ctx.bezierCurveTo(22.5, 49.5, 23.2, 49.2, 24.2, 49.3);
      ctx.bezierCurveTo(28.5, 49.3, 32.7, 49.3, 37.0, 49.3);
      ctx.closePath();
      ctx.fill();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(73.7, 49.3);
      ctx.bezierCurveTo(71.8, 53.5, 70.1, 57.5, 68.3, 61.5);
      ctx.bezierCurveTo(66.2, 66.1, 64.1, 70.7, 62.1, 75.3);
      ctx.bezierCurveTo(61.6, 76.4, 61.1, 76.9, 59.7, 76.8);
      ctx.bezierCurveTo(56.3, 76.7, 52.8, 76.8, 49.1, 76.8);
      ctx.bezierCurveTo(50.8, 73.1, 52.3, 69.5, 53.9, 65.9);
      ctx.bezierCurveTo(56.2, 61.0, 58.4, 56.0, 60.6, 51.0);
      ctx.bezierCurveTo(61.1, 49.7, 61.8, 49.2, 63.4, 49.2);
      ctx.bezierCurveTo(66.7, 49.4, 70.1, 49.3, 73.7, 49.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(92.8, 98.4);
      ctx.bezierCurveTo(96.5, 98.4, 100.2, 98.4, 104.0, 98.3);
      ctx.bezierCurveTo(105.0, 98.3, 105.4, 98.5, 105.0, 99.6);
      ctx.bezierCurveTo(104.2, 101.5, 103.6, 103.5, 102.9, 105.5);
      ctx.bezierCurveTo(101.9, 107.9, 99.9, 109.2, 97.1, 109.3);
      ctx.bezierCurveTo(91.0, 109.3, 84.8, 109.3, 78.7, 109.3);
      ctx.bezierCurveTo(77.4, 109.3, 77.2, 109.0, 77.5, 107.9);
      ctx.bezierCurveTo(78.4, 105.2, 79.1, 102.6, 79.8, 99.9);
      ctx.bezierCurveTo(80.1, 98.8, 80.6, 98.3, 82.0, 98.3);
      ctx.bezierCurveTo(85.6, 98.4, 89.2, 98.4, 92.8, 98.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(168, 168, 168)";
      ctx.fill();
      ctx.restore();
      ctx.restore();