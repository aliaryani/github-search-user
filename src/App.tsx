import { BrowserRouter } from 'react-router-dom';

import { Routes } from './Routes';
import { UserProvider } from './hooks/useUser';
import { ToastContainer } from 'react-toastify';

import { GlobalStyle } from './styles/global';
import { Navigation } from './components/Navigation';

export function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle />
        <Navigation/>
        <Routes />
        <ToastContainer
          position="top-center"
          autoClose={3000}
        />
      </UserProvider>
    </BrowserRouter>
  );
}
