# User data

One of the most important novelties of Third Storage is that it values user's data privacy and ownership. Each user's data is classified into two types - (1) private data and (2) public data.

![userdata](https://cdn.discordapp.com/attachments/1030935403177459732/1033896891588558948/Frame_9.png)

**Public data :** Public data can be accessed by everyone including the developer and other users.

**Private data :** Private data is self-soverign and self-custodial to the user and no one except the user can access it. The private data is encrypted and access controlled using Lit protocol. In order to retrive the private data, the user would be required to sign a message.

### Saving public data

```js
thirdstorage.user.public.set("key","value");
```

### Retrieving public data

```js
thirdstorage.user.public.get("key");
```

### Saving private data

```js
thirdstorage.user.private.set("key","value");
```

### Retrieving public data

```js
thirdstorage.user.private.get("key");
```

## Architectural overview of private data

Private data is self-custodial and no one except the owner of a particular wallet can access this information which also includes 'Third Storage'. Yes, you heard it right - even we can not access your private information because the quantum-proof access control layer would not allow us to access your end-to-end encrypted private data. You can also opt to use your own access control layer with your prefered cryptographic choices.

## Why is self-custodialness of user data important?

Imagine a scenario where one of the websites that hold your user data underwent a data breach. Typically, in web2 applications - the data is not self-custodial and hence, the hacker has access to all your information. With critical information like passwords, the hacker can compromise your accounts in other websites if you used a common password.

## What happens in the client and server?

The access control delegate is a part of the client. All the information passed to the server is shared after the data passes through the access control layer. Hence, the server operates with zero-knowledge. In the future, we are also considering to use rollups to verify the commits and state updates in the indexers. This way, the server can validate commits and state hashes even without a blockchain which computation costlier.

## ZKP and verifiability in data

This storage does not use ZKP at the moment. However, data can be verified with the private publishing key provided by IPNS. Introducing ZKP in Third Storage will be a game changer and we are rapidly working on shipping it.