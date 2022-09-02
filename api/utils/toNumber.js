/*
 * parse to integer or float number
 */
module.exports = function toNumber(value, isInteger = true) {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'boolean') {
    return value ? 1 : 0;
  }

  const val = isInteger ? parseInt(value, 10) : parseFloat(value);
  return isNaN(val) ? 0 : val;
}
