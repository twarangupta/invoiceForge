const app = require("./src/app");
const config = require("./src/config/config");

const port = config.port; //calling variable from config file we just created
const server = app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

// gracefull shutdown code
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
async function shutdown() {
  server.close((err) => {
    //close redis client
    //close db pool
    if (err) {
      console.log("Error", err);
      process.exit(1);
    } else {
      console.log("Http server closed.");
      process.exit(0);
    }
  });
}
