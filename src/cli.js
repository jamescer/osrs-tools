#!/usr/bin/env node

const fs = require("fs");
const { name, version } = require("../package.json");
const getRuneScapeText = require("./index");

const getFilename = () => {
    return `osrs-quest-tool-${Date.now()}`;
};

const main = async () => {
    console.log(`${name} v${version}`);
};

main();