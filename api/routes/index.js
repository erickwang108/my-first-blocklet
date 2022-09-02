const { Router } = require('express');
const txsRouter = require('./txsRouter');

const apiRouter = Router();

apiRouter.use('/txs', txsRouter);

module.exports = apiRouter;
