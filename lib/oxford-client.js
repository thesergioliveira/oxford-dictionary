const axios = require("axios");

class OxfordClient {
  constructor(appId, apiKey) {
    this.appId = appId;
    this.apiKey = apiKey;

    this.baseURL = "http://od-api.oxforddicitionaries.com/api/v2/";
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        app_id: this.appId,
        app_key: this.apiKey,
      },
    });
  }
  async get(endpoint) {
    const data = await this.client
      .get(endpoint)
      .then((res) => res.data)
      .catch(({ response }) => Promise.reject(response));
    return data;
  }
  async getEntry(word) {
    const endpoint = `entries/en-us/${word}`;
    return await this.get(endpoint);
  }
}
