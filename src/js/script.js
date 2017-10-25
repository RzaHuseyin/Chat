// alert("basssdddggggggggd")


// h3 text
$(".contact li ").click(function () {
    
    $(".userimage").attr("src",$(this).find("img").attr("src"))
    $(".userName").text($(this).find("h4").text()) 
    $(this).find(".newmsj").css("visibility","hidden")
})

$(".js_enter").click(function () {
    
    addMsj()
})
function addMsj(params) {
    var col_name;
    if($(".chat_body").hasClass("col-md-12")){
        col_name="col-md-9"
    }else{
        col_name="col-md-12"
    }
    $(".chat_body_conver").append('\
        <div class="'+ col_name+' flex-wrap one_message ml-auto">\
            <div class="row py-2">\
                <div class="col-md-10 align-self-center">\
                    <div class="row flex-column align-items-end">\
                        <p class="myPar">'+$(".js_msj_text").val()+'</p>\
                        <span>Yesterday 10:24 AM</span>\
                    </div>\
                </div>\
                <div class="col-md-2">\
                    <div class="row justify-content-end pr-3">\
                        <img src="image/01.jpg" class="rounded-circle" alt="">\
                    </div>\
                </div>\
            </div>\
        </div>\
    ')
    $(".js_msj_text").val("")
}


window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 13) {
        addMsj()
        $(".chat_body_conver").scrollTop($(".chat_body_conver")[0].scrollHeight-550)
   }
}


$(".userimage").click(function(){
        showInfo()
    }
)
$(".js_info_user .fa-angle-down").click(function(){
        hideInfo()
    }
)
function showInfo() {
    $(".chat_body").removeClass("col-md-12").addClass("col-md-8")
    $(".chat_body .one_message").removeClass("col-md-9").addClass("col-md-12")
    setTimeout(function () {
        $(".js_info_user").fadeIn()
    } ,350)
   
}
function hideInfo() {
    $(".js_info_user").fadeOut()
    setTimeout(function () {
        $(".chat_body").removeClass("col-md-8").addClass("col-md-12")
        $(".chat_body .one_message").removeClass("col-md-12").addClass("col-md-9")
    } ,350)
   
}
