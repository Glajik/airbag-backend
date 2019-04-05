import omit from 'lodash/omit';

const getPartType = (indx, { acceptanceAlias }) => indx.get('acceptanceAlias', acceptanceAlias);

export const fillPartType = indx => (item) => {
  const partType = getPartType(indx, item.partType);
  return {
    ...item,
    label: partType.label,
    partType: omit(partType, 'acceptanceAlias', 'airbagField'),
  };
};

export default (data, { partTypeIndex }) => data.map(fillPartType(partTypeIndex));
