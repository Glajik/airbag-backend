import isEmpty from 'lodash/isEmpty';
import PartTypes from './reference/PartTypes';
import Locations from './reference/Locations';
import Persons from './reference/Persons';
import Operations from './reference/Operations';
import Statuses from './reference/Statuses';
import Prices from './reference/Prices';


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
