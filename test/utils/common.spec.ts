import { isDefined, isEmoji } from '../../src/utils/common';

describe('common', () => {
  describe('isDefined', () => {
    it('should return a bool', () => {
      let param;
      const param1 = undefined;
      const param2 = 0;
      expect(isDefined(param)).toEqual(false);
      expect(isDefined(param1)).toEqual(false);
      expect(isDefined(param2)).toEqual(true);
    });
  });

  describe('isEmoji', () => {
    it('should return a bool', () => {
      let param = '123';
      const param1 = '🥰';
      const param2 = '';
      expect(isEmoji(param)).toEqual(false);
      expect(isEmoji(param1)).toEqual(true);
      expect(isEmoji(param2)).toEqual(false);
    });
  });
});
