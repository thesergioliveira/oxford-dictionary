// const axios = require("axios");

// class OxfordClient {
//   constructor(appId, apiKey) {
//     this.appId = appId;
//     this.apiKey = apiKey;

//     this.baseURL = "http://od-api.oxforddicitionaries.com/api/v2/";
//     this.client = axios.create({
//       baseURL: this.baseURL,
//       headers: {
//         app_id: this.appId,
//         app_key: this.apiKey,
//       },
//     });
//   }
//   async get(endpoint) {
//     const data = await this.client
//       .get(endpoint)
//       .then((res) => res.data)
//       .catch(({ response }) => Promise.reject(response));
//     return data;
//   }
//   async getEntry(word) {
//     const endpoint = `entries/en-us/${word}`;
//     return await this.get(endpoint);
//   }
// }

// alternative axios fetch
require("dotenv").config();
const axios = require("axios");
const apiFetch = () => {
  const { word } = require("../index");
  axios(
    `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}?strictMatch=false`,
    {
      Accept: "application/json",
      app_id: process.env.APP_ID,
      app_key: process.env.APP_KEY,
    }
  )
    .then((data) => {
      console.log(data.results);
    })
    .catch((err) => {
      // console.log(err);
    });
};
apiFetch();
