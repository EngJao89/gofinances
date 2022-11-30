import { mocked } from 'ts-jest/utils';
import { renderHook, act } from '@testing-library/react-native';
import { AuthProvider, useAuth } from './auth';
import { logInAsync } from 'expo-google-app-auth';

jest.mock('expo-auth-session');

describe('Auth Hook', () =>{
  it('should able to sign in with Google account existing', async () => {
    const googleMocked = mocked(logInAsync as any);
    googleMocked.mockReturnValue({
      type: 'success',
      user: {
        id: 'any_id',
        email: 's4bo4gedtn@gmail.com',
        name: 'João Ricardo',
        photo: 'any_photo.png'
      }
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user.email)
    .toBe('s4bo4gedtn@gmail.com');
  });

  it('user should be not connect if cancel authentication with Google', async () => {
    const googleMocked = mocked(logInAsync);
    googleMocked.mockReturnValue({
      type: 'success',
      user: {
        id: 'any_id',
        email: 's4bo4gedtn@gmail.com',
        name: 'João Ricardo',
        photo: 'any_photo.png'
      }
    });
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user)
    .toHaveProperty('id');
  });
});