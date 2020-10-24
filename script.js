$(function(){
    $('.button').click(function(){
        $('.listnull').remove();
        $('.list').append('<div class="list__item"><div class="wrapper"><div class="item-title">'+$('#inName').val()+'</div><button class="item-delete"><div></div><div></div></button></div><div class="descr">'+$('#inDescr').val()+'</div></div>');
    });
    $('.item-delete').on('click', function(){
        $('.title').detach();
    });
});

