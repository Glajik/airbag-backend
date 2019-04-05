export const getLocation = (indx, { label, name }) => {
  if (label !== undefined) return indx.get('label', label);
  if (name !== undefined) return indx.get('name', name);
  return {};
};

/**
 * match label in location to locationLabel in person
 * @returns item with full filled 'location' property
 * @param {*} indx Index class instance
 */
// eslint-disable-next-line max-len
export const fillLocation = indx => item => ({ ...item, location: getLocation(indx, item.location) });

export default (data, { locationIndex }) => data.map(fillLocation(locationIndex));
