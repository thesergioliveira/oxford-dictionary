#!/usr/bin/env node // const dictionary = require("./lib/dictionary");
const word = process.argv[2];
// const [word] = args;
// console.log(word);
require("./lib/oxford-client");
module.exports = { word };
// dictionary(word).then(console.log).catch(console.error);
