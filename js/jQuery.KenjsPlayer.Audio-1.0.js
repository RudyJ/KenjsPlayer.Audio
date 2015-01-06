/*! 
 * 
 * KenjsPlayer
 * Audio Player without swf, only jQuery, CSS (bootstrap) and HTML5
 * Author : Rudy Jordache
 * Version : 1.0
 * License : 
 * 
 *   */
(function($){
jQuery.fn.kenjsPlayer = function(playlist){
    
    var firstChapter = playlist[0];
    var firstSound   = firstChapter.split(",");
    
    var html = "<audio id='audio' controls='controls' src='"+firstSound[1]+"'></audio>"+
                "<p id='titulo' class='span2'>"+firstSound[0]+"</p>"+
                "<p>"+
                    "<span id='current' class='label' ></span>&nbsp;-&nbsp;<span id='duration' class='label'></span>"+
                    "&nbsp;<i class='fa fa-1x fa-volume-down menos'></i><input type='range' id='vol' min='0' max='100' value='100'/><i class='fa fa-1x fa-volume-up mais'></i>"+
                "</p>"+
                "<div class='btn-group inline pull-left'>"+
                    "<button class='btn btn-small fa fa-1x fa-play' data-controls='play'></button>"+
                    "<button class='btn btn-small fa fa-1x fa-stop' data-controls='stop'></button>"+
                    "<button class='btn btn-small fa fa-1x fa-pause' data-controls='pause'></button>"+
                "</div>"+
                "<div id='progresso' class='progress progress-striped progress-danger span2'>"+
                    "<div class='bar'></div>"+
                "</div><br />"+ 
                "<div class='btn-group inline'>"+
                    "<button class='btn btn-small fa fa-1x fa-fast-backward' data-controls='previous'></button>"+
                    "<button class='btn btn-small fa fa-1x fa-backward' data-controls='backward'></button>"+
                    "<button class='btn btn-small fa fa-1x fa-forward' data-controls='forward'></button>"+
                    "<button class='btn btn-small fa fa-1x fa-fast-forward' data-controls='next'></button>"+
                "</div>"+
                "&nbsp;&nbsp;<button id='hide' class='btn fa fa-1x fa-chevron-up' title='Ocultar player'></button>"+
                "<p class='bitdown'><button id='hide' class='btn fa fa-1x fa-chevron-down pull-right' title='Exibir player'></button></p>";
    
    $(this).html(html);
    
    if (playlist){
        $.extend(playlist);
        
        return this.each(function(){
        
        var faixas = playlist;
        var player = $("#audio");
        document.getElementById("audio").play(); 
        var duration    =   document.getElementById("audio").duration;
                
                setInterval(function(){
                        var duration    =   document.getElementById("audio").duration;
                        var current     =   document.getElementById("audio").currentTime;
                        var tempo       =   calc(duration);
                        var atual       =   calc(current);
                        
                        var prog        =   (current*100)/duration;
                        
                        $("#duration").html(tempo);
                        $("#current").html(atual);
                        $("#progresso .bar").css("width",prog+"%");
                        
                        if(current == duration){
                            var titleAtual   =   $("#titulo").html(); 
                            var faixaAtual   =   $("#audio").attr("src");
                            var grupo        =   Array(titleAtual, faixaAtual).toString();
                            var loc          =   faixas.indexOf(grupo);
                            var qtdFaixas    =   faixas.length;

                            if(loc >= 0 || loc < qtdFaixas){
                                 var n  = loc + 1;
                                 var fx = faixas[n];
                                 var explode = fx.split(",");
                                 $("#titulo").html(explode[0]);
                                 $("#audio").attr("src",explode[1]);
                                 document.getElementById("audio").play();

                             }
                        }
                        
                        if($("input[type='range']").val() == 0){
                          $(".menos").removeClass("fa-volume-down");
                          $(".menos").addClass("fa-volume-off");
                        }else{
                          $(".menos").removeClass("fa-volume-off");
                          $(".menos").addClass("fa-volume-down");
                        }
                        
                },1000);
                
                $("button[data-controls=play]").click(function(){
                    document.getElementById("audio").play();
                });
                $("button[data-controls=pause]").click(function(){
                    document.getElementById("audio").pause();
                });
                $("button[data-controls=stop]").click(function(){
                    document.getElementById("audio").pause();
                    document.getElementById("audio").currentTime=0;
                });
                
                $("button[data-controls=backward]").click(function(){
                   var tempo    =   document.getElementById("audio").currentTime;
                   document.getElementById("audio").currentTime -= 5;
                   
                });
                
                $("button[data-controls=forward]").click(function(){
                   document.getElementById("audio").currentTime += 5;
                   
                });
                
                $("button[data-controls=previous]").click(function(){
                   var titleAtual   =   $("#titulo").html(); 
                   var faixaAtual   =   $("#audio").attr("src");
                   var grupo        =   Array(titleAtual, faixaAtual).toString();
                   var loc          =   faixas.indexOf(grupo);
                   var qtdFaixas    =   faixas.length;
                   
                   if(loc > 0 || loc < qtdFaixas){
                        var n  = loc - 1;
                        var fx = faixas[n];
                        var explode = fx.split(",");
                        $("#titulo").html(explode[0]);
                        $("#audio").attr("src",explode[1]);
                        document.getElementById("audio").play();
                        
                    }
                   
                });
                
                $("button[data-controls=next]").click(function(){
                   var titleAtual   =   $("#titulo").html(); 
                   var faixaAtual   =   $("#audio").attr("src");
                   var grupo        =   Array(titleAtual, faixaAtual).toString();
                   var loc          =   faixas.indexOf(grupo);
                   var qtdFaixas    =   faixas.length;
                   
                   if(loc >= 0 || loc < qtdFaixas){
                        var n  = loc + 1;
                        var fx = faixas[n];
                        var explode = fx.split(",");
                        $("#titulo").html(explode[0]);
                        $("#audio").attr("src",explode[1]);
                        document.getElementById("audio").play();
                        
                    }
                    
                    
                });
               
               $("input[type='range']").change(function(){
                   var valor = $(this).val();
                   document.getElementById("audio").volume = valor/100;
               });
               
               $(".menos").click(function(){
                   document.getElementById("audio").volume = 0;
                   $("input[type='range']").val(0);
                   $(".menos").removeClass("fa-volume-down");
                   $(".menos").addClass("fa-volume-off");
               });
               
               $(".mais").click(function(){
                   document.getElementById("audio").volume = 1;
                   $("input[type='range']").val(100);
                   $(".menos").removeClass("fa-volume-off");
                   $(".menos").addClass("fa-volume-down");
               });
               
               
               $("#hide").click(function(){
                   $("#audio-player").animate({ top: '-155px' });
                   $(".bitdown").fadeIn("fast");
               });
               
               $(".bitdown").click(function(){
                   $("#audio-player").animate({ top: '0px' });
                   $(".bitdown").fadeOut("fast");
               });
               
        
        
        });
    
    }
};
})(jQuery);
function calc(param) {
                    var sec_num = parseInt(param, 10); // don't forget the second param
                    var hours   = Math.floor(sec_num / 3600);
                    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
                    var seconds = sec_num - (hours * 3600) - (minutes * 60);

                    if (hours   < 10) {hours   = "0"+hours;}
                    if (minutes < 10) {minutes = "0"+minutes;}
                    if (seconds < 10) {seconds = "0"+seconds;}
                    var time    = hours+':'+minutes+':'+seconds;
                    return time;
                }