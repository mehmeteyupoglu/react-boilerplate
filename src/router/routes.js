import { Home, Products, NotFound } from "../pages";

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
        title: "Not Found",
        path: "*",
        exact: true,
        element: <NotFound />,
        children: []
    }
];


export default routes;