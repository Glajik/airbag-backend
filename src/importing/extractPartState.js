import isEmpty from 'lodash/isEmpty';

const makeMap = (key, coll) => coll.reduce((acc, item) => {
  const setKey = item[key];
  acc[setKey] = item;
  return acc;
}, {});

// const getState = (status, date, note, location) => {
//   if (isEmpty(status)) return false;
//   return {
//     changedAt: new Date(date),
//     location: {
//       ...findPersonsLocation('User1'),
//     },
//     status: {
//       ...findStatusByName('sentToPlastic'),
//     },
//     person: {
//       ...findPersonByAlias('User1'),
//     },
//   };
// }

const getPartState = (entry, options) => {
  const {
    partUuid,
    sentToProductionStatus,
    sentToProductionDate,
    acceptedStatus,
    acceptedDate,
    readyStatus,
    readyDate,
    returnStatus,
    returnDate,
  } = entry;

  const { refs } = options;
  const { statuses, locations, persons } = refs;
  // const personsMap = normalize(persons, [personAliases])
  //   .entities
  //   .personAliases;

  const aliasesMap = makeMap('alias', persons);
  const locationLabelMap = makeMap('label', locations);
  const statusMap = makeMap('name', statuses);
  const findPersonByAlias = alias => aliasesMap[alias];
  const findPersonsLocation = (alias) => {
    const person = findPersonByAlias(alias);
    const { locationLabel } = person;
    const location = locationLabelMap[locationLabel];
    return location;
  };
  const findStatusByName = name => statusMap[name];

  if (!isEmpty(returnStatus)) {
    return {
      changedAt: new Date(returnDate),
      location: { ...acceptance },
      status: {
        name: 'accepted',
        label: 'Получил из производства',
      },
      person: {
        account: 'andrewautocrash@gmail.com',
        name: 'Андрей Журжа',
        department: {
          name: 'acceptance',
          label: 'Приемка',
        },
      },
    };
  }

  if (!isEmpty(readyStatus)) {
    return {
      changedAt: readyDate,
      location: {
        name: 'plastic',
        label: 'Пластик',
      },
      status: {
        name: 'ready',
        label: 'Готово к отгрузке',
      },
      person: {
        account: 'andrey.autocrash@gmail.com',
        name: 'Андрей Ст.',
        department: {
          name: 'plastic',
          label: 'Пластик',
        },
      },
    };
  }

  if (!isEmpty(acceptedStatus)) {
    return {
      changedAt: acceptedDate,
      location: {
        name: 'acceptance',
        label: 'Приемка',
      },
      status: {
        name: 'send',
        label: 'Отправил в работу',
      },
      destination: {
        name: 'plastic',
        label: 'Пластик',
      },
      person: {
        account: 'andrey.autocrash@gmail.com',
        name: 'Андрей Ст.',
        department: {
          name: 'plastic',
          label: 'Пластик',
        },
      },
    };
  }

  if (!isEmpty(sentToProductionStatus)) {
    return {
      partUuid,
      changedAt: new Date(sentToProductionDate),
      location: {
        ...findPersonsLocation('User1'),
      },
      status: {
        ...findStatusByName('sentToPlastic'),
      },
      person: {
        ...findPersonByAlias('User1'),
      },
    };
  }

  // default
  return {
    changedAt: new Date(),
    location: {},
    status: {},
    person: {},
  };
};

export default (data, options) => data.map(({ uuid: partUuid, valuesObj, notesObj }) => {
  const item = {
    partUuid,
    ...valuesObj,
  };
  return getPartState(item, options);
});
