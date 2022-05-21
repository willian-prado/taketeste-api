const axios = require('axios');

module.exports = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw Error(error);
  }
};
