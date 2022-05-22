module.exports = class Controller {
  #service;

  constructor(service) {
    this.#service = service;
  }

  getRepos = async (_req, res) => {
    try {
      const repos = await this.#service.getRepos('takenet', 'C#', 5);
      return res.status(200).json({ repos });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
};
