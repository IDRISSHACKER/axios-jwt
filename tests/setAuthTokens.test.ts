import { setAuthTokens } from '../index';
import {SetStorageKey} from "../src/StorageKeys";

describe('setAuthTokens', () => {
  it('stores the tokens in localstorage', () => {
    // GIVEN
    // localStorage is empty
    localStorage.removeItem('key')

    // WHEN
    // I call setAuthTokens
    const storage_key = 'key'

    const tokens = { accessToken: 'accesstoken', refreshToken: 'refreshtoken' }
    setAuthTokens(storage_key, tokens)

    // THEN
    // I expect them to have been stored in localstorage
    const storedTokens = localStorage.getItem('key') as string
    expect(JSON.parse(storedTokens)).toEqual(tokens)
  })
})
