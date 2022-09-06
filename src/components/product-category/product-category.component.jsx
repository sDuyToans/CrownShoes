import './product-category.styles.scss';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import ProductCategoryCard from '../product-category-card/product-category-card.component';
import { useEffect, useState } from 'react';
import {selectShoesCategoriesMap} from '../../store/shoes/shoes.selector';


const ProductCategory = () => {
    const { product } = useParams();
    const dataShoes = useSelector(selectShoesCategoriesMap);
    const [products, setProducts ] = useState(dataShoes[product]);
    useEffect(() => {
        setProducts(dataShoes[product]);
    }, [dataShoes[product]])
    const [productsToShow, setProductsToShow] = useState(products);
    const [searchFields, setSearchFields] = useState('');
    const onChangeHandler = (event) => {
        const searchFiedlsString = event.target.value.toLocaleLowerCase();
        setSearchFields(searchFiedlsString);
    }
    useEffect(() => {
        const newProductsToShow = products.filter(product => {
            return product.name.toLocaleLowerCase().includes(searchFields);
        })
        setProductsToShow(newProductsToShow);
    }, [products, searchFields])
    return(
        <div className="product-category-container">
            <div className="product-category-title">
                {product}
            </div>
            <input type="text" className="find-product" placeholder="Find by name" onChange={onChangeHandler}/>
            <ProductCategoryCard products={productsToShow}/>
        </div>
    )
}
export default ProductCategory;