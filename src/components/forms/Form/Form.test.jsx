import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Form from './Form';

test('renders Form', () => {
  render(<Form isActive={true} />);

  expect(screen.getByTestId('form')).toBeInTheDocument();
});

test('validates that the form has "form" and "active" class', () => {
  render(<Form isActive={true} />);

  expect(screen.getByTestId('form').className).toMatch(
    /^_form_[a-z0-9]+ _active_[a-z0-9]+$/,
  );
});

test('validates that the form has "form" and "inactive" class', () => {
  render(<Form isActive={false} />);

  expect(screen.getByTestId('form').className).toMatch(
    /^_form_[a-z0-9]+ _inactive_[a-z0-9]+$/,
  );
});

test('correctly renders children if provided', () => {
  render(
    <Form isActive={true}>
      <label htmlFor="name">Full name</label>
      <input type="text" id="name" name="name" />{' '}
    </Form>,
  );

  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByText('Full name')).toBeInTheDocument();
});
