import React from 'react';
import { Account, NetworkType } from 'symbol-sdk';

export default function SymbolSDKOnServer() {
    const account = Account.generateNewAccount(NetworkType.TEST_NET);
    console.log(`SymbolSDKOnserver: ${account.address.plain()}`);

    return <div>
        <dl className="ml-4">
            <dt className="underline">Address:</dt>
            <dd>{ account.address.plain() }</dd>

            <dt className="underline">Public Key:</dt>
            <dd>{ account.publicKey }</dd>
        </dl>
    </div>
}