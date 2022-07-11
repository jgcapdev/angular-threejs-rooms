import { createAction, props } from '@ngrx/store';
import { CryptoModel } from 'src/app/core/models/Crypto.interface';

export const loadCryptos = createAction('[Crypto List] Load cryptos');

export const loadedCryptos = createAction(
  '[Crypto List] Loaded cryptos success',
  props<{ cryptos: CryptoModel[] }>()
);

export const loadedCryptoError = createAction('[Crypto List] Loaded error');
