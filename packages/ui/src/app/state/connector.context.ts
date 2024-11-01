import { ITonConnect } from '@utxo-global/tonconnect-sdk';
import { createContext } from 'solid-js';

export const ConnectorContext = createContext<ITonConnect>();
