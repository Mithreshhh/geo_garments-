import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import BulkOrders from './pages/BulkOrders';
import Contact from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'products', element: <Products /> },
      { path: 'bulk-orders', element: <BulkOrders /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);
