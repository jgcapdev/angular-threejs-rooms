import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CryptoCurrencies } from 'src/app/core/models/cryptos.state';
import { MsgModel } from 'src/app/core/models/Msg.interface';


import { AppState } from '../app.state';
import { cryptoAdapter, CryptoState } from '../reducers/cryptos.reducer';

export const getCryptosState = createFeatureSelector<CryptoState>('cryptos');
export const selectCryptosFeature = (state: AppState) => state.cryptos;
export const selectMsgFeature = (state: AppState) => state.msg;

export const cryptosSelectors = cryptoAdapter.getSelectors();

export const selectListCryptos = createSelector(
  getCryptosState,
  cryptosSelectors.selectAll
);

export const selectLoading = createSelector(
  selectCryptosFeature,
  (state: CryptoCurrencies) => {
    return state.loading;
  }
);
export const selectMsg = createSelector(
  selectMsgFeature,
  (state: MsgModel) => {
    return state.msg;
  }
);

export const selectError = createSelector(
  selectCryptosFeature,
  (state: CryptoCurrencies) => {
    return state.error;
  }
);
