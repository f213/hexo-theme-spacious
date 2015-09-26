$(document).on('ready', function(){
    if(! $('body').hasClass('no-mobile')){
        return false;
    }
    $('#social').removeClass('hidden');
    $('.likely-disabled').removeClass('likely-disabled')
        .addClass('likely');
});
