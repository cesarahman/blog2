// const chai  = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// const expect = require('chai').expect;

// // Configure chai
// chai.use(chaiHttp);
// chai.should();

// let token;
// describe("Login", ()=> {
    
//     it("should return token", (done) => {
//         chai.request(server)
//         .get('/auth/login')
//         .auth('admin', 'admin')
//         .end((err, res) => {
//             expect(err).to.be.null;
//             res.should.have.status(200);
//             token = res.body.token;
//             done();
//         });
//     });
// })

// describe("Tags Endpoint", ()=> {
//     it("It should be authorized to get all tags", (done) => {
//         chai.request(server)
//         .get('/api/tags')
//         .set('authorization',`Bearer ${token}`)
//         .end((err, res) => {
//             expect(err).to.be.null;
//             res.should.have.status(200);
//             done();
//         });
//     });
    
//     it("It should have name to create new tag", (done) => {
//         chai.request(server)
//         .post('/api/tags')
//         .set('authorization',`Bearer ${token}`)
//         .send({ name : ''})
//         .end((err, res) => {
//             res.should.have.status(500);
//             done();
//         });
//     });
    
//     it("It should be string to put name for tag", (done) => {
//         chai.request(server)
//         .post('/api/tags')
//         .set('authorization',`Bearer ${token}`)
//         .send({ name : 012345 })
//         .end((err, res) => {
//             res.should.have.status(422);
//             expect(res.body).to.have.property('errors')
//             done();
//         });
//     });
    
//     it("It should get tag by id", (done) => {
//         const idTags = '5e5bc07baffe00297b78508a'
//         chai.request(server)
//         .get('/api/tags/'+idTags)
//         .set('authorization', `Bearer ${token}`)
//         .end((err, res) => {
//             expect(res.body).to.have.property('_id');
//             res.should.have.status(200);
//             done();
//         });
//     });
    
//     it("It should have name less than 20 characters", (done) => {
//         chai.request(server)
//         .post('/api/tags/')
//         .set('authorization', `Bearer ${token}`)
//         .send({ name : 'Au ah gelap' })
//         .end((err, res) => {
//             res.should.have.status(200);
//             done();
//         });
//     });
    
//     it("It should have name more than 2 characters", (done) => {
//         chai.request(server)
//         .post('/api/tags/')
//         .set('authorization', `Bearer ${token}`)
//         .send({ name : 'a' })
//         .end((err, res) => {
//             res.should.have.status(500);
//             done();
//         });
//     });
    
//     it("It should insert new tags and delete it for test only", (done) => {
//         chai.request(server)
//         .post('/api/tags')
//         .set('authorization',`Bearer ${token}`)
//         .send({ name: 'contoh' })
//         .end((err, res) => {
//             expect(err).to.be.null;
//             res.should.have.status(200);
//             const idTags = res.body.data._id;
//             chai.request(server)
//             .delete('/api/tags/'+idTags)
//             .set('authorization',`Bearer ${token}`)
//             .end((err, res) => {  
//                 console.log(res.body.data)
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 expect(res.body.data._id).to.be.equal(idTags)
//                 done();
//             });
//         });
//     })
    
//     it("It should insert true value", (done) => {
//         chai.request(server)
//         .post('/api/tags')
//         .set('authorization',`Bearer ${token}`)
//         .send({ name: 'example' })
//         .end((err, res) => {
//             expect(res.body.data.name).to.be.equal('example');
//             res.should.have.status(200);
//             const idTags = res.body.data._id;
//             chai.request(server)
//             .delete('/api/tags/'+idTags)
//             .set('authorization',`Bearer ${token}`)
//             .end((err, res) => {  
//                 console.log(res.body.data)
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 expect(res.body.data._id).to.be.equal(idTags)
//                 done();
//             });
//         });
//     })
    
//     it("It should have field name", (done) => {
//         chai.request(server)
//         .get('/api/tags')
//         .set('authorization', `Bearer ${token}`)
//         .end((err, res) => {
//             expect({name : 'example'}).to.haveOwnProperty('name');
//             expect(err).to.be.null;
//             res.should.have.status(200);
//             done();
//         });
//     });
    
//     it("It should delete all tags", (done)=> {
//         chai.request(server)
//         .delete('/api/tags')
//         .set('authorization',`Bearer ${token}`)
//         .end((err, res) => {
//             expect(err).to.be.null;
//             res.should.have.status(200);
//             done();
//         });
//     })
    
// })