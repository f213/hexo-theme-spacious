var Smart = require('smart-plurals');

//var _plural = Smart.Plurals.getRule(hexo.config.lang);

hexo.extend.helper.register('plural', Smart.Plurals.getRule('ru'));