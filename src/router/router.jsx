import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Search from "../pages/Search";
import Contact from "../pages/Contact";
import News from "../pages/News";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:"contact",
                element: <Contact />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "news",
                element: <News />
            },
            {
                path: "search",
                element: <Search />
            }
        ],
    },
]);

export default router;

