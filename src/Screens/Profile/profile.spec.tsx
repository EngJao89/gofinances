import React from 'react';

import { render } from '@testing-library/react-native';

import { Profile } from '.';

test('check if show correctly user input name placeholder', () => {

  const { getByPlaceholderText } = render(<Profile />);

  const inputName = getByPlaceholderText('Nome');

  expect(inputName).toBeTruthy();
});

test('checks if user data has been loaded', () => {
  const { getByTestId } = render(<Profile />);

  const inputName = getByTestId('input-name');
  const inputSurname = getByTestId('input-surname')

  expect(inputName.props.value).toEqual('João Ricardo');
  expect(inputSurname.props.value).toEqual('Martins')
});

test('check if title render corectly', () => {
  const { getByTestId } = render(<Profile />);

  const textTitle = getByTestId('input-title');

  expect(textTitle.props.childen).toContain('Perfil');
})