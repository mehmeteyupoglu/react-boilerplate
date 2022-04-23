import CustomButton from "../../components/atoms/Button";
import "./Products.scss";
import { useNavigate } from "react-router-dom";

function Products() {
    let navigate = useNavigate();
    return (
        <div className="products-page centered-pages">
            <h1>Products</h1>
            <CustomButton title={'Go Back'} onClick={() => navigate(`/`)} />
        </div>

    );
}

export default Products;