const NodeCache = require('node-cache');

const defaultTTL = 1000 * 60 * 10; // 10 minutes
const cache = new NodeCache();

module.exports = {
  get: (key) => cache.get(key),
  has: (key) => cache.has(key),
  del: (key) => cache.del(key),
  set: (key, val, ttl = defaultTTL) => cache.set(key, val, ttl),
};