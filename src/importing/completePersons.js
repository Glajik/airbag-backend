import omit from 'lodash/omit';

const getPerson = (indx, { alias }) => omit(indx.get('alias', alias), 'alias');

export const fillPerson = indx => item => ({ ...item, person: getPerson(indx, item.person) });

export default (data, { personIndex }) => data.map(fillPerson(personIndex));
