const request = require('supertest');
const app = require('api/app');

const responseCode = require('../../../constants/responseCode');

describe('txs route tests', () => {
  it('should get data list', (done) => {
    request(app)
      .get('/api/txs?a=0xeb2a81e229b68c1c22b6683275c00945f9872d90&p=1')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body.code).toEqual(responseCode.OK);
        expect(res.body?.data?.list).toBeDefined();
        expect(res.body.data.list.length).toBeGreaterThan(0);
        return done();
      });
  }, 10000);

  it('should get input error', (done) => {
    request(app)
      .get('/api/txs')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body.code).toEqual(responseCode.ERROR_INVALID_PARAMS);
        return done();
      });
  });
});
