import './cart-item.styles.scss';

const CartItem = ({item}) => {
    const { imageUrl, name, price, quantity } = item;
    return (
        <div className="cart-item-container">
            <img src={imageUrl} alt={name} />
            <div className="item-detail">
                <span className="name">{name}</span>
                <span className="price">{quantity} X {price}</span>
            </div>
        </div>
    )
}

export default CartItem;