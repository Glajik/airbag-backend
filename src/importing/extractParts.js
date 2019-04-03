export default data => data.map(({ uuid, valuesObj }) => {
  const {
    orderId,
    model,
    color,
    partName,
  } = valuesObj;

  return {
    uuid,
    label: partName, // will be replaced with data from reference
    orderId,
    model,
    color,
    // appendedAt: new Date(), // fill from AirbagCRM 'start' field
  };
});
