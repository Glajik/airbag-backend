import getUuid from 'uuid/v4';
import isEmpty from 'lodash/isEmpty';
import { extractPersonAlias } from './helpers';

const getPartState = (acc, entry) => {
  const { uuid: partUuid, valuesObj, notesObj } = entry;

  const appendPersonAlias = item => ({
    ...item,
    personAlias: extractPersonAlias(notesObj[item.dateField]),
  });

  const statuses = [
    {
      name: 'SEND',
      statusField: 'sentToProductionStatus',
      dateField: 'sentToProductionDate',
    },
    {
      name: 'ACCEPTED',
      statusField: 'acceptedStatus',
      dateField: 'acceptedDate',
    },
    {
      name: 'READY',
      statusField: 'readyStatus',
      dateField: 'readyDate',
    },
    {
      name: 'ACCEPTED',
      statusField: 'returnStatus',
      dateField: 'returnDate',
    },
  ].map(appendPersonAlias);


  const determineStatus = (item) => {
    const {
      name, personAlias, statusField, dateField,
    } = item;
    const status = valuesObj[statusField];
    const date = valuesObj[dateField];
    if (isEmpty(status)) return false;
    return {
      uuid: getUuid(),
      partUuid,
      name,
      label: { statusName: name },
      location: { personAlias },
      person: { personAlias },
      changedAt: new Date(date),
    };
  };


  return [
    ...acc,
    ...statuses.map(determineStatus).filter(item => item !== false),
  ];
};

export default data => data.reduce(getPartState, []);
