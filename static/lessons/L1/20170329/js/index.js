/**
 * Created by shandianhaizan11 on 17/3/2.
 */

var $poster=$(".poster");
// var $img=$(".cover img");

$poster.click(function(){
    // $(".cover").css({
    //     display:"block"
    // });
    // var src = $("img",this).attr("src");
    // $img.attr("src",src);
    // var $width = parseInt($img.css("width"));
    // $img.css({
    //     marginLeft:-$width/2,
    //     transform:"scale(1)"
    // })

    var urls = new Array()
    $('ul img').each(function(){
        let url = $(this).prop('src')
        urls.push(url)
    })
    
    window.webkit.messageHandlers.webViewApp.postMessage({'method':'show_image', 'params': {'url': $img.prop('src'), 'urls':urls}});
});

// $(".cover").click(function(){
//     $("img",this).attr("src","").removeAttr("style");
//     $(this).css({
//         display:"none"
//     });
// });

// if($("ul li").length==1){
//     var liWidth = parseInt($("ul li").css("width"));
//     var ulWidth = parseInt($("ul").css("width"));
//     $("ul li").css("margin-left",(ulWidth-liWidth)/2);
// }