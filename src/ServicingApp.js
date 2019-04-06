import isEmpty from 'lodash/isEmpty';

import {
  partTypes, locations, persons, statuses, operations, prices,
} from './reference';

import AcceptancePlastic from './outter/AcceptancePlastic';
import AcceptanceBags from './outter/AcceptanceBags';
import AirbagCRM from './outter/AirbagCRM';
import AirbagCRMArchive from './outter/AirbagCRMArchive';

// eslint-disable-next-line import/prefer-default-export
export const uuidFillMissed = () => {
  [
    partTypes,
    locations,
    persons,
    operations,
    statuses,
    prices,
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
const exporting = (name, data) => DriveApp.createFile(name, JSON.stringify(data));

export const doExportSpreadsheets = () => {
  exporting('AirbagCRM.values.json', new AirbagCRM().values);

  exporting('AirbagCRMArchive.values.json', new AirbagCRMArchive().values);

  exporting('AcceptancePlastic.values.json', new AcceptancePlastic().values);
  exporting('AcceptancePlastic.formulas.json', new AcceptancePlastic().formulas);
  exporting('AcceptancePlastic.notes.json', new AcceptancePlastic().notes);

  exporting('AcceptanceBags.values.json', new AcceptanceBags().values);
  exporting('AcceptanceBags.formulas.json', new AcceptanceBags().formulas);
  exporting('AcceptanceBags.notes.json', new AcceptanceBags().notes);
};

export const doExportDBReference = () => {
  [
    partTypes,
    locations,
    persons,
    operations,
    statuses,
    prices,
  // eslint-disable-next-line no-undef
  ].forEach(item => DriveApp.createFile(`${item.sheetName}.json`, JSON.stringify(item.dataColl)));
};
