hexo.extend.filter.register('after_post_render', function(data) {
    data.content = data.content.replace(/<br\/?>/g, '');
    return data;
});