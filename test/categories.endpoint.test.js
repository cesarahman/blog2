const chai = require('chai')
const chaiHttp = require('chai-http');
const server = require('../bin/www');
const expect = require('chai').expect



// Configure chai
chai.use(chaiHttp);
chai.should();
chai.use(require('chai-integer'))

let token;
describe("Categories Endpoint Test", ()=> {
  
  it("should return token", (done) => {
    chai.request(server)
    .get('/auth/login')
    .auth('admin', 'admin')
    .end((err, res) => {
      expect(err).to.be.null;
      res.should.have.status(200);
      token = res.body.token;
      done();
    });
  });
})

describe("Categories endpoint", () => {
  it('should return 0 if there are no value are passed in', (done) => {
    chai.request(server)
    .get('/api/categories')
    .set('authorization', `Bearer ${token}`)
    .end((err, res) => {
      const data = res.body
      var total = 0
      for (let i = 0; i < data.length; i++) {
        total += i
      }
      expect(total).to.equal(0)
      res.should.have.status(200)
      done()
    })
  });
  
  it('should have response property name with a post request', (done) => {
    chai.request(server)
    .post('/api/categories')
    .set('authorization', `Bearer ${token}`)
    .send({name: 'portfolio'})
    .end((err, res) => {
      expect(res.body.data).to.have.property('name')
      res.should.have.status(200)
      done()
    })
  })
  
  it('should insert name with limit value', (done)=>{
    chai.request(server)
    .post('/api/categories')
    .set('authorization', `Bearer ${token}`)
    .send({name: 'news'})
    .end((err, res)=>{
      expect(res.body.data.name).to.have.lengthOf.below(10)
      res.should.have.status(200)
      done()
    })
  })
  
  it("should be insert new different category", (done) => {
    chai.request(server)
    .post('/api/categories')
    .set('authorization', `Bearer ${token}`)
    .send({
      name: "bram1"
    })
    .end((err, res) => {
      chai.request(server)
      .post('/api/categories')
      .set('authorization', `Bearer ${token}`)
      .send({
        name: "bram1"
      })
      .end((err, res) => {
        res.should.have.status(500)
        done();
      })
    })
  })
  
  it('should property name have value', (done) => {
    chai.request(server)
    .get('/api/categories')
    .set('authorization', `Bearer ${token}`)
    .end((err, res) => {
      const data = res.body
      var dataJson = JSON.parse(JSON.stringify(data))
      for (let i = 0; i < dataJson.length; i++) {
        expect(dataJson[i].name).to.exist
      }
      res.should.have.status(200)
      done()
    })
  })
  
  it('should return an array', (done) => {
    chai.request(server)
    .get('/api/categories')
    .set('authorization', `Bearer ${token}`)
    .end((err, res) => {
      expect(res.body).to.be.an('array')
      res.should.have.status(200)
      done()
    })
  })
  
  it("should be less than 10 letters", (done) => {
    chai.request(server)
    .get('/api/categories')
    .set('authorization', `Bearer ${token}`)
    .end((err, res) => {
      const data = res.body;
      var dataJson = JSON.parse(JSON.stringify(data))
      for (let i = 0; i < dataJson.length; i++) {
        expect(dataJson[i].name).to.have.lengthOf.below(10)
      }``
      res.should.have.status(200)
      done()
    })
  })
  
  it("should be not an integer", (done) => {
    chai.request(server)
    .get('/api/categories')
    .set('authorization', `Bearer ${token}`)
    .end((err, res) => {
      const data = res.body;
      var dataJson = JSON.parse(JSON.stringify(data))
      for (let i = 0; i < dataJson.length; i++) {
        expect(dataJson[i].name).not.to.be.an.integer()
      }
      res.should.have.status(200)
      done()
    })
  })
  
  it('should delete all roles', (done) => {
    chai.request(server)
    .delete('/api/categories/')
    .set('authorization', `Bearer ${token}`)
    .end((err, res) => {
      expect(err).to.be.null;
      res.should.have.status(200);
      done();
    })
  })
  
})