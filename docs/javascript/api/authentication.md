# Authentication

With Third Storage SDK, you can easily authenticate your users with their wallets. Third Storage uses [SIWE](https://github.com/spruceid/siwe) for enabling the most secure server side authentication. Third Storage facilitates authentication with multiple wallet providers like Metamask, WalletConnect etc.,


![userdata](https://cdn.discordapp.com/attachments/1030935403177459732/1032372259656048711/auth.png)

### User sign in

The users will have to sign a message in order to verify the ownership of their wallet. You can setup wallet sign in with the following command,

```js
thirdStorageClient.signIn(address, chainId, signMessageAsync))
```

However, you will be required to pass some parameters like `address`, `chainId` and `signMessageAsync` from the WAGMI library. Check out the example on the bottom of this page for understanding better.

### User sign out

```js
thirdStorageClient.signOut();
```

### Example implementation

Third Storage uses WAGMI library to enable seamless sign in on multiple EVM compaitible chains. Here's a demonstration on setting up all the required functions from WAGMI and Third Storage,

```js
// Import necessary modules
import ThirdStorage from "@thirdstorage/sdk";
import { useAccount, useConnect, useNetwork, useSignMessage } from "wagmi";
import { useEffect, useState } from "react";

function App() {
  // Initializing the client
  const thirdStorageClient = new ThirdStorage(
    //Replace the ThirdStorage Server URL
    "http://localhost:3000/api/projects/ttmcivawyl"
  );

  // State variables for handling the auth state
  const [isInitializing, setIsInitializing] = useState(true);
  const [fetchedAddress, setFetchedAddress] = useState(false);
  const [data, setData] = useState("");
  const [file, setFile] = useState(null);
  const [key, setKey] = useState("");

  // Wagmi hooks
  const { connectAsync, connectors, isLoading, pendingConnector } = useConnect();
  const { address, isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { chain: activeChain } = useNetwork();

  // Sign in function
  const signIn = async (a = null, chainId = null) => {
    try {
      let res = {};
      if (!isConnected) {
        res = await connectAsync({
          connector: connectors[0],
        });

        a = res.account;
        chainId = res.chain?.id;
      } else {
        a = address;
        chainId = activeChain?.id;
        console.log(address, chainId);
        if (!address || !chainId) return;
      }

      setIsInitializing(true);
      if (await thirdStorageClient.signIn(a, chainId, signMessageAsync)) {
        alert("Logged in!");
        window.location.href = window.location.href;
      }
    } catch (error) {
      alert(error.message);
    }
  };

    // Sign out function
  const handleLogout = async () => {
    await thirdStorageClient.signOut();
    alert("Logged Out!");
    window.location.href = window.location.href;
  };

    // Handling auth state
  useEffect(() => {
    (async () => {
      if (!isLoading && isInitializing && !isConnected) {
        setIsInitializing(false);
      } else if (!isLoading && isConnected && isInitializing) {
        let a = await thirdStorageClient.signedInWallet();

        if (a) {
          setFetchedAddress(a);
        }
      }
    })();
  }, []);

}
```

If you are still not clear with the above code sample, dive into the [React example](https://github.com/ThirdStorage/react-example) to understand it better.