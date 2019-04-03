import OutterSuper from './OutterSuper';

// Приемка Пластик
const url = 'https://docs.google.com/spreadsheets/d/10jo0P_nyUju2mjgydSo1PVXcAQc1DkZQjs9K8-47W2Q/edit';

const options = {
  sheetName: 'Цех пластика',
  numHeaders: 1,
  fields: [
    'orderId',
    'partName',
    'model',
    'color',
    'issueDate',
    'sentToProductionStatus',
    'sendLinkToPhoto',
    'sentToProductionDate',
    'acceptedStatus',
    'acceptedDate',
    'readyStatus',
    'readyDate',
    'returnStatus',
    'returnLinkToPhoto',
    'returnDate',
    'reward',
    'cost',
    'penalty',
    'commentPlastic',
  ],
};

export default class AcceptancePlastic extends OutterSuper {
  constructor() {
    super(options, url);
  }
}
