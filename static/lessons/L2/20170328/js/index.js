/**
 * Created by shandianhaizan11 on 17/3/2.
 */



/*
var $poster=$(".poster");*/
/*$poster.each(function(){
    var length=$("img",this).length;
    console.log(length);
    if(length>1){
        var span='<div class="num">'+
            '<span>'+ length +'</span>'+
            '</div>';
        $(this).append(span);
    }
});*/
/*$poster.click(function(){
    /!*if($("img",this).length>1){
        var imgs =$(this).html();
        var $show =$(".show");
        $show.html("");
        $show.append(imgs);
        $(".show>.num").remove();

        var ml =parseInt($(".show img").css("marginRight"));
        var img =$(".show img").width();
        var is =$(".show img").length;

        var tLength = (ml+img)*is;
        $show.css("width",tLength);

    }*!/
    var imgs =$(this).html();
    var $cover =$(".cover");
    $cover.html("");
    $cover.append(imgs);
    $cover.css("display","block");
});

$(".cover").click(function(){
   $(this).css("display","none");
});*/


$(".play").click(function(){
    var parent=this.parentNode;
    var video = parent.getElementsByTagName("video")[0];
    if(video.paused){
        video.play();
        $(this).css("opacity",0);
    }else{
        video.pause();
        $(this).css("opacity",1);
    }
});


/**/