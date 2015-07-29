var chai            = require('chai'),
    should          = chai.should(),
    pageChecker     = require('check-pages'),
    w3cValidator    = require('w3cjs');

chai.use(require('chai-http'));

var host = 'http://localhost:3000';


describe('theme', function(){
    describe('connectivity', function(){
        it('shoud work', function(callback){
            chai.request(host)
                .get('/')
                .end(function(err, res){
                    should.not.exist(err);
                    res.should.have.status(200);
                    callback();
                });
        });
    });
    describe('broken links', function(){
        it('should not exist', function(callback){
            pageChecker(console, {
                pageUrls:       [ host + '/' ],
                checkLinks:     true,
                onlySameDomain: true,
                summary:        true,
            }, function(err){
                should.not.exist(err);
                callback();
            });
        });
    });
    describe('html', function(){
        it('home page should be w3c valid', function(callback){
            chai.request(host)
                .get('/')
                .end(function(err, res){
                    should.not.exist(err);
                    w3cValidator.validate({
                        input:  res.text,
                        callback: function(res) {
                            res.messages.should.not.have.length.above(2);
                            // by default, w3c gives two messages: 'The Content-Type was “text/html”. Using the HTML parser' and 'Using the schema for HTML with SVG 1.1, MathML 3.0, RDFa 1.1, and ITS 2.0 support'
                            callback();
                        }
                    });
                });
        });
        it('post page should be w3c valid', function(done){
            chai.request(host)
                .get('/all/automated-test/')
                .end(function(err, res){
                    should.not.exist(err);
                    w3cValidator.validate({
                        input:  res.text,
                        callback: function(res) {
                            console.log(res.messages);
                            res.messages.should.not.have.length.above(2);
                            // by default, w3c gives two messages: 'The Content-Type was “text/html”. Using the HTML parser' and 'Using the schema for HTML with SVG 1.1, MathML 3.0, RDFa 1.1, and ITS 2.0 support'
                            callback();
                        }
                    });
                });
        });
    });
});
