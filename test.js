const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server'); // Replace with the path to your Express app
const { devtools } = require('vue');
const expect = chai.expect;

chai.use(chaiHttp);

const Iteration = 6; // Replace with the current iteration of your database
//https://www.browserstack.com/guide/unit-testing-for-nodejs-using-mocha-and-chai
//begin POst api testing with chai
// i HAVE added a single user into the database user id 1
describe('Posts API', () => {
  // Test the POST /api/posts route
  describe('POST /api/posts/create', () => {
    it('should create a new post', (done) => {
      const newPost = {
        postId: Iteration,
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
      const postId = Iteration; // Replace with an existing postId in your database

      chai
        .request(server)
        .get(`/api/posts/${postId}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.postId).to.equal(postId);
          done();
        });
    });
  });

  //delete one
  describe('Add then Delete', () =>{
    it('Should delete a post with id 1', (done) => {
      const postId = Iteration;
      chai.request(server).delete(`/api/posts/${postId}`).end((err,res)=> {
        expect(res).to.have.status(200);
        done();
      })
    });
  });

  // Add similar tests for the remaining routes (PUT and DELETE) here...

});
//end post testing



//Begin Order api testingdescribe('Posts API', () => {
  describe('Posts API', () => {
    describe('POST /api/orders/create', () => {
      it('create a new order', (done) => {
        const newOrder = {
          orderId: Iteration,
          userId: 3,
          totalAmount: 3.50
        };

        chai
          .request(server)
          .post('/api/orders/create')
          .send(newOrder)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body.userId).to.equal(newOrder.userId);
            expect(res.body.totalAmount).to.equal(newOrder.totalAmount);
            done();
          });
      });
    });

    describe('GET /api/orders/findAll', () => {
      it('should retrieve all orders', (done) => {
        chai.request(server).get('/api/orders/findAll').end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        }); 
      });
    });

    describe('Get /api/orders/findOne', () => {
      it('should return 1 exact order', (done) => {
        const orderId = Iteration;
        chai.request(server).get(`/api/orders/find/${orderId}`).end((err,res) => {
            expect(res).to.have.status(200);
            expect(res.body.orderId).to.equal(orderId);
            done();
        });
      });
    });

    describe('PUT /api/orders/:orderId', () => {
      it('Should update the order price', (done) => {
        const orderId = Iteration;
        const newTotal = {
          totalAmount : Math.random(),
        };
        chai.request(server).put(`/api/orders/${orderId}`).send(newTotal).end((err,res) => {
          expect(res).to.have.status(200);
          done();
        });
      });
    });



  });

  //begin order item testing
describe('OrderItems API', () => {
  describe('POST /api/orderItems/create', () => {
    it('create a new order item', (done) => {
      const newOrderItem = {
        orderId: Iteration,
        productId: null,
        quantity: 3,
        price: 10.99,
      };

      chai
        .request(server)
        .post('/api/orderItems/create')
        .send(newOrderItem)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.orderId).to.equal(newOrderItem.orderId);
          expect(res.body.productId).to.equal(newOrderItem.productId);
          expect(res.body.quantity).to.equal(newOrderItem.quantity);
          expect(res.body.price).to.equal(newOrderItem.price);
          done();
        });
    });
  });

  describe('GET /api/orderItems/findAll', () => {
    it('should retrieve all order items', (done) => {
      chai.request(server).get('/api/orderItems/findAll').end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
    });
  });
  
  
  describe('GET /api/orderItems/find/orderitemId', () => {
    it('should retrieve all order items with the same orderid', (done) => {
      const orderId = Iteration;
      chai.request(server).get(`/api/orderItems/find/${orderId}`).end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
    });
  });


  describe('GET /api/orderItems/findOne/:orderItemId', () => {
    it('should return one exact order item', (done) => {
      const orderItemId = Iteration; // Replace with a valid orderItemId from your database
      chai
        .request(server)
        .get(`/api/orderItems/findOne/${orderItemId}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.orderItemId).to.equal(orderItemId);
          done();
        });
    });
  });

  describe('PUT /api/orderItems/:orderItemId', () => {
    it('should update the order item quantity', (done) => {
      const orderItemId = Iteration; // Replace with a valid orderItemId from your database
      const newQuantity = {
        quantity: 10,
      };
      chai
        .request(server)
        .put(`/api/orderItems/${orderItemId}`)
        .send(newQuantity)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('DELETE /api/orderItems/:orderItemId', () => {
    it('should delete an order item', (done) => {
      const orderItemId = Iteration; // Replace with a valid orderItemId from your database
      chai
        .request(server)
        .delete(`/api/orderItems/${orderItemId}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });

        //delete one
        describe('Add then Delete the order ID = 1', () =>{
          it('Should delete an order', (done) => {
            const orderId = Iteration; 
            chai.request(server).delete(`/api/orders/${orderId}`).end((err,res)=> {
              expect(res).to.have.status(200);
              done();
            });
          });
        });
});
//end orders testing
