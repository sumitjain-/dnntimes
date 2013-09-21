$(document).ready(function(){
    config = new Object();
    config.serverUrl = 'http://dnn-times.com/';
    
});

$.ajaxSetup({
    "error":function(){ 
        $("#notif_display").append('<li>No network</li>');
    }
});

$(document).ajaxStart(function(){
    $.mobile.loading('show');
});

$(document).ajaxComplete(function(){
    $.mobile.loading('hide');
});
