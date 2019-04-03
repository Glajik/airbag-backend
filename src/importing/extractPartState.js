import isEmpty from 'lodash/isEmpty';

export const getPartState = (data) => {
  const {
    sentToProductionStatus,
    sentToProductionDate,
    acceptedStatus,
    acceptedDate,
    readyStatus,
    readyDate,
    returnStatus,
    returnDate,
  } = data;

  if (!isEmpty(returnStatus)) {
    return {
      changedAt: returnDate,
      location: {
        name: 'acceptance',
        label: 'Приемка',
      },
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
      changedAt: sentToProductionDate,
      location: {
        name: 'plastic',
        label: 'Пластик',
      },
      status: {
        name: 'accepted',
        label: 'Принял в работу',
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

  // default
  return {
    changedAt: new Date(),
    location: {},
    status: {},
    person: {},
  };
};

export default data => data.map(({ uuid, valuesObj }) => {
  const { orderId, model, color } = valuesObj;
  return {
    uuid: getUuid(),
    orderId,
    model,
    color,
  };
});