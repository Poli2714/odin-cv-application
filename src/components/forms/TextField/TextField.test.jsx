import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextArea, TextInput } from '..';

describe('TextArea', () => {
  it('renders TextArea', () => {
    render(
      <TextArea
        maxLength={100}
        name="test"
        onChange={() => {}}
        rows={5}
        value=""
      />,
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('focuses the TextArea on render', () => {
    render(
      <TextArea
        autofocus={true}
        maxLength={100}
        name="test"
        onChange={() => {}}
        rows={10}
        value=""
      />,
    );

    expect(screen.getByRole('textbox')).toHaveFocus();
  });

  it('calls event handler 5 times', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    render(
      <TextArea
        maxLength={200}
        name="hello"
        onChange={onChange}
        rows={30}
        value=""
      />,
    );

    await user.type(screen.getByRole('textbox'), 'hello');
    expect(onChange).toHaveBeenCalledTimes(5);
  });

  it("doesn't call event handler when not typed", () => {
    const onChange = vi.fn();

    render(
      <TextArea
        maxLength={100}
        name="test"
        onChange={onChange}
        rows={20}
        value="heyyyy"
      />,
    );

    expect(onChange).not.toHaveBeenCalled();
  });
});

describe('TextInput', () => {
  it('renders TextInput', () => {
    render(
      <TextInput
        name="test"
        onChange={() => {}}
        pattern={/\*+/}
        placeholder="test"
        value=""
      />,
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('calls event handler 12 times', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    render(
      <TextInput
        name="test"
        onChange={onChange}
        pattern={/\*+/}
        placeholder="test"
        value=""
      />,
    );

    await user.type(screen.getByRole('textbox'), 'Hello world!');
    expect(onChange).toHaveBeenCalledTimes(12);
  });

  it("doesn't call event handler when not typed", () => {
    const onChange = vi.fn();

    render(
      <TextInput
        name="test"
        onChange={onChange}
        pattern={/\*+/}
        placeholder="test"
        value=""
      />,
    );

    expect(onChange).not.toHaveBeenCalled();
  });
});
