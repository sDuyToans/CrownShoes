import { useDispatch, useSelector} from 'react-redux';
import { addItemToCarts, decreaseItemQuantity, clearItemFromCart} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import './item-checkout.styles.scss';

const ItemCheckout = ({item}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { name, price, quantity, imageUrl } = item;
    const removeItemFromCart = () => {
        dispatch(clearItemFromCart(cartItems, item));
    }
    const decreaseItemQuantityHandler = () => {
        dispatch(decreaseItemQuantity(cartItems, item));
    }
    const increaseItemQuantityHandler = () => {
        dispatch(addItemToCarts(cartItems, item));
    }
    return (
        <div className="checkout-item-container">
            <div className="img-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="checkout-name">
                {name}
            </span>
            <span className="checkout-quantity">
                <div className="arrow" onClick={decreaseItemQuantityHandler}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={increaseItemQuantityHandler}> &#10095;</div>
            </span>
            <span className="checkout-price">{price}</span>
            <div className="remove-button" onClick={removeItemFromCart}>
                &#10005;
            </div>
        </div>
    )
}

export default ItemCheckout;