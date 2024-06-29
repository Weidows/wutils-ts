import IsDefined from '../../src/utils/common';

describe('common', () => {
  describe('IsDefined', () => {
    it('should return a bool', () => {
      let param;
      const param1 = undefined;
      const param2 = 0;
      expect(IsDefined(param)).toEqual(false);
      expect(IsDefined(param1)).toEqual(false);
      expect(IsDefined(param2)).toEqual(true);
    });
  });
});
