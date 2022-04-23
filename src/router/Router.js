import { Routes,Route } from "react-router-dom";
import routes from './routes';

function Router() {
    return (
        <Routes>
            {
                routes.map(routeItem => {
                    const { path, exact, element } = routeItem;
                    return (
                        <Route
                            key={path}
                            path={path}
                            exact={exact}
                            element={element}
                        />
                    );
                })
            }
        </Routes>
    );
}

export default Router;