$(document).ready(function(){
    $.getJSON(config.serverUrl+'public_lib/json_news_50', function(data){
        var no_of_notif = data.length;
        
        $('#notif_display').html("");
        
        for(i=0 ; i < no_of_notif ; i++){
            $('#notif_display').append('<li><a class="" id="notif" href="#post" data-transition="slide" onclick="get_post('+data[i].post_id+')">'+ data[i].dnn_post_title +'</a></li>');
            console.log(data[i].dnn_post_title);
        }
        $('#notif_display').listview('refresh');
        //var i=1 ;
        console.log(data);
        
    }).error(function(){
        alert("Check internet connection and re-open the app..");
    });
    
});