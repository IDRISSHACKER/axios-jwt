import { setAccessToken } from '../index';
import {GetStorageKey} from "../src/StorageKeys";

describe('setAccessToken', () => {
  it('throws an error if there are no tokens stored', () => {
    // GIVEN
    // localStorage is empty
    localStorage.removeItem(GetStorageKey())

    // WHEN
    // I call setAccessToken
    // THEN
    // I expect an error to have been thrown
    expect(() => {
      setAccessToken('key','accesstoken')
    }).toThrow('Unable to update access token since there are not tokens currently stored')
  })

  it('throws an error if the stored tokens cannot be parsed', () => {
    // GIVEN
    // localStorage is empty
    localStorage.setItem('key', 'totallynotjson')

    // WHEN
    // I call setAuthTokens
    // THEN
    // I expect an error to be thrown
    expect(() => {
      setAccessToken('key','totallynotjson')
    }).toThrow('Failed to parse auth tokens: totallynotjson')
  })

  it('stores the tokens in localstorage', () => {
    // GIVEN
    // localStorage is empty
    const tokens = { accessToken: 'accesstoken', refreshToken: 'refreshtoken' }
    localStorage.setItem('key', JSON.stringify(tokens))

    // WHEN
    // I call setAccessToken
    setAccessToken('key', 'newaccesstoken')

    // THEN
    // I expect the stored access token to have been updated
    const storedTokens = localStorage.getItem('key') as string
    expect(JSON.parse(storedTokens)).toEqual({ accessToken: 'newaccesstoken', refreshToken: 'refreshtoken' })
  })
})
