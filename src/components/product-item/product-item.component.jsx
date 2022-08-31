import { useDispatch, useSelector } from 'react-redux';
import { addItemToCarts }  from '../../store/cart/cart.action.js';
import './product-item.styles.scss';
import { selectCartItems } from '../../store/cart/cart.selector.js'
const ProductItem = ({ product }) => {
    const { name, price, imageUrl } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addItemToCart = () => {
        dispatch(addItemToCarts(cartItems, product));
    }
    return (
        <div className='product-item-container' >
            <img className='product-item-img' src={imageUrl} alt={name} />
            <div className="product-item-footer">
                <span className='item-name'>{name}</span>
                <span className='item-price'>{price} $</span>
            </div>
            <button onClick={addItemToCart} className='base-button'>Add item to cart</button>
        </div>
    )
}
export default ProductItem;