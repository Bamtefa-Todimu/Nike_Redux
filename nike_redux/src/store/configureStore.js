import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducer'
import api from './middleware/api'

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, reducer)

export default function() {
   let store = configureStore({
    reducer:persistedReducer,
    middleware: [
      ...getDefaultMiddleware(),
      api
    ]
  });

  
  let persistor = persistStore(store)

  return {store,persistor}
}


