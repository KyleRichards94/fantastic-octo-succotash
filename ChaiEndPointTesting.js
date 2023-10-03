const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server'); // Replace with the path to your Express app
const { devtools } = require('vue');
const expect = chai.expect;

chai.use(chaiHttp);
//https://www.browserstack.com/guide/unit-testing-for-nodejs-using-mocha-and-chai
//begin POst api testing with chai
// i HAVE added a single user into the database user id 1
describe('Posts API', () => {
  // Test the POST /api/posts route
  describe('POST /api/posts/create', () => {
    it('should create a new post', (done) => {
      const newPost = {
        userId: 3,
        title: 'Test Post',
        description: 'This is a test post.',
        imagePath: 'test.jpg',
        objFilePath: 'test.obj'
      };

      chai
        .request(server)
        .post('/api/posts/create')
        .send(newPost)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.title).to.equal(newPost.title);
          done();
        });
    });
  });

  // Test the GET /api/posts route
  describe('GET /api/posts/findAll', () => {
    it('should get all posts', (done) => {
      chai
        .request(server)
        .get('/api/posts/findAll')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });

  // Test the GET /api/posts/:postId route
  describe('GET /api/posts/:postId', () => {
    it('should get a single post by postId', (done) => {
      const postId = 1; // Replace with an existing postId in your database

      chai
        .request(server)
        .get(`/api/posts/${postId}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.id).to.equal(postId);
          done();
        });
    });
  });

  //delete one
  describe('Add then Delete', () =>{
    it('Should delete a post with id 12', (done) => {
      const postId = 12;
      chai.request(server).delete(`/api/posts/${postId}`).end((err,res)=> {
        expect(res).to.have.status(200);
        done();
      })
    });
  });

  // Add similar tests for the remaining routes (PUT and DELETE) here...

});
//end post testing