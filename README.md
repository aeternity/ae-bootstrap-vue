# AE bootstrap-vue

---
description here...

---

__Before continuing make sure you update/install dependencies in
package.json__
```
yarn
```

## Folder Structure

* `.githooks` - Executes lints and tests
  - `pre-commit` - execute lints before commit
  - `pre-push` - execute tests before push
* `public/` - Server accessible assets (not related with the app/components itself)
* `src/` - Application source code.
  - `folder/` - desc
* `test/` - Test files

## NPM RUN Scripts

__Watching/Running__

`yarn run serve` or `npm run serve`

__Building__

`yarn run build` or `npm run build`

 __Running Lints__
 
`yarn run lint` or `npm run lint`

__Running Tests__

`yarn run test` or `npm run test`

_Note: tests and lints will run when attempting to push to a remote branch._


## Dependencies

```json
{
  "dependencies": {
    "normalize-scss": "^7.0.0",
    "susy": "^2.2.12",
    "vue": "^2.2.4",
    "vue-router": "^3.0.1",
    "vuex": "^3.0.1",
    "vuex-loading": "^0.2.2",
    "vuex-persistedstate": "^2.5.0",
    "vuex-router-sync": "^5.0.0"
  }
}
```

## Environment Variabls

* `NODE_ENV`: 'development' or 'production'

## Notes

- To access a the sub-view example go to the url: `http://localhost:9696/view-example/primary`
