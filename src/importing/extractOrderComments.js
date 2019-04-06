import getUuid from 'uuid/v4';
import { fillPerson } from './completePersons';
import { getLocation } from './completeLocations';

const getStartDate = (indx, { orderId }) => {
  const { start } = indx.get('id', orderId);
  if (!start) return '';
  try {
    return new Date(start);
  } catch (error) {
    return '';
  }
};

const fillCreatedAt = indx => item => ({ ...item, createdAt: getStartDate(indx, item) });

// eslint-disable-next-line
const fillRecipient = indx => item => ({ ...item, recipient: getLocation(indx, item.recipient) });

const getComments = (locationName, prop) => (acc, entry) => {
  const { uuid: orderUuid, valuesObj } = entry;
  const { id, manager, [prop]: comment } = valuesObj;
  if (comment === '') return acc;
  return [...acc, {
    uuid: getUuid(),
    type: 'location',
    orderUuid,
    orderId: id,
    person: { airbagAlias: manager },
    recipient: { name: locationName },
    comment,
    createdAt: '',
  }];
};

export default (data, { personIndex, locationIndex, airbagCrmIndex }) => [
  ...data.reduce(getComments('plastic', 'commentPlastic'), []),
  ...data.reduce(getComments('pads', 'commentPads'), []),
]
  .map(fillPerson(personIndex))
  .map(fillRecipient(locationIndex))
  .map(fillCreatedAt(airbagCrmIndex));
