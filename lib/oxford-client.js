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
// information about the api request and response : https://developer.oxforddictionaries.com/documentation#!/Entries/get_entries_source_lang_word_id
// alternative axios fetch
require("dotenv").config();
const axios = require("axios");
const apiFetch = () => {
  const { word } = require("../index");
  axios(
    `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}?strictMatch=false`,
    {
     headers: { 
      "Accept": "application/json",
      "app_id":   process.env.APP_ID,  //"4f304af7",
      "app_key": process.env.APP_KEY, // "e06f68ab2b159e9401426852b71bed78"
     }
    }
  )
    .then((data) => {
      result = data.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions;;
      return console.log(result.join(""));
    })
    .catch((err) => {
      console.log(err);
    });
};
apiFetch();
