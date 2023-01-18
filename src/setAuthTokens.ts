import { StorageProxy } from './StorageProxy'
import { IAuthTokens } from './IAuthTokens'
import {GetStorageKey} from "./StorageKeys";

/**
 * Sets the access and refresh tokens
 * @param {IAuthTokens} tokens - Access and Refresh tokens
 */
export const setAuthTokens = (tokens: IAuthTokens): void => {
    StorageProxy.Storage?.set(GetStorageKey(), JSON.stringify(tokens))
}
