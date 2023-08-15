import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbarpanel from './Navbar';
import { Provider } from 'react-redux';
import store from '../store/store';
const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Navbarpanel />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
}

export default RootLayout