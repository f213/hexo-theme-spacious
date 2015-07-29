var chai            = require('chai'),
    should          = chai.should(),
    pageChecker     = require('check-pages'),
    w3cValidator    = require('w3cjs');

chai.use(require('chai-http'));

var host = 'http://localhost:3000';


describe('theme', function(){
    describe('connectivity', function(){
        it('shoud be fetchable', function(done){
            chai.request(host)
                .get('/')
                .end(function(err, res){
                    should.not.exist(err);
                    res.should.have.status(200);
                    done();
                });
        });
    });
    describe('broken links', function(){
        it('should not exist', function(done){
            pageChecker(console, {
                pageUrls:       [ host + '/' ],
                checkLinks:     true,
                onlySameDomain: true,
                summary:        true,
            }, function(err){
                should.not.exist(err);
                done();
            });
        });
    });
    describe('html', function(){
        it('shoud be w3c valid', function(done){
            chai.request(host)
                .get('/')
                .end(function(err, res){
                    should.not.exist(err);
                    w3cValidator.validate({
                        input:  res.text,
                        callback: function(res) {
                            res.messages.should.not.have.length.above(0);
                            done();
                        }
                    });
                });
        });
    });
});
