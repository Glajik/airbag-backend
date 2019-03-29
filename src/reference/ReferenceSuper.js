import isEmpty from 'lodash/isEmpty';
import { SheetWrapper } from '@airbag/sheet-wrapper';

export default class ReferenceSuper extends SheetWrapper {
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
