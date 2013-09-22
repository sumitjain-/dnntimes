var current_theme = "day" ;

function theme_toggle(){
    
    console.log("toggle");
    
    if(current_theme == "day"){
    
        
        $("*[data-theme='a']").attr( "data-theme","c").removeClass("ui-btn-up-a").addClass("ui-btn-up-c");
        $("#post").attr("data-theme" , "c");
        current_theme = "night" ;
        console.log(current_theme);
        $("#theme_toggle").html("Day Mode");
        $("#notif_display").listview('refresh');
    
    }else if(current_theme == "night"){
    
        $("*[data-theme='c']").attr( "data-theme","a").removeClass("ui-btn-up-c").addClass("ui-btn-up-a");
        $("#post").attr("data-theme" , "a").removeClass("ui-body-c").addClass("ui-body-a");
        current_theme = "day" ;
        console.log(current_theme);
        $("#theme_toggle").html("Night Mode");
    
    }
    
}