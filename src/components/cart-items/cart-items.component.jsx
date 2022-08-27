import { useSelector } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import './cart-items.styles.scss';

const CartItems = () => {
    const itemsCart = useSelector(state => state.cartReducer.itemsCart);
    return (
        <div className="cart-items">
            {
                itemsCart.map((item, index) => <CartItem item={item} key={index}/>)
            }
        </div>
    )
}
export default CartItems;