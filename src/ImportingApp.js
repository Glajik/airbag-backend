/* eslint-disable */

import AcceptancePlastic from './outter/AcceptancePlastic';
import AcceptanceBags from './outter/AcceptanceBags';
import AirbagCRM from './outter/AirbagCRM';

import Parts from './db/Parts';
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
const regexp = /^(?:=ГИПЕРССЫЛКА\( *")(https:\/\/drive\.google\.com\/drive\/.+)(?:" *; *".+" *\))$/g;

// eslint-disable-next-line no-undef
const prepare = data => ({ uuid: Utilities.getUuid(), data: JSON.stringify(data) });

/**
 * TODO:
 * - use right person for fill comments. Get it from ... maybe airbagCRM
 */
// eslint-disable-next-line import/prefer-default-export
export const doImport = () => {
  const plasticExportData = new AcceptancePlastic().extractAll();
  const bagsExportData = new AcceptanceBags().extractAll();
  const airbagcrmExportData = new AirbagCRM().extractAll();

  const partsData = 
  plasticExportData.map(({ valuesObj, formulasObj, notesObj }) => {
    const {
      orderId,
      model,
      color,
    } = valuesObj;

    return prepare({
      orderId,
      model,
      color,
      partType: getPartType(valuesObj),
      comments: [],
      state: getPartState(valuesObj),
    });
  });

  const commentsData = plasticExportData.map(({ valuesObj }) => {
    const { orderId, commentPlastic } = valuesObj;
    return prepare({
      type: 'order',
      orderId,
      text: commentPlastic,
      from: {
        name: 'Максим',
        account: 'autocrash.maksim@gmail.com',
        department: 'managers',
      },
      to: {
        name: '*',
        account: '*',
        department: 'plastic',
      },
      createdAt: getOrderCreateAt(orderId),
    });
  });

  const photosData = plasticExportData.map(({ valuesObj, formulasObj, notesObj }) => {
    const { orderId } = valuesObj;
    return prepare({
      type: 'order',
      orderId,
      text: commentPlastic,
      to: {
        name: '*',
        account: '*',
        department: 'plastic',
      },
      from: {
        name: 'Максим',
        account: 'autocrash.maksim@gmail.com',
        department: 'managers',
      },
    });
  });

  // eslint-disable-next-line no-undef
  new Parts().updateSheet(partsData);
};
