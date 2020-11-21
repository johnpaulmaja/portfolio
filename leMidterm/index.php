<html>
    <head>
        <title>FLOOM</title> 
        <link rel="stylesheet" type="text/css" href="css/style.css">
    </head>

    <body>
        <wrapper>

          <object type="image/svg+xml" data="svg/background.svg" class="background"></object>
          <object type="image/svg+xml" data="svg/flowers.svg" class="flowers"></object>
          <object type="image/svg+xml" data="svg/bee.svg" class="bee"></object>

          <svg viewBox="0 0 1920 2161.3">
            <g id="sun"><!--Sun-->
              <circle cx="990" cy="230" r="190" style="fill: #f9ffa1;"><animate attributeName="r" from="150" to="230" dur="2s" begin="0s" repeatCount="indefinite"/></circle>
              <circle cx="990" cy="230" r="190" style="fill: #f9ffa1;"><animate attributeName="r" from="230" to="150" dur="2s" begin="2s"repeatCount="indefinite"/></circle>
              <text transform="translate(700 270)" style="font-size: 152px;fill: black;font-family: 'Yantramanav', sans-serif;">F&#160L&#160O&#160 &#160 M &#160</text>
              <text transform="translate(980 230)" style="font-size: 152px;fill: black;font-family: 'Yantramanav', sans-serif;"> &#160 O &#160</text>
            </g>
            <g><!--cloud-->
              <ellipse cx="241" cy="109" rx="96" ry="88" style="fill: #fcfeff"><animate attributeName="cx" from="41" to="2161" dur="6s" repeatCount="indefinite"/></ellipse>
              <ellipse cx="178" cy="175" rx="99" ry="77" style="fill: #fcfeff"><animate  attributeName="cx" from="-22" to="2098" dur="6s" repeatCount="indefinite"/></ellipse>
              <ellipse cx="348" cy="171" rx="98" ry="91" style="fill: #fcfeff"><animate  attributeName="cx" from="148" to="2268" dur="6s" repeatCount="indefinite"/></ellipse>
              <ellipse cx="67" cy="206" rx="67" ry="55" style="fill: #fcfeff"><animate  attributeName="cx" from="-133" to="1987" dur="6s" repeatCount="indefinite"/></ellipse>
              <ellipse cx="245" cy="226" rx="44" ry="35" style="fill: #fcfeff"><animate  attributeName="cx" from="45" to="2165" dur="6s" repeatCount="indefinite"/></ellipse>
              <circle cx="442" cy="206" r="55" style="fill: #fcfeff"><animate  attributeName="cx" from="242" to="2362" dur="6s" repeatCount="indefinite"/></circle>

              <ellipse cx="241" cy="409" rx="96" ry="88" style="fill: #fcfeff"><animate attributeName="cx" from="41" to="2161" dur="5s" repeatCount="indefinite"/></ellipse>
              <ellipse cx="178" cy="475" rx="99" ry="77" style="fill: #fcfeff"><animate  attributeName="cx" from="-22" to="2098" dur="5s" repeatCount="indefinite"/></ellipse>
              <ellipse cx="348" cy="471" rx="98" ry="91" style="fill: #fcfeff"><animate  attributeName="cx" from="148" to="2268" dur="5s" repeatCount="indefinite"/></ellipse>
              <ellipse cx="67" cy="506" rx="67" ry="55" style="fill: #fcfeff"><animate  attributeName="cx" from="-133" to="1987" dur="5s" repeatCount="indefinite"/></ellipse>
              <ellipse cx="245" cy="526" rx="44" ry="35" style="fill: #fcfeff"><animate  attributeName="cx" from="45" to="2165" dur="5s" repeatCount="indefinite"/></ellipse>
              <circle cx="442" cy="506" r="55" style="fill: #fcfeff"><animate  attributeName="cx" from="242" to="2362" dur="5s" repeatCount="indefinite"/></circle>

              <ellipse cx="241" cy="309" rx="96" ry="88" style="fill: #fcfeff"><animate attributeName="cx" from="41" to="2161" dur="5.5s" repeatCount="indefinite"/></ellipse>
              <ellipse cx="178" cy="375" rx="99" ry="77" style="fill: #fcfeff"><animate  attributeName="cx" from="-22" to="2098" dur="5.5s" repeatCount="indefinite"/></ellipse>
              <ellipse cx="348" cy="371" rx="98" ry="91" style="fill: #fcfeff"><animate  attributeName="cx" from="148" to="2268" dur="5.5s" repeatCount="indefinite"/></ellipse>
              <ellipse cx="67" cy="406" rx="67" ry="55" style="fill: #fcfeff"><animate  attributeName="cx" from="-133" to="1987" dur="5.5s" repeatCount="indefinite"/></ellipse>
              <ellipse cx="245" cy="426" rx="44" ry="35" style="fill: #fcfeff"><animate  attributeName="cx" from="45" to="2165" dur="5.5s" repeatCount="indefinite"/></ellipse>
              <circle cx="442" cy="406" r="55" style="fill: #fcfeff"><animate  attributeName="cx" from="242" to="2362" dur="5.5s" repeatCount="indefinite"/></circle>
            </g>
          </svg>

          
          <button onclick="myFunction()" class="button">Click Me to hide the overlay</button>

          <div id="myDIV">
          
          
            <svg viewBox="0 0 1920 2161.3">
                  <g><!--Overlay rectangle-->
                    <rect x="200" y="491" width="1521" height="1467" style="fill: #fff; stroke:black;opacity: 0.70;"/>
                  </g>
                  
                  <g><!--eye-->
                    <path id="eye" d="M277,697s33,19,107-17c0,0,82-33,135,6,0,0,15,7,33,30,0,0-24,36-60,44l36-44s-19-26-24-19-22,52-84,28c0,0-20-14-17-28,0,0,14,28,43,21,0,0,25-1,32-29,0,0-27-15-88,6,0,0-71,27-95,12C295,707,283,704,277,697Z" transform="translate(10 -40)"/>
                    <animate xlink:href="#eye"
                    attributeName="d"
                    attributeType="XML"
                    from="M277,697s33,19,107-17c0,0,82-33,135,6,0,0,15,7,33,30,0,0-24,36-60,44l36-44s-19-26-24-19-22,52-84,28c0,0-20-14-17-28,0,0,14,28,43,21,0,0,25-1,32-29,0,0-27-15-88,6,0,0-71,27-95,12C295,707,283,704,277,697Z"
                        to="M277,697s183,72,275,19c0,0-27,37-60,44S277,697,277,697Z"
                    dur="2s"
                    repeatcount="indefinite" />
                    <path id="eye2"d="M360,720s68,31,145,15l-23,27S399,760,360,720Z" transform="translate(10 -40)" style="fill: #020000"/>
                    <animate xlink:href="#eye2"
                    attributeName="d"
                    attributeType="XML"
                    from="M360,720s68,31,145,15l-23,27S399,760,360,720Z"
                        to="M277,697s183,72,275,19c0,0-27,37-60,44S277,697,277,697Z"
                    dur="2s"
                    repeatcount="indefinite" />
                  </g>
                  <g><!--the three text-->
                    <text transform="translate(600 590)" style="font-size: 55px;fill: #bfd79b; font-family: 'Roboto', sans-serif;">Why send flowers with Floom?</text>

                    <text transform="translate(250 790)" style="font-size: 30px;fill: #bfd79b; font-family: 'Roboto', sans-serif;font-style: italic;">What you see is what you get</text>
                    <text transform="translate(750 990)" style="font-size: 30px;fill: #bfd79b; font-family: 'Roboto', sans-serif;font-style: italic;">Always unique, never generic</text>
                    <text transform="translate(1160 790)" style="font-size: 30px;fill: #bfd79b; font-family: 'Roboto', sans-serif;font-style: italic;">Hand-delivered with care and attention</text>
                    
                    <text transform="translate(270 830)" style="font-size: 23px;fill: #bfd79b; font-family: 'Roboto', sans-serif;">Love the bouquet on your screen?</text>
                    <text transform="translate(245 855)" style="font-size: 23px;fill: #bfd79b; font-family: 'Roboto', sans-serif;">That's exactly what our local florist will</text>
                    <text transform="translate(275 880)" style="font-size: 23px;fill: #bfd79b; font-family: 'Roboto', sans-serif;">prepare freshly for your order, or</text>
                    <text transform="translate(345 905)" style="font-size: 23px;fill: #bfd79b; font-family: 'Roboto', sans-serif;">your money back!</text>

                    <text transform="translate(750 1030)" style="font-size: 23px;fill: #bfd79b; font-family: 'Roboto', sans-serif;">We only work with the most talented</text>
                    <text transform="translate(780 1055)" style="font-size: 23px;fill: #bfd79b; font-family: 'Roboto', sans-serif;">and unique artisans, and we're</text>
                    <text transform="translate(770 1080)" style="font-size: 23px;fill: #bfd79b; font-family: 'Roboto', sans-serif;">passionate about supporting our</text>
                    <text transform="translate(820 1105)" style="font-size: 23px;fill: #bfd79b; font-family: 'Roboto', sans-serif;">skilled family of florists.</text>


                    <text transform="translate(1230 830)" style="font-size: 23px;fill: #bfd79b; font-family: 'Roboto', sans-serif;">Each of our orders is professionally</text>
                    <text transform="translate(1255 855)" style="font-size: 23px;fill: #bfd79b; font-family: 'Roboto', sans-serif;">arranged, wrapped and safely</text>
                    <text transform="translate(1235 880)" style="font-size: 23px;fill: #bfd79b; font-family: 'Roboto', sans-serif;">delivered with a hand-written card,</text>
                    <text transform="translate(1240 905)" style="font-size: 23px;fill: #bfd79b; font-family: 'Roboto', sans-serif;">on the exact day that you need it.</text>
                  </g>
                  <g> <!--boxes-->
                    <rect x="275" y="1200" width="300" height="300" rx="48.7" style="fill: #E1F2BB;opacity: 0.8"/>
                    <rect x="790" y="1200" width="300" height="300" rx="48.7" style="fill: #E1F2BB;opacity: 0.8"/>
                    <rect x="1275" y="1200" width="300" height="300" rx="48.7" style="fill: #E1F2BB;opacity: 0.8"/>
                    <rect x="525" y="1550" width="300" height="300" rx="48.7" style="fill: #E1F2BB;opacity: 0.8"/>
                    <rect x="1040" y="1550" width="300" height="300" rx="48.7" style="fill: #E1F2BB;opacity: 0.8"/>
                  </g>
                  <g><!--flower names-->
                    <text transform="translate(290 1490)" style="font-size: 30px;fill: #bfd79b; font-family: 'Roboto', sans-serif;font-style: italic;">Silk Flower</text>
                    <text transform="translate(810 1490)" style="font-size: 30px;fill: #bfd79b; font-family: 'Roboto', sans-serif;font-style: italic;">Glaze Lily</text>
                    <text transform="translate(1300 1490)" style="font-size: 30px;fill: #bfd79b; font-family: 'Roboto', sans-serif;font-style: italic;">Qingxin</text>
                    <text transform="translate(1060 1840)" style="font-size: 30px;fill: #bfd79b; font-family: 'Roboto', sans-serif;font-style: italic;">Violet Grass</text>
                    <text transform="translate(550 1840)" style="font-size: 30px;fill: #bfd79b; font-family: 'Roboto', sans-serif;font-style: italic;">Cecilia</text>
                  </g>
            </svg>
            <object type="image/svg+xml" data="svg/unique.svg" class="unique"></object>
            <object type="image/svg+xml" data="svg/handshake.svg" class="handshake"></object>
            <object type="image/svg+xml" data="svg/SilkFlower.svg" class="silkflower"></object>
            <object type="image/svg+xml" data="svg/glzelily.svg" class="glazelily"></object>
            <object type="image/svg+xml" data="svg/qingxin.svg" class="qingxin"></object>
            <object type="image/svg+xml" data="svg/violetgrass.svg" class="violetgrass"></object>
            <object type="image/svg+xml" data="svg/cecilia.svg" class="cecilia"></object>
            
            <a href="https://github.com/johnpaulmaja/LEsvg" style="position: absolute;transform: translate(-1040px,1920px); width: 120px;">Github Link here</a>
          </div>
        </wrapper>
    </body>
</html> 

<script>
  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  </script>
