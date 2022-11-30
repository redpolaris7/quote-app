$('.component').css('display', 'none');

$(function(){
    
    $('#start').on('click', function(){
        $('#mainelement').fadeOut('1000');
        
        $('.component').fadeIn('3000');
        $('.component').css('display', 'flex')
    })
    const body = $('body').html();
    if (body == '') {
       $('<div>', {
            class: 'component',
            id: 'after-load'
       }).appendTo($('.component'));
       
    }


})

