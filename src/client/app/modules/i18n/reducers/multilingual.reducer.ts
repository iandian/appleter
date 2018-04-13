// module
import { IMultilingualState, initialState } from '../states/multilingual.state';
import { MultilingualActionsUnion, MultilingualActionTypes } from '../actions/multilingual.action';

export function reducer(
    state: IMultilingualState = initialState,
    action: MultilingualActionsUnion
): IMultilingualState {
  switch (action.type) {
    case MultilingualActionTypes.Lang_changed:
      if (state.lang !== action.payload)
        return (<any>Object).assign({}, state, {
            lang: action.payload
          });

      return state;
    default:
      return state;
  }
}
