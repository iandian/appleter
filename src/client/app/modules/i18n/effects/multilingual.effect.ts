// angular
import { Injectable, Inject } from '@angular/core';

// libs
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { includes, map as lodashmap } from 'lodash';
import { asyncScheduler, empty, Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  map,
  skip,
  switchMap,
  takeUntil,
} from 'rxjs/operators';

// module
import { MultilingualService, Languages } from '../services/multilingual.service';
import * as multilingual from '../actions/multilingual.action';

@Injectable()
export class MultilingualEffects {

  @Effect() change$: Observable<Action> = this.actions$.pipe(
    ofType(multilingual.MultilingualActionTypes.Change),
    map(action => {
      let lang = action.payload;
      if (includes(lodashmap(this.languages, 'code'), lang)) {
        let langChangedAction = new multilingual.LangChangedAction(lang);
        // track analytics
        this.multilangService.track(langChangedAction.type, { label: langChangedAction.payload });
        // change state
        return new multilingual.LangChangedAction(lang);
      } else {
        // not supported (here for example)
        return new multilingual.LangUnsupportedAction(lang);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private multilangService: MultilingualService,
    @Inject(Languages) private languages
  ) { }
}
