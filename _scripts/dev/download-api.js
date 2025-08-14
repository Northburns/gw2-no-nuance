// const fs = require('fs');
// const https = require('https');
// const fetch = require('node-fetch');
import fs from 'fs';
import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';

/* ************************************************************************************ */
/* **********  Input ****************************************************************** */
/* ************************************************************************************ */
let api=process.argv[2];
let dirName=process.argv[3];
let key=process.argv[4];

// Assumed you're running this in _scripts dir
let dir=`../assets/data/gw2-api/${dirName}`
// 
let gw2api='https://api.guildwars2.com/v2'

/* ************************************************************************************ */
/* **********  Functions  ************************************************************* */
/* ************************************************************************************ */
function log(msg) {
    console.log(msg);
}
function require(bool, msgProvider) {
    if(!bool) {
        throw msgProvider();
    }
}

function f(filename) { return `${dir}/${filename}`; }
function file_exists(filename) { return fs.existsSync(f(filename)); }
function file_readJson(filename) { return JSON.parse(fs.readFileSync(f(filename),"utf-8")); }
function file_writeJson(filename, obj) { 
    let json = JSON.stringify(obj, null, 2);
    fs.writeFileSync(f(filename), json, "utf-8"); 
}
function datafiles() { return fs.readdirSync(dir).filter(fn => !fn.startsWith('_')); }

async function api_getJson(endpoint) {
    let fullUrl = `${gw2api}/${endpoint}`
    log(`🌍 HTTP GET ${fullUrl}`)
    const res = await fetch(fullUrl);
    require(res.status === 200, () => `Fetch failed! ${fullUrl}`);
    return await res.json();
}

/* ************************************************************************************ */
/* **********  Work ******************************************************************* */
/* ************************************************************************************ */
log(`Doing API '${api}', KEY '${key}'`)
fs.mkdirSync(dir, { recursive: true });

if(!file_exists("_all-ids.json")) {
    file_writeJson("_all-ids.json", await api_getJson(api));
}
let allIds = file_readJson("_all-ids.json").map(x => `${x}`);

let existingsIds = new Set([]);
for(const file of datafiles()) {
    const keys = Object.keys(file_readJson(file));
    for(const k of keys) {
        require(!existingsIds.has(k), ()=>`When reading ${file}, encountered '${k}' which has already been read!`);
        existingsIds.add(k);
    }
}

let missingIds = allIds.filter(x => !existingsIds.has(x));
if(missingIds.length) {
    log(`Missing ${missingIds.length} entities`);
    const chunkSize = 200;
    for (let i = 0; i < missingIds.length; i += chunkSize) {
        const chunk = missingIds.slice(i, i + chunkSize);
        const chunkData = await api_getJson(`${api}?ids=${chunk.join(",")}`);
        const data = {};
        for (const chunkDatum of chunkData) {
            const k = chunkDatum[key];
            data[k] = chunkDatum;
        }
        file_writeJson(`${uuidv4()}.json`, data);
    }
}

let index = {};
let nameToId = new Map();
for(const file of datafiles()) {
    let data = file_readJson(file);
    for(key in data) {
        index[key] = file;
        let name = data[key].name;
        if(name) {
            require(!nameToId.has(name), ()=>`Name '${file}' encountered twice. File '${file}', ids: ${key} & ${nameToId[name]}`)
            nameToId[name] = key;
        }
    }
}
file_writeJson("_index.json", index);
file_writeJson("_names.json", nameToId);
