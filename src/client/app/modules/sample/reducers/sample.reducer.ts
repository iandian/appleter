import { ISampleState, sampleInitialState } from '../states/index';
import * as NameList from '../actions/index';

export function reducer(
  state: ISampleState = sampleInitialState,
  // could support multiple state actions via union type here
  // ie: NameList.Actions | Other.Actions
  // the seed's example just has one set of actions: NameList.Actions
  action: NameList.NameListActionsUnion
): ISampleState {
  switch (action.type) {
    case NameList.NameListActionTypes.Initialized:
      return (<any>Object).assign({}, state, {
        names: action.payload
      });

    case NameList.NameListActionTypes.Name_added:
      return (<any>Object).assign({}, state, {
        names: [...state.names, action.payload]
      });

    default:
      return state;
  }
}
