import './products-preview.styles.scss';
import { ShopData } from '../../shop-data';
import ProductItemPreview from '../product-item-preview/product-item-preview.component';
const ProductPreview = () => {
    return(
        <div className='productpreview-container'>
            { ShopData.map((p, index) => <ProductItemPreview key={index} products={p}/>)}
        </div>
    )
}
export default ProductPreview;