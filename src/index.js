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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
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
  }]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
