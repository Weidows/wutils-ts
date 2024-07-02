# utils for TS/JS

## external

### rewardful

For: https://app.getrewardful.com/

> https://developers.rewardful.com/javascript-api/overview

```ts
import RewardfulPlugin from 'wutils-ts/lib/external/rewardful';

Vue.use(RewardfulPlugin, {
  key: 'YOUR-API-KEY',
  jsSrc: 'https://r.wdfl.co/rw.js',
});
```

'jsSrc' is optional, for those who want to use their own domain.
