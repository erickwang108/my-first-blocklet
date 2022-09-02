const app = require('./app');

const port = process.env.BLOCKLET_PORT || process.env.PORT || 3030;

try {
  app.listen(port, () => {
    console.log(`Express server started on port: ${port}`);
  });
} catch (err) {
  console.error(err);
  process.exit();
}
