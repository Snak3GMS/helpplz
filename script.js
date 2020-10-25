$(function(){
    $('.button').click(function(){
        $('.listnull').remove();
        $('.todolist-wrapper').append('<div class="list__item"><div class="wrapper"><div class="item-title">'+$('#inName').val()+'</div><a class="item-delete"><div></div><div></div></a></div><div class="descr_todo">'+$('#inDescr').val()+'</div></div>');
        $('#inName').val('');
        $('#inDescr').val('');
    });
    $('html').on('click', '.item-delete', function(){
        $(this).parents('.list__item').remove();
    });
});

