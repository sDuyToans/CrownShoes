import { useDispatch } from 'react-redux';
import Button from '../Button/Button.component';
import './product-item.styles.scss';

const ProductItem = ({ product }) => {
    const { name, price, imageUrl } = product;
    const dispatch = useDispatch();
    const addItemToCart = () => {
        const action = {
            type: 'ADD_ITEM_TO_CART',
            payload: {product: product}
        }
        dispatch(action);
    }
    return (
        <div className='product-item-container' >
            <img className='product-item-img' src={imageUrl} alt={name} />
            <div className="product-item-footer">
                <span className='item-name'>{name}</span>
                <span className='item-price'>{price} $</span>
            </div>
            <button onClick={addItemToCart}>Add item to cart</button>
        </div>
    )
}
export default ProductItem;