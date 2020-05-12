'use strict';

var test = require('tape');
var request = require('supertest');
var app = require('../server/app');

test('Correct users returned', function (t) {
  request(app)                                          // add our app to the supertest 
    .get('/api/users')
    .expect('Content-Type', /json/)
    .expect(200)                            // Till this point supertest is checking the api.
    .end(function (err, res) {
      var expectedUsers = ['John', 'Betty', 'Anitta'];    // From here till t.end()  'tape' is checking according to our rules

      t.error(err, 'No error');                           // No error -> 
      t.same(res.body, expectedUsers, 'Users as expected');   // res.body == expectedUsers  SO its passed thr test!
      t.end();
    });
});