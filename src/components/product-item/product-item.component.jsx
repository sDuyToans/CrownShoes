import './product-item.styles.scss';

const ProductItem = ({ product }) => {
    const { name, price, imageUrl } = product;
    return (
        <div className='product-item-container'>
            <img className='product-item-img' src={imageUrl} alt={name} />
            <div className="product-item-footer">
                <span className='item-name'>{name}</span>
                <span className='item-price'>{price} $</span>
            </div>
        </div>
    )
}
export default ProductItem;