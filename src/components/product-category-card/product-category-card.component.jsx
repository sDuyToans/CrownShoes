import "./product-category-card.styles.scss";
import { useDispatch } from "react-redux/es/exports";
const ProductCategoryCard = ({ products }) => {
  const dispatch = useDispatch();
  const addItemToCart = (productToAdd) => {
    const action = {
      type: "ADD_ITEM_TO_CART",
      payload: { product: productToAdd },
    };
    dispatch(action);
  };
  return (
    <div className="product-category-card-container">
      {products.map((product, index) => {
        return (
          <div className="product-category-card-item" key={index}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="card-item-image"
            />
            <div className="card-item-footer">
              <span className="card-item-name">{product.name}</span>
              <span className="card-item-price">{product.price} $</span>
            </div>
            <button className="base-button" onClick={() => addItemToCart(product)}>Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
};
export default ProductCategoryCard;
