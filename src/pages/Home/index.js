import CustomButton from "../../components/atoms/Button";
import { useNavigate } from "react-router-dom";

import "./Home.scss";

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/products");
    }

    return (
        <div className="home centered-pages">
            <h1>Home</h1>
            <div>
                <CustomButton title={"Go to Products"} onClick={handleClick} />
            </div>
        </div>
    );
}

export default Home;