const parseHtml = require('../parseHtml');
const { htmlContent, expectResult } = require('./mockData/response');

describe('parse html tests', () => {
  it('should get data list', () => {
    const result = parseHtml(htmlContent);
    expect(result).toMatchObject(expectResult);
  });
});
