# Storage

It is possible to save, modify and retrive files stored on Third Storage. With storage, you can opt the perpetual file storage provider of your choice. The best part is that Third Storage supports _IPNS_ configurations which provide a **mutable** filesystem for storing content-addressable files. CID revisions is possible with Third Storage and you can resolve the most latest CID added to an IPNS name.

Third Storage automatically indexes your IPFS CIDs and IPNS names in the database. You can view the list of your uploads and manage them in the web GUI.

### Uploading files to Filecoin and serving on IPFS

```js
thirdStorageClient.ipfs.set(key, file).then((res) => alert(res));
```

The response from the function will contain the IPFS CID which can be used for identifying the file. You can also view the list of files stored in the web dashboard.

### Retriving files from IPFS CID

```js
thirdStorageClient.ipfs.get(key).then((res) => alert(res));
```


### Uploading files to Filecoin and serving on IPNS with IPFS

![ipns](https://cdn.discordapp.com/attachments/1030935403177459732/1032377487709184071/storage.png)

```js
thirdStorageClient.ipns.set(key, file).then((res) => alert(res));
```

The response would contain the IPNS name and resolved CID of the uploaded file.

### Resolving IPNS

```js
thirdStorageClient.ipns.get(key).then((res) => alert(res))
```


Here, `name` denotes the IPNS name which can be updated multiple times. For example, if you wish to update a file with the IPNS name `abcde`, just pass the name along with the file blob in the `thirdstorage.ipns()` function.