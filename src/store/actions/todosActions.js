export const setTodos = (todos) => {
  return {
    type: "SET_TODOS",
    payload: todos,
  };
};