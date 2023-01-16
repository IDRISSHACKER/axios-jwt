import { StorageProxy } from './StorageProxy'
// import { STORAGE_KEY } from './StorageKey'
import { IAuthTokens } from './IAuthTokens'

/**
 * Sets the access and refresh tokens
 * @param storage_key
 * @param {IAuthTokens} tokens - Access and Refresh tokens
 */
export const setAuthTokens = (storage_key: string, tokens: IAuthTokens): void =>
  StorageProxy.Storage?.set(storage_key, JSON.stringify(tokens))
