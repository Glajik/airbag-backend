import omit from 'lodash/omit';

const getStatus = (statusIndex, { name }) => omit(statusIndex.get('name', name), 'locationLabel');
const getPerson = (personIndex, { alias }) => omit(personIndex.get('alias', alias), 'alias');
const getLocation = (locationIndex, { locationLabel }) => locationIndex.get('label', locationLabel);

// eslint-disable-next-line import/prefer-default-export
export default (data, { locationIndex, personIndex, statusIndex }) => data
  .map((entry) => {
    const { status: statusDraft, person: personDraft } = entry;
    const person = getPerson(personIndex, personDraft);
    return {
      ...entry,
      location: getLocation(locationIndex, person),
      status: getStatus(statusIndex, statusDraft),
      person,
    };
  });
