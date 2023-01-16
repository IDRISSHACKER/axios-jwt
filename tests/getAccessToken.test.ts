import { getAccessToken, authTokenInterceptor, getBrowserSessionStorage } from '../index';

describe('getAccessToken', () => {
  beforeEach(function () {
    window.localStorage.clear()
    window.sessionStorage.clear()
  })

  describe('for localStorage', function () {
    it('returns undefined if tokens are not set', () => {
      // GIVEN
      // localStorage is empty
      localStorage.removeItem('key')

      // WHEN
      // I call getAccessToken
      const result = getAccessToken()

      // THEN
      // I expect the result to be undefined
      expect(result).toEqual(undefined)
    })

    it('returns the access token is it is set', () => {
      // GIVEN
      // Both tokens are stored in localstorage
      const tokens = { accessToken: 'accesstoken', refreshToken: 'refreshtoken' }
      localStorage.setItem('key', JSON.stringify(tokens))

      // WHEN
      // I call getAccessToken
      const result = getAccessToken()

      // THEN
      // I expect the result to be the supplied access token
      expect(result).toEqual('accesstoken')
    })
  });

  describe('for sessionStorage', function () {
    beforeEach( () => {
      const getStorage = getBrowserSessionStorage
      const requestRefresh = jest.fn()

      authTokenInterceptor('key', {getStorage, requestRefresh })
    })

    it('returns undefined if tokens are not set', () => {
      // GIVEN
      // localStorage is empty
      sessionStorage.removeItem('key')

      // WHEN
      // I call getAccessToken
      const result = getAccessToken()

      // THEN
      // I expect the result to be undefined
      expect(result).toEqual(undefined)
    })

    it('returns the access token is it is set', () => {
      // GIVEN
      // Both tokens are stored in localstorage
      const tokens = { accessToken: 'accesstoken_session', refreshToken: 'refreshtoken_session' }
      sessionStorage.setItem('key', JSON.stringify(tokens))

      // WHEN
      // I call getAccessToken
      const result = getAccessToken()

      // THEN
      // I expect the result to be the supplied access token
      expect(result).toEqual('accesstoken_session')
    })
  })
})
