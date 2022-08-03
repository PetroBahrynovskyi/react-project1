import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import DisplayItemsPage from '../../E-commerce-Sample/src/components/DisplayItemsPage/DisplayItemsPage';
import ProductItemDetails from './components/ProductItemDetails/ProductItemDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/products" element={<DisplayItemsPage />} >
               
            </Route>
            <Route path="/products/:productId" element={<ProductItemDetails />} />
        </Routes>
    </BrowserRouter>
);
