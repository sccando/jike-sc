$(document).ready(function() {
    var p = $('.stop p');
    var pHeight = p.height();
    p.each(function(index, item) {
        var pNum = $(this).text().length;
        var pLineHeight = pHeight / pNum;
        $(this).css('line-height', pLineHeight + 'px');
        console.log($(this).css('line-height'))
    });
});
