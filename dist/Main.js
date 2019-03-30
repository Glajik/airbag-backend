"use strict";

/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */
function onEdit(e) {
  HandlingApp.onEdit(e);
}

function doImport() {
  ImportingApp.doImport();
}

function uuidFillMissed() {
  ServicingApp.uuidFillMissed();
}

function doTests() {
  var outputText = TestingApp.doAllTests();
  Logger.log(outputText);
}