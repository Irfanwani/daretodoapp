import {createStore} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import rootReducer from './reducers'

initialState = {}

const config = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(config, rootReducer)

export const store = createStore(persistedReducer, initialState)

export const persistedStore = persistStore(store)