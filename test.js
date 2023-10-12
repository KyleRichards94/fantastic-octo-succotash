const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server'); // Replace with the path to your Express app
const { devtools } = require('vue');
const expect = chai.expect;

chai.use(chaiHttp);

const Iteration = 14; // Replace with the current iteration of your database
//https://www.browserstack.com/guide/unit-testing-for-nodejs-using-mocha-and-chai
//begin POst api testing with chai
// i HAVE added a single user into the database user id 1
describe('Posts API', () => {
  // Test the POST /api/posts route
  const fs = require('fs');

  // Test the POST /api/posts route
  describe('POST /api/posts/create', () => {
    it('should create a new post', (done) => {
      const newPost = {
        userId: 3,
        title: 'Test Post',
        description: 'This is a test post.',
      };
      // Read the image file and .obj file as buffers
      const imageFile = fs.readFileSync('./app/controllers/FileSystem/cube.png');
      const objFile = fs.readFileSync('./app/controllers/FileSystem/cube.obj');
      // Append the files to the request
      const req = chai.request(server).post('/api/posts/create');
      req.field('title', newPost.title);
      req.field('description', newPost.description);
      req.field('userId', newPost.userId);
      req.attach('imageFile', imageFile, 'image.jpg');
      req.attach('objFile', objFile, 'test.obj');

      req.end((err, res) => {
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

//testing users
describe('User Controller Tests', () => {
  describe('POST /add', () => {
    it('it should create a user', (done) => {
      const user = {
        userName: 'testUserName',
        password: 'testPassword',
        email: 'test@example.com',
        address: 'testAddress'
      };

      chai.request(server)
        .post('/api/users/add')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('UserID').eql('testUserID');
          done();
          console.log('User created successfully!');
        });
    });
  });

  describe('/POST login', () => {
    it('it should login a user', (done) => {
      const credentials = {
        userName: 'testing',
        password: 'bigtester'
      };

      chai.request(server)
        .post('/api/users/login') 
        .send(credentials)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('userName').eql('testUserName');
          done();
        });
    });
  });
});

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

//begin Product Management Testing


// Test the GET /api/products route


//creating a product
const fs = require('fs');
describe('POST /api/posts/create', () => {
  it('should create a new post', (done) => {
    const newPost = {
      userId: 3,
      productName: 'Test Post',
      description: 'This is a test post.',
      price: 33,
      imageLocation: ''
    };
    // Read the image file and .obj file as buffers
    const imageFile = fs.readFileSync('./app/controllers/FileSystem/cube.png');
   /*  const objFile = fs.readFileSync('./app/controllers/FileSystem/cube.obj'); */
    // Append the files to the request
    const req = chai.request(server).post('/api/products/addProduct');
    req.field('userId', newPost.userId);
    req.field('productName', newPost.productName);
    req.field('description', newPost.description);
    req.field('price', newPost.price);
    req.attach('imageFile', imageFile, 'image.jpg');
   /*  req.attach('objFile', objFile, 'test.obj'); */

    req.end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body.productName).to.equal(newPost.productName);
      done();
    });
  });
});


//getting all products - for the View Products
describe('GET /api/products/findAll', () => {
  it('should get all products from the database', (done) => {
    chai
      .request(server)
      .get('/api/products/findAll')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});


//end Product Management Testing

describe('Favorite Posts API', () => {
  // You may need to set up your database or mock it for testing.

  // This is an example test for adding a post to favorites.
  describe('POST /api/favoritePosts/addPost', () => {
    it('should add a post to favorites', (done) => {
      // Define the favoritePost object to add.
      const favoritePost = {
        userId: 3, // Replace with a valid user ID.
        postId: 2,  // Replace with a valid post ID.
      };

      chai
        .request(server)
        .post('/api/favoritePosts/addPost')
        .send(favoritePost)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          // Add more specific assertions here as needed.
          done();
        });
    });
  });

  // Add more tests for favoritePosts route (GET, DELETE, etc.) as necessary.
});

describe('Favorite Posts API', () => {
  // Assuming you have a route for getting all favorite posts.
  describe('GET /api/favoritePosts/findAllFavorites', () => {
    it('should retrieve all favorite posts', (done) => {
      chai
        .request(server)
        .get('/api/favoritePosts/findAllFavorites')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          // You can add more specific assertions based on your API response here.
          done();
        });
    });
  });

  // Add more tests for other favorite posts-related routes as needed.
});

describe('Create comment API',  () => {
  it('should create a new comment',  (done) =>{
    const sampleComment = {
        postId: 1, 
        userId: 1,
        commentText: 'This is a test comment',
    };
    chai
      .request(server)
      .post('/api/comment/create') 
      .send({
        sampleComment
      })
      .end(function (err, res) {
        expect(res.body).to.be.an('object');
        expect(res).to.have.status(201); 
        done();
      });
  });
});
//Self Documenting code and all that jazz
describe('Get comment by Post ID',  () => {
  it('should source comments by post ID',  (done) =>{
       const postId = 3;
    chai
      .request(server)
      .get(`/api/comment/getByPost?postId=${postId}`) 
      .end(function (err, res) {
        if (err) {
          done(err);
        } else {
        expect(res.body).to.be.an('array'); 
        expect(res.body[0]).to.have.property('commentText');
        done();
        }
      });
  });
});