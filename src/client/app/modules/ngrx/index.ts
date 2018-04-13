// libs
import { Observable } from 'rxjs/Observable';
// import { combineLatest } from 'rxjs/observable/combineLatest';
import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';


/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers } from '@ngrx/store';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromMultilingual from '../i18n/index';
import * as fromSample from '../sample/index';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface IAppState {
  i18n: fromMultilingual.IMultilingualState;
  sample: fromSample.ISampleState;
}

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
export const reducers: ActionReducerMap<IAppState> = {
  i18n: fromMultilingual.reducer,
  sample: fromSample.reducer
};


export const getMultilingualState = createFeatureSelector<IAppState>('i18n');
export const getNameListState = createFeatureSelector<IAppState>('sample');

export const getMultilingualEntitiesState = createSelector(
  getMultilingualState,
  state => state.i18n
);

export const getNameListEntitiesState = createSelector(
  getNameListState,
  state => state.sample
);


export const getLang = createSelector(getMultilingualEntitiesState, fromMultilingual.getLang);
export const getNames = createSelector(getNameListEntitiesState, fromSample.getNames);
