import { createAction, props } from '@ngrx/store';
import { CryptoModel } from 'src/app/core/models/Crypto.interface';

export const loadCryptos = createAction('[Crypto List] Load cryptos');

export const loadedCryptos = createAction(
  '[Crypto List] Loaded cryptos success',
  props<{ cryptos: CryptoModel[] }>()
);

export const loadedCryptoError = createAction('[Crypto List] Loaded error');

export const enterbox2 = createAction(
  '[Box2 Enter] Box2 success',
  props<{ msg: string }>()
);
export const enterbox3 = createAction(
  '[Box3 Enter] Box3 success',
  props<{ msg: string }>()
);
export const exitbox = createAction(
  '[Exit Box] BoxExit',
  props<{ msg: string }>()
);