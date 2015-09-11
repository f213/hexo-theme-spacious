var HexoHelper      = require('./lib/HexoHelper'),
    chai            = require('chai'),
    should          = chai.should(),
    w3c             = require('w3cjs'),
    fs              = require('fs'),
    cheerio         = require('cheerio');

var skipW3c         = false;
var skipGenerate    = false;

var w3cTimeout      = 10000; // ms

var hexoInstallPath = process.cwd() + '/test/hexo/'; // slash required

var path = function(name){
    return hexoInstallPath + 'public/' + name;
};
var $load = function(file){
    return cheerio.load(fs.readFileSync(path(file)), {xmlMode: true});
};

var $pages = {};

var load$pages = function(){
    $pages.home = $load('index.html');
    $pages.post = $load('hello-world/index.html');
};

var helper = new HexoHelper(hexoInstallPath);

before(function(done){

    if(!skipGenerate){

        // setup a hexo dir may be sloow
        this.timeout(15000);
        helper.hexo.init().then(function(){
            return helper.hexo.load();
        })
        .then(function(){
            helper.cleanPublic();
            return helper.hexo.call('generate', {});
        })
        .then(function(){
            load$pages();
            return done();
        });
    }
    else{
        load$pages();
        done();
    }
});

describe('Home page', function(){
    if(!skipW3c){
        it('is w3c valid', function(done){

            this.timeout(w3cTimeout);

            w3c.validate({
                file:       path('index.html'),
                callback:   function (result){
                    console.log(result.messages);
                    result.messages.should.not.have.length.above(2); // By default, w3c gives two warning messages
                    done();
                }
            });
        });
    }
    it('has valid RSS link', function(){
        $pages.home('link[rel="alternate"]').attr('href').should.be.eql('/rss/index.xml'); // тесты на HTML ебашить так.
    });
});

describe('Post page', function(){
    if(!skipW3c){
        it('is w3c valid', function(done){

            this.timeout(w3cTimeout);

            w3c.validate({
                file:       path('hello-world/index.html'),
                callback:   function(result){
                    console.log(result.messages);
                    result.messages.should.not.have.length.above(2); // By default, w3c gives two warning messages
                    done();
                }
            });
        });
    }
});
