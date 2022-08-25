import './App.css';
import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import ProductCategory from './components/product-category/product-category.component';
// import { useEffect } from 'react';
// import { addProductsCollectionAndDocuments } from './utils/firebase/firebase.utils';
// import ShopData from './shop-data';
function App() {
  //call useEffect để lưu data lên firebase 
  // useEffect(() => {
  //   addProductsCollectionAndDocuments('shoes', ShopData);
  // }, [])
  return (
    <Routes>
      <Route path='' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>\
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App;
