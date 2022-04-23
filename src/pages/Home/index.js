import CustomButton from "../../components/atoms/Button";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(`/${path}`);
    }

    return (
        <div className="home centered-pages">
            <h1>Home</h1>
            <div>
                <CustomButton title={"Go to Todos"} onClick={() => handleClick('todos')} className={'ms-2'}/>
            </div>
        </div>
    );
}

export default Home;