var first = 0 ;
var last = 0 ;
            
function feed_init(){
    
    $.getJSON(config.serverUrl+'public_lib/get_init', function(data){
        
        no_of_notif = data.length;
        console.log
        $('#notif_display').html('');
        
        for(i=0; i < no_of_notif ; i++){
//            console.log(data[i].post_id);
//            console.log(moment(data[i].dnn_post_date, "DD-MM-YYYY").format("Do MMM YYYY"));
            $('#notif_display').append('<li><a class="" id="notif" href="#post" data-transition="slide" onclick="get_post('+data[i].post_id+')"><h1>'+ data[i].dnn_post_title +'</h1><p>'+moment(data[i].dnn_post_date, "DD-MM-YYYY").format("Do MMM YYYY")+'</p></a></li>');
        }
    
        first = data[0].post_id ;
        last = data[no_of_notif - 1].post_id;
        
        $('#notif_display').append('<li id="loadMore" data-theme="b" data-inset="true"><a data-theme="b" onclick="load_more('+first+')"><h1>Load more</h1></a></li>');
        
        $('#notif_display').listview('refresh');
        
        

        
        
//        alert("first = "+first+" , last = "+last);
        
    });
    
}

function new_feed(){

//    console.log("called");
    
    $.getJSON(config.serverUrl+'public_lib/new_feed/'+first, function(data){
        
        no_of_notif = data.length ;
        
//        console.log(data);
        if(data.length == 0 ){
            alert("No new feeds");
        }else{
        for(i=0; i < no_of_notif ; i++){
            $('#notif_display').prepend('<li><a class="" id="notif" href="#post" data-transition="slide" onclick="get_post('+data[i].post_id+')"><h4>'+ data[i].dnn_post_title +'</h4><p>'+moment(data[i].dnn_post_date, "DD-MM-YYYY").format("Do MMM YYYY")+'</p></a></li>');
        }
            
        first = data[0].post_id ;
        last = data[no_of_notif - 1].post_id;
        
        $('#notif_display').listview('refresh');
        
        
        
//        alert("first = "+first+" , last = "+last);
        }
              
    });
    
    
}

function load_more(){

    $.getJSON(config.serverUrl+'public_lib/get_next_10/'+last, function(data){
    
        $('#loadMore').remove();
        $('#notif_display').listview('refresh');
        
        no_of_notif = data.length ;
        
        for(i = 0 ; i < no_of_notif ; i++ ){
            $('#notif_display').append('<li><a class="" id="notif" href="#post" data-transition="slide" onclick="get_post('+data[i].post_id+')"><h4>'+ data[i].dnn_post_title +'</h4><p>'+moment(data[i].dnn_post_date, "DD-MM-YYYY").format("Do MMM YYYY")+'</p></a></li>');
//            console.log(data[i].post_id);
        }
        
        first = data[0].post_id ;
        last = data[no_of_notif - 1].post_id;
        
//        alert("first = "+first+" , last = "+last);
        
        if(last == 156 ){
            $('#notif_display').append('<li data-theme="b"><h1>No more posts.. </h1></li>')
        }else{
        $('#notif_display').append('<li id="loadMore" data-theme="b" data-inset="true"><a href="#index" data-theme="b" onclick="load_more()"><h1>Load more</h1></a></li>');
        }
        $('#notif_display').listview('refresh');

    });
    
}

function get_post(postId){
                
                $(".post_headline").html("Loading...");
                $(".post_date").html("Loading...");
                $(".post_content").html("Loading...");
                $(".post_feat_img").attr("src", "");    
                
                $.getJSON(config.serverUrl+'public_lib/get_news/'+postId, function(data){
                    var post_date = data[0].dnn_post_date;
//                    console.log(data[0]);
//                    console.log("yoohoo");
//                    console.log(moment(data[0].dnn_post_date, "DD/MM/YYYY").format("Do MMM YYYY"));
                    $(".post_headline").html(data[0].dnn_post_title);
                    $(".post_date").html("DNN Times | "+moment(data[0].dnn_post_date, "DD-MM-YYYY").format("Do MMM YYYY"));
                    $(".post_content").html(data[0].dnn_post_place+": "+ data[0].dnn_post_content);
                    if(data[0].dnn_post_feat_img == "" || data[0].dnn_post_feat_img == 'default.jpg'){
                        $(".post_feat_img").attr("src", 'img/default.jpg');
                    }else{
                        $(".post_feat_img").attr("src", config.serverUrl+'img/thumbs/'+data[0].dnn_post_feat_img);    
                    }
                }).error(function(){
                    $(".post_headline").html("");
                    $(".post_date").html("");
                    $(".post_content").html("Something went wrong. Please try again later.");
                });
            }

function submit_form(){
            
                    var form = $("#feedback_form"),
                        formData = form.serialize(),
                        formUrl = form.attr("action"),  
                        formMethod = form.attr('method'),   
                        responseMsg = $('#feedback_return');
                    
                    
                    $.ajax({
                        url: formUrl,  
                        type: formMethod,  
                        data: formData,  
                        success:function(data){  
                            responseMsg.html("Feedback sent"); 
                        },
                        error:function(){
                            responseMsg.html("Something went wrong. Try again later.");
                        }
                    });
                    
                    return false ;
            
            }
            
            function form_validation(){
                
                    $("#name_error").html("");
                    $("#email_error").html("");
                    $("#mobnum_error").html("");
                
                var register_name = $("#register_name").val();
                var register_email = $("#register_email").val();
                var register_mobnum = $("#register_mobnum").val();
//                console.log("name = "+ register_name);
//                console.log("E-mail = "+ register_email);
//                console.log("Mobile number = "+ register_mobnum);
                
                var valid = 1 ;
                
                if( register_name == ""){
                    $("#name_error").html("Please enter a valid name");
//                    console.log("No name");
//                    console.log("name = "+ register_name);
                    valid = 0 ;
                    
                }else{
//                    console.log("name = "+ register_name);
                };
                
                if( register_email == ""){
                    $("#email_error").html("Please enter a valid E-mail ID");
//                    console.log("No E-mail");
                    valid = 0 ;
                }else{
                    
                };
                
                if( register_mobnum.length != 10){
                    $("#mobnum_error").html("Please enter a valid mobile number");
//                    console.log("No mobile number");
                    valid = 0 ;
                }else{
                    if(register_mobnum.indexOf("+91") >= 0){
                        $("#mobnum_error").html("Please enter mobile number without country code");
                        valid = 0 ;
                    }
                    
                    
                };
                
                
                return valid ;
                
            }
            
            function register_device(){    
                
                
                $("#reg_key").val(regID);
                $("#reg_platform").val();
                console.log(regID);
                var form = $("#register_new"),
                    formData = form.serialize(),
                    formUrl = form.attr("action"),  
                    formMethod = form.attr('method'),
                    responseMsg = $("#register_response");
                    
                var check_form = form_validation();
                
                if(check_form){
                
                    $.ajax({  
                        url: formUrl,
                        dataType: "html",
                        type: formMethod,  
                        data: formData,  
                        success:function(data){  
                            responseMsg.html(data);
//                            console.log(data);
                        },
                        error:function(){
                            responseMsg.html("something went wrong");
                        }
                    });
                    
                    return false ;
                    
                }else{
                    return false ;
                }
            
            }
            
            $(document).ready(function(){
//                refresh_feeds();
                
                feed_init();
            });