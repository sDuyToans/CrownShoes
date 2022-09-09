import { Link } from "react-router-dom";
import ProductItem from "../product-item/product-item.component";
import "./product-item-preview.styles.scss";
import { useSelector } from "react-redux";
import { selectIsLoading, selectShoesCategoriesMap} from "../../store/shoes/shoes.selector";
import Spinner from "../spinner/spinner.component";

const ProductItemPreview = () => {
  const dataShoes = useSelector(selectShoesCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      { isLoading ? <Spinner/>
      : (Object.keys(dataShoes).map((title, index) => {
        return (
          <div className="product-item-preview-container" key={index}>
            <h2>
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to={title.toLowerCase()}
              >
                {title}
              </Link>
            </h2>
            <div className="products-item-container">
                {dataShoes[title].filter((_, index) => index < 4).map(p => <ProductItem key={p.id} product={p}/>)}
            </div>
          </div>
        );
      }))
    }
    </>
  );
};
export default ProductItemPreview;
