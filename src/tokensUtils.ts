import { setAuthTokens } from './setAuthTokens'
import { StorageProxy } from './StorageProxy'
import { Token } from './Token'
import { IAuthTokens } from './IAuthTokens'
import { GetStorageKey } from './StorageKeys'
import {StorageKey} from "./StorageKeyType";

// PRIVATE

/**
 *  Returns the refresh and access tokens
 * @returns {IAuthTokens} Object containing refresh and access tokens
 */
const getAuthTokens = (): IAuthTokens | undefined => {
  const storageKey = GetStorageKey()
  console.log(storageKey)
  const rawTokens = StorageProxy.Storage?.get(storageKey)
  if (!rawTokens) return

  try {
    // parse stored tokens JSON
    return JSON.parse(rawTokens)
  } catch (error: unknown) {
    if (error instanceof SyntaxError) {
      error.message = `Failed to parse auth tokens: ${rawTokens}`
      throw error
    }
  }
}

/**
 * Sets the access token
 * @param storage_key
 * @param {string} token - Access token
 */
export const setAccessToken = (storage_key: StorageKey, token: Token): void => {
  const tokens = getAuthTokens()
  if (!tokens) {
    throw new Error('Unable to update access token since there are not tokens currently stored')
  }

  tokens.accessToken = token
  setAuthTokens(storage_key, tokens)
}

/**
 * Returns the stored refresh token
 * @returns {string} Refresh token
 */
export const getRefreshToken = (): Token | undefined => {
  const tokens = getAuthTokens()
  return tokens ? tokens.refreshToken : undefined
}

/**
 * Returns the stored access token
 * @returns {string} Access token
 */
export const getAccessToken = (): Token | undefined => {
  const tokens = getAuthTokens()
  return tokens ? tokens.accessToken : undefined
}

/**
 * Clears both tokens
 */
export const clearAuthTokens = (): void => StorageProxy.Storage?.remove(GetStorageKey())

/**
 * Checks if refresh tokens are stored
 * @returns Whether the user is logged in or not
 */
export const isLoggedIn = (): boolean => {
  const token = getRefreshToken()
  return !!token
}
