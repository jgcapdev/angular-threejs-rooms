import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CryptoModel } from 'src/app/core/models/Crypto.interface';
import {
  loadCryptos,
  loadedCryptoError,
  loadedCryptos,
} from '../actions/crypto.actions';

export interface CryptoState extends EntityState<CryptoModel> {
  selectCryptoName: string | null;
}

export function selectCryptoName(c: CryptoModel): string {
  return c.name;
}

export const cryptoAdapter = createEntityAdapter<CryptoModel>({
  selectId: selectCryptoName,
});

export const initialState: CryptoState = cryptoAdapter.getInitialState({
  selectCryptoName: null,
});

export const cryptosReducer = createReducer(
  initialState,
  on(loadCryptos, (state) => {
    return { ...state, loading: true, error: false };
  }),
  on(loadedCryptos, (state, { cryptos }) => {
    return cryptoAdapter.setAll(cryptos, state);
  }),
  on(loadedCryptoError, (state) => {
    return { ...state, loading: false, error: true };
  })
);
