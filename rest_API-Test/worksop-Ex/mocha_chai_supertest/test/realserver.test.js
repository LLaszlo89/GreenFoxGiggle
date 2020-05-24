const serverInstance = require('../src/index');
const fetch = require('node-fetch');
const expect = require('chai').expect;

describe('real http request tests', () => {
  it('should get hello world', async () => {
    let response = await fetch('http://localhost:3000/');
    let result = await response.json();
    expect(response.status).to.be.equal(200);
    expect(result).to.deep.equal({
      message: 'Hello World!'
    });
  });
  
  after(() => {
    serverInstance.close();
  });
});