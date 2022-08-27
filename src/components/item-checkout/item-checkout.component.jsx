import { useDispatch} from 'react-redux';
import './item-checkout.styles.scss';

const ItemCheckout = ({item}) => {
    const dispatch = useDispatch();
    const { name, price, quantity, imageUrl } = item;
    const removeItemFromCart = () => {
        const action = {
            type: 'CLEAR_ITEM_FROM_CART',
            payload: {item: item}
        }
        dispatch(action);
    }
    const decreaseItemQuantityHandler = () => {
        const action = {
            type: 'DECREASE_QUANTITY',
            payload : {itemDecrease: item}
        }
        dispatch(action);
    }
    const increaseItemQuantityHandler = () => {
        const action = {
            type: 'INCREASE_QUANTITY',
            payload : {itemIncrease: item}
        }
        dispatch(action);
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