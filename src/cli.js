#!/usr/bin/env node

const { name, version } = require("../package.json");



const main = async() => {
    console.log(`${name} v${version}`);
};

main();