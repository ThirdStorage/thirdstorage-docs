# Storage

It is possible to save, modify and retrive files stored on Third Storage. With storage, you can opt the perpetual file storage provider of your choice. The best part is that Third Storage supports _IPNS_ configurations which provide a **mutable** filesystem for storing content-addressable files. CID revisions is possible with Third Storage and you can resolve the most latest CID added to an IPNS name.

### Uploading files to Filecoin and serving on IPFS

```js
thirdstorage.ipfs(blob);
```

The response from the function will contain the IPFS CID which can be used for identifying the file. You can also view the list of files stored in the web dashboard.

### Uploading files to Filecoin and serving on IPNS with IPFS

```js
thirdstorage.ipns("name",blob);
```

Here, `name` denotes the IPNS name which can be updated multiple times. For example, if you wish to update a file with the IPNS name `abcde`, just pass the name along with the file blob in the `thirdstorage.ipns()` function.