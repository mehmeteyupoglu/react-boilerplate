import { Home, Products, NotFound, Todos } from "../pages";

const routes = [
    {
        title: "Home",
        path: "/",
        exact: true,
        element: <Home />,
        children: []
    },
    {
        title: "Products",
        path: "/products",
        exact: true,
        element: <Products />,
        children: []
    },
    {
        title: "Todos",
        path: "/todos",
        exact: true,
        element: <Todos />,
        children: []
    },
    {
        title: "Not Found",
        path: "*",
        exact: true,
        element: <NotFound />,
        children: []
    }
];


export default routes;