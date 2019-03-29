import isEmpty from 'lodash/isEmpty';
import PartTypes from './inner/PartTypes';
import Locations from './inner/Locations';
import Persons from './inner/Persons';
import Operations from './inner/Operations';
import Statuses from './inner/Statuses';
import Prices from './inner/Prices';


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
