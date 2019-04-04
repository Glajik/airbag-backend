export default data => data.map(({ uuid, valuesObj }) => {
  const {
    orderId,
    model,
    color,
    partName,
  } = valuesObj;

  return {
    uuid,
    name: '', // complete by completePartTypes
    partType: { partName }, // complete by completePartTypes
    state: {}, // complete by completeState
    orderId,
    model,
    color,
    appendedAt: { orderId, field: 'start' }, // fill from AirbagCRM 'start' field
  };
});
