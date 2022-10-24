# Database

Third Storage database is a data store for public data which is not associated with any user. Database is not ideal for storing private or user-dependent data as they do not have decentralized access controls or storage rules.

Different storage paradigms use different databases and storage mechanisms. For example, the demo paradigm uses 'Redis' as a caching layer and IPFS as the persistance layer. Redis provides in-memory perfomance while IPFS ensures persistance, redundancy and scalability. A mutant of redis and IPFS is used in the demo paradigm.

### Adding new data

```js
thirdstorage.database.set("key","value");
```

### Retriving new data

```js
thirdstorage.database.get("key");
```

## Multi-node scaling

In order to increase the data redundancy and availability, data can be sharded across multiple nodes. Redis supports sharding out of the box as a key:value datastore. Multi-node scaling is only available in Third Storage Cloud. More information about the same will be available [here](/scaling/sharded-scaling).