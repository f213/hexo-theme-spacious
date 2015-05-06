$(document).ready(function(){
    var dev_title = 'my dev hexo blog';
    var configured_url = prepare_url(config_url);
    var current_url = prepare_url(window.location.href);

    if(current_url != configured_url)
    {
        $('header > h1 > a, title').text(dev_title);
        if(! $('header > h1').children().length) $('header > h1').text(dev_title);
    }
    function prepare_url(url){
        return url.replace(/^.+:\/\//, '')
                    .replace(/\/$/, '');
    }
});
