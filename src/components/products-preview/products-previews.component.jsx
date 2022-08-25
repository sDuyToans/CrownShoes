import './products-preview.styles.scss';
import { Link } from 'react-router-dom';
import ProductItemPreview from '../product-item-preview/product-item-preview.component';

const ProductPreview = () => {
    return(
        <div className='productpreview-container'>
            <ProductItemPreview/>
        </div>
    )
}
export default ProductPreview;