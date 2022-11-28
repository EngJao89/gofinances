import React from 'react';
import { render } from '@testing-library/react-native';

import { Input } from '.';

describe('Input component', () => {
  it('Input render exists', () => {
    const { debug } = render(
      <Input 
        testID="input-email"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCorrect="false"
        active={true}
      />
    );

    const inputComponent = getByTestId('input-email');
    expect(inputComponent.props.style[0].boderColor).toEqual('#E93F5B');
  });
});