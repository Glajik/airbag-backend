
const extractText = (regex) => {
  const memo = {};
  return (text) => {
    if (memo[text]) return memo[text];
    const result = regex.exec(text);
    if (!result || result.length < 2) return text;
    const [, extracted] = result;
    memo[text] = extracted;
    return extracted;
  };
};


const vocab = 'Отправил, Отправлен, Деталь вернул, Подготовил к отправке, Принял цех, Принял'
  .split(',')
  .map(v => v.trim())
  .join(':? ?\n|');

const acceptanceAliasRegex = new RegExp(`^(?<=${vocab}:? ?\n)(.+)$`, 'm');

export const extractAcceptanceAlias = extractText(acceptanceAliasRegex);

export const extractLink = extractText(/^(?:=ГИПЕРССЫЛКА\( *")(https:\/\/drive\.google\.com\/drive\/.+)(?:" *; *".+" *\))$/g);

export const makeMap = (coll, key) => coll.reduce((acc, item) => {
  const idKey = item[key];
  if (idKey === undefined) return acc;
  acc[idKey] = item;
  return acc;
}, {});

export const fill = fn => indx => item => ({ ...item, ...fn(indx, item) });

export const find = (path, obj) => {
  const [key] = Object.keys(path);
  if (path[key] === '*') return { key, value: obj[key] } || {};
  if (path[key] instanceof Object) return find(path[key], obj[key]);
  return {};
};

export const get = path => (indx, item) => {
  const { key, value } = find(path, item);
  return { ...item, [key]: indx.get(key, value) };
};
