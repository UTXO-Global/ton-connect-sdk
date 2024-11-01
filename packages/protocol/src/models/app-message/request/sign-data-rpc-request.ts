export interface SignDataRpcRequest {
    method: 'signData';
    params: [{ address: string; message: string }];
    id: string;
}
