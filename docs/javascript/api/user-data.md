# User data

One of the most important novelties of Third Storage is that it values user's data privacy and ownership. Each user's data is classified into two types - (1) private data and (2) public data.

**Public data :** Public data can be accessed by everyone including the developer and other users.

**Private data :** Private data is self-soverign to the user and no one except the user can access it. The private data is encrypted and access controlled using Lit protocol. In order to retrive the private data, the user would be required to sign a message.

### Saving public data

```js
thirdstorage.user.public.set("key","value");
```

### Retrieving public data

```js
thirdstorage.user.public.get("key","value");
```

### Saving private data

```js
thirdstorage.user.private.set("key","value");
```

### Retrieving public data

```js
thirdstorage.user.private.get("key","value");
```