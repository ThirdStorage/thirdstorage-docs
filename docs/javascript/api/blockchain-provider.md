# Blockchain provider

It is possible to use any web3 provider of your choice with Third Storage. However, we integrated [wagmi](https://wagmi.sh/) as one of the dependencies of our SDK - hence, you can easily use various hooks and functions supported by Ethereum.

### Importing the hooks from blockchain provider

```js
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
```

### Using the hooks

```js
function Profile() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  if (isConnected)
    return (
      <div>
        Connected to {address}
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    )
  return <button onClick={() => connect()}>Connect Wallet</button>
}
```

You can view the list of available hooks in [wagmi's documentation](https://wagmi.sh/docs/hooks/useAccount).