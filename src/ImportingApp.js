/* eslint-disable */

import AcceptancePlastic from './outter/AcceptancePlastic';
import AcceptanceBags from './outter/AcceptanceBags';
import AirbagCRM from './outter/AirbagCRM';

import { parts, states, photos, comments, history } from './db';
import { partTypes, persons, statuses, locations } from './reference';
import Index from "./importing/Index";
import extractOrderComments from './importing/extractOrderComments';
import extractStates from './importing/extractStates';
import extractPhotos from './importing/extractPhotos';
import extractParts from './importing/extractParts';

const use = prop => ({ uuid, [prop]: data }) => ({ uuid, ...data });
const toRowsColl = data => data.map(item => ({ uuid: item.uuid, state: item }));

const loader = (sheetName) => {
  const files = DriveApp.getFilesByName(`${sheetName}.json`);
  if (!files.hasNext()) throw `No file ${sheetName}.json`;
  const file = files.next();
  const content = file.getAs('application/json');
  return JSON.parse(content);
};

// eslint-disable-next-line import/prefer-default-export
export const doImport = () => {
  // const plasticExportData = loader('Цех пластика');
  // const airbagCrmExportData = loader('Реестр');

  const plasticExportData = new AcceptancePlastic().limitTo(10).extractAll();
  // const bagsExportData = new AcceptanceBags().extractAll();
  const airbagCrmExportData = new AirbagCRM().limitTo(100).extractAll();

  const indexes = {
    personIndex: new Index(persons.dataColl),
    locationIndex: new Index(locations.dataColl),
    statusIndex: new Index(statuses.dataColl),
    partTypeIndex: new Index(partTypes.dataColl),
    airbagCrmIndex: new Index(airbagCrmExportData.map(use('valuesObj'))),
  };
  
  const plasticStates = extractStates(plasticExportData, indexes);
  states.updateSheet(toRowsColl(plasticStates));
  
  const newIndexes = {
    ...indexes,
    stateIndex: new Index(plasticStates),
  };
  
  const plasticParts = extractParts(plasticExportData, newIndexes);
  parts.updateSheet(toRowsColl(plasticParts));
  
  const photosData = extractPhotos(plasticExportData, indexes)
  photos.updateSheet(toRowsColl(photosData));
  
  const commentsData = extractOrderComments(airbagCrmExportData, indexes);
  comments.updateSheet(toRowsColl(commentsData));
};
