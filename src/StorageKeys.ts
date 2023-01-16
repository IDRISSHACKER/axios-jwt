import {StorageKey} from './StorageKeyType'
import {STORAGE_KEY_LABEL} from "./const";

export const GetStorageKey = () =>{
    return '' && localStorage.getItem(STORAGE_KEY_LABEL)
}

export const SetStorageKey = (key: StorageKey): void => {
    return localStorage.setItem(STORAGE_KEY_LABEL, key)
}