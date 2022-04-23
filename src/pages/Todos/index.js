import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify';

import CustomButton from "../../components/atoms/Button";
import { useNavigate } from "react-router-dom";
import { TodoService } from "../../service";

import "./Todos.scss";

function Todos() {

    const state = useSelector((state) => state);
    const { appReducer } = state;
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    const listTodos = async () => {
        dispatch({ type: 'SET_LOADING', payload: true })
        try {
            const data = await TodoService.getTodos();
            dispatch({ type: "SET_TODOS", payload: data.data });
        } catch (error) {
            console.log("error while fetching data");
        } finally {
            dispatch({ type: 'SET_LOADING', payload: false })
            console.log('finally ',);
        }
    }

    return (
        <div className="todos centered-pages">
            <h1>Todos</h1>
            <div>
                <CustomButton title={"Back"} onClick={handleClick} loading={appReducer.isLoading} />
                <CustomButton title={"List Todos"} onClick={listTodos} loading={appReducer.isLoading} async />
                <ToastContainer />
            </div>
        </div>
    );
}

export default Todos;