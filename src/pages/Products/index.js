import CustomButton from "../../components/atoms/Button";
import "./Products.scss";

function Products() {
    return (
        <div>
            <h1>Products</h1>
            <CustomButton title={'Go Back'} onClick={() => window.history.back()} />
        </div>

    );
}

export default Products;