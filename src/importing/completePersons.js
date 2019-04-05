import omit from 'lodash/omit';
import isEmpty from 'lodash/isEmpty';
// import find from 'lodash/find';
// { airbagAlias, acceptanceAlias }
const getPerson = (indx, entry) => {
  const get = (aliasKey) => {
    const { [aliasKey]: alias } = entry;
    if (alias === undefined) return false;
    const person = indx.get(aliasKey, alias);
    if (isEmpty(person)) return false;
    return omit(person, aliasKey);
  };
  return get('airbagAlias') || get('acceptanceAlias') || {};
};

export const fillPerson = indx => item => ({ ...item, person: getPerson(indx, item.person) });

export default (data, { personIndex }) => data.map(fillPerson(personIndex));
