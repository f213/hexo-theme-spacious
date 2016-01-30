/*
 * This little helper returns count of posts that belong to a tag.
 *
 * Usage: tag_post_count(myTagName);
 *
*/

hexo.extend.helper.register('tag_post_count', function(tagName){
    var Model = hexo.locals.get('tags');

    var tag = Model.findOne({name: tagName});
    if(tag){
        return tag.posts.toArray().length;
    }
    return 0;
});
