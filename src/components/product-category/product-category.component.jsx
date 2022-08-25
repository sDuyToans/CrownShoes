import './product-category.styles.scss';
import { useParams } from 'react-router-dom';
import { ShopData } from '../../shop-data';
import { useSelector } from 'react-redux';
import ProductCategoryCard from '../product-category-card/product-category-card.component';
import { useEffect, useState } from 'react';
const ProductCategory = () => {
    const { product } = useParams();
    const dataShoes = useSelector(state => state.shoesReducer.shoesCategories);
    const [products, setProducts ] = useState(dataShoes[product]);
    useEffect(() => {
        setProducts(dataShoes[product]);
    }, [dataShoes[product]])
    return(
        <div className="product-category-container">
            <div className="product-category-title">
                {product}
            </div>
            <ProductCategoryCard products={products}/>
        </div>
    )
}
export default ProductCategory;