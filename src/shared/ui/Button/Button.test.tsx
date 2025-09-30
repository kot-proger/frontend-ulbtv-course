/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('button', () => {
  test('base test', () => {
    render(<Button onClick={() => console.log('test')}>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('test with theme class', () => {
    render(
      <Button theme={ButtonTheme.CLEAR} onClick={() => console.log('test')}>
        TEST
      </Button>
    );
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
