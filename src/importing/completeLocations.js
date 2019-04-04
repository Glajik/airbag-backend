export const getLocation = (indx, { locationLabel }) => indx.get('label', locationLabel);

/**
 * match label in location to locationLabel in person
 * @returns item with full filled 'location' property
 * @param {*} indx Index class instance
 */
export const fillLocation = indx => item => ({ ...item, location: getLocation(indx, item.person) });

export default (data, { locationIndex }) => data.map(fillLocation(locationIndex));
