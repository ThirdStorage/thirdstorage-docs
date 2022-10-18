# Database

Third Storage database is a data store for public data which is not associated with any user. Database is not ideal for storing private or user-dependent data as they do not have decentralized access controls or storage rules.

### Adding new data

```js
thirdstorage.database.set("key","value");
```

### Retriving new data

```js
thirdstorage.database.get("key","value");
```