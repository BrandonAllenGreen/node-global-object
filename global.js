#!/usr/bin/env node
'use strict';

// output detailed version information of Node.js and the underlying V8 JavaScript engine to the terminal using the process global object

const nodeVersion = process.version;
const v8Version = process.versions.v8;

let logVersions = `Node.js version: ${nodeVersion}\nV8 version: ${v8Version}`

console.log(logVersions);
