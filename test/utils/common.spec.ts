import isDefined from '../../src/utils/common';

describe('common', () => {
  describe('IsDefined', () => {
    it('should return a bool', () => {
      let param;
      const param1 = undefined;
      const param2 = 0;
      expect(isDefined(param)).toEqual(false);
      expect(isDefined(param1)).toEqual(false);
      expect(isDefined(param2)).toEqual(true);
    });
  });
});
