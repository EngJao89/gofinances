import React from 'react';

import { render } from '@testing-library/react-native';
import { renderHook, act } from '@testing-library/react-native';
import { AuthProvider, useAuth } from './auth';
import { startAsync } from 'expo-auth-session';

jest.mock('expo-auth-session', () => {
  return {
    startAsync: () => {
      return {
        type: 'sucess',
        params: {
          access_token: 'google-token'
        }
      }
    }
  }
});

describe('Auth Hook', () =>{
  it('should be able to sign in with Google account existing', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      id: `userInfo.id`,
      email: `userInfo.email`,
      photo: `userInfo.given_name`,
      locale: `userInfo.locale`,
      verified_email: `userInfo.verified_email`
    })) as jest.Mock;

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user).toBeTruthy();
  });
});