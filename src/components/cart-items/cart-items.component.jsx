import { useSelector } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import './cart-items.styles.scss';
import { selectCartItems } from '../../store/cart/cart.selector.js'
const CartItems = () => {
    const itemsCart = useSelector(selectCartItems);
    return (
        <div className="cart-items">
            {
                itemsCart.map((item, index) => <CartItem item={item} key={index}/>)
            }
        </div>
    )
}
export default CartItems;