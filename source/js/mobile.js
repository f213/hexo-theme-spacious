(function(){

    if(window.matchMedia('(max-width: 640px)').matches){
        $('body').addClass('mobile');
    }else{
        $('body').addClass('no-mobile');
        return; // ↓↓↓ Mobile code follows ↓↓↓
    }

    $('span[title]').tooltipster({
        trigger: 'click'
    });
})();