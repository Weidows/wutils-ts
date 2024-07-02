import { RewardfulPlugin } from './plugins/rewardful';
import { isDefined, isEmoji } from './utils/common';

export const config = {
  // ...
};
export const plugins = { rewardful: { RewardfulPlugin } };
export const utils = {
  common: {
    isDefined,
    isEmoji,
  },
};
