"use client";
import React from 'react';
import { Account, NetworkType } from 'symbol-sdk';

export default function SymbolSDKOnClient() {
    const [ isClient, setIsClient ] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, [])

    if (isClient) {
        const account = Account.generateNewAccount(NetworkType.TEST_NET);
        console.log(`SymbolSDKOnClient: ${account.address.plain()}`);

        return <div>
            <dl className="ml-4">
                <dt className="underline">Address:</dt>
                <dd>{ account.address.plain() }</dd>
    
                <dt className="underline">Public Key:</dt>
                <dd>{ account.publicKey }</dd>
            </dl>
        </div>;
    }

    return undefined;
}