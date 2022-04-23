import CustomButton from "../../components/atoms/Button";
import ButtonGroup from "../../components/molecules/ButtonGroup";
import { Link } from "react-router-dom";

import "./Home.scss";

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/products">
                <span className="description">This is the button: <CustomButton /></span>
            </Link>
            <span className="description">This is the button group: <ButtonGroup /></span>
        </div>
    );
}

export default Home;