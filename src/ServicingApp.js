import isEmpty from 'lodash/isEmpty';
import PartTypes from './reference/PartTypes';
import Locations from './reference/Locations';
import Persons from './reference/Persons';
import Operations from './reference/Operations';
import Statuses from './reference/Statuses';
import Prices from './reference/Prices';
import AcceptancePlastic from './outter/AcceptancePlastic';
import AcceptanceBags from './outter/AcceptanceBags';
import AirbagCRM from './outter/AirbagCRM';
import AirbagCRMArchive from './outter/AirbagCRMArchive';

// eslint-disable-next-line import/prefer-default-export
export const uuidFillMissed = () => {
  [
    new PartTypes(),
    new Locations(),
    new Persons(),
    new Operations(),
    new Statuses(),
    new Prices(),
  ].forEach((s) => {
    // eslint-disable-next-line no-undef
    s.dataColl.forEach(({ rowId, uuid }) => {
      // eslint-disable-next-line no-undef
      if (isEmpty(uuid)) {
        // eslint-disable-next-line no-undef
        s.updateRow(rowId, { uuid: Utilities.getUuid() });
      }
    });
  });
};

// eslint-disable-next-line no-undef
const exporting = obj => DriveApp.createFile(`${obj.sheetName}.json`, JSON.stringify(obj.extractAll()));

export const doExportAirbagCRM = () => {
  exporting(new AirbagCRM());
};

export const doExportAirbagCRMArchive = () => {
  exporting(new AirbagCRMArchive());
};

export const doExportAcceptancePlastic = () => {
  exporting(new AcceptancePlastic());
};

export const doExportAcceptanceBags = () => {
  exporting(new AcceptanceBags());
};

export const doExportDBReference = () => {
  [
    new PartTypes(),
    new Locations(),
    new Persons(),
    new Operations(),
    new Statuses(),
    new Prices(),
  // eslint-disable-next-line no-undef
  ].forEach(item => DriveApp.createFile(`${item.sheetName}.json`, JSON.stringify(item.dataColl)));
};
