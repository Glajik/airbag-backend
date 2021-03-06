import getUuid from 'uuid/v4';
import isEmpty from 'lodash/isEmpty';
import { extractAcceptanceAlias } from './helpers';
import { fillPerson } from './completePersons';
import { fillStatus } from './completeStatuses';
import { fillLocation } from './completeLocations';

const getPartState = (acc, entry) => {
  const { uuid: partUuid, valuesObj, notesObj } = entry;

  const appendAcceptanceAlias = item => ({
    ...item,
    acceptanceAlias: extractAcceptanceAlias(notesObj[item.acceptanceAliasField]),
  });

  const statuses = [
    {
      name: 'SENT',
      statusField: 'sentToProductionStatus',
      dateField: 'sentToProductionDate',
      acceptanceAliasField: 'sentToProductionDate',
    },
    {
      name: 'ACCEPTED',
      statusField: 'acceptedStatus',
      dateField: 'acceptedDate',
      acceptanceAliasField: 'acceptedDate',
    },
    {
      name: 'READY',
      statusField: 'readyStatus',
      dateField: 'readyDate',
      acceptanceAliasField: 'readyDate',
    },
    {
      name: 'ISSUED',
      statusField: 'returnStatus',
      dateField: 'returnDate',
      acceptanceAliasField: 'readyDate', // use alias from ready status
    },
    {
      name: 'ACCEPTED',
      statusField: 'returnStatus',
      dateField: 'returnDate',
      acceptanceAliasField: 'returnDate',
    },
  ].map(appendAcceptanceAlias);


  const determineStatus = (item) => {
    const {
      name, acceptanceAlias, statusField, dateField,
    } = item;
    const status = valuesObj[statusField];
    const date = valuesObj[dateField];
    if (isEmpty(status)) return false;
    return {
      uuid: getUuid(),
      partUuid,
      status: { name },
      location: {},
      person: { acceptanceAlias },
      changedAt: new Date(date),
    };
  };


  return [
    ...acc,
    ...statuses.map(determineStatus).filter(item => item !== false),
  ];
};

const copyLocationLabel = item => ({ ...item, location: { label: item.person.locationLabel } });

export default (data, { personIndex, locationIndex, statusIndex }) => data.reduce(getPartState, [])
  .map(fillPerson(personIndex))
  .map(copyLocationLabel)
  .map(fillLocation(locationIndex))
  .map(fillStatus(statusIndex));
