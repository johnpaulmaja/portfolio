<?php
$navigation = (isset($_GET['navigation']) && $_GET['navigation'] != '') ? $_GET['navigation']: '';
?>
<html>
    <head>
        <title>  Portfolio </title>
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    </head>
    <body>
                <div class="wrapper">
                        <div class="nav">
                          <ul class="nav-menu">
                            <li> <a href="index.php?navigation=home"> HOME </a> </li>
                            <li> <a href="index.php?navigation=modules"> MODULES</a> </li>
                          </ul>
                        </div>

                        <div class="content">
                        <?php
                        switch($navigation){
                            case 'modules':
                            require_once 'modules.php';
                            break;
                            default:
                            require_once 'home.php';
                            break;
                        }
                        ?>
                        </div>

                        <div id="footer">
                        <div class="index"> <div class="font-title"> Maja </div> | Portfolio </div>
                        </div>
    </div>
    </body>
</html>
<script>
function rotate() {
   var x = document.getElementById('rotate');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function skew() {
   var x = document.getElementById('skew');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function transl() {
   var x = document.getElementById('transl');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function lt() {
   var x = document.getElementById('lt');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function transition() {
   var x = document.getElementById('transition');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function animation() {
   var x = document.getElementById('animation');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function hover1() {
   var x = document.getElementById('hover1');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function hover2() {
   var x = document.getElementById('hover2');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function keyframe() {
   var x = document.getElementById('keyframe');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function leone() {
   var x = document.getElementById('leone');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function svgshapes() {
   var x = document.getElementById('svgshapes');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function svgtextart() {
   var x = document.getElementById('svgtextart');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function svganimation() {
   var x = document.getElementById('svganimation');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function leMid() {
   var x = document.getElementById('leMid');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function html5() {
   var x = document.getElementById('html5');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
</script>
