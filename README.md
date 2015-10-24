[![Build Status](https://travis-ci.org/f213/hexo-theme-spacious.svg?branch=master)](https://travis-ci.org/f213/hexo-theme-spacious) [![Dependency  Status](https://david-dm.org/f213/hexo-theme-spacious.svg)](https://david-dm.org/f213/hexo-theme-spacious) [![devDependency Status](https://david-dm.org/f213/hexo-theme-spacious/dev-status.svg)](https://david-dm.org/f213/hexo-theme-spacious#info=devDependencies)
# Spacious theme for Hexo

This is a simple [Hexo](http://hexo.io) theme, based on Ilya Birman's theme for his blogeninge [e2](http://blogengine.ru). It is a clean, clear, russian-friendly theme with simple responsive markup and some other features (see below).

## Installation
```
cd hexo
npm install --save hexo-renderer-jade hexo-renderer-stylus
cd themes
git clone git@github.com:f213/hexo-theme-spacious
cd hexo-theme-spacious
npm install
bower install
```
Then change your `theme` setting in `_config.yml`.

## Demo
You can review demo at my [personal blog](https://f213.in) in russian.

## Features
### Tag navigation menu
Every menu element can be a link to the tag page. Just name it `tag:<your tag name here>`. Don't forget to install [hexo-generator-tag](https://github.com/hexojs/hexo-generator-tag).

Here is a `_config.yml` exmaple.
```
# Header
menu:
    About me: /about/index.html
    Favorites: tag:favorites
    My JS Posts: tag:JS
    My CSS Posts: tag:CSS 
    rss:  /rss/index.xml
```    

### Favorite tag
There is some special tag for highlighting your favorite posts. By default it is named 'Избранное' and can be configured via the `favortie_tag` variable in `_config.yml`.

### Formatting dates
This theme can nicely format your post dates, like 'an hour ago' or '2 months ago'. This is done via [Livestamp.js](https://github.com/mattbradley/livestampjs) and can be turned off via the `fancy_dates` variable in `_config.yml`.

### Pluralisation
The theme has a simple helper interface for [Smart.Plurals](https://github.com/scottrippey/Smart-Plurals), named `plural`. Usage of this helper is up to theme users, but i prefer to use it like described below.

First, i place the needed amount of plural forms in my `languages/<language>.yml` separeted by comma, like this:
```
posts:      post, posts
```
And then i use in my template:
```
plural(page.posts.data.length, __('posts'))
```
`__` here is a standart Hexo l10n helper.
### SEO
Theme has a flexible configuration for some robot-frendly page parameters. Page titles, `description` and `keywords` meta tags
can be configured by [front-matter](https://hexo.io/docs/front-matter.html) variables with the same names, or on by-url basis
via [data file](https://hexo.io/docs/data-files.html) `seo.yml`:
```
tags/myTag/index.html: # this is a canonical url without hostname
    title: My Best Title
    keywords:
        - cool
        - sms free
        - user-friendly
    description: This is a page with description configured through source/_data/seo.yml    
```
### Custom opengraph
Hexo [opengraph code](https://hexo.io/docs/helpers.html#open_graph) seems very strange and hard-configurable to me, so this theme has custom opengraph support. One can configure og:image, og:title and og:description for each post via front-matter. og:image is working with respect to post_asset_folder. Your fb:admin_id (for page statistics) and profile link (for shares only) can be configured via `_config.yml`.

## Building and customizing
### Technologies
Theme is built with Jade and Stylus, so it can be easily customized.

### Build process
CSS and JS refereneces are [useref](https://github.com/digisfera/useref)- and [smoosher](https://www.npmjs.com/package/gulp-smoosher)-friendly (see default `_config.yml`). Vendor assets are handled with bower.

### Custom JS and CSS
Custom JS and CSS files are inteded to be placed in the `./source/js/custom.js` and `./source/css/custom.css` files. Please note that hexo does pass this files through its rendering mechanism, so `./source/css/custom.styl` (or your favorite preprocessor) is welcome.

### Development Mode
Currently hexo [lacks](https://github.com/hexojs/hexo/issues/371) development mode support. This theme uses `NODE_ENV` variable for hiding disqus and web analytics code from your local copies.
