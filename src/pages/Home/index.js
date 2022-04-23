import CustomButton from "../../components/atoms/Button";
import { useNavigate } from "react-router-dom";

import "./Home.scss";

function Home() {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(`/${path}`);
    }

    return (
        <div className="home centered-pages">
            <h1>Home</h1>
            <div>
                <CustomButton title={"Go to Products"} onClick={() => handleClick('products')} />
                <CustomButton title={"Go to Todos"} onClick={() => handleClick('todos')} />
            </div>
        </div>
    );
}

export default Home;