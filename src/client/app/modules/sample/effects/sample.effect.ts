// angular
import { Injectable } from '@angular/core';

// libs
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

// module
import { NameListService } from '../services/name-list.service';
import { NameList } from '../actions/index';

@Injectable()
export class SampleEffects {

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect() init$: Observable<Action> = this.actions$.pipe(
    ofType(NameList.ActionTypes.INIT),
    startWith(new NameList.InitAction),
    switchMap(() => this.nameListService.getNames()),
    map(payload => {
      let names = payload;
      return new NameList.InitializedAction(names);
    }),
    // nothing reacting to failure at moment but you could if you want (here for example)
    catchError(err => of(new NameList.InitFailedAction()))
  );

  @Effect() add$: Observable<Action> = this.actions$.pipe(
    ofType(NameList.ActionTypes.ADD),
    map(action => {
      let name = action.payload;
      // analytics
      this.nameListService.track(NameList.ActionTypes.NAME_ADDED, { label: name });
      return new NameList.NameAddedAction(name);
    })
  );

  constructor(
    private actions$: Actions,
    private nameListService: NameListService
  ) { }
}
