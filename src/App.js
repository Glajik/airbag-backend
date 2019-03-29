// import { ActionCreator, StoreCreator, combineReducers, compose, Action } from 'redux';
// import { createAction, createActions, combineActions, handleAction } from 'redux-actions';

import * as ImportingApp from './ImportingApp';
import * as ServiceApp from './ServiceApp';
import * as EventHandlingApp from './EventHandlingApp';
import * as IntegrationTestsApp from './IntegrationTestsApp';

// eslint-disable-next-line import/prefer-default-export
export const { doImport } = ImportingApp;
export const { uuidFillMissed } = ServiceApp;
export const { onEdit } = EventHandlingApp;
export const { doAllTests } = IntegrationTestsApp;
