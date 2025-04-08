import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Toaster } from 'react-hot-toast';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/Reducers';
import FallBack from './views/pages/ErrorBoundary';
import ErrorBoundary from './views/pages/ErrorBoundary';
// component

const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ErrorBoundary>
        <Suspense fallback={<FallBack />}>
          <App />
          <Toaster
            toastOptions={{
              duration: 2000, // Set the duration for all toasts
            }}
          />
        </Suspense>
      </ErrorBoundary>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
