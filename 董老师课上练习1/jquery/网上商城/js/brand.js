$(function(){
    // 品牌图片滑动效果
    $('#jnBrandTab li').on('click',function(){
        $(this).addClass('chos').siblings().removeClass('chos');
        // 获取当前四张图的宽度
        var width = $('#jnBrandList li').outerWidth(true)*4;
        // 当前按钮li的索引
        var index = $(this).index();
        $('#jnBrandList').animate({
            left: -index*width,
        },1000);
    })
    // 主页图片淡入淡出效果
    // $('#jnImageroll img').eq(0).show().siblings().hide();
    // $('$a').hover(function(){

    // })
    $('#skin li').on('click',function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    })
    
})