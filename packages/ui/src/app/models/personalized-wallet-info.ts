import { WalletInfo } from '@utxo-global/tonconnect-sdk';

export type PersonalizedWalletInfo = WalletInfo & {
    isPreferred?: boolean;
};
