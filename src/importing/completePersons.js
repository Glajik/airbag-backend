import omit from 'lodash/omit';

export const getPerson = personIndex => item => ({
  ...item,
  person: omit(personIndex.get('alias', item.person.alias), 'alias'),
});

export default (data, { personIndex }) => data.map(getPerson(personIndex));
