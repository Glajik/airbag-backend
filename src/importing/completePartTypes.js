import omit from 'lodash/omit';

const getPartType = (indx, { alias }) => indx.get('alias', alias);

export const fillPartType = indx => (item) => {
  const partType = getPartType(indx, item.partType);
  return {
    ...item,
    label: partType.label,
    partType: omit(partType, 'alias', 'airbagAlias'),
  };
};

export default (data, { partTypeIndex }) => data.map(fillPartType(partTypeIndex));
