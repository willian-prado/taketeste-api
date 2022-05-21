const express = require('express');

module.exports = class CustomRouter {
  #router;

  #controller;

  constructor(controller) {
    this.#router = express.Router();
    this.#controller = controller;
    this.#routes();
  }

  get router() { return this.#router; }

  #routes() {
    this.#router.get('/', this.#controller.getRepos);
  }
};
