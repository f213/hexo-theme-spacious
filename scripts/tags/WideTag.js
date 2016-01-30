/*
 * {% wide %} tag. Used to place something to wide inside a container, that fits mobile screen.
 *
 * Of course you can manually do it, but the tag is usefull for markdown tables, or some other markdown staff, that is not parsed within block-level tags
 *
 * Usage:
 *
 *      {% wide %}
 *
 *          ### Table title
 *          | Row1       | Row2     |
 *          |:-----------|:---------|
 *          | Footext    | Bartext  |
 *
 *      {% endwide %}
 */
hexo.extend.tag.register('wide', function(args, content){
    content = hexo.render.renderSync({text: content, engine: 'markdown'});
    return '<div class="wide">' + content + '</div>';
}, {ends: true});
