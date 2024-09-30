import { createBrowserRouter } from "react-router-dom";
import { ContextProvider } from "../context/context";

//Pages
import { App } from "../App";
import { Home } from "../pages/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: (
                    <ContextProvider>
                        <Home />
                    </ContextProvider>
                )
            }
        ]
    }
]);