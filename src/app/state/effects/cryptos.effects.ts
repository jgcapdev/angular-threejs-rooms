import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, throwError } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { CryptoService } from 'src/app/services/crypto.service';

@Injectable()
export class CryptosEffects {
  loadCryptos$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Crypto List] Load cryptos'),
      mergeMap(() =>
        this.cryptoService.getMarkets().pipe(
          map((cryptos: any) => ({
            type: '[Crypto List] Loaded cryptos success',
            cryptos: cryptos,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private cryptoService: CryptoService
  ) {}
}
