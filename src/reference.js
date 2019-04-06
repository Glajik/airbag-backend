import isEmpty from 'lodash/isEmpty';
import SheetWrapper from '@glajik/sheet-wrapper';

class ReferenceSuper extends SheetWrapper {
  onEdit(e) {
    // event data
    const { range } = e;

    const sheet = range.getSheet();
    const sheetName = sheet.getName();

    if (sheetName !== this.sheetName) return;

    const rowId = range.getRow();
    const columnId = range.getColumn();
    const rows = range.getNumRows();
    const columns = range.getNumColumns();

    const { oldValue } = e;
    const newValue = e.value;

    // ignore if range is edited
    const isRange = rows > 1 || columns > 1;
    if (isRange) return;

    // ignore if header is edited
    const isHeader = rowId <= this.numHeaders;
    if (isHeader) return;

    const isCellErased = typeof newValue === 'undefined' ? 'undefined' : typeof newValue === 'object' && newValue.oldValue && oldValue;
    const uuidColumnId = this.findColumnId('uuid');
    const isUuidColumn = uuidColumnId === columnId;
    // remove row
    if (isCellErased && isUuidColumn) {
      sheet.deleteRow(rowId);
      return;
    }

    if (isUuidColumn) {
      // TODO:
      // - find change uuid in all relative data
      // - maybe it's concern to any other relative data with same id
      return;
    }

    // append uuid, if empty
    const uuidRange = sheet.getRange(rowId, uuidColumnId);
    const uuid = uuidRange.getValue();
    if (isEmpty(uuid)) {
      // eslint-disable-next-line no-undef
      uuidRange.setValue(Utilities.getUuid());
    }
  }
}

export const partTypes = new ReferenceSuper({
  sheetName: 'partTypes',
  fields: 'uuid, class, name, label, acceptanceAlias, airbagField',
  numHeaders: 1,
});

export const locations = new ReferenceSuper({
  sheetName: 'locations',
  fields: 'uuid, name, label',
  numHeaders: 1,
});

export const persons = new ReferenceSuper({
  sheetName: 'persons',
  fields: 'uuid, name, account, airbagAlias, acceptanceAlias, locationLabel',
  numHeaders: 1,
});

export const operations = new ReferenceSuper({
  sheetName: 'operations',
  fields: 'uuid, locationLabel, name, label',
  numHeaders: 1,
});

export const statuses = new ReferenceSuper({
  sheetName: 'statuses',
  fields: 'uuid, locationLabel, name, label',
  numHeaders: 1,
});

export const prices = new ReferenceSuper({
  sheetName: 'prices',
  fields: 'uuid, partLabel, locationLabel, operationLabel, term, cost, penalty',
  numHeaders: 1,
});
