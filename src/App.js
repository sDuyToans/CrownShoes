import './App.css';
import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import ProductCategory from './components/product-category/product-category.component';
import CheckOut from './routes/checkout/checkout.component';
import { useDispatch } from 'react-redux';
import { createUserDocumentFromAuth, getShoesDocument, onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import { useEffect } from 'react';
import { setCurrentUser } from './store/user/user.action';
import { fetchShoesCategory } from './store/shoes/shoes.action';
// import { useEffect } from 'react';
// import { addProductsCollectionAndDocuments } from './utils/firebase/firebase.utils';
// import ShopData from './shop-data';
function App() {
  //call useEffect để lưu data lên firebase 
  // useEffect(() => {
  //   addProductsCollectionAndDocuments('shoes', ShopData);
  // }, [])
  const dispatch = useDispatch();
  useEffect(() => {
        const getShoesCategory = async () => {
            const categoryMap = await getShoesDocument();
            dispatch(fetchShoesCategory(categoryMap));
        }
        getShoesCategory();
    }, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return  unsubscribe;
  }, [dispatch])
  return (
    <Routes>
      <Route path='' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>\
        <Route path="auth" element={<Authentication />} />
        <Route path='checkout' element={<CheckOut/>}/>
      </Route>
    </Routes>
  )
}

export default App;
