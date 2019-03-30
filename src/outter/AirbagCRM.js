import { SheetWrapper } from '@glajik/sheet-wrapper';

// AirbagCRM
const url = 'https://docs.google.com/spreadsheets/d/1O4DWoYwO5JuXXwSgbcOj9I1s6L6d_DigHi_GxRXIhiw/edit';

const options = {
  sheetName: 'Реестр',
  numHeaders: 2,
  fields: [
    'selected',
    'id',
    'start',
    'finish',
    'status',
    'orderCardLink',
    'payed',
    'client',
    'name',
    'phone',
    'city',
    'contract',
    'category',
    'model',
    'delivery_prepaid',
    'summUah',
    'summUsd',
    'prepaid',
    'oneTimeDiscount',
    'paymentType',
    'manager',
    'delivery_service',
    'delivery_incomingInvoice',
    'delivery_outcomingInvoice',
    'delivery_sendDate',
    'master',
    'masterCostOfWork',
    'commentPads',
    'commentPlastic',
    'orderCardUrl',
    'connectors',
    'mount_custom',
    'belt_zero',
    'belt_single',
    'belt_double',
    'belt_pretensioner',
    'belt_driver',
    'belt_cleat',
    'belt_live',
    'belt_stripCustom',
    'belt_minus',
    'seat_small',
    'seat_large',
    'seat_custom',
    'seat_headrest',
    'seat_bag',
    'curtains_small',
    'curtains_large',
    'curtains_largePlus',
    'curtains_double',
    'curtains_bag',
    'curtains_repair',
    'curtains_dummy',
    'wheel_single',
    'wheel_double',
    'wheel_additional',
    'wheel_cover',
    'wheel_coverRef',
    'wheel_coverRefSkin',
    'wheel_coverCustom',
    'wheel_byColor',
    'wheel_byColorRef',
    'wheel_logo',
    'wheel_bag',
    'wheel_minus',
    'passenger_small',
    'passenger_large',
    'passenger_onlay1500',
    'passenger_onlay2000',
    'passenger_additional',
    'passenger_bag',
    'passenger_minus',
    'knees_noPlastic',
    'knees_small',
    'knees_large',
    'knees_smallFrame',
    'knees_largeFrame',
    'knees_byColor',
    'knees_cover',
    'knees_coverRef',
    'knees_bag',
    'knees_minus',
    'roof_noHatch',
    'roof_withHatch',
    'roof_custom',
    'block_simple',
    'block_complex',
    'block_custom',
    'torpedo_standard',
    'torpedo_custom',
    'torpedo_onlayCustom',
  ],
};

export default class AirbagCRM extends SheetWrapper {
  constructor() {
    super(options);
    this.url = url;
  }

  get spreadsheet() {
    // eslint-disable-next-line no-undef
    return SpreadsheetApp.openByUrl(this.url);
  }

  get formulas() {
    return this.spreadsheet.getDataRange().getFormulas();
  }

  get notes() {
    return this.sheet.getDataRange().getNotes();
  }

  extractAll() {
    const { values, formulas, notes } = this;
    return values.map((rowValues, index) => ({
      valuesObj: super.toRowData(rowValues),
      formulasObj: super.toRowData(formulas[index]),
      notesObj: super.toRowData(notes[index]),
    })).slice(this.numHeaders); // remove header
  }
}
