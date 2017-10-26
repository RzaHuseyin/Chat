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

$(".fa-commenting-o").click(function () {
    $(".myInfo, .myInfoDocs").fadeOut()
    setTimeout(function () {
        $(".main , .main_body").fadeIn()
    } ,400)
})
$(".logImage").click(function () {
        $(".main , .main_body").fadeOut()
        setTimeout(function () {
            $(".myInfo, .myInfoDocs").fadeIn()
        } ,400)
    
})



$('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    margin:10,
    item: 3,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:100,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:false
            
        },
        600:{
            items:1,
            nav:false,
            dots:false
        },
        1000:{
            items:1
        }
    }
})
$('.owl-carousel').on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        $('.owl-carousel').trigger('next.owl');
    } else {
        $('.owl-carousel').trigger('prev.owl');
    }
    e.preventDefault();
});


AmCharts.makeChart("chartdiv1",
{
    "type": "pie",
    "angle": 12,
    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
    "depth3D": 15,
    "innerRadius": "40%",
    "titleField": "category",
    "valueField": "column-1",
    "allLabels": [],
    "balloon": {},
    "legend": {
        "enabled": true,
        "align": "center",
        "markerType": "circle"
    },
    "titles": [],
    "dataProvider": [
        {
            "category": "Status",
            "column-1": 80
        },
        {
            "category": "Followers",
            "column-1": 60
        },
        {
            "category": "Following",
            "column-1": 20
        }
    ]
}
);




// test 
// function hesab(sum, aysayi){
// 	var money =Math.round(sum /	aysayi)
// 	var money2 ;
// 	if(sum % aysayi!=0  && sum % aysayi > money/2 ){
// 		money2 = Math.round(sum %	aysayi)
// 		++aysayi
// 		console.log( "Siz " + (aysayi-1)+" ay erzinde her ay " + money +" manat , " +aysayi +"-ci ay  " +money2+ " manat odenis edeceksiniz" )
//     }
//     else if ( sum % aysayi!=0  && sum % aysayi < money/2  ) {
// 		money2=money + sum % aysayi
// 		console.log("Siz "+ (aysayi-1)+" ay erzinde her ay "+ money+" manat, " + aysayi+"-ci ay ise "+money2+" manat odenis edeceksiniz")
//     }
//     else{
// 		console.log("Siz "+ aysayi+" ay erzinde her ay "+ money+" manat odenis edeceksiniz")
//     }
	
// }
