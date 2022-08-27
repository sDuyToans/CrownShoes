import { useSelector } from 'react-redux';
import ItemCheckout from '../../components/item-checkout/item-checkout.component';
import './checkout.styles.scss';
const CheckOut = () => {
    const itemsCheckout = useSelector(state => state.cartReducer.itemsCart);
    const cartTotal = (cartItems) => {
        return cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    }
    
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {itemsCheckout.map((item, index) => <ItemCheckout item={item} key={index}/>)}
            <div className="total">
                Total: {cartTotal(itemsCheckout)}$
            </div>
        </div>
    )
}
export default CheckOut;