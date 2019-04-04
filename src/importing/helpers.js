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

const personAliasRegex = new RegExp(`^(?<=${vocab}:? ?\n)(.+)$`, 'gm');

export const extractPersonAlias = extractText(personAliasRegex);

export const extractLink = extractText(/^(?:=ГИПЕРССЫЛКА\( *")(https:\/\/drive\.google\.com\/drive\/.+)(?:" *; *".+" *\))$/g);

export const makeMap = (coll, key) => coll.reduce((acc, item) => {
  const idKey = item[key];
  acc[idKey] = item;
  return acc;
}, {});
