import { CryptoModel } from './Crypto.interface';

export interface CryptoCurrencies {
  loading: boolean;
  error: boolean;
  cryptos: ReadonlyArray<CryptoModel>;
}
