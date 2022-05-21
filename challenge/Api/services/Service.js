const fetchAPI = require('../utils/fetchAPI');
const formatRepos = require('../utils/formatRepos');

module.exports = class Service {
  static getRepos = async (user, language, limit) => {
    try {
      const baseUrl = `https://api.github.com/users/${user}/repos`;
      const params = '?sort=created&direction=asc';
      let repos = await fetchAPI(baseUrl + params);
      repos = language ? repos.filter((repo) => repo.language === language) : repos;
      const oldestRepos = formatRepos(repos).slice(0, limit);
      return oldestRepos;
    } catch (error) {
      throw Error(error);
    }
  };
};
