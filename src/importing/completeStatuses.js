import omit from 'lodash/omit';

// use only on full filled person
export const getStatus = (indx, { name }) => omit(indx.get('name', name), 'locationLabel');

export const fillStatus = indx => item => ({ ...item, status: getStatus(indx, item.status) });

export default (data, { statusIndex }) => data.map(fillStatus(statusIndex));
