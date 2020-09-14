// The object that represent all of the state of the app
// It combines all of the states together

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cart.reducer';
import menuItemsReducer from './menuItems/menuItems.reducer';
import shopReducer from './shop/shop.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  menuItems: menuItemsReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
