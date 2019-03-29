import AcceptancePlastic from './outter/AcceptancePlastic';
import Parts from './inner/Parts';
import { getPartType, getPartState } from './importing/partHelpers';

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


// eslint-disable-next-line max-len
// const regexp = /^(?:=ГИПЕРССЫЛКА\( *")(https:\/\/drive\.google\.com\/drive\/.+)(?:" *; *".+" *\))$/g;

/**
 * TODO:
 * - use right person for fill comments. Get it from ... maybe airbagCRM
 */
// eslint-disable-next-line import/prefer-default-export
export const doImport = () => {
  const dataCollSpecial = new AcceptancePlastic().extractAll();

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
