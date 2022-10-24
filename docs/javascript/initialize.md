# Initialization

After installing the package, it's time to import the package and initialize the ThirdStorageClient() it in the root file of your application.

### Import the package

In the root file of your application i.e, `index.js` in ReactJS - import the ThirdStorageClient() from the package by :

```js
import ThirdStorage from "@thirdstorage/sdk";
```

### Initialize ThirdStorageClient()

Initialize the `ThirdStorageClient()` in the root function which wraps all the components of your application :

```js
  const thirdStorageClient = new ThirdStorage(
    //Replace the ThirdStorage Server URL with your own
    "http://localhost:3000/api/projects/xxxxxxx"
  );
```

For projects using [Third Storage Localhost](https://thirdstorage.com/localhost), your server URL will be of the form `http://localhost:3000/api/projects/xxxxxxx` and ou will be required to host Third Storage on your local machine. Where as for [Third Storage Cloud](https://thirdstorage.com/cloud), it will be of the form `https://cloud.thirdstorage.com/api/projects/xxxxxxx` and is pre-hosted.