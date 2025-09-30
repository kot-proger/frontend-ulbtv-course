import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    expect(classNames('someClass', {}, ['class0', 'class00'])).toBe('someClass class0 class00');
  });

  test('with mods', () => {
    expect(
      classNames('someClass', { hovered: true, scrollable: true }, ['class0', 'class00'])
    ).toBe('someClass class0 class00 hovered scrollable');
  });

  test('with mods false', () => {
    expect(
      classNames('someClass', { hovered: true, scrollable: false }, ['class0', 'class00'])
    ).toBe('someClass class0 class00 hovered');
  });

  test('with mods undef', () => {
    expect(
      classNames('someClass', { hovered: true, scrollable: undefined }, ['class0', 'class00'])
    ).toBe('someClass class0 class00 hovered');
  });
});
