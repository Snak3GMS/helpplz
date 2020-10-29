function setListItem(key,item){
    $('.listnull').remove();
    $('.todolist-wrapper').append('<div class="list__item" style="display: none;"><div class="wrapper"><div class="item-title">'+key+'</div><a class="item-delete"><div></div><div></div></a><div class="off"></div></div><div class="descr_todo">'+item+'</div></div>');
    $('.list__item').fadeIn();
}
$(function(){
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let item = localStorage.getItem(key);
        setListItem(key,item);
}
    
    $("#inName").keydown(function(event){
        if(event.keyCode == 13){
            $('#inDescr').focus();
            event.preventDefault();
        }
    });

    $('.button').click(function(){
        if ($('#inName').val() == '') return false;
        else {
        setListItem($('#inName').val(),$('#inDescr').val());
        localStorage.setItem($('#inName').val(), $('#inDescr').val());
    }
        $('#inName').val('').focus();
        $('#inDescr').val('');
    });
    $('html').on('click', '.item-delete', function(){
        localStorage.removeItem($(this).parents('.list__item').find('.item-title').html());
        $(this).parents('.list__item').fadeOut(400, function(){$(this).remove();});
        function go(){
        if ($('.list__item').length == false) $('.todolist-wrapper').append('<div class="listnull">Список пуст...</div></div>');}
        setTimeout (go, 500);
    });
    $('#inDescr').keydown(function(event){
        if (event.shiftKey && (event.keyCode == 13)) { $(this).val($(this).val()+'<br>') ;}
        else if(event.keyCode == 13){
            event.preventDefault();
            $('#btn').click();
        }
    });
    $('html').on('click', '.off', function(){
        if ($(this).parents('.list__item').find('.descr_todo').css('display') == 'none') {$(this).parents('.list__item').find('.descr_todo').fadeIn(0, function(){
            $(this).animate({
                height: '100%',
                padding: '25px',
                'font-size': '14px'
            });
        });
        $(this).parents('.list__item').find('.off').css({'transform': 'perspective(1px) rotatex(-10deg)', 'top': '30px'})}
        else {
            $(this).parents('.list__item').find('.descr_todo').animate({
                height: '0',
                padding: '0 25px 0 25px'
            },function () {$(this).css('font-size', '0')}).fadeOut(100);
            $(this).parents('.list__item').find('.off').css({'transform': 'perspective(1px) rotateZ(90deg) rotatex(-10deg)', 'top': '28px'})
        }
    });
});

