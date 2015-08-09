var chai            = require('chai'),
    should          = chai.should(),
    Hexo            = require('hexo'),
    del             = require('del'),
    w3c             = require('w3cjs');

var hexoInstallPath = process.cwd() + '/test/hexo/';

before(function(done){
    // setup a hexo dir
    this.timeout(15000);

    del.sync(hexoInstallPath + '/public/*');

    var hexo = new Hexo(hexoInstallPath, {});

    hexo.init().then(function(){
        return hexo.load();
    })
    .then(function(){
        return hexo.call('generate', {});
    })
    .then(done);
});

after(function(done){
    del.sync(hexoInstallPath + '/public');
    done();
});

describe('Home page', function(){
    it('is w3c valid', function(done){

        this.timeout(10000);

        w3c.validate({
            file:       hexoInstallPath + '/public/index.html',
            callback:   function (result){
                console.log(result.messages);
                result.messages.should.not.have.length.above(2); // By default, w3c gives two warning messages
                done();
            }
        });
    });
});

describe('Post page', function(){
    it('is w3c valid', function(done){

        this.timeout(10000);

        w3c.validate({
            file:       hexoInstallPath + 'public/hello-world/index.html',
            callback:   function(result){
                console.log(result.messages);
                result.messages.should.not.have.length.above(2); // By default, w3c gives two warning messages
                done();
            }
        });
    });
});
