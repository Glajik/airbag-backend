/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function onEdit(e) {
  App.onEdit(e);
}

function doImport() {
  App.doImport();
}

function uuidFillMissed() {
  App.uuidFillMissed();
}

function doTests() {
  const outputText = App.doAllTests();
  Logger.log(outputText);
}
