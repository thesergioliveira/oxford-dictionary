#!/usr/bin/env node

// const dictionary = require("./lib/dictionary");
const args = process.argv.slice(2);
const [word] = args;
console.log(word);

// dictionary(word).then(console.log).catch(console.error);
