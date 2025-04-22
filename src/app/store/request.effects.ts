import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as RequestActions from './request.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { BranchRequestService } from '../services/BranchRequestService';

@Injectable()
export class RequestEffects {
  loadDetails$: any;
  constructor(
    private actions$: Actions,
    private branchService: BranchRequestService
  ) {

    this.loadDetails$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(RequestActions.loadRequestDetails),
        mergeMap((action) =>
          this.branchService.getRequestDetails(action.requestId).pipe(
            map((data) => RequestActions.loadRequestDetailsSuccess({ data })),
            catchError((error) =>
              of(RequestActions.loadRequestDetailsFailure({ error }))
            )
          )
        )
      );
    });
  }

}
