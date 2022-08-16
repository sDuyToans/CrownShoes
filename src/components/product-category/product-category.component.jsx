import './product-category.styles.scss';
import { useParams } from 'react-router-dom';
import { ShopData } from '../../shop-data';
const ProductCategory = () => {
    const { product } = useParams();
    return(
        <div className="product-category-container">
            
        </div>
    )
}
export default ProductCategory;