/**
 * TODO:
 * - Use data from partTypes tab
 * @param {*} data rowObject data
 */
// eslint-disable-next-line import/prefer-default-export
export const getPartType = (data) => {
  const { partName } = data;
  return {
    // eslint-disable-next-line no-undef
    uuid: Utilities.getUuid(),
    class: 'wheel',
    name: partName,
    label: partName,
    airbagAlias: 'wheel_coverRef',
  };
};
