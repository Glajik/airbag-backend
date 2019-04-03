import getUuid from 'uuid/v4';
import isEmpty from 'lodash/isEmpty';

const extractText = regex => (text) => {
  const result = regex.exec(text);
  if (!result) return text;
  if (result.length < 2) return text;
  const [, extracted] = result;
  return extracted;
};
const vocab = 'Отправил, Отправлен, Деталь вернул, Подготовил к отправке, Принял цех, Принял'
  .split(',')
  .join(':? ?\n|');

// eslint-disable-next-line max-len
// /^(?<=Отправил:\n|Отправлен:\n|Деталь вернул:\n|Подготовил к отправке:\n|Принял цех:\n|Принял:\n)(.+)$/gm
const nameRegex = new RegExp(`^(?<=${vocab}:? ?\n)(.+)$`, 'gm');
const extractName = extractText(nameRegex);

const extractLink = extractText(/^(?:=ГИПЕРССЫЛКА\( *")(https:\/\/drive\.google\.com\/drive\/.+)(?:" *; *".+" *\))$/g);


const getPhoto = (photoField, dateField) => (acc, entry) => {
  const {
    uuid: partUuid, valuesObj, formulasObj, notesObj,
  } = entry;

  const { [photoField]: formula } = formulasObj;
  const { [photoField]: comment } = notesObj;
  if (isEmpty(formula)) return acc;

  const url = extractLink(formula);
  const { [dateField]: createdAt } = valuesObj;
  const { [dateField]: note } = notesObj;
  const name = extractName(note);

  const person = { name };
  return [...acc, {
    uuid: getUuid(), partUuid, comment, url, createdAt, person,
  }];
};

export default data => [
  ...data.reduce(getPhoto('sendLinkToPhoto', 'sentToProductionDate'), []),
  ...data.reduce(getPhoto('returnLinkToPhoto', 'returnDate'), []),
];
