import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import EditPage from "../pages/EditPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TodoList from "../pages/TodoList";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <p>Error Page</p>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/todo-list',
                element: <PrivateRoute><TodoList /></PrivateRoute>
            },
            {
                path: '/edit-task/:id',
                element: <PrivateRoute><EditPage /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])