import { fillPartType } from './completePartTypes';
import { fillState } from './completeStates';

const getStartDate = (indx, { orderId }) => {
  const { start } = indx.get('id', orderId);
  if (!start) return '';
  try {
    return new Date(start);
  } catch (error) {
    return '';
  }
};

const fillAppendedAt = indx => item => ({ ...item, appendedAt: getStartDate(indx, item) });

const getPart = (entry) => {
  const { uuid, valuesObj } = entry;

  const {
    orderId, model, color, partName,
  } = valuesObj;

  return {
    uuid,
    label: '',
    partType: { alias: partName },
    state: {},
    orderId,
    model,
    color,
    appendedAt: '',
  };
};

export default (data, { partTypeIndex, stateIndex, airbagCrmIndex }) => data
  .map(getPart)
  .map(fillPartType(partTypeIndex))
  .map(fillState(stateIndex))
  .map(fillAppendedAt(airbagCrmIndex));
