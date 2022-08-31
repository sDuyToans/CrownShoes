import { useSelector } from 'react-redux';
import ItemCheckout from '../../components/item-checkout/item-checkout.component';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import './checkout.styles.scss';
const CheckOut = () => {
    const itemsCheckout = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal)
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
                Total: {cartTotal}$
            </div>
        </div>
    )
}
export default CheckOut;