import {
  partTypes, locations, persons, statuses, operations, prices,
} from './reference';

// eslint-disable-next-line import/prefer-default-export
export const onEdit = (e) => {
  [
    partTypes,
    locations,
    persons,
    operations,
    statuses,
    prices,
  ].forEach(s => s.onEdit(e));
};
