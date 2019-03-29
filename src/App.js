import * as ImportingApp from './ImportingApp';
import * as ServiceApp from './ServiceApp';
import * as EventHandlingApp from './EventHandlingApp';

// eslint-disable-next-line import/prefer-default-export
export const { doImport } = ImportingApp;
export const { uuidFillMissed } = ServiceApp;
export const { onEdit } = EventHandlingApp;
