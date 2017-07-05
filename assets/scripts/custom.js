$(document).ready(function() {


    var channels = ["freecodecamp","test_channel","ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "comster404", "clickerheroesbot", "brunofin", "medryBW", "terakilobyte", "thomasballinger", "quill18", "beohoff", "asoulji", "algo_rhythm", "deadline_ninja", "2dgamedev", "zephyrdev", "programmingarchon","devwars","jggames01","morphcat","rockerboo","krzjn","doubletacostreams","dbauchdsloth","mar3k_e3"];
    var currentChannel, game, logo, url;

    channels.forEach(function(channel){

        $.ajax({
              headers: {
                "Client-ID": "mn2wad71tlnolv35ji54bl346ujunc"
              },  
              url: 'https://wind-bow.glitch.me/twitch-api/streams/' + channel + '?callback=?',      
              dataType: "jsonp",              
              success: function(data) {
                //console.log(data);                 
                logo = "http://elenatokmakova.com/wp-content/uploads/2017/07/twitch-tv-icon.png"; 
                url = "https://www.twitch.tv/" + channel;

                if (data.stream === null) {

                    currentChannel = '<li class="twitchChannel" id="' + channel +'"><div class="row"><div class="col-xs-4"><img src="' + logo + '"></div><div class="col-xs-4"><strong><a href="' + url + '" target="_blank">' + channel + '</a></div><div class="col-xs-4"></strong>The user if offline</div></div></li>';                  
                    $(currentChannel).addClass("bg-danger").appendTo("#offline-ul, #all-ul");                   
                }
                else if (data.stream === undefined) {

                     currentChannel = '<li class="twitchChannel" id="' + channel +'"><div class="row"><div class="col-xs-4"><img src="' + logo + '"></div><div class="col-xs-4"><strong><a href="' + url + '" target="_blank">' + channel + '</a></div><div class="col-xs-4"></strong>The account is closed</div></div></li>';   
                    $(currentChannel).addClass("bg-danger").appendTo("#offline-ul, #all-ul"); 
                }
                else {
                    game = data.stream.game;                   
                    logo = data.stream.channel.logo;  
                    
                    currentChannel = '<li class="twitchChannel" id="' + channel +'"><div class="row"><div class="col-xs-4"><img src="' + logo + '"></div><div class="col-xs-4"><strong><a href="' + url + '" target="_blank">' + channel + '</a></div><div class="col-xs-4"></strong>' + game + '</div></div></li>';  
                    $(currentChannel).addClass("bg-success").appendTo("#online-ul, #all-ul");   
                }
              },
              error: function(e) {
                console.log(e);
              }  
              
        }); // ajax request

    $('#search').on('keyup', function() {  

        var request = $(this).val().toLowerCase();

        $("li.twitchChannel").each(function() {     

            if ($(this).attr('id').indexOf(request) != - 1) {           
                $(this).show();
            } else {
                $(this).hide();
            }
       }); //each loop

    });  // search function

    
    });  // channels loop        

}); //Document ready function

