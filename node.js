"use strict";

var ws;
try {
  ws = require('uws');
} catch (e) {
  ws = require('ws');
}

module.exports = ws;
