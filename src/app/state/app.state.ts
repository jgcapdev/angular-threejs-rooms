import { CryptoCurrencies } from '../core/models/cryptos.state';
import { MsgModel } from '../core/models/Msg.interface';



export interface AppState {
  cryptos: CryptoCurrencies;
  msg: MsgModel;
}
