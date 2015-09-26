$(document).on('ready', function(){
    if(typeof disqus_shortname == 'undefined' || ! disqus_shortname.length){
        return false;
    }
    if(! $('body').hasClass('no-mobile')){
        return false;
    }

    var script = document.createElement('script');
    script.src      = '//' + disqus_shortname + '.disqus.com/embed.js';
    script.type     = "text/javascript";
    script.asunc    = true;

    $('head').append(script);
});
