import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from 'styles/theme';
import { globalStyles } from 'styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter basename="/car-sharing-app">
          <App />
          <Global styles={globalStyles} />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
