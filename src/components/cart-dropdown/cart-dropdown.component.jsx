import { useNavigate } from 'react-router-dom';
import CartItems from '../cart-items/cart-items.component';
import './cart-dropdown.styles.scss';
const CartDropdown = () => {
    const navigate = useNavigate();
    const goToCheckOutHandler = () =>{
        navigate('/checkout');
    }
    return (
        <div className='cart-dropdown-container'>
            <CartItems/>
            <button onClick={goToCheckOutHandler} className='base-button'>Go to checkout</button>
        </div>
    )
}
export default CartDropdown;