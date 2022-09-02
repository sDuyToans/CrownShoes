import "./product-category-card.styles.scss";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addItemToCarts } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
const ProductCategoryCard = ({ products }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addItemToCart = (productToAdd) => {
    dispatch(addItemToCarts(cartItems, productToAdd));
  };

  return (
    <>
        {products && products.length
        ?
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
              <button
                className="base-button"
                onClick={() => addItemToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
        : <span className="sorry-search">We can't find product match this selection!... sorry</span>
      }
    </>
  );
};
export default ProductCategoryCard;
