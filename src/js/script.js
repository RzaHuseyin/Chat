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
    $(".chat_body_conver").append('\
        <div class="col-md-12 flex-wrap one_message">\
            <div class="row py-2">\
                <div class="col-md-10 align-self-center">\
                    <div class="row flex-column align-items-end">\
                        <p class="myPar">'+$(".js_msj_text").val()+'</p>\
                        <span>Yesterday 10:24 AM</span>\
                    </div>\
                </div>\
                <div class="col-md-2"><img src="image/01.jpg" class="rounded-circle" alt=""></div>\
            </div>\
        </div>\
    ')
}


window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 13) {
        addMsj()
        $(".chat_body_conver").scrollTop($(".chat_body_conver")[0].scrollHeight-550)
   }
}

// document.addEventListener("keydown", keyDownTextField, false);

// function keyDownTextField(e) {
// var keyCode = e.keyCode;
//   if(keyCode==13) {
//   alert("You hit the enter key.");
//   } else {
//   alert("Oh no you didn't.");
//   }
// }