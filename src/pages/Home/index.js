import CustomButton from "../../components/atoms/Button";
import { Link } from "react-router-dom";

import "./Home.scss";

function Home() {
    return (
        <div className="home centered-pages">
            <h1>Home</h1>
            <div>
                <Link to="/products">
                    <CustomButton title={"Go to Products"}/>
                </Link>
            </div>
        </div>
    );
}

export default Home;