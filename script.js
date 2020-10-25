$(function(){
    $("#inName").keydown(function(event){
        if(event.keyCode == 13){
            $('#inDescr').focus();
            event.preventDefault();
        }
    });

    $('.button').click(function(){
        if ($('#inName').val() == '') return false;
        else {
        $('.listnull').remove();
        $('.todolist-wrapper').append('<div class="list__item"><div class="wrapper"><div class="item-title">'+$('#inName').val()+'</div><a class="item-delete"><div></div><div></div></a></div><div class="descr_todo">'+$('#inDescr').val()+'</div></div>');
        }
        $('#inName').val('');
        $('#inDescr').val('');
    });
    $('html').on('click', '.item-delete', function(){
        $(this).parents('.list__item').remove();
        if ($('.list__item').length == false) $('.todolist-wrapper').append('<div class="listnull">Список пуст...</div></div>');
    });
    $("#inDescr").keydown(function(event){
        if (event.shiftKey && (event.keyCode == 13)) {}
        else if(event.keyCode == 13){
            event.preventDefault();
            $('#btn').click();
        }
    });
});

