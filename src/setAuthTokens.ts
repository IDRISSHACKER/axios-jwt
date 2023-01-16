import { StorageProxy } from './StorageProxy'
import { IAuthTokens } from './IAuthTokens'
import {StorageKey} from "./StorageKeyType";
import {SetStorageKey} from "./StorageKeys";

/**
 * Sets the access and refresh tokens
 * @param storage_key
 * @param {IAuthTokens} tokens - Access and Refresh tokens
 */
export const setAuthTokens = (storage_key: StorageKey, tokens: IAuthTokens): void => {
   SetStorageKey(storage_key)
    StorageProxy.Storage?.set(storage_key, JSON.stringify(tokens))
}
