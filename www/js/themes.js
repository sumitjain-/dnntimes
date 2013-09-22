var current_theme = "a" ;

function theme_toggle(){
    
    console.log("toggle");
    
    if(current_theme == "a"){
    
        
        $("*[data-theme='a']").attr( "data-theme","c").removeClass("ui-btn-up-a").addClass("ui-btn-up-c");
        $("#post").attr("data-theme" , "c");
        
        current_theme = "c" ;
        console.log(current_theme);
        $("#theme_toggle").html("Day Mode");
        $("#notif_display").listview('refresh');
    
    }else if(current_theme == "c"){
    
        $("*[data-theme='c']").attr( "data-theme","a").removeClass("ui-btn-up-c").addClass("ui-btn-up-a");
        $("#post").attr("data-theme" , "a").removeClass("ui-body-c").addClass("ui-body-a");
        $("#terms").removeClass("ui-body-c").addClass("ui-body-a");
        current_theme = "a" ;
        console.log(current_theme);
        $("#theme_toggle").html("Night Mode");
    
    }
    
}

function theme_apply(){

    if(current_theme == "c"){

        $("#notif_display li").attr( "data-theme","c").removeClass("ui-btn-up-a").addClass("ui-btn-up-c");
        console.log("applied");
        
    }else if(current_theme == "a"){
    
        $("*[data-theme='c']").attr( "data-theme","a").removeClass("ui-btn-up-c").addClass("ui-btn-up-a");
    
    }

}