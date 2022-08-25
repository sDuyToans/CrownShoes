import './shop.styles.scss';
import { Routes, Route } from 'react-router-dom';
import ProductPreview from '../../components/products-preview/products-previews.component';
import ProductCategory from '../../components/product-category/product-category.component';
import { useState } from 'react';
import { getShoesDocument } from '../../utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';

const Shop = () => {
    const dispatch = useDispatch();
    useState(() => {
        const getShoesCategory = async () => {
            const categoryMap = await getShoesDocument();
            const action = {
                type: 'FECTH_CATEGORY',
                payload: {shoesCategory: categoryMap}
            }
            dispatch(action);
        }
        getShoesCategory();
    }, []);
    return (
        <Routes>
            <Route index element={<ProductPreview/>}/>
            <Route path=':product' element={<ProductCategory/>}/>
        </Routes>
    )
};
export default Shop;