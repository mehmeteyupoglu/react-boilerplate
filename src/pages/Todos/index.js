import CustomButton from "../../components/atoms/Button";
import { useNavigate } from "react-router-dom";
import { TodoService } from "../../service";

import "./Todos.scss";

function Todos() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    const listTodos = async () => {
        try {
            const data = await TodoService.getTodos();
            console.log(data);
        } catch (error) {
            console.log("error while fetching data");
        } finally {
            console.log('finally');
        }
    }

    return (
        <div className="todos centered-pages">
            <h1>Todos</h1>
            <div>
                <CustomButton title={"Back"} onClick={handleClick} />
                <CustomButton title={"List Todos"} onClick={listTodos} />
            </div>
        </div>
    );
}

export default Todos;