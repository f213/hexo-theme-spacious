$(document).ready(function(){
    var configured_url = prepare_url(config_url);
    var current_url = prepare_url(window.location.href);

    if(current_url != configured_url)
    {
        $('header>h1, title').text('dev hexo blog');
    }
    function prepare_url(url){
        return url.replace(/^.+:\/\//, '')
                    .replace(/\/$/, '');
    }
});
