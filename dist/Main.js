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

function doExport1() {
  ServicingApp.doExportAirbagCRM();
}

function doExport2() {
  ServicingApp.doExportAcceptancePlastic();
}

function doExport3() {
  ServicingApp.doExportAcceptanceBags();
}

function doExport4() {
  ServicingApp.doExportDBReference();
}

function doExport5() {
  ServicingApp.doExportAirbagCRMArchive();
}

function doTests() {
  var outputText = TestingApp.doAllTests();
  Logger.log(outputText);
}