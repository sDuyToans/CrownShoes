import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useDispatch, useSelector } from 'react-redux'
const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(state => state.cartReducer.isCartOpen)
    const openCartDropDown = () => {
        const action = {
            type: 'OPEN_CART',
            payload: !isCartOpen
        }
        dispatch(action);
    }
    const cartItems = useSelector(state => state.cartReducer.itemsCart);
    const cartCount = (cartItems) => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }
    return (
        <div className='cart-icon-container' onClick={openCartDropDown}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount(cartItems)}</span>
        </div>
    )
}
export default CartIcon;