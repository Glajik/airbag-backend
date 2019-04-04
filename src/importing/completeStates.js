import omit from 'lodash/omit';

export const getState = (indx, partUuid) => omit(indx.get('partUuid', partUuid), 'partUuid');

export const fillState = indx => item => ({ ...item, state: getState(indx, item.uuid) });

export default (data, { stateIndex }) => data.map(fillState(stateIndex));
