import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Solutions from './components/Solutions';
import ErrorPage from './components/ErrorPage';
import Services from './components/Services';
import Products from './components/Products';
import Dashboard from './components/Dashboard';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FormRegistration from './components/FormRegistration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/solutions",
        element: <Solutions />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "*",
        element: <ErrorPage />
      }]
  },
  {
    path: "/form-registration",
    element: <FormRegistration />
  },
]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
