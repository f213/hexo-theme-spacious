var Smart = require('smart-plurals');

hexo.extend.helper.register('plural', Smart.Plurals.getRule(hexo.config.lang));