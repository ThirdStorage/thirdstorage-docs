# Initialization

After installing the package, it's time to import the package and initialize the ThirdStorageClient() it in the root file of your application.

### Import the package

In the root file of your application i.e, `index.js` in ReactJS - import the ThirdStorageClient() from the package by :

```js
import { ThirdStorageClient } from "thirdstorage";
```

### Initialize ThirdStorageClient()

Initialize the `ThirdStorageClient()` in the root function which wraps all the components of your application :

```js
const thirdstorage = await ThirdStorageClient.put(
  '<PROJECT_ID>',
  '<DB_SECRET_KEY>'
);
```