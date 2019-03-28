import Acceptance from './Acceptance';
import Parts from './Parts';

const isEmpty = v => v === '';

/*
      state: {
        type: 'SEND_TO_PLASTIC',
        label: 'Отправил в работу',
        destination: {
          name: 'plastic',
          label: 'Пластик'
        },
        person: {
          account: 'andrey.autocrash@gmail.com',
          name: 'Андрей Ст.',
          department: {
            name: 'plastic',
            label: 'Пластик'
          }
        }
      }

*/

const getPartState = (data) => {
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

/**
 * TODO:
 * - Use data from partTypes tab
 * @param {*} data rowObject data
 */
const getPartType = (data) => {
  const { partName } = data;
  return {
    // eslint-disable-next-line no-undef
    uuid: Utilities.getUuid(),
    class: 'wheel',
    name: partName,
    label: partName,
    airbagAlias: 'wheel_coverRef',
  };
};

// eslint-disable-next-line max-len
// const regexp = /^(?:=ГИПЕРССЫЛКА\( *")(https:\/\/drive\.google\.com\/drive\/.+)(?:" *; *".+" *\))$/g;

/**
 * TODO:
 * - use right person for fill comments. Get it from ... maybe airbagCRM
 */
// eslint-disable-next-line import/prefer-default-export
export const doImport = () => {
  // const parts = new Parts();
  const acceptance = new Acceptance();
  const dataCollSpecial = acceptance.extractAll();

  const saveToParts = dataCollSpecial.map(({ valuesObj }) => {
    const {
      orderId,
      model,
      color,
      commentPlastic,
    } = valuesObj;

    // eslint-disable-next-line no-undef
    const uuid = Utilities.getUuid();
    const data = {
      partType: getPartType(valuesObj),
      color,
      model,
      orderId,
      comments: [
        {
          type: 'plastic',
          text: commentPlastic,
          person: {
            name: 'Максим',
            account: 'autocrash.maksim@gmail.com',
            department: 'managers',
          },
        },
      ],
      state: getPartState(valuesObj),
    };

    return {
      uuid,
      data: JSON.stringify(data),
      acceptance: '',
      plastic: '',
      roofs: '',
      bags: '',
    };
  });

  // eslint-disable-next-line no-undef
  Logger.log(saveToParts[0]);
  new Parts().updateSheet(saveToParts);
};
