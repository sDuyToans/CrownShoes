import { Link } from 'react-router-dom';
import ProductItem from '../product-item/product-item.component';
import './product-item-preview.styles.scss';
const ProductItemPreview = ({ products }) => {
    const { title, items } = products;
    return(
        <div className='product-item-preview-container'>
            <h2>
                <Link style={{textDecoration: 'none', color: '#000'}} to={title.toLowerCase()}>{title}</Link>
            </h2>
            <div className="products-item-container">
                {items.filter((_, index) => index < 4).map(p => <ProductItem key={p.id} product={p}/>)}
            </div>
        </div>
    )
}
export default ProductItemPreview;