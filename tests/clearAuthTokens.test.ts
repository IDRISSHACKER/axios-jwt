import { clearAuthTokens } from '../index';
import {GetStorageKey} from "../src/StorageKeys";


describe('clearAuthTokens', () => {
  it('removes the tokens from localstorage', () => {
    // GIVEN
    // Tokens are stored in localStorage
    const tokens = { accessToken: 'accesstoken', refreshToken: 'refreshtoken' }
    localStorage.setItem(GetStorageKey(), JSON.stringify(tokens))

    // WHEN
    // I call clearAuthTokens
    clearAuthTokens()

    // THEN
    // I expect the localstorage to be empty
    expect(localStorage.getItem(GetStorageKey())).toBeNull()
  })
})
