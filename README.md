# utils for TS/JS

## external

### rewardful

For: https://app.getrewardful.com/

> https://developers.rewardful.com/javascript-api/overview

```ts
import rewardful from "vue-rewardful";

Vue.use(rewardful, {
  key: 'YOUR-API-KEY'
  jsSrc: 'https://r.wdfl.co/rw.js'
});
```

'jsSrc' is optional, for those who want to use their own domain.
