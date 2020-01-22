import imageLink from '../services/gravatarAPI';

describe('1.', () => {
  test('gravatarAPI receives a email and return a link with hash code', () => {
    expect(imageLink('beau@dentedreality.com.au')).toBe('https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50');
  });
  test('gravatarAPI eceives a email and the hash value does not change', () => {
    expect(imageLink('Beau@DentedReality.com.au')).toBe('https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50');
  });
});
