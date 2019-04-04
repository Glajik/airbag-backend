import { schema } from 'normalizr';
import getUuid from 'uuid/v4';

const extractText = regex => (text) => {
  const result = regex.exec(text);
  if (!result) return text;
  if (result.length < 2) return text;
  const [, extracted] = result;
  return extracted;
};
const vocab = 'Отправил, Отправлен, Деталь вернул, Подготовил к отправке, Принял цех, Принял'
  .split(',')
  .map(v => v.trim())
  .join(':? ?\n|');

const nameRegex = new RegExp(`^(?<=${vocab}:? ?\n)(.+)$`, 'gm');
const extractName = extractText(nameRegex);

const extractLink = extractText(/^(?:=ГИПЕРССЫЛКА\( *")(https:\/\/drive\.google\.com\/drive\/.+)(?:" *; *".+" *\))$/g);

const processStrategy = (type, photoProp, dateProp) => (entity) => {
  const {
    uuid: partUuid, valuesObj, formulasObj, notesObj,
  } = entity;

  const linkFormula = formulasObj[photoProp];
  const linkComment = notesObj[dateProp];

  return {
    uuid: getUuid(),
    type,
    partUuid,
    comment: notesObj[photoProp],
    url: extractLink(linkFormula),
    createdAt: valuesObj[dateProp],
    person: {
      name: extractName(linkComment),
    },
  };
};

export const before = new schema.Entity('before', {}, {
  idAttribute: ({ uuid }) => `${uuid}:before`,
  processStrategy: processStrategy('before', 'sendLinkToPhoto', 'sentToProductionDate'),
});

export const after = new schema.Entity('after', {}, {
  idAttribute: ({ uuid }) => `${uuid}:after`,
  processStrategy: processStrategy('after', 'returnLinkToPhoto', 'returnDate'),
});
