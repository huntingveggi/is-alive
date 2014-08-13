#! /usr/bin/env node

'use strict';

var isAliveClient = require('./is-alive-client');
var commander = require('commander');

commander
.usage('[options] <file>')
.parse(process.argv);
