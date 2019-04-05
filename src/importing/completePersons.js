import omit from 'lodash/omit';

const pure = obj => omit(obj, 'airbagAlias', 'acceptanceAlias');

const getPerson = (indx, { airbagAlias, acceptanceAlias }) => {
  if (airbagAlias !== undefined) return pure(indx.get('airbagAlias', airbagAlias));
  if (acceptanceAlias !== undefined) return pure(indx.get('acceptanceAlias', acceptanceAlias));
  return {};
};

export const fillPerson = indx => item => ({ ...item, person: getPerson(indx, item.person) });

export default (data, { personIndex }) => data.map(fillPerson(personIndex));
