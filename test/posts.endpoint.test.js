// const chai  = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// const expect = require('chai').expect
// // Configure chai 
// chai.use(chaiHttp);
// chai.should();
// let token;

// describe("Posts Endpoint Test", ()=> {
    
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
    
//     it("have to be failed to post without description", (done) => {
//         chai.request(server)
//         .post('/api/posts')
//         .set('authorization',`Bearer ${token}`)
//         .end((_err, res) => {
//             console.log(res.body);
//             expect(_err).to.be.null;
//             res.should.been.status(500);
//             done();
//         });
//     });
    
//     it("It cannot be delete when unauthoried", (done) => {
//         chai.request(server)
//         .delete('/api/posts')
//         .end((_err, res) => {
//             console.log(res.body)
//             res.should.be.status(401);
//             done();
//         });
//     });
    
//     it("You can post when createBy and updateBy value is not set", (done) => {
//         chai.request(server)
//         .post('/api/post')
//         .send({title: 'Tarex the Predator', description: 'Berita Panas', isDraft: true, isPublished: true})
//         .end((_err, res) => {
//             console.log(res.body)
//             res.should.have.status(404);
//             done();
//         });
//     });
    
    
//     it("It contain property description", (done) => {
//         chai.request(server)
//         .post('/api/posts')
//         .set('authorization',`Bearer ${token}`)
//         .send({title: 'Tarex the Predator', description: 'Berita Panas',
//         isDraft: true, isPublished: true})
//         .end((_err, res) => {
//             console.log('Hasil : ', res.body)
//             expect(res.body.data).to.have.property('description');
//             res.should.have.status(200);
//             done();
//         });
//     });
    
//     it("You still cannot post when the body is null", (done) => {
//         chai.request(server)
//         .post('/api/posts')
//         .set('authorization',`Bearer ${token}`)
//         .end((_err, res) => {
//             console.log(res.body)
//             expect(_err).to.be.null;
//             res.should.have.status(500);
//             done();
//         });
//     });
    
//     it("It has property isDraft and isPublished", (done) => {
//         chai.request(server)
//         .post('/api/posts')
//         .set('authorization',`Bearer ${token}`)
//         .send({title: 'Tarex the Child Hunter', description: 'Berita Hot',
//         isDraft: true, isPublished: true})
//         .end((_err, res) => {
//             console.log(res.body)
//             expect(res.body.data).to.have.property('isDraft' && 'isPublished');
//             res.should.have.status(200);
//             done();
//         });
//     });
    
//     it("You can update data when property updateBy is different value with createBy", (done) => {
//         chai.request(server)
//         .put('/api/posts/5e5b785942362b33ac436c39')
//         .set('authorization',`Bearer ${token}`)
//         .send({title : "Tarex the Teem Hunter",
//             permalink : "tarex-the-teen-hunter",
//             description : "Tarex the Teen Hunter Beraksi Kembali",
//             isDraft : false,
//             isPublished : false,
//             category : ["5e58da9293d7047a3492a74d"],
//             tags : [],
//             createBy : "5e56457f68be1e3a8d407095",
//             updatedBy : "5e58ea2992f22e064474d9bd"})
//         .end((_err, res) => {
//             console.log(res.body)
//             res.should.have.status(200);
//             done();
//         });
//     });
    
//     it("You can delete all the post with authorization", (done) => {
//         chai.request(server)
//         .delete('/api/posts')
//         .set('authorization',`Bearer ${token}`)
//         .end((_err, res) => {
//             console.log(res.body)
//             res.should.have.status(200);
//             done();
//         });
//     });
    
//     it("You still can post even updateBy is different with active userID", (done) => {
//         chai.request(server)
//         .post('/api/posts')
//         .set('authorization',`Bearer ${token}`)
//         .send({title : "Tarex the Tennager Hunter",
//         permalink : "tarex-the-teenager-hunter",
//         description : "Tarex the Teenager Hunter Beraksi Kembali",
//         isDraft : true,
//         isPublished : false,
//         category : ["5e58da9293d7047a3492a74d"],
//         tags : [],
//         createBy : "5e58ea2992f22e064474d9bd",
//         updatedBy : "5e58ea2992f22e064474d9bd" })
//         .end((_err, res) => {
//             console.log(res.body)
//             expect(_err).to.be.null;
//             res.should.have.status(200);
//             done();
//         });
//     });
    
//     it("You cannot post without authoritation", (done) => {
//         chai.request(server)
//         .post('/api/posts')
//         //.set('authorization',`Bearer ${token}`)
//         .send({title : "Tarex the Mama Hunter",
//         permalink : "tarex-the-mama-hunter",
//         description : "Tarex the Mama Hunter Beraksi Berulah",
//         isDraft : false,
//         isPublished : false,
//         category : ["5e58da9293d7047a3492a74d"],
//         tags : [],
//         createBy : "5e58ea2992f22e064474d9bd",
//         updatedBy : "5e58ea2992f22e064474d9bd" })
//         .end((_err, res) => {
//             console.log(res.body)
//             expect(_err).to.be.null;
//             res.should.have.status(401);
//             done();
//         });
//     });
    
    
    
// })
