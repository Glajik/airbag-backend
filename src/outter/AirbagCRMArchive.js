import OutterSuper from './OutterSuper';

// AirbagCRMArchive
const url = 'https://docs.google.com/spreadsheets/d/1hTEi87CxijLCplgKVDlRw_q5QU4HUe4YIlQmWG7TKc0/edit';

const options = {
  sheetName: 'Архив',
  numHeaders: 2,
  fields: [
    'selected',
    'id',
    'start',
    'finish',
    'status',
    'orderCardUrl',
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
    'order_data_json',
  ],
};

export default class AirbagCRMArchive extends OutterSuper {
  constructor() {
    super(options, url);
  }
}
