var _ = require('lodash');

(function(){
    var getAllHexoPosts = function(page){
        var Model,
        key;

        if (_.has(page, 'tag') && page.tag.length){
            Model = hexo.locals.get('tags');
            key = page.tag;
        }
        else if(_.has(page, 'category') && page.category.length){
            Model = hexo.locals.get('categories');
            key = page.category;
        }
        else {
            Model = hexo.locals.get('posts');
        }
        if(key){
            return Model.findOne({name: key}).posts;
        }else{ // this is a post page, and the Model is 'posts'
            return Model;
        }
    };

    hexo.extend.helper.register('remaining_posts', function(page){
        if(page.total == page.current){
            return null;
        }

        if((page.total - page.current) > 1) { // we are at non-last page
            return hexo.config.per_page;
        }

        var total = getAllHexoPosts(page).length;

        return total % hexo.config.per_page;
    });
})();