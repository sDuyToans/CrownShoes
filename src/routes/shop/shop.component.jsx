import './shop.styles.scss';
import { Routes, Route } from 'react-router-dom';
import ProductPreview from '../../components/products-preview/products-previews.component';
import ProductCategory from '../../components/product-category/product-category.component';
const Shop = () => {
    return (
        <Routes>
            <Route index element={<ProductPreview/>}/>
            <Route path=':product' element={<ProductCategory/>}/>
        </Routes>
    )
};
export default Shop;