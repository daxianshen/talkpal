/**
 * Created by shandianhaizan11 on 17/3/2.
 */




var $poster=$(".poster");
var $img=$(".cover img");

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
$poster.click(function(){
    /*if($("img",this).length>1){
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

    }*/
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    
    if (isiOS) {
        var select_url = $('img', this).prop('src')
        var urls = $('ul img').map(function(){
            return $(this).prop('src')
        }).toArray()
        var params = {'method':'show_image', 'params': {'url': select_url, 'urls':urls}}
        window.webkit.messageHandlers.webViewApp.postMessage(params);
        return
    }

    $(".cover").css({
        display:"block"
    });
    var src = $("img",this).attr("src");
    $img.attr("src",src);
    var $width = parseInt($img.css("width"));
    $img.css({
        marginLeft:-$width/2,
        transform:"scale(1)"
    })

});

$(".cover").click(function(){
    $("img",this).attr("src","").removeAttr("style");
    $(this).css({
        display:"none"
    });
});


/*$(".play").click(function(){
    var parent=this.parentNode;
    var video = parent.getElementsByTagName("video")[0];
    if(video.paused){
        video.play();
        $(this).css("opacity",0);
    }else{
        video.pause();
        $(this).css("opacity",1);
    }
});*/

if($("ul li").length==1){
    var liWidth = parseInt($("ul li").css("width"));
    var ulWidth = parseInt($("ul").css("width"));
    $("ul li").css("margin-left",(ulWidth-liWidth)/2);
}
/**/