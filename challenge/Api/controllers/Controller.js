module.exports = class Controller {
  #service;

  constructor(service) {
    this.#service = service;
  }

  getRepos = async (_req, res) => {
    try {
      const repositories = await this.#service.getRepos('takenet', 'C#', 5);
      return res.status(200).json(repositories);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
};
