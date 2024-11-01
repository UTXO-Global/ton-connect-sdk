import {
    WalletInfoBase,
    WalletInfoInjectable,
    WalletInfoRemote
} from '@utxo-global/tonconnect-sdk';

export type UIWallet = WalletInfoBase &
    (Omit<WalletInfoInjectable, 'injected' | 'embedded'> | WalletInfoRemote);
