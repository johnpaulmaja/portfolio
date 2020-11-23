
      var canvas = document.getElementById("pipe");
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

      // layer2/Group/Compound Path
      ctx.save();
      ctx.beginPath();

      // layer2/Group/Compound Path/Path
      ctx.moveTo(20.2, 145.7);
      ctx.bezierCurveTo(20.3, 154.5, 21.6, 163.3, 25.3, 171.5);
      ctx.bezierCurveTo(30.3, 182.3, 37.8, 189.6, 48.4, 191.8);
      ctx.bezierCurveTo(57.6, 193.8, 66.5, 191.9, 75.1, 187.9);
      ctx.bezierCurveTo(85.5, 183.0, 94.4, 175.6, 102.7, 167.1);
      ctx.bezierCurveTo(115.0, 154.4, 125.4, 139.8, 135.6, 125.1);
      ctx.bezierCurveTo(141.7, 116.1, 147.7, 107.0, 154.9, 99.2);
      ctx.bezierCurveTo(163.2, 90.3, 172.7, 84.4, 184.0, 82.6);
      ctx.bezierCurveTo(187.3, 82.1, 190.7, 81.7, 194.0, 81.9);
      ctx.bezierCurveTo(195.4, 82.0, 195.9, 81.6, 195.8, 79.9);
      ctx.bezierCurveTo(195.7, 77.2, 195.8, 77.2, 193.4, 77.1);
      ctx.bezierCurveTo(188.9, 76.9, 184.5, 77.3, 180.0, 77.9);
      ctx.bezierCurveTo(167.5, 79.9, 156.4, 86.0, 146.3, 94.5);
      ctx.bezierCurveTo(137.7, 101.7, 130.0, 110.1, 122.2, 118.3);
      ctx.bezierCurveTo(113.9, 126.9, 105.6, 135.4, 95.9, 141.9);
      ctx.bezierCurveTo(91.6, 144.9, 87.1, 147.7, 82.0, 148.5);
      ctx.bezierCurveTo(77.7, 149.2, 74.6, 147.0, 73.1, 142.3);
      ctx.bezierCurveTo(72.6, 140.5, 72.4, 138.6, 72.2, 136.7);
      ctx.bezierCurveTo(71.8, 130.7, 70.8, 124.8, 68.2, 119.5);
      ctx.bezierCurveTo(66.5, 115.9, 64.1, 113.3, 60.6, 112.3);
      ctx.bezierCurveTo(52.0, 109.8, 43.3, 109.5, 34.6, 111.8);
      ctx.bezierCurveTo(29.2, 113.3, 25.6, 117.2, 23.7, 123.3);
      ctx.bezierCurveTo(21.4, 130.5, 20.3, 137.8, 20.2, 145.7);
      ctx.closePath();

      // layer2/Group/Compound Path/Path
      ctx.moveTo(44.2, 107.9);
      ctx.bezierCurveTo(44.8, 107.8, 45.1, 107.4, 45.4, 107.1);
      ctx.bezierCurveTo(52.4, 100.5, 57.0, 92.2, 59.0, 82.1);
      ctx.bezierCurveTo(62.9, 62.2, 52.3, 42.9, 33.9, 40.8);
      ctx.bezierCurveTo(14.8, 38.7, -0.5, 57.8, 3.3, 79.3);
      ctx.bezierCurveTo(5.6, 92.2, 14.5, 100.6, 25.5, 100.1);
      ctx.bezierCurveTo(37.0, 99.5, 44.9, 87.7, 42.0, 75.2);
      ctx.bezierCurveTo(40.3, 67.8, 34.0, 62.7, 27.7, 63.9);
      ctx.bezierCurveTo(22.4, 64.9, 19.0, 71.3, 21.0, 76.6);
      ctx.bezierCurveTo(21.6, 78.5, 22.8, 79.5, 24.3, 79.4);
      ctx.bezierCurveTo(21.9, 75.8, 22.8, 71.7, 26.5, 69.7);
      ctx.bezierCurveTo(30.0, 67.8, 34.5, 69.8, 36.4, 74.2);
      ctx.bezierCurveTo(39.6, 81.5, 35.4, 90.6, 28.1, 92.3);
      ctx.bezierCurveTo(19.6, 94.2, 11.7, 87.5, 10.7, 77.5);
      ctx.bezierCurveTo(9.4, 64.6, 19.7, 52.9, 31.0, 54.2);
      ctx.bezierCurveTo(40.2, 55.3, 47.9, 63.3, 50.1, 73.9);
      ctx.bezierCurveTo(51.8, 82.3, 50.9, 90.4, 48.0, 98.3);
      ctx.bezierCurveTo(46.8, 101.5, 45.5, 104.6, 44.2, 107.9);
      ctx.closePath();

      // layer2/Group/Compound Path/Path
      ctx.moveTo(68.5, 22.2);
      ctx.bezierCurveTo(69.3, 19.5, 67.9, 16.9, 65.2, 16.2);
      ctx.bezierCurveTo(61.2, 15.1, 57.4, 18.7, 57.1, 23.9);
      ctx.bezierCurveTo(56.9, 28.7, 58.8, 32.2, 62.2, 34.6);
      ctx.bezierCurveTo(66.0, 37.3, 70.0, 37.1, 73.8, 34.7);
      ctx.bezierCurveTo(81.1, 30.0, 83.1, 19.2, 78.4, 10.9);
      ctx.bezierCurveTo(73.1, 1.6, 61.3, -1.3, 52.7, 4.4);
      ctx.bezierCurveTo(43.8, 10.3, 40.6, 23.0, 45.3, 33.4);
      ctx.bezierCurveTo(49.7, 43.1, 60.0, 48.8, 70.1, 46.9);
      ctx.bezierCurveTo(70.8, 46.8, 71.6, 47.0, 72.3, 46.1);
      ctx.bezierCurveTo(70.7, 45.6, 69.1, 45.2, 67.6, 44.7);
      ctx.bezierCurveTo(60.5, 42.3, 54.8, 38.0, 52.4, 29.7);
      ctx.bezierCurveTo(50.7, 23.5, 51.6, 17.7, 55.9, 13.2);
      ctx.bezierCurveTo(59.7, 9.0, 64.4, 8.0, 69.3, 10.2);
      ctx.bezierCurveTo(73.2, 12.0, 75.4, 15.4, 76.0, 20.0);
      ctx.bezierCurveTo(76.5, 24.2, 75.2, 27.6, 72.3, 30.1);
      ctx.bezierCurveTo(67.9, 34.0, 61.6, 31.7, 60.4, 25.8);
      ctx.bezierCurveTo(59.8, 22.9, 61.2, 20.0, 63.6, 19.1);
      ctx.bezierCurveTo(65.8, 18.3, 67.4, 19.3, 68.5, 22.2);
      ctx.closePath();

      // layer2/Group/Compound Path/Path
      ctx.moveTo(77.3, 60.7);
      ctx.bezierCurveTo(79.2, 60.2, 80.4, 60.8, 81.0, 62.5);
      ctx.bezierCurveTo(81.7, 64.3, 81.1, 65.8, 80.0, 67.0);
      ctx.bezierCurveTo(78.7, 68.5, 76.4, 68.8, 74.7, 67.7);
      ctx.bezierCurveTo(72.4, 66.4, 71.4, 64.1, 71.5, 61.3);
      ctx.bezierCurveTo(71.6, 57.9, 73.1, 55.5, 75.8, 54.1);
      ctx.bezierCurveTo(80.3, 51.9, 85.5, 54.8, 87.2, 60.4);
      ctx.bezierCurveTo(89.4, 67.8, 84.6, 75.5, 77.4, 75.9);
      ctx.bezierCurveTo(72.8, 76.2, 68.9, 74.0, 65.4, 70.7);
      ctx.bezierCurveTo(64.7, 70.0, 64.1, 69.0, 62.9, 68.9);
      ctx.bezierCurveTo(64.5, 74.8, 70.3, 80.7, 76.2, 81.9);
      ctx.bezierCurveTo(82.2, 83.1, 87.3, 81.0, 91.0, 75.4);
      ctx.bezierCurveTo(94.5, 69.9, 95.1, 63.8, 92.2, 57.7);
      ctx.bezierCurveTo(89.3, 51.5, 84.5, 48.6, 78.4, 49.1);
      ctx.bezierCurveTo(70.7, 49.6, 65.9, 58.7, 69.3, 66.2);
      ctx.bezierCurveTo(72.0, 71.9, 79.1, 73.0, 82.3, 68.3);
      ctx.bezierCurveTo(84.1, 65.6, 83.8, 61.8, 81.6, 60.1);
      ctx.bezierCurveTo(80.2, 58.9, 78.8, 59.0, 77.3, 60.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(252, 252, 252)";
      ctx.fill();

      // layer2/Group/Compound Path
      ctx.beginPath();

      // layer2/Group/Compound Path/Path
      ctx.moveTo(20.2, 145.7);
      ctx.bezierCurveTo(20.3, 137.8, 21.4, 130.5, 23.7, 123.3);
      ctx.bezierCurveTo(25.6, 117.2, 29.2, 113.3, 34.6, 111.8);
      ctx.bezierCurveTo(43.3, 109.5, 52.0, 109.8, 60.6, 112.3);
      ctx.bezierCurveTo(64.1, 113.3, 66.5, 115.9, 68.2, 119.5);
      ctx.bezierCurveTo(70.8, 124.8, 71.8, 130.7, 72.2, 136.7);
      ctx.bezierCurveTo(72.4, 138.6, 72.6, 140.5, 73.1, 142.3);
      ctx.bezierCurveTo(74.6, 147.0, 77.7, 149.2, 82.0, 148.5);
      ctx.bezierCurveTo(87.1, 147.7, 91.6, 144.9, 95.9, 141.9);
      ctx.bezierCurveTo(105.6, 135.4, 113.9, 126.9, 122.2, 118.3);
      ctx.bezierCurveTo(130.0, 110.1, 137.7, 101.7, 146.3, 94.5);
      ctx.bezierCurveTo(156.4, 86.0, 167.5, 79.9, 180.0, 77.9);
      ctx.bezierCurveTo(184.5, 77.3, 188.9, 76.9, 193.4, 77.1);
      ctx.bezierCurveTo(195.8, 77.2, 195.7, 77.2, 195.8, 79.9);
      ctx.bezierCurveTo(195.9, 81.6, 195.4, 82.0, 194.0, 81.9);
      ctx.bezierCurveTo(190.7, 81.7, 187.3, 82.1, 184.0, 82.6);
      ctx.bezierCurveTo(172.7, 84.4, 163.2, 90.3, 154.9, 99.2);
      ctx.bezierCurveTo(147.7, 107.0, 141.7, 116.1, 135.6, 125.1);
      ctx.bezierCurveTo(125.4, 139.8, 115.0, 154.4, 102.7, 167.1);
      ctx.bezierCurveTo(94.4, 175.6, 85.5, 183.0, 75.1, 187.9);
      ctx.bezierCurveTo(66.5, 191.9, 57.6, 193.8, 48.4, 191.8);
      ctx.bezierCurveTo(37.8, 189.6, 30.3, 182.3, 25.3, 171.5);
      ctx.bezierCurveTo(21.6, 163.3, 20.3, 154.5, 20.2, 145.7);
      ctx.closePath();

      // layer2/Group/Compound Path/Path
      ctx.moveTo(47.5, 112.0);
      ctx.bezierCurveTo(44.0, 111.9, 41.1, 112.2, 38.2, 112.7);
      ctx.bezierCurveTo(35.9, 113.1, 33.6, 113.6, 31.5, 115.0);
      ctx.bezierCurveTo(29.4, 116.3, 29.4, 117.9, 31.5, 119.3);
      ctx.bezierCurveTo(32.4, 119.9, 33.4, 120.3, 34.4, 120.7);
      ctx.bezierCurveTo(40.3, 122.5, 46.3, 122.6, 52.3, 122.0);
      ctx.bezierCurveTo(54.9, 121.8, 57.5, 121.3, 60.0, 120.3);
      ctx.bezierCurveTo(61.4, 119.7, 63.4, 119.3, 63.4, 117.2);
      ctx.bezierCurveTo(63.4, 115.1, 61.5, 114.6, 60.0, 114.0);
      ctx.bezierCurveTo(55.8, 112.3, 51.3, 112.2, 47.5, 112.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(20.2, 134.8, 195.8, 134.8);
      gradient.addColorStop(0.00, "rgb(255, 255, 255)");
      gradient.addColorStop(0.00, "rgb(255, 243, 198)");
      gradient.addColorStop(0.00, "rgb(255, 231, 142)");
      gradient.addColorStop(0.50, "rgb(127, 115, 71)");
      gradient.addColorStop(1.00, "rgb(0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(44.2, 107.9);
      ctx.bezierCurveTo(45.5, 104.6, 46.8, 101.5, 48.0, 98.3);
      ctx.bezierCurveTo(50.9, 90.4, 51.8, 82.3, 50.1, 73.9);
      ctx.bezierCurveTo(47.9, 63.3, 40.2, 55.3, 31.0, 54.2);
      ctx.bezierCurveTo(19.7, 52.9, 9.4, 64.6, 10.7, 77.5);
      ctx.bezierCurveTo(11.7, 87.5, 19.6, 94.2, 28.1, 92.3);
      ctx.bezierCurveTo(35.4, 90.6, 39.6, 81.5, 36.4, 74.2);
      ctx.bezierCurveTo(34.5, 69.8, 30.0, 67.8, 26.5, 69.7);
      ctx.bezierCurveTo(22.8, 71.7, 21.9, 75.8, 24.3, 79.4);
      ctx.bezierCurveTo(22.8, 79.5, 21.6, 78.5, 21.0, 76.6);
      ctx.bezierCurveTo(19.0, 71.3, 22.4, 64.9, 27.7, 63.9);
      ctx.bezierCurveTo(34.0, 62.7, 40.3, 67.8, 42.0, 75.2);
      ctx.bezierCurveTo(44.9, 87.7, 37.0, 99.5, 25.5, 100.1);
      ctx.bezierCurveTo(14.5, 100.6, 5.6, 92.2, 3.3, 79.3);
      ctx.bezierCurveTo(-0.5, 57.8, 14.8, 38.7, 33.9, 40.8);
      ctx.bezierCurveTo(52.3, 42.9, 62.9, 62.2, 59.0, 82.1);
      ctx.bezierCurveTo(57.0, 92.2, 52.4, 100.5, 45.4, 107.1);
      ctx.bezierCurveTo(45.1, 107.4, 44.8, 107.8, 44.2, 107.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(68.5, 22.2);
      ctx.bezierCurveTo(67.4, 19.3, 65.8, 18.3, 63.6, 19.1);
      ctx.bezierCurveTo(61.2, 20.0, 59.8, 22.9, 60.4, 25.8);
      ctx.bezierCurveTo(61.6, 31.7, 67.9, 34.0, 72.3, 30.1);
      ctx.bezierCurveTo(75.2, 27.6, 76.5, 24.2, 76.0, 20.0);
      ctx.bezierCurveTo(75.4, 15.4, 73.2, 12.0, 69.3, 10.2);
      ctx.bezierCurveTo(64.4, 8.0, 59.7, 9.0, 55.9, 13.2);
      ctx.bezierCurveTo(51.6, 17.7, 50.7, 23.5, 52.4, 29.7);
      ctx.bezierCurveTo(54.8, 38.0, 60.5, 42.3, 67.6, 44.7);
      ctx.bezierCurveTo(69.1, 45.2, 70.7, 45.6, 72.3, 46.1);
      ctx.bezierCurveTo(71.6, 47.0, 70.8, 46.8, 70.1, 46.9);
      ctx.bezierCurveTo(60.0, 48.8, 49.7, 43.1, 45.3, 33.4);
      ctx.bezierCurveTo(40.6, 23.0, 43.8, 10.3, 52.7, 4.4);
      ctx.bezierCurveTo(61.3, -1.3, 73.1, 1.6, 78.4, 10.9);
      ctx.bezierCurveTo(83.1, 19.2, 81.1, 30.0, 73.8, 34.7);
      ctx.bezierCurveTo(70.0, 37.1, 66.0, 37.3, 62.2, 34.6);
      ctx.bezierCurveTo(58.8, 32.2, 56.9, 28.7, 57.1, 23.9);
      ctx.bezierCurveTo(57.4, 18.7, 61.2, 15.1, 65.2, 16.2);
      ctx.bezierCurveTo(67.9, 16.9, 69.3, 19.5, 68.5, 22.2);
      ctx.closePath();
      ctx.fill();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(77.3, 60.7);
      ctx.bezierCurveTo(78.8, 59.0, 80.2, 58.9, 81.6, 60.1);
      ctx.bezierCurveTo(83.8, 61.8, 84.1, 65.6, 82.3, 68.3);
      ctx.bezierCurveTo(79.1, 73.0, 72.0, 71.9, 69.3, 66.2);
      ctx.bezierCurveTo(65.9, 58.7, 70.7, 49.6, 78.4, 49.1);
      ctx.bezierCurveTo(84.5, 48.6, 89.3, 51.5, 92.2, 57.7);
      ctx.bezierCurveTo(95.1, 63.8, 94.5, 69.9, 91.0, 75.4);
      ctx.bezierCurveTo(87.3, 81.0, 82.2, 83.1, 76.2, 81.9);
      ctx.bezierCurveTo(70.3, 80.7, 64.5, 74.8, 62.9, 68.9);
      ctx.bezierCurveTo(64.1, 69.0, 64.7, 70.0, 65.4, 70.7);
      ctx.bezierCurveTo(68.9, 74.0, 72.8, 76.2, 77.4, 75.9);
      ctx.bezierCurveTo(84.6, 75.5, 89.4, 67.8, 87.2, 60.4);
      ctx.bezierCurveTo(85.5, 54.8, 80.3, 51.9, 75.8, 54.1);
      ctx.bezierCurveTo(73.1, 55.5, 71.6, 57.9, 71.5, 61.3);
      ctx.bezierCurveTo(71.4, 64.1, 72.4, 66.4, 74.7, 67.7);
      ctx.bezierCurveTo(76.4, 68.8, 78.7, 68.5, 80.0, 67.0);
      ctx.bezierCurveTo(81.1, 65.8, 81.7, 64.3, 81.0, 62.5);
      ctx.bezierCurveTo(80.4, 60.8, 79.2, 60.2, 77.3, 60.7);
      ctx.closePath();
      ctx.fill();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(47.5, 112.0);
      ctx.bezierCurveTo(51.3, 112.2, 55.8, 112.3, 60.0, 114.0);
      ctx.bezierCurveTo(61.5, 114.6, 63.4, 115.1, 63.4, 117.2);
      ctx.bezierCurveTo(63.4, 119.3, 61.4, 119.7, 60.0, 120.3);
      ctx.bezierCurveTo(57.5, 121.3, 54.9, 121.8, 52.3, 122.0);
      ctx.bezierCurveTo(46.3, 122.6, 40.3, 122.5, 34.4, 120.7);
      ctx.bezierCurveTo(33.4, 120.3, 32.4, 119.9, 31.5, 119.3);
      ctx.bezierCurveTo(29.4, 117.9, 29.4, 116.3, 31.5, 115.0);
      ctx.bezierCurveTo(33.6, 113.6, 35.9, 113.1, 38.2, 112.7);
      ctx.bezierCurveTo(41.1, 112.2, 44.0, 111.9, 47.5, 112.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(248, 247, 247)";
      ctx.fill();
      ctx.restore();
      ctx.restore();