const request = require('supertest');
const app = require('../src/server');
const { add } = require('../src/simpleUnits');
const expect = require('chai').expect

describe('GET /', () => {
  it('should respond with 200 OK and Hello World message', (done) => {
    request(app)
      .get('/')
      .expect(200, {
        message: 'Hello World!'
      }, done);
  });
});

describe('POST /greeting', () => {
  it('should respond with 400 and an error message if not sending name', (done) => {
    request(app)
      .post('/greeting')
      .expect(400, {
        error: 'Name is missing!'
      }, done);
  });

  it('should respond with 201 and a greeting', (done) => {
    request(app)
      .post('/greeting')
      .send({ name: 'Levi' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201, {
        greeting: 'Hello, my dear Levi!'
      }, done);
  });
});

describe('simple unit test', () => {
  it('should add 2 numbers together', (done) => {
    expect(add(4, 6)).to.be.a('number');
    expect(add(4, 6)).to.be.equal(10);
    done();
  });
})