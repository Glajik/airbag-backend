import { fillPartType } from './completePartTypes';


const getPart = (entry) => {
  const { uuid, valuesObj } = entry;

  const {
    orderId, model, color, partName,
  } = valuesObj;

  return {
    uuid,
    label: '', // complete by completePartTypes
    partType: { alias: partName }, // complete by completePartTypes
    state: {}, // complete by completeState
    orderId,
    model,
    color,
    appendedAt: { orderId, field: 'start' }, // fill from AirbagCRM 'start' field
  };
};

export default (data, { partTypeIndex }) => data
  .map(getPart)
  .map(fillPartType(partTypeIndex));
