// libs
import { Action } from '@ngrx/store';



export enum MultilingualActionTypes {
  Change = '[Multilingual] Change',
  Lang_changed = '[Multilingual] Lang Changed',
  Lang_unsupported = '[Multilingual] Lang Unsupported',
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class ChangeAction implements Action {
  readonly type = MultilingualActionTypes.Change;

  constructor(public payload: string) { }
}

export class LangChangedAction implements Action {
  readonly type = MultilingualActionTypes.Lang_changed;

  constructor(public payload: string) { }
}

export class LangUnsupportedAction implements Action {
  readonly type = MultilingualActionTypes.Lang_unsupported;

  constructor(public payload: string) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type MultilingualActionsUnion
  = ChangeAction
  | LangChangedAction
  | LangUnsupportedAction;
