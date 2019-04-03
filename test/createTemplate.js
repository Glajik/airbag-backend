// eslint-disable-next-line import/prefer-default-export
export const createTemplate = SheetClass => new SheetClass()
  .fields.reduce((acc, fieldName) => ({ ...acc, [fieldName]: '' }), {});
