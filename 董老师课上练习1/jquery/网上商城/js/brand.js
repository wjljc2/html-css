$(function(){
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
    
})