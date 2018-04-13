import { Action } from '@ngrx/store';

// Category to uniquely identify the actions
export const CATEGORY: string = 'NameList';

export enum NameListActionTypes {
  Init = '[NameList] Init',
  Initialized = '[NameList] Initialized',
  Init_failed = '[NameList] Init Failed',
  Add = '[NameList] Add',
  Name_added = '[NameList] Name Added',
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class InitAction implements Action {
  readonly type = NameListActionTypes.Init;
  payload: string = null;
}

export class InitializedAction implements Action {
  readonly type = NameListActionTypes.Initialized;

  constructor(public payload: Array<string>) { }
}

export class InitFailedAction implements Action {
  readonly type = NameListActionTypes.Init_failed;
  payload: string = null;
}

export class AddAction implements Action {
  readonly type = NameListActionTypes.Add;

  constructor(public payload: string) { }
}

export class NameAddedAction implements Action {
  readonly type = NameListActionTypes.Name_added;

  constructor(public payload: string) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type NameListActionsUnion
  = InitAction
  | InitializedAction
  | InitFailedAction
  | AddAction
  | NameAddedAction;
