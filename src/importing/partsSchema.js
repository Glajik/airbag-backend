import { schema } from 'normalizr';

// eslint-disable-next-line import/prefer-default-export
export default new schema.Entity('parts', {}, {
  idAttribute: 'uuid',
  processStrategy: ({ uuid, valuesObj }) => {
    const {
      partName: label,
      orderId,
      model,
      color,
    } = valuesObj;

    return {
      uuid,
      label,
      orderId,
      model,
      color,
    };
  },
});
