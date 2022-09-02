const { Router } = require('express');
const { getHtmlContent } = require('../../utils/request');
const cacheService = require('../../services/cache');
const responseCode = require('../../constants/responseCode');
const parseHtml = require('./parseHtml');

const TARGET_URL = 'https://cn.etherscan.com/txs';
const router = Router();

router.get('/', async (req, res) => {
  const { a: address, p: pager, ...rest } = req.query;

  // check query
  if (!address) {
    return res.json({
      error: 'address is empty, please check your inputs.',
      code: responseCode.ERROR_INVALID_PARAMS,
    });
  }

  const url = `${TARGET_URL}?a=${address}&p=${pager}`;
  const cacheData = cacheService.get(url);

  if (cacheData) {
    return res.json({ data: cacheData, code: responseCode.OK });
  }

  try {
    // request html content
    const htmlContent = await getHtmlContent(url, rest);

    // parse and get transaction data grid list
    const resultData = parseHtml(htmlContent);

    // cache data
    cacheService.set(url, resultData);

    return res.json({ data: resultData, code: responseCode.OK });
  } catch (error) {
    // console.log(error);
    return res.json({
      error: 'Can not fetch data, please try again.',
      code: responseCode.ERROR_INTERNAL,
    });
  }
});

module.exports = router;
