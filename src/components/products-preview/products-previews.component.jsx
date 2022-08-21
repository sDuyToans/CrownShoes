import './products-preview.styles.scss';

import ProductItemPreview from '../product-item-preview/product-item-preview.component';
import ShopData from '../../shop-data';

const ProductPreview = () => {
    return(
        <div className='productpreview-container'>
            { ShopData.map((p, index) => <ProductItemPreview key={index} products={p}/>)}
        </div>
    )
}
export default ProductPreview;