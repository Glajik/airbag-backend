import PartTypes from './reference/PartTypes';
import Locations from './reference/Locations';
import Persons from './reference/Persons';
import Operations from './reference/Operations';
import Statuses from './reference/Statuses';
import Prices from './reference/Prices';

// eslint-disable-next-line import/prefer-default-export
export const onEdit = (e) => {
  [
    new PartTypes(),
    new Locations(),
    new Persons(),
    new Operations(),
    new Statuses(),
    new Prices(),
  ].forEach(s => s.onEdit(e));
};
