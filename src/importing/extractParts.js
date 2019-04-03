export default data => data.map(({ uuid, valuesObj }) => {
  const {
    orderId,
    model,
    color,
    partName,
  } = valuesObj;

  return {
    uuid,
    type: { partName }, // complete from partTypes
    state: {}, // complete by extractPartState
    orderId,
    model,
    color,
    appendedAt: { orderId, field: 'start' }, // fill from AirbagCRM 'start' field
  };
});
