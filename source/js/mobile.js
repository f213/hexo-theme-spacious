function fix_classes_on_resize(){
    var is_mobile = false;
    if(window.matchMedia('(max-width: 640px)').matches)
    {
        is_mobile = true;
    }

    if(is_mobile){
        $('article > .content > img').wrap('<div class="mobile-centered-image">');
    }
}

fix_classes_on_resize();

$(window).on('resize', fix_classes_on_resize);
