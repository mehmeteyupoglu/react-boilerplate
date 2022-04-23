const initialState = {
    todos: [],
};

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TODOS":
            return {
                ...state,
                todos: action.payload,
            };
        default:
            return state;
    }
};