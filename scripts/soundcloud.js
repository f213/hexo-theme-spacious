/*
 *  Embed soundcloud player
 *  Usage: {% soundcloud 'trackId' %}
 *
 */
hexo.extend.tag.register('soundcloud', function(args){
    var trackId = args[0];

    var playerSrc   = 'https://w.soundcloud.com/player/?url=';
    playerSrc       = playerSrc + 'https%3a//api.soundcloud.com/tracks/' + trackId;
    playerSrc       = playerSrc + '&color=00aabb&auto_play=false&hide_related=true&show_comments=false'.replace(/\&/g, '&amp;');

    var html = '<div class="soundcloud">';
    html = html +  '<iframe src="' + playerSrc + '"></iframe>';
    html = html + '</div>';
    return html;
});
