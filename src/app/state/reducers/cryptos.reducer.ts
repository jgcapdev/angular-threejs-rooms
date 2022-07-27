import { state } from '@angular/animations';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CryptoModel } from 'src/app/core/models/Crypto.interface';
import { MsgModel } from 'src/app/core/models/Msg.interface';

import {
  enterbox2,
  enterbox3,
  enterSofa,
  exitbox,
  exitSOFA,
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
export const initialState1: MsgModel = {
  msg: ''
}


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


export const msgReducer = createReducer(
  initialState1,
  on(enterbox2,(state, {msg}) => {
  return{...state, msg:msg 
  };
   }),
   on(enterbox3,(state, {msg}) => {
    return{...state, msg:msg 
    }
  }),
  on(exitbox,(state, {msg}) => {
    return{...state, msg:msg 
    }
  }),
  on(enterSofa,(state, {msg}) => {
    return{...state, msg:msg 
    }
  }),
  on(exitSOFA,(state, {msg}) => {
    return{...state, msg:msg 
    }
  })
   
);