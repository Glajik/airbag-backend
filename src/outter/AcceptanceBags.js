import OutterSuper from './OutterSuper';

// Приемка Мешки
const url = 'https://docs.google.com/spreadsheets/d/1hPhnk146eikavhiSupiur4DXL9XFzQk8cF8WWABojAs/edit';

const options = {
  sheetName: 'Мешки',
  numHeaders: 1,
  fields: [
    'orderId',
    'partName', // имя запчасти
    'model', // скрыт
    'color', // скрыт
    'issueDate',
    'sentToProductionStatus',
    'sentToProductionDate',
    'acceptedStatus',
    'acceptedDate',
    'readyStatus',
    'readyDate',
    'returnStatus',
    'returnDate',
    'reward',
    'cost',
    'penalty',
  ],
};

export default class AcceptanceBags extends OutterSuper {
  constructor() {
    super(options, url);
  }
}
