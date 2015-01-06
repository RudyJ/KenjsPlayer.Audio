KenjsPlayer.Audio
=================

Audio Player 100% HTML5 + CSS + JS and 0% FLASH or SWF


<a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nd/4.0/88x31.png" /></a><br />O trabalho <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Dataset" property="dct:title" rel="dct:type">KenjsPlayer</span> de <a xmlns:cc="http://creativecommons.org/ns#" href="https://www.facebook.com/rudypaesdeandrade" property="cc:attributionName" rel="cc:attributionURL">Rudy Jordache</a> está licenciado com uma Licença <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/">Creative Commons - Atribuição-SemDerivações 4.0 Internacional</a>.<br />Baseado no trabalho disponível em <a xmlns:dct="http://purl.org/dc/terms/" href="http://kenjs.innozone.com.br/audio/" rel="dct:source">http://kenjs.innozone.com.br/audio/</a>.<br />Podem estar disponíveis autorizações adicionais às concedidas no âmbito desta licença em <a xmlns:cc="http://creativecommons.org/ns#" href="https://www.facebook.com/rudypaesdeandrade" rel="cc:morePermissions">https://www.facebook.com/rudypaesdeandrade</a>.

<h2>Example</h2>
<code>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>KenjsPlayer Audio - 1.0</title>
        <link rel="stylesheet" href="css/bootstrap.css"/>
        <link rel="stylesheet" href="css/font-awesome.css"/>
        <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
        <link rel="stylesheet" href="css/jQuery.KenjsPlayer.Audio-1.0.css"/>
        <script type="text/javascript" src="js/jQuery.KenjsPlayer.Audio-1.0.js"></script>
        <!--[if IE]><script src"http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
        <script>
            $(function(){
               
              var faixas = new Array(
                   Array(
                       "Hey You",
                       "sounds/01 Hey You.mp3"
                   ).toString(),
                   Array(
                       "In The Flesh",
                       "sounds/01 In The Flesh_.mp3"
                   ).toString(),
                   Array(
                       "The Post War Dream",
                       "sounds/01 The Post War Dream.mp3"
                   ).toString(),
                   Array(
                       "Another Brick In The Wall Part 1",
                       "sounds/03 Another Brick In The Wall Part 1.mp3"
                   ).toString(),
                   Array(
                       "Time",
                       "sounds/04 Time.mp3"
                   ).toString(),
                   Array(
                       "Wish You Were Here",
                       "sounds/04 Wish You Were Here.mp3"
                   ).toString()
               );
               
               $("#audio-player").kenjsPlayer(faixas);
            
    
    });
            
          
            
        </script>
        <style>
            #cc{
                width: 600px;
                margin: auto;
                margin-top: 150px;
                background: #FFF;
                padding: 25px 25px;
            }
        </style>
    </head>
    <body>
        <div class="container span6 offset3">
            <div id="audio-player"></div>
        </div>
        <h1><span style="color:#FFF;">Kenjs</span>Player Audio - 1.0</h1>
        <div id="cc"><a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nd/4.0/88x31.png" /></a><br />O trabalho <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Dataset" property="dct:title" rel="dct:type">KenjsPlayer</span> de <a xmlns:cc="http://creativecommons.org/ns#" href="https://www.facebook.com/rudypaesdeandrade" property="cc:attributionName" rel="cc:attributionURL">Rudy Jordache</a> está licenciado com uma Licença <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/">Creative Commons - Atribuição-SemDerivações 4.0 Internacional</a>.<br />Baseado no trabalho disponível em <a xmlns:dct="http://purl.org/dc/terms/" href="teste" rel="dct:source">teste</a>.<br />Podem estar disponíveis autorizações adicionais às concedidas no âmbito desta licença em <a xmlns:cc="http://creativecommons.org/ns#" href="https://www.facebook.com/rudypaesdeandrade" rel="cc:morePermissions">https://www.facebook.com/rudypaesdeandrade</a>.</div>
    </body>
</html>

</code>
