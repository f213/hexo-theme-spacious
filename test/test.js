var chai        = require('chai'),
    should      = chai.should(),
    pageChecker = require('check-pages')

chai.use(require('chai-http'));

var host = 'http://localhost:3000';


describe('theme', function(){
    describe('connectivity', function(){
        it('Shoud be fetchable', function(done){
            return chai.request(host)
                .get('/')
                .end(function(err, res){
                    should.not.exist(err);
                    res.should.have.status(200);
                    done();
                });
        });
    });
    describe('broken links', function(){
        it('Should not exist', function(done){
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
});
