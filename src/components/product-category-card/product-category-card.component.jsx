import Button from '../Button/Button.component';
import './product-category-card.styles.scss';
const ProductCategoryCard = ({ products }) => {
  return (
    <div className="product-category-card-container">
      {products.map((product, index) => {
        return (
          <div className="product-category-card-item" key={index}>
            <img src={product.imageUrl} alt={product.name} className="card-item-image" />
            <div className="card-item-footer">
              <span className="card-item-name">{product.name}</span>
              <span className="card-item-price">{product.price} $</span>
            </div>
            <Button/>
          </div>
        );
      })}
    </div>
  );
};
export default ProductCategoryCard;
