const express = require('express');

module.exports = class App {
  #app;

  constructor() {
    this.#app = express();
    this.#app.use(express.json());
  }

  startServer(PORT) {
    this.#app.listen(PORT, () => {
      console.log(`API listening on PORT ${PORT}`);
    });
  }

  addRouter(router) {
    this.#app.use(router);
  }
};
