    var canvas = document.getElementById("shot");
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
     ctx.moveTo(128.2, 81.5);
     ctx.bezierCurveTo(126.8, 99.2, 125.3, 116.8, 123.9, 134.5);
     ctx.bezierCurveTo(123.3, 141.6, 122.7, 148.6, 122.0, 155.7);
     ctx.bezierCurveTo(121.4, 162.1, 116.9, 167.3, 110.8, 167.4);
     ctx.bezierCurveTo(96.2, 167.6, 81.6, 168.0, 67.0, 167.2);
     ctx.bezierCurveTo(61.2, 164.5, 58.6, 159.9, 58.1, 153.4);
     ctx.bezierCurveTo(55.7, 124.2, 53.2, 95.0, 50.6, 65.9);
     ctx.bezierCurveTo(50.3, 62.6, 51.2, 61.8, 54.2, 61.8);
     ctx.bezierCurveTo(72.9, 62.0, 91.5, 61.9, 110.2, 62.0);
     ctx.bezierCurveTo(111.1, 61.2, 112.2, 60.9, 113.3, 60.6);
     ctx.bezierCurveTo(115.1, 60.3, 116.9, 60.4, 118.7, 60.7);
     ctx.bezierCurveTo(120.0, 60.5, 121.4, 60.8, 122.7, 60.6);
     ctx.bezierCurveTo(124.3, 60.4, 125.9, 60.4, 127.4, 60.7);
     ctx.bezierCurveTo(128.8, 61.1, 130.2, 61.6, 130.6, 63.2);
     ctx.bezierCurveTo(130.9, 64.1, 131.0, 65.1, 130.8, 66.0);
     ctx.bezierCurveTo(130.0, 68.4, 130.2, 70.9, 130.1, 73.3);
     ctx.bezierCurveTo(130.3, 74.9, 130.5, 76.4, 130.2, 78.0);
     ctx.bezierCurveTo(130.0, 79.4, 129.2, 80.5, 128.2, 81.5);
     ctx.closePath();
     ctx.fillStyle = "rgb(249, 249, 249)";
     ctx.fill();

     // layer2/Group/Path
     ctx.beginPath();
     ctx.moveTo(129.8, 63.8);
     ctx.bezierCurveTo(129.5, 62.3, 128.4, 62.1, 127.2, 61.9);
     ctx.bezierCurveTo(127.0, 60.0, 128.5, 59.2, 129.5, 58.1);
     ctx.bezierCurveTo(131.9, 55.5, 134.5, 53.0, 136.8, 50.4);
     ctx.bezierCurveTo(138.0, 49.1, 138.3, 47.8, 136.6, 46.7);
     ctx.bezierCurveTo(133.6, 44.7, 130.4, 43.0, 126.9, 42.1);
     ctx.bezierCurveTo(124.4, 41.5, 123.3, 42.6, 123.3, 45.3);
     ctx.bezierCurveTo(123.4, 49.4, 123.3, 53.5, 123.3, 57.7);
     ctx.bezierCurveTo(123.4, 59.1, 123.6, 60.6, 122.8, 62.0);
     ctx.bezierCurveTo(121.4, 61.9, 120.0, 61.9, 118.6, 61.9);
     ctx.bezierCurveTo(117.3, 60.5, 117.4, 58.7, 117.4, 57.0);
     ctx.bezierCurveTo(117.3, 53.0, 117.4, 49.0, 117.4, 45.0);
     ctx.bezierCurveTo(117.3, 42.5, 116.1, 41.7, 113.9, 42.1);
     ctx.bezierCurveTo(110.4, 42.8, 107.4, 44.5, 104.5, 46.5);
     ctx.bezierCurveTo(102.6, 47.8, 102.6, 49.1, 104.2, 50.7);
     ctx.bezierCurveTo(106.5, 53.2, 108.9, 55.6, 111.2, 58.1);
     ctx.bezierCurveTo(112.2, 59.2, 113.7, 60.0, 113.5, 62.0);
     ctx.bezierCurveTo(112.4, 62.0, 111.3, 62.0, 110.2, 62.0);
     ctx.bezierCurveTo(109.1, 58.6, 106.1, 57.0, 104.1, 54.6);
     ctx.bezierCurveTo(101.8, 51.9, 99.4, 49.4, 97.0, 46.8);
     ctx.bezierCurveTo(96.7, 44.4, 98.3, 43.2, 99.9, 42.1);
     ctx.bezierCurveTo(114.7, 31.5, 131.5, 33.1, 144.2, 45.1);
     ctx.bezierCurveTo(156.7, 56.8, 158.8, 76.7, 149.6, 91.2);
     ctx.bezierCurveTo(148.3, 93.3, 147.0, 95.6, 144.2, 95.9);
     ctx.bezierCurveTo(143.2, 95.4, 142.4, 94.6, 141.9, 93.6);
     ctx.bezierCurveTo(141.4, 92.4, 142.2, 91.6, 142.6, 90.6);
     ctx.bezierCurveTo(145.1, 86.9, 147.5, 83.2, 148.4, 78.6);
     ctx.bezierCurveTo(148.9, 75.9, 148.2, 74.9, 145.6, 74.9);
     ctx.bezierCurveTo(141.7, 74.9, 137.9, 74.9, 134.1, 74.9);
     ctx.bezierCurveTo(132.3, 74.8, 130.4, 75.0, 129.0, 73.5);
     ctx.bezierCurveTo(129.1, 71.0, 128.1, 68.4, 129.6, 66.1);
     ctx.bezierCurveTo(131.3, 68.0, 133.2, 68.8, 135.7, 68.7);
     ctx.bezierCurveTo(139.0, 68.5, 142.3, 68.6, 145.7, 68.6);
     ctx.bezierCurveTo(148.2, 68.6, 149.2, 67.7, 148.6, 65.0);
     ctx.bezierCurveTo(147.7, 61.6, 146.5, 58.4, 144.8, 55.4);
     ctx.bezierCurveTo(143.6, 53.2, 142.3, 53.1, 140.6, 54.8);
     ctx.bezierCurveTo(138.4, 57.0, 136.3, 59.4, 134.0, 61.5);
     ctx.bezierCurveTo(132.8, 62.7, 131.8, 64.2, 129.8, 63.8);
     ctx.closePath();
     ctx.fillStyle = "rgb(227, 233, 199)";
     ctx.fill();

     // layer2/Group/Path
     ctx.beginPath();
     ctx.moveTo(144.2, 95.9);
     ctx.bezierCurveTo(153.8, 85.2, 156.4, 72.8, 151.6, 59.2);
     ctx.bezierCurveTo(146.6, 45.4, 136.4, 38.0, 122.4, 36.8);
     ctx.bezierCurveTo(112.6, 36.0, 104.0, 39.4, 97.0, 46.8);
     ctx.bezierCurveTo(93.2, 43.5, 93.2, 43.3, 97.1, 40.1);
     ctx.bezierCurveTo(113.8, 26.4, 138.7, 30.2, 151.4, 48.5);
     ctx.bezierCurveTo(151.7, 49.0, 152.2, 49.5, 152.5, 50.0);
     ctx.bezierCurveTo(161.1, 65.9, 160.6, 81.2, 150.3, 96.0);
     ctx.bezierCurveTo(147.6, 99.8, 147.2, 99.7, 144.2, 95.9);
     ctx.closePath();
     ctx.fillStyle = "rgb(148, 173, 34)";
     ctx.fill();

     // layer2/Group/Path
     ctx.beginPath();
     ctx.moveTo(143.5, 91.8);
     ctx.bezierCurveTo(143.0, 92.4, 142.4, 93.0, 141.9, 93.6);
     ctx.bezierCurveTo(138.4, 90.1, 134.9, 86.6, 131.3, 83.1);
     ctx.bezierCurveTo(130.5, 82.3, 129.9, 80.7, 128.2, 81.5);
     ctx.bezierCurveTo(127.8, 80.2, 128.9, 79.3, 128.9, 78.1);
     ctx.bezierCurveTo(129.9, 77.6, 130.7, 78.0, 131.4, 78.7);
     ctx.bezierCurveTo(135.6, 82.9, 140.1, 86.8, 143.5, 91.8);
     ctx.closePath();
     ctx.fillStyle = "rgb(213, 207, 169)";
     ctx.fill();

     // layer2/Group/Path
     ctx.beginPath();
     ctx.moveTo(94.9, 153.7);
     ctx.bezierCurveTo(89.2, 155.0, 87.1, 153.9, 84.8, 148.6);
     ctx.bezierCurveTo(82.5, 143.3, 81.3, 137.6, 81.1, 131.8);
     ctx.bezierCurveTo(80.4, 114.5, 80.1, 97.1, 79.6, 79.7);
     ctx.bezierCurveTo(80.7, 78.3, 82.2, 78.1, 83.8, 78.1);
     ctx.bezierCurveTo(89.5, 78.1, 95.1, 78.0, 100.8, 78.1);
     ctx.bezierCurveTo(105.1, 78.3, 106.5, 80.1, 106.3, 84.4);
     ctx.bezierCurveTo(105.7, 96.8, 105.0, 109.2, 105.0, 121.7);
     ctx.bezierCurveTo(105.0, 126.1, 104.4, 130.5, 103.8, 134.8);
     ctx.bezierCurveTo(102.7, 142.0, 100.7, 148.9, 94.9, 153.7);
     ctx.closePath();
     ctx.fillStyle = "rgb(253, 207, 71)";
     ctx.fill();

     // layer2/Group/Path
     ctx.beginPath();
     ctx.moveTo(94.9, 153.7);
     ctx.bezierCurveTo(94.6, 153.2, 93.1, 153.5, 93.7, 152.9);
     ctx.bezierCurveTo(102.2, 145.3, 102.6, 134.6, 103.2, 124.3);
     ctx.bezierCurveTo(103.8, 110.6, 103.9, 96.9, 104.8, 83.2);
     ctx.bezierCurveTo(105.0, 80.5, 104.0, 79.7, 101.5, 79.7);
     ctx.bezierCurveTo(94.2, 79.8, 86.9, 79.7, 79.6, 79.7);
     ctx.bezierCurveTo(79.6, 78.1, 79.6, 76.5, 79.5, 74.9);
     ctx.bezierCurveTo(80.5, 73.8, 81.8, 73.7, 83.1, 73.7);
     ctx.bezierCurveTo(94.8, 74.0, 106.5, 73.2, 118.2, 73.3);
     ctx.bezierCurveTo(123.6, 73.3, 124.1, 74.0, 123.6, 79.7);
     ctx.bezierCurveTo(122.3, 95.8, 121.2, 111.9, 119.5, 128.0);
     ctx.bezierCurveTo(118.1, 141.2, 107.7, 151.5, 94.9, 153.7);
     ctx.closePath();
     ctx.fillStyle = "rgb(209, 156, 1)";
     ctx.fill();

     // layer2/Group/Path
     ctx.beginPath();
     ctx.moveTo(66.1, 79.7);
     ctx.bezierCurveTo(67.2, 95.5, 68.2, 111.3, 69.3, 127.1);
     ctx.bezierCurveTo(70.0, 136.8, 73.5, 145.1, 80.9, 151.3);
     ctx.bezierCurveTo(80.9, 152.7, 80.2, 152.5, 79.4, 152.1);
     ctx.bezierCurveTo(68.5, 147.2, 62.0, 138.7, 60.8, 126.4);
     ctx.bezierCurveTo(59.3, 110.9, 57.7, 95.4, 56.9, 79.8);
     ctx.bezierCurveTo(60.1, 77.5, 62.8, 77.4, 66.1, 79.7);
     ctx.closePath();
     ctx.fillStyle = "rgb(253, 207, 71)";
     ctx.fill();

     // layer2/Group/Path
     ctx.beginPath();
     ctx.moveTo(113.5, 62.0);
     ctx.bezierCurveTo(109.2, 58.4, 105.6, 54.0, 101.6, 50.0);
     ctx.bezierCurveTo(100.5, 48.9, 100.2, 47.8, 101.6, 46.8);
     ctx.bezierCurveTo(105.8, 43.4, 110.4, 40.8, 115.8, 40.3);
     ctx.bezierCurveTo(117.9, 40.1, 118.9, 40.7, 118.9, 43.1);
     ctx.bezierCurveTo(118.7, 49.4, 118.7, 55.6, 118.6, 61.9);
     ctx.bezierCurveTo(116.9, 61.9, 115.2, 61.9, 113.5, 62.0);
     ctx.closePath();
     ctx.fillStyle = "rgb(180, 197, 100)";
     ctx.fill();

     // layer2/Group/Path
     ctx.beginPath();
     ctx.moveTo(122.8, 62.0);
     ctx.bezierCurveTo(121.2, 59.9, 122.0, 57.6, 121.9, 55.4);
     ctx.bezierCurveTo(121.8, 52.0, 121.9, 48.7, 121.9, 45.3);
     ctx.bezierCurveTo(121.9, 40.1, 122.5, 39.5, 127.4, 40.7);
     ctx.bezierCurveTo(131.3, 41.7, 134.9, 43.6, 138.2, 45.9);
     ctx.bezierCurveTo(140.2, 47.2, 140.7, 48.6, 138.6, 50.6);
     ctx.bezierCurveTo(134.7, 54.3, 131.0, 58.1, 127.2, 61.9);
     ctx.bezierCurveTo(125.7, 61.9, 124.3, 62.0, 122.8, 62.0);
     ctx.closePath();
     ctx.fillStyle = "rgb(179, 196, 98)";
     ctx.fill();

     // layer2/Group/Path
     ctx.beginPath();
     ctx.moveTo(129.8, 63.8);
     ctx.bezierCurveTo(133.4, 60.1, 137.1, 56.4, 140.7, 52.5);
     ctx.bezierCurveTo(142.4, 50.6, 143.7, 50.9, 144.9, 52.8);
     ctx.bezierCurveTo(147.8, 57.1, 149.6, 61.7, 150.4, 66.8);
     ctx.bezierCurveTo(150.8, 69.3, 149.8, 70.1, 147.4, 70.1);
     ctx.bezierCurveTo(142.8, 70.0, 138.2, 69.8, 133.6, 70.1);
     ctx.bezierCurveTo(130.6, 70.3, 129.3, 69.2, 129.6, 66.1);
     ctx.bezierCurveTo(129.7, 65.3, 129.7, 64.6, 129.8, 63.8);
     ctx.closePath();
     ctx.fillStyle = "rgb(178, 196, 98)";
     ctx.fill();

     // layer2/Group/Path
     ctx.beginPath();
     ctx.moveTo(143.5, 91.8);
     ctx.bezierCurveTo(140.4, 91.0, 139.0, 88.1, 136.9, 86.1);
     ctx.bezierCurveTo(134.1, 83.5, 131.6, 80.8, 128.9, 78.1);
     ctx.bezierCurveTo(128.9, 76.6, 129.0, 75.0, 129.0, 73.5);
     ctx.bezierCurveTo(135.3, 73.4, 141.6, 73.4, 147.8, 73.2);
     ctx.bezierCurveTo(150.5, 73.1, 150.7, 74.8, 150.3, 76.9);
     ctx.bezierCurveTo(149.4, 82.5, 147.1, 87.5, 143.5, 91.8);
     ctx.closePath();
     ctx.fill();

     // layer2/Group/Path
     ctx.beginPath();
     ctx.moveTo(79.5, 74.1);
     ctx.bezierCurveTo(79.1, 66.8, 79.1, 66.8, 86.1, 66.8);
     ctx.bezierCurveTo(92.7, 66.8, 99.2, 66.9, 105.7, 66.9);
     ctx.bezierCurveTo(107.6, 72.7, 106.4, 74.6, 100.6, 74.5);
     ctx.bezierCurveTo(93.6, 74.4, 86.5, 75.0, 79.5, 74.1);
     ctx.closePath();
     ctx.fillStyle = "rgb(197, 207, 135)";
     ctx.fill();

     // layer2/Group/Path
     ctx.beginPath();
     ctx.moveTo(79.5, 74.1);
     ctx.bezierCurveTo(86.3, 74.1, 93.2, 74.0, 100.0, 74.2);
     ctx.bezierCurveTo(103.3, 74.3, 105.6, 73.9, 105.0, 69.6);
     ctx.bezierCurveTo(104.9, 68.7, 105.5, 67.8, 105.7, 66.9);
     ctx.bezierCurveTo(111.1, 66.9, 116.5, 66.9, 121.9, 66.8);
     ctx.bezierCurveTo(124.1, 66.7, 125.1, 67.3, 124.6, 69.8);
     ctx.bezierCurveTo(124.0, 73.0, 124.8, 76.5, 123.6, 79.7);
     ctx.bezierCurveTo(124.0, 75.7, 122.2, 74.6, 118.5, 74.7);
     ctx.bezierCurveTo(105.5, 75.0, 92.5, 74.8, 79.5, 74.9);
     ctx.bezierCurveTo(79.4, 74.6, 79.4, 74.4, 79.5, 74.1);
     ctx.closePath();
     ctx.fillStyle = "rgb(171, 187, 77)";
     ctx.fill();

     // layer2/Group/Path
     ctx.beginPath();
     ctx.moveTo(56.3, 74.9);
     ctx.bezierCurveTo(56.3, 74.4, 56.2, 73.9, 56.1, 73.3);
     ctx.bezierCurveTo(55.6, 66.7, 55.6, 66.8, 61.9, 66.7);
     ctx.bezierCurveTo(64.8, 66.7, 65.8, 67.7, 65.7, 70.6);
     ctx.bezierCurveTo(65.6, 72.6, 66.0, 74.6, 66.2, 76.5);
     ctx.bezierCurveTo(62.9, 75.6, 59.5, 76.1, 56.3, 74.9);
     ctx.closePath();
     ctx.fillStyle = "rgb(197, 208, 138)";
     ctx.fill();

     // layer2/Group/Path
     ctx.beginPath();
     ctx.moveTo(56.3, 74.9);
     ctx.bezierCurveTo(59.8, 74.5, 63.4, 72.4, 66.2, 76.5);
     ctx.bezierCurveTo(66.2, 77.6, 66.1, 78.6, 66.1, 79.7);
     ctx.bezierCurveTo(63.1, 79.7, 60.0, 79.8, 56.9, 79.8);
     ctx.bezierCurveTo(56.3, 78.2, 56.3, 76.6, 56.3, 74.9);
     ctx.closePath();
     ctx.fillStyle = "rgb(210, 162, 19)";
     ctx.fill();

     // layer2/Group/Path
     ctx.beginPath();
     ctx.moveTo(79.4, 152.1);
     ctx.bezierCurveTo(79.9, 151.8, 80.4, 151.6, 80.9, 151.3);
     ctx.bezierCurveTo(82.4, 151.4, 83.7, 152.1, 84.9, 153.4);
     ctx.bezierCurveTo(82.7, 153.7, 81.0, 153.1, 79.4, 152.1);
     ctx.closePath();
     ctx.fillStyle = "rgb(248, 222, 133)";
     ctx.fill();
     ctx.restore();
     ctx.restore();