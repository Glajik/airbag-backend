import getUuid from 'uuid/v4';
import isEmpty from 'lodash/isEmpty';
import { extractLink, extractPersonAlias } from './helpers';

const getPhoto = (type, photoField, dateField) => (acc, entry) => {
  const {
    uuid: partUuid, valuesObj, formulasObj, notesObj,
  } = entry;

  const { [photoField]: formula } = formulasObj;
  const { [photoField]: comment } = notesObj;
  if (isEmpty(formula)) return acc;

  const url = extractLink(formula);
  const { [dateField]: createdAt } = valuesObj;
  const { [dateField]: note } = notesObj;

  // const person = {
  //   uuid,
  //   name,
  //   account,
  //   from: { uuid, label }
  // };

  return [...acc, {
    uuid: getUuid(),
    type,
    partUuid,
    comment,
    url,
    createdAt,
    person: {
      alias: extractPersonAlias(note),
    },
  }];
};

export default data => [
  ...data.reduce(getPhoto('before', 'sendLinkToPhoto', 'sentToProductionDate'), []),
  ...data.reduce(getPhoto('after', 'returnLinkToPhoto', 'returnDate'), []),
];
